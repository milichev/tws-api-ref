import type { Breadcrumb, Chapter, FetchInfo, SlugMap } from "./generate";
import { resolveHtmlLinks } from "./resolveHtmlLinks";
import { resolveMdLinks } from "./resolveMdLinks";
import { writeHtmlSections as writeHtmlSections } from "./writeHtmlSections";
import { writeMdSections } from "./writeMdSections";

export async function writeSections(
  sections: FetchInfo[],
  breadcrumb: Breadcrumb<unknown>[],
) {
  // 1. Assign filenames to all sections
  sections.forEach((section) => {
    assignFilenames(section.children, section.sectionName);
  });

  // 2. Build global slug map
  const slugMap: SlugMap = new Map();

  function collectSlugs(chapters: Chapter<unknown>[]) {
    chapters.forEach((s) => {
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

  sections.forEach((section) => collectSlugs(section.children));

  // 3. Resolve links using the global map and defined URLs
  sections
    .filter((s) => s.type === "html")
    .forEach((s) => {
      resolveHtmlLinks(s.$, s.children, slugMap, sections);
    });

  sections
    .filter((s) => s.type === "md")
    .forEach((s) => {
      resolveMdLinks(s.children, slugMap, sections);
    });

  // 4. Split and write files
  await Promise.all(
    sections.map(async (s) => {
      switch (s.type) {
        case "html":
          await writeHtmlSections(s, breadcrumb);
          break;
        case "md":
          await writeMdSections(s, breadcrumb);
          break;
      }
    }),
  );
}

export function assignFilenames(
  chapters: Chapter<unknown>[],
  parentPrefix = "",
) {
  chapters.forEach((s, i) => {
    s.num = i + 1;
    const pos = s.num.toString().padStart(2, "0");
    s.pos = parentPrefix ? `${parentPrefix}.${pos}` : pos;
    s.fileName = `${s.pos}-${s.slug}.html`;
    if (s.children.length > 0) {
      assignFilenames(s.children, s.pos);
    }
  });
}
