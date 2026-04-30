import path from "node:path";
import fs from "node:fs";
import { load as loadCheerio } from "cheerio";
import type { CheerioAPI, Cheerio } from "cheerio";
import type { Element } from "domhandler";
import type { Chapter, SectionName, SectionInfo } from "./generate";
import { fetchText, HTML_DIR, SKILL_DIR, writeFile, REPO_ROOT } from "./utils";
import { cleanupIbkrHtmlContent } from "./cleanupIbkrHtmlContent";
import { fetchImages } from "./fetchImages";
import { HtmlContent } from "./writeHtmlSections";

export async function fetchIbkrSection(info: SectionInfo) {
  const { url, sectionName } = info;
  const outDirHtml = path.join(HTML_DIR, sectionName);
  const imageDir = path.join(outDirHtml, "images");
  const rawFilename = path.join(REPO_ROOT, "tmp", `${sectionName}.raw.html`);
  const outDirMd = path.join(SKILL_DIR, "docs", sectionName);

  fs.mkdirSync(imageDir, { recursive: true });
  const rawHtml = await fetchText(url);
  writeFile(rawFilename, rawHtml);

  const $ = loadCheerio(rawHtml);
  const title = $("h1").text();
  const content = cleanupIbkrHtmlContent($);
  await fetchImages($, content, url, imageDir);

  const children = parseChapters($, content, sectionName);

  return {
    ...info,
    type: "html",
    title,
    children,
    $,
    outDirHtml,
    outDirMd,
    rawFilename,
  } as const;
}

export function parseChapters(
  $: CheerioAPI,
  container: Cheerio<Element>,
  sectionName: SectionName,
): Chapter<HtmlContent>[] {
  const chapters: Chapter<HtmlContent>[] = [];
  const stack: { level: number; chapter: Chapter<HtmlContent> }[] = [];

  container.children("section").each((_, el) => {
    const $el = $(el);
    const className = $el.attr("class");
    const match = className?.match(/api-block-(\d+)/);

    if (match) {
      const level = parseInt(match[1], 10);
      const slug = $el.attr("id") || "";
      const title = $el.find("h2, h3, h4").first().text().trim();

      const newChapter: Chapter<HtmlContent> = {
        title,
        sectionName,
        level,
        slug,
        content: $el.contents().clone(),
        children: [],
      };

      while (stack.length > 0 && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      if (stack.length === 0) {
        chapters.push(newChapter);
      } else {
        stack[stack.length - 1].chapter.children.push(newChapter);
      }
      stack.push({ level, chapter: newChapter });
    }
  });

  return chapters;
}
