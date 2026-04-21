import { load as loadCheerio } from "cheerio";
import fs from "node:fs";
import path from "node:path";
import TurndownService from "turndown";
// @ts-ignore
import { gfm } from "turndown-plugin-gfm";
import { SKILL_DIR, HTML_DIR, SKILL_TPL } from "./generate";

export async function makeMarkdown() {
  console.log("Converting to Markdown...");

  const turndownService = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
  });
  turndownService.use(gfm);

  // Preserve internal links by converting .html to .md
  // We add a rule to Turndown to handle this during conversion
  turndownService.addRule("rewriteLinks", {
    filter: ["a"],
    replacement: function (content, node) {
      const href = (node as HTMLAnchorElement).getAttribute("href");
      if (href && href.endsWith(".html")) {
        const newHref = href.replace(/\.html$/, ".md");
        return `[${content}](${newHref})`;
      }
      if (href && href.includes(".html#")) {
        const newHref = href.replace(/\.html#/, ".md#");
        return `[${content}](${newHref})`;
      }
      return `[${content}](${href})`;
    },
  });

  const allMdFiles: { title: string; relPath: string }[] = [];

  function processDir(relPath: string) {
    const srcDir = path.join(HTML_DIR, relPath);
    const destDir = path.join(SKILL_DIR, relPath);

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    const entries = fs.readdirSync(srcDir, { withFileTypes: true });

    for (const entry of entries) {
      const entryRelPath = path.join(relPath, entry.name);

      if (entry.isDirectory()) {
        if (entry.name === "images") {
          const destImgPath = path.join(destDir, "images");
          if (!fs.existsSync(destImgPath)) {
            const srcImgPath = path.join(srcDir, "images");
            const relBack = path.relative(destDir, srcImgPath);
            fs.symlinkSync(relBack, destImgPath, "dir");
          }
        } else {
          processDir(entryRelPath);
        }
      } else if (entry.name.endsWith(".html")) {
        const html = fs.readFileSync(path.join(srcDir, entry.name), "utf8");
        const $ = loadCheerio(html);

        // Use the title from the page or the filename
        const title = $("title").text() || entry.name;

        // We only want the main content, but for now we'll take the whole body
        // and let Turndown clean up the crumbs if possible, or we could target a specific selector.
        // Assuming we want to keep the structure the user built in the HTML.
        const contentHtml = $("body").html() || "";
        const markdown = turndownService.turndown(contentHtml);

        const mdFileName = entry.name.replace(".html", ".md");
        const mdDestPath = path.join(destDir, mdFileName);

        fs.writeFileSync(mdDestPath, markdown);

        if (entry.name !== "index.html") {
          allMdFiles.push({ title, relPath: path.join(relPath, mdFileName) });
        }
      }
    }
  }

  processDir("");

  // Update SKILL.md with a flat list of all chapters for easy reference
  if (fs.existsSync(SKILL_TPL)) {
    const tocMd = allMdFiles
      .map((f) => `* [${f.title}](${f.relPath})`)
      .join("\n");
    const skillTpl = fs.readFileSync(SKILL_TPL, "utf8");
    const skillMd = skillTpl.replace("{{TOC}}", tocMd);
    fs.writeFileSync(path.join(SKILL_DIR, "SKILL.md"), skillMd);
  }

  console.log("Markdown conversion complete.");
}
