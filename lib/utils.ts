import fs from "node:fs";
import path from "node:path";
import H from "handlebars";

export const REPO_ROOT = path.dirname(import.meta.dirname);
export const HTML_DIR = path.join(REPO_ROOT, "html");
export const SKILL_DIR = path.join(REPO_ROOT, "skill");

export const pageHtmlTpl = getTpl("templates/page.html");
export const skillMdTpl = getTpl("templates/SKILL.md");

H.registerPartial("toc-level-html", readFile("templates/toc-level.html"));
H.registerPartial("toc-level-md", readFile("templates/toc-level.md"));
H.registerPartial("layout-index-html", readFile("templates/layout-index.html"));
H.registerPartial("layout-index-md", readFile("templates/layout-index.md"));
H.registerPartial(
  "layout-chapter-html",
  readFile("templates/layout-chapter.html"),
);
H.registerPartial("layout-chapter-md", readFile("templates/layout-chapter.md"));
H.registerPartial("breadcrumb-html", readFile("templates/breadcrumb.html"));
H.registerPartial("breadcrumb-md", readFile("templates/breadcrumb.md"));

H.registerHelper(
  "md-heading",
  function (level: number, title: string, options: H.HelperOptions) {
    // TODO: if options.fn exists, return options.fn(this), or should we use SafeString here to avoid escaping?
    return `${"#".repeat(level + 2)} ${title}`;
  },
);

const css = readFile("templates/styles.css");
H.registerHelper("styles_block", () => {
  return new H.SafeString(`<style>\n${css}\n</style>`);
});

export function getTpl(tplPath: string) {
  return H.compile(readFile(tplPath), {});
}

export function readFile(relPath: string, basePath = REPO_ROOT) {
  const fileName = path.join(basePath, relPath);
  return fs.readFileSync(fileName, "utf8");
}

export function writeFile(
  relPath: string,
  content: string,
  basePath = REPO_ROOT,
) {
  const fileName = path.join(basePath, relPath);
  fs.writeFileSync(fileName, content);
}

export async function fetchText(url: string) {
  const res = await fetch(url);
  return await res.text();
}

export function getSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");
}

let nextNumber = 1;
export function getNextId() {
  return nextNumber++;
}
