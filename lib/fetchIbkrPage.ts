import { load as loadCheerio } from "cheerio";
import fs from "node:fs";
import { getCleanContent } from "./getCleanContent";
import { fetchImages } from "./fetchImages";
import { SectionInfo } from "./generate";
import { fetchText, writeFile } from "./utils";
import type { CheerioAPI, Cheerio } from "cheerio";
import type { Element } from "domhandler";
import type { Chapter, SectionName } from "./generate";
import { HtmlContent } from "./splitHtml";

export async function fetchIbkrSection(
  info: Omit<SectionInfo, "type"> & { type: "ibkr" },
) {
  const { imageDir, url, name: sectionName, file, dir } = info;

  fs.mkdirSync(imageDir, { recursive: true });
  const rawHtml = await fetchText(url);
  writeFile(file, rawHtml, dir);
  const $ = loadCheerio(rawHtml);
  const title = $("h1").text();
  const content = getCleanContent($);
  await fetchImages($, content, url, imageDir);

  const chapters = parseChapters($, content, sectionName);

  return { ...info, title, chapters, $ };
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
