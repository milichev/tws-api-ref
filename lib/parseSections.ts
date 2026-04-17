import type { CheerioAPI, Cheerio } from "cheerio";
import type { Element } from "domhandler";
import { type Section } from "./splitHtml";

/**
 * Parses a flat list of sections into a tree based on class="api-block-N".
 * Assumes sections are siblings in the container.
 */
export function parseSections(
  $: CheerioAPI,
  container: Cheerio<Element>,
): Section[] {
  const sections: Section[] = [];
  const stack: { level: number; section: Section }[] = [];

  container.children("section").each((_, el) => {
    const $el = $(el);
    const className = $el.attr("class");
    const match = className?.match(/api-block-(\d+)/);

    if (match) {
      const level = parseInt(match[1], 10);
      const slug = $el.attr("id") || "";
      const title = $el.find("h2, h3, h4").first().text().trim();

      const newSection: Section = {
        title,
        level,
        slug,
        content: $el.contents().clone(),
        children: [],
      };

      while (stack.length > 0 && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      if (stack.length === 0) {
        sections.push(newSection);
      } else {
        stack[stack.length - 1].section.children.push(newSection);
      }
      stack.push({ level, section: newSection });
    }
  });

  return sections;
}
