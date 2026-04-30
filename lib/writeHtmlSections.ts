import fs from "node:fs";
import { pageHtmlTpl, pageMdTpl, writeFile } from "./utils";
import { type Chapter, type Breadcrumb, HtmlFetchInfo } from "./generate";
import { turndownService } from "./turndown";

export async function writeHtmlSections(
  { sectionName, title, children, outDirHtml, outDirMd, $ }: HtmlFetchInfo,
  breadcrumb: Breadcrumb<any>[],
) {
  console.log(`Writing ${sectionName} into chapters...`);

  fs.mkdirSync(outDirHtml, { recursive: true });
  fs.mkdirSync(outDirMd, { recursive: true });

  const sectionBreadcrumbHtml: Breadcrumb<any>[] = [
    { title: "IBKR TWS API", fileName: "../index.html" },
    { title, fileName: "index.html" },
  ];

  const sectionBreadcrumbMd: Breadcrumb<any>[] = [
    { title: "IBKR TWS API", fileName: "../../SKILL.md" },
    { title, fileName: "index.md" },
  ];

  // 1. Full HTML Tree
  function writeHtmlTree(list: Chapter<any>[], currentBreadcrumb: Breadcrumb<any>[]) {
    list.forEach((s) => {
      const fileNameHtml = s.fileName + ".html";
      const actualTitle = `${s.pos} ${s.title}`;

      // Normalization: Adjust heading in content
      const $content = s.content;
      const hTag = `h${s.level + 1}`;
      const hTitle = $content.find("h2, h3, h4").first();
      hTitle.replaceWith(`<${hTag} id="${s.slug}">${actualTitle}</${hTag}>`);

      const nextBreadcrumb = [...currentBreadcrumb, { title: actualTitle, fileName: fileNameHtml }];
      
      const htmlContentStr = $.html(s.content);
      const fileHtml = pageHtmlTpl({
        layout: "layout-chapter-html",
        title: actualTitle,
        breadcrumb: nextBreadcrumb,
        content: htmlContentStr,
      });
      writeFile(fileNameHtml, fileHtml, outDirHtml);

      if (s.children.length > 0) {
        writeHtmlTree(s.children, nextBreadcrumb);
      }
    });
  }

  // 2. Flattened MD Tree (Level 2 only)
  function writeMdFlattened(list: Chapter<any>[]) {
    list.forEach((s) => {
      if (s.level !== 1) return; 

      const fileNameMd = s.fileName + ".md";
      const actualTitle = `${s.pos} ${s.title}`;

      function collectContent(node: Chapter<any>, level: number): string {
        const html = $.html(node.content);
        let md = turndownService.turndown(html);
        node.children.forEach(child => {
          md += "\n\n" + collectContent(child, level + 1);
        });
        return md;
      }

      const fullMdContent = collectContent(s, 1);
      const nextBreadcrumb = [...sectionBreadcrumbMd, { title: actualTitle, fileName: fileNameMd }];

      const fileMd = pageMdTpl({
        layout: "layout-chapter-md",
        title: actualTitle,
        breadcrumb: nextBreadcrumb,
        content: fullMdContent,
      });
      writeFile(fileNameMd, fileMd, outDirMd);
    });
  }

  // Section Index (Full for HTML)
  const indexHtml = pageHtmlTpl({
    title,
    layout: "layout-index-html",
    children: children.map(c => {
      const mapped = (ch: Chapter<any>): any => ({
        ...ch,
        fileName: ch.fileName + ".html",
        children: ch.children.map(mapped)
      });
      return mapped(c);
    }),
    breadcrumb: sectionBreadcrumbHtml,
  });
  writeFile("index.html", indexHtml, outDirHtml);

  // Section Index (Top-level only for MD)
  const indexMd = pageMdTpl({
    title,
    layout: "layout-index-md",
    children: children.map((c) => ({
      ...c,
      fileName: c.fileName + ".md",
    })),
    breadcrumb: sectionBreadcrumbMd,
    isMd: true,
    flat: true,
  });
  writeFile("index.md", indexMd, outDirMd);

  writeHtmlTree(children, sectionBreadcrumbHtml);
  writeMdFlattened(children);
}
