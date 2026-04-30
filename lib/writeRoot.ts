import path from "node:path";
import fs from "node:fs";
import type { Breadcrumb, FetchInfo } from "./generate";
import { pageHtmlTpl, pageMdTpl, skillMdTpl, HTML_DIR, SKILL_DIR, writeFile } from "./utils";
import { writeSections, assignBaseFilenames } from "./writeSections";

export async function writeRoot(sections: FetchInfo[]) {
  const breadcrumb: Breadcrumb<unknown>[] = [];

  // 1. Assign filenames to all chapters in all sections FIRST
  sections.forEach((section) => {
    assignBaseFilenames(section.children);
  });

  const breadcrumbHtml: Breadcrumb<any>[] = [
    { title: "IBKR TWS API", fileName: "index.html" },
  ];

  const breadcrumbMd: Breadcrumb<any>[] = [
    { title: "IBKR TWS API", fileName: "../SKILL.md" },
  ];

  // 2. Generate html/index.html (Section titles only)
  const indexHtml = pageHtmlTpl({
    title: "IBKR TWS API",
    layout: "layout-index-html",
    children: sections.map((s) => ({
      ...s,
      fileName:
        "externalUrl" in s && s.externalUrl
          ? s.externalUrl
          : `${s.sectionName}/index.html`,
    })),
    breadcrumb: breadcrumbHtml,
    flat: true, // Only show section titles
  });
  writeFile("index.html", indexHtml, HTML_DIR);

  // 3. Generate skill/SKILL.md (Section titles only)
  const skillMd = skillMdTpl({
    title: "IBKR TWS API",
    children: sections.map((s) => ({
      ...s,
      fileName: `./docs/${s.sectionName}/index.md`,
    })),
    flat: true,
  });
  writeFile("SKILL.md", skillMd, SKILL_DIR);

  // 4. Generate skill/docs/index.md (Section titles only)
  const docsIndexMd = pageMdTpl({
    title: "Documentation Sections",
    layout: "layout-index-md",
    children: sections.map((s) => ({
      ...s,
      fileName: `./${s.sectionName}/index.md`,
    })),
    breadcrumb: breadcrumbMd,
    isMd: true,
    flat: true,
  });
  writeFile("docs/index.md", docsIndexMd, SKILL_DIR);

  await writeSections(sections, breadcrumbHtml);
}
