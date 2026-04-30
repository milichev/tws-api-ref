import type { Breadcrumb, Chapter, FetchInfo, SlugMap } from "./generate";
import { resolveHtmlLinks } from "./resolveHtmlLinks";
import { resolveMdLinks } from "./resolveMdLinks";
import { writeHtmlSections } from "./writeHtmlSections";
import { writeMdSections } from "./writeMdSections";

export async function writeSections(
  sections: FetchInfo[],
  breadcrumb: Breadcrumb<unknown>[],
) {
  // 1. Assign base filenames (pos-slug) to all sections
  sections.forEach((section) => {
    assignBaseFilenames(section.children);
  });

  // 2. Build global slug map
  const slugMap: SlugMap = new Map();

  function collectSlugs(chapters: Chapter<unknown>[]) {
    chapters.forEach((s) => {
      if (s.slug) {
        slugMap.set(s.slug, {
          title: s.title,
          fileName: s.fileName!, // Base name
          sectionName: s.sectionName,
        });
      }
      if (s.children.length > 0) collectSlugs(s.children);
    });
  }

  sections.forEach((section) => collectSlugs(section.children));

  // 3. Resolve links (Stubbed for MD as requested)
  sections
    .filter((s) => s.type === "html")
    .forEach((s) => {
      resolveHtmlLinks(s.$, s.children, slugMap, sections);
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

export function assignBaseFilenames(
  chapters: Chapter<unknown>[],
  parentPrefix = "",
) {
  chapters.forEach((s, i) => {
    s.num = i + 1;
    const pos = s.num.toString().padStart(2, "0");
    s.pos = parentPrefix ? `${parentPrefix}.${pos}` : pos;
    s.fileName = s.slug ? `${s.pos}-${s.slug}` : s.pos;
    if (s.children.length > 0) {
      assignBaseFilenames(s.children, s.pos);
    }
  });
}
