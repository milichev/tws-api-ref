import type { Breadcrumb, Chapter, IbkrFetchInfo, SlugMap } from "./generate";
import { resolveHtmlLinks } from "./resolveHtmlLinks";
import { splitHtml, type HtmlContent } from "./splitHtml";

export async function relinkIbkrSections(
  sections: IbkrFetchInfo[],
  breadcrumb: Breadcrumb<unknown>[],
) {
  // 1. Assign filenames to all sections
  sections.forEach((section) => {
    assignFilenames(section.chapters, section.name);
  });

  // 2. Build global slug map
  const slugMap: SlugMap = new Map();

  function collectSlugs<S extends Chapter<unknown>>(sections: S[]) {
    sections.forEach((s) => {
      if (s.slug) {
        slugMap.set(s.slug, {
          title: s.title,
          fileName: s.fileName!,
          sectionName: s.sectionName,
        });
      }
      if (s.children.length > 0) collectSlugs(s.children);
    });
  }

  sections.forEach((section) => collectSlugs(section.chapters));

  // 3. Resolve links using the global map and defined URLs
  sections.forEach((section) => {
    resolveHtmlLinks(section.$, section.chapters, slugMap, sections);
  });

  // 4. Split and write files
  for (const sec of sections) {
    await splitHtml({
      $: sec.$,
      chapters: sec.chapters,
      outDir: sec.dir,
      sectionName: sec.name,
      title: sec.title,
      breadcrumb,
    });
  }
}

export function assignFilenames(
  list: Chapter<HtmlContent>[],
  sectionName: string,
  parentPrefix = "",
) {
  list.forEach((s, i) => {
    s.num = i + 1;
    const pos = s.num.toString().padStart(2, "0");
    s.pos = parentPrefix ? `${parentPrefix}.${pos}` : pos;
    s.fileName = `${s.pos}-${s.slug}.html`;
    if (s.children.length > 0) {
      assignFilenames(s.children, sectionName, s.pos);
    }
  });
}
