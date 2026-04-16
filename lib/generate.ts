import fs from "node:fs";
import path from "node:path";
import { load as loadCheerio } from "cheerio";
import TurndownService from "turndown";
// @ts-ignore
import { gfm } from "turndown-plugin-gfm";

const REF_HTML_URL = "https://ibkrcampus.com/campus/ibkr-api-page/twsapi-doc/";
const REPO_ROOT = path.dirname(import.meta.dirname || ".");
const OUTPUT_DIR = path.join(REPO_ROOT, "out");
const SOURCE_FILE = path.join(OUTPUT_DIR, "source.html");
const IMG_DIR = path.join(OUTPUT_DIR, "images");
const MD_OUT_DIR = path.join(REPO_ROOT, "md-out");
const SKILL_TPL = path.join(REPO_ROOT, "templates/SKILL.md");

// 1. Setup Directories
[OUTPUT_DIR, MD_OUT_DIR].forEach((dir) => {
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
});
fs.mkdirSync(IMG_DIR, { recursive: true });

function cleanHtml(html: string): string {
  console.log("Cleaning HTML...");
  const $ = loadCheerio(html);
  const pageContent = $("div.page-content");

  pageContent.find(".copy-link").remove();

  pageContent
    .find("ul.nav-tabs > li.nav-item > button.tab-python")
    .each((_, btn) => {
      const $btn = $(btn);
      const $ul = $btn.closest("ul");
      const $pane = $ul.next(".tab-content");
      const $active = $pane.find(".tab-pane.active");
      const $code = $active.find(".enlighter-origin");

      if ($code.length) {
        $ul.parent().before(`<pre><code>${$code.text()}</code></pre>`);
      } else {
        $ul.parent().before($active.children());
      }
      $ul.parent().remove();
    });

  pageContent.find("p > img").each((_, img) => {
    const $img = $(img);
    if ($img.parent().next("div").length) $img.parent().before($img);
  });

  ["div.row > div.entry-content", "section > .inner-col", "p > div"].forEach(
    (s) => {
      $(s).each((_, el) => {
        $(el).replaceWith($(el).contents());
      });
    },
  );

  $("script, style").remove();
  return `<!DOCTYPE html><html lang="en"><body>${pageContent.html()}</body></html>`;
}

async function fetchImages(html: string) {
  console.log("Fetching images...");
  const $ = loadCheerio(html);
  const imgs = $("img").toArray();

  for (const img of imgs) {
    const $img = $(img);
    const rawSrc = $img.attr("data-src") || $img.attr("src");

    if (!rawSrc || rawSrc.startsWith("data:")) {
      $img.remove();
      continue;
    }

    try {
      const url = new URL(rawSrc, REF_HTML_URL).href;
      const fileName = path.basename(new URL(url).pathname);
      const localPath = path.join(IMG_DIR, fileName);

      const res = await fetch(url);
      if (!res.ok) throw new Error(`Status ${res.status}`);

      fs.writeFileSync(localPath, Buffer.from(await res.arrayBuffer()));

      const alt = $img.attr("alt");
      for (const attr in img.attribs) $img.removeAttr(attr);

      $img.attr("src", `./images/${fileName}`);
      if (alt) $img.attr("alt", alt);
    } catch (e) {
      console.error(`Failed: ${rawSrc}`);
      $img.remove();
    }
  }
  return $.html();
}

async function fetchSrc() {
  console.log("Fetching source...");
  const res = await fetch(REF_HTML_URL);
  return await res.text();
}

async function split(html: string) {
  console.log("Splitting sections...");
  const $ = loadCheerio(html);
  const allContent = $("body").children();
  const groups: { title: string; nodes: any[] }[] = [];
  let currentGroup: { title: string; nodes: any[] } | null = null;

  allContent.each((_, el) => {
    const $el = $(el);
    const isH2 = el.tagName === "h2";
    const foundH2Inside = $el.find("h2").first();

    if (isH2 || foundH2Inside.length > 0) {
      const title = (isH2 ? $el.text() : foundH2Inside.text()).trim();
      currentGroup = { title: title || "Untitled Section", nodes: [] };
      groups.push(currentGroup);
    }
    if (currentGroup) currentGroup.nodes.push($el.clone());
  });

  const indexLinks: string[] = [];
  groups.forEach((group, index) => {
    const pos = (index + 1).toString().padStart(3, "0");
    const slug = group.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/(^-|-$)/g, "");
    const fileName = `${pos}-${slug}.html`;
    const sectionHtml = group.nodes.map((n) => $.html(n)).join("\n");

    const fileHtml = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>${group.title}</title><style>
    body { font-family: sans-serif; line-height: 1.6; padding: 2rem; color: #1a1a1a; max-width: 900px; margin: auto; }
    pre { background: #f6f8fa; padding: 1rem; border-radius: 6px; overflow-x: auto; border: 1px solid #d0d7de; }
    code { font-family: monospace; font-size: 85%; }
    img { max-width: 100%; height: auto; display: block; margin: 1rem 0; }
    table { border-collapse: collapse; width: 100%; margin: 1rem 0; }
    th, td { border: 1px solid #d0d7de; padding: 8px 12px; text-align: left; }
    th { background: #f6f8fa; }
  </style></head><body>${sectionHtml}</body></html>`;
    fs.writeFileSync(path.join(OUTPUT_DIR, fileName), fileHtml);
    indexLinks.push(
      `<li><code>${pos}</code> <a href="${fileName}">${group.title}</a></li>`,
    );
  });

  const indexHtml = `<!DOCTYPE html><html><body><h1>API Index</h1><ul>${indexLinks.join("")}</ul></body></html>`;
  fs.writeFileSync(path.join(OUTPUT_DIR, "index.html"), indexHtml);
}

async function makeMarkdown() {
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

const rawSourceHtml = await fetchSrc();
const cleanHtmlText = cleanHtml(rawSourceHtml);
const finalHtml = await fetchImages(cleanHtmlText);
fs.writeFileSync(SOURCE_FILE, finalHtml);
await split(finalHtml);
await makeMarkdown();
