import fs from "node:fs";
import path from "node:path";
import { load as loadCheerio, type Cheerio } from "cheerio";
import type { Element as DomHandlerElement } from "domhandler";

type Element = Cheerio<DomHandlerElement>;

const REF_HTML_URL = "https://ibkrcampus.com/campus/ibkr-api-page/twsapi-doc/";
const REPO_ROOT = path.dirname(import.meta.dirname);
const OUTPUT_DIR = path.join(REPO_ROOT, "out");
const SOURCE_FILE = path.join(OUTPUT_DIR, "src.html");
const CLEAN_FILE = path.join(OUTPUT_DIR, "clean.html");

if (fs.existsSync(OUTPUT_DIR)) {
  // clear all children recursively
  fs.rm(OUTPUT_DIR, { recursive: true, force: true }, (err) => {
    if (err) throw err;
    console.log("Directory deleted!");
  });
}
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

async function cleanHtml(html: string) {
  const document = loadCheerio(html);

  const pageContent = document("div.page-content");

  const elementsToDelete: Element[] = [];

  function unwrap(elements: Element[], getRef = (el: Element) => el) {
    for (const el of elements) {
      const ref = getRef(el);
      if (!ref.parent()) continue;
      for (const ch of [...el.children()]) {
        ref.parent().insertBefore(ch, ref);
      }
      ref.parent().removeChild(ref);
    }
  }

  // remove copy links
  elementsToDelete.push(...pageContent.querySelectorAll(".copy-link"));

  // process code snippets
  const codeExamples = [
    ...pageContent.querySelectorAll(
      "ul.nav-tabs > li.nav-item > button.tab-python",
    ),
  ].map((btn) => {
    const ul = btn.parent().parent();
    const ref = ul.parent().parent().parent();
    const pane = ul.nextElementSibling;
    const active = pane.querySelector(".tab-pane.active");
    const code = active.querySelector(".enlighter-origin");
    const snippet = active.querySelector(".enlighter-default");
    const content = code ? [] : [...active.children()];
    return {
      ul,
      ref,
      pane,
      code,
      snippet,
      content,
    };
  });

  for (const { ul, ref, pane, code, snippet, content } of codeExamples) {
    const refChildren = [...ref.childNodes];
    [code /*snippet,*/, ...content]
      .filter(Boolean)
      .forEach((el) => ref.parent().insertBefore(el, ref));
    code?.classList.remove("enlighter-origin");
    elementsToDelete.push(ref);
  }

  for (const div of [...document.querySelectorAll("p > img ~ div")]) {
    const img = div.previousElementSibling;
    const p = img.parent();
    p.parent().insertBefore(img, p);
    elementsToDelete.push(p);
  }

  unwrap([...document.querySelectorAll("div.row > div.entry-content")], (el) =>
    el.parent(),
  );

  unwrap([...document.querySelectorAll("section > .inner-col")]);

  unwrap([...document.querySelectorAll("p > div")].map((div) => div.parent()));

  elementsToDelete.push(
    ...document.body.childNodes,
    ...[...document.head.childNodes].filter((el) =>
      ["STYLE", "SCRIPT"].includes(el.tagName),
    ),
  );

  document.body.insertBefore(pageContent, document.body.children()[0]);

  for (const el of elementsToDelete) {
    el.parent()?.removeChild(el);
  }
}

async function saveSrc() {
  const res = await fetch(REF_HTML_URL, {});
  const html = await res.text();
  fs.writeFileSync(SOURCE_FILE, html);
}

function cleanSrc() {
  const raw = fs.readFileSync(SOURCE_FILE, "utf8");
  const clear = cleanHtml(raw);
  fs.writeFileSync(CLEAN_FILE, clear);
}

async function split() {
  const html = fs.readFileSync(SOURCE_FILE, "utf8");
  const $ = loadCheerio(html);
  const sections = $("section");
  const indexLinks: string[] = [];

  sections.each((index, el) => {
    const section = $(el);
    const header = section.find("h1, h2, h3").first();

    // Format ordinal (01, 02, etc.)
    const pos = (index + 1).toString().padStart(2, "0");
    const rawTitle = header.text().trim() || section.attr("id") || "untitled";

    // Clean filename: alphanumeric only, collapse dashes
    const slug = rawTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/(^-|-$)/g, "");

    const fileName = `${pos}-${slug}.html`;
    const displayTitle = `${index + 1} – ${rawTitle}`;

    const newHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${displayTitle}</title>
</head>
<body>
  ${section.html()}
</body>
</html>`;

    fs.writeFileSync(path.join(OUTPUT_DIR, fileName), newHtml);
    indexLinks.push(
      `<li><code>${pos}</code> <a href="${fileName}">${rawTitle}</a></li>`,
    );
  });

  const indexHtml = `<!DOCTYPE html><html><body><h1>API Index</h1><ul>${indexLinks.join("")}</ul></body></html>`;
  fs.writeFileSync(path.join(OUTPUT_DIR, "index.html"), indexHtml);
}

await saveSrc();
cleanSrc();
await split();
