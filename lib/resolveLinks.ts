import type { CheerioAPI } from "cheerio";
import { Section } from "./splitHtml";

/**
 * Resolves links between sections and sources.
 */
export function resolveLinks(
  $: CheerioAPI,
  sections: Section[],
  slugMap: Map<string, { pageName: string; fileName: string }>,
  pageUrls: Record<string, string>,
) {
  // Create a mapping of URL path parts to internal page names
  // e.g. "protobuf-reference" -> "protobuf-ref"
  const urlPathToName: Record<string, string> = {};
  for (const [name, url] of Object.entries(pageUrls)) {
    try {
      const pathPart = new URL(url).pathname.split("/").filter(Boolean).pop();
      if (pathPart) urlPathToName[pathPart] = name;
    } catch (e) {
      // ignore invalid URLs
    }
  }

  function walk(list: Section[]) {
    list.forEach((s) => {
      const $content = s.content;
      $content.find("a").each((_, a) => {
        const $a = $(a);
        const href = $a.attr("href") || "";

        // Internal anchor link in same source (starting with #)
        if (href.startsWith("#")) {
          const targetSlug = href.substring(1);
          const target = slugMap.get(targetSlug);
          if (target) {
            const prefix = s.pageName === target.pageName ? "" : `../${target.pageName}/`;
            $a.attr("href", `${prefix}${target.fileName}`);
          }
          return;
        }

        // External link check
        // We look for the pattern /campus/ibkr-api-page/PAGE_NAME/
        const match = href.match(/campus\/ibkr-api-page\/([^/#?]+)\/(?:#([^/]+))?$/);
        if (match) {
          const pathPart = match[1];
          const targetSlug = match[2];
          
          // Try to find the page name by the path part (e.g. "twsapi-doc" or "protobuf-reference")
          const targetPageName = urlPathToName[pathPart] || pathPart;
          
          if (targetSlug) {
            const target = slugMap.get(targetSlug);
            if (target) {
              const prefix = s.pageName === target.pageName ? "" : `../${target.pageName}/`;
              $a.attr("href", `${prefix}${target.fileName}`);
              return;
            }
          } else {
            // Points to page root
            const prefix = s.pageName === targetPageName ? "" : `../${targetPageName}/`;
            $a.attr("href", `${prefix}index.html`);
            return;
          }
        }
      });

      if (s.children.length > 0) walk(s.children);
    });
  }
  walk(sections);
}
