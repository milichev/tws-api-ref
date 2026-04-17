import { load as loadCheerio } from "cheerio";
import fs from "node:fs";
import path from "node:path";
import TurndownService from "turndown";
// @ts-ignore
import { gfm } from "turndown-plugin-gfm";
import { MD_OUT_DIR, OUTPUT_DIR, SKILL_TPL } from "./generate";

export async function makeMarkdown() {
  console.log("Converting to Markdown...");

  const mdImgPath = path.join(MD_OUT_DIR, "images");
  if (!fs.existsSync(mdImgPath)) {
    fs.symlinkSync("../out/images", mdImgPath, "dir");
  }

  const turndownService = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
  });
  turndownService.use(gfm);

  const files = fs
    .readdirSync(OUTPUT_DIR)
    .filter(
      (f) => f.endsWith(".html") && f !== "source.html" && f !== "index.html",
    );

  const mdIndexLinks: string[] = [];

  for (const file of files) {
    const html = fs.readFileSync(path.join(OUTPUT_DIR, file), "utf8");
    const $ = loadCheerio(html);
    const title = $("title").text() || file;

    const markdown = turndownService.turndown($("body").html() || "");
    const mdFileName = file.replace(".html", ".md");

    fs.writeFileSync(path.join(MD_OUT_DIR, mdFileName), markdown);
    mdIndexLinks.push(`* [${title}](${mdFileName})`);
  }

  const tocMd = mdIndexLinks.join("\n");
  const indexMd = `# TWS API Reference Index\n\n${tocMd}`;
  fs.writeFileSync(path.join(MD_OUT_DIR, "index.md"), indexMd);

  const skillTpl = fs.readFileSync(SKILL_TPL, "utf8");
  const skillMd = skillTpl.replace("{{TOC}}", tocMd);
  fs.writeFileSync(path.join(MD_OUT_DIR, "SKILL.md"), skillMd);

  console.log("Markdown conversion complete.");
}
