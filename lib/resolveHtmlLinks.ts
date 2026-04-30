import type { CheerioAPI } from "cheerio";
import type { Chapter, SectionInfo, SlugMap } from "./generate";
import { HtmlContent } from "./writeHtmlSections";

/**
 * Resolves links between chapters and sources.
 */
export function resolveHtmlLinks(
  $: CheerioAPI,
  chapters: Chapter<HtmlContent>[],
  slugMap: SlugMap,
  sectionInfos: SectionInfo[],
) {
  const sectionHrefRegex = new RegExp(
    `\/${sectionInfos.map((s) => s.sectionName).join("|")}\/(?:#([^/]+))?$`,
  );

  function walk(list: Chapter<HtmlContent>[]) {
    list.forEach((ch) => {
      const $content = ch.content;
      $content.find("a").each((_, a) => {
        const $a = $(a);
        const href = $a.attr("href") || "";

        // Internal anchor link in same source (starting with #)
        if (href.startsWith("#")) {
          const targetSlug = href.substring(1);
          const target = slugMap.get(targetSlug);
          if (target) {
            const prefix =
              ch.sectionName === target.sectionName
                ? ""
                : `../${target.sectionName}/`;
            $a.attr("href", `${prefix}${target.fileName}`);
          }
          return;
        }

        // External link check
        // We look for the pattern /campus/ibkr-api-page/PAGE_NAME/
        const match = href.match(sectionHrefRegex);
        if (match) {
          const sectionName = match[1];
          const targetSlug = match[2];

          if (targetSlug) {
            const target = slugMap.get(targetSlug);
            if (target) {
              const prefix =
                ch.sectionName === target.sectionName
                  ? ""
                  : `../${target.sectionName}/`;
              $a.attr("href", `${prefix}${target.fileName}`);
              return;
            }
          } else {
            // Points to page root
            const prefix =
              ch.sectionName === sectionName ? "" : `../${sectionName}/`;
            $a.attr("href", `${prefix}index.html`);
            return;
          }
        }
      });

      if (ch.children.length > 0) walk(ch.children);
    });
  }
  walk(chapters);
}
