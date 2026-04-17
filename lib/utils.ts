import fs from "node:fs";
import path from "node:path";
import H from "handlebars";

export const REPO_ROOT = path.dirname(import.meta.dirname);

export const pageTpl = getTpl("templates/page.html");

H.registerPartial("toc-level", readFile("templates/toc-level.html"));
H.registerPartial("layout-index", readFile("templates/layout-index.html"));
H.registerPartial("layout-chapter", readFile("templates/layout-chapter.html"));
H.registerPartial("breadcrumb", readFile("templates/breadcrumb.html"));

H.registerHelper("styles_block", () => {
  const css = readFile("templates/styles.css");
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
