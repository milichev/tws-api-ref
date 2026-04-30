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

  // 1. Full HTML Tree
  function writeHtmlTree(list: Chapter<any>[]) {
    list.forEach((s) => {
      const fileNameHtml = s.fileName + ".html";
      const actualTitle = `${s.pos} ${s.title}`;

      // Normalization: Adjust heading in content
      const $content = s.content;
      const hTag = `h${s.level + 1}`;
      const hTitle = $content.find("h2, h3, h4").first();
      hTitle.replaceWith(`<${hTag} id="${s.slug}">${actualTitle}</${hTag}>`);

      breadcrumb.push({ title: actualTitle, fileName: fileNameHtml });
      const htmlContentStr = $.html(s.content);
      const fileHtml = pageHtmlTpl({
        layout: "layout-chapter-html",
        title: actualTitle,
        breadcrumb,
        content: htmlContentStr,
      });
      writeFile(fileNameHtml, fileHtml, outDirHtml);
      breadcrumb.pop();

      if (s.children.length > 0) writeHtmlTree(s.children);
    });
  }

  // 2. Flattened MD Tree (Level 2 only)
  function writeMdFlattened(list: Chapter<any>[]) {
    list.forEach((s) => {
      // Only write Level 1 chapters (which are Level 2 in the total hierarchy: Section -> Chapter)
      // Wait, s.level is the depth in the section. children are level 1.
      if (s.level !== 1) return; 

      const fileNameMd = s.fileName + ".md";
      const actualTitle = `${s.pos} ${s.title}`;

      // Recursively collect all content from children
      function collectContent(node: Chapter<any>, level: number): string {
        const html = $.html(node.content);
        let md = turndownService.turndown(html);
        
        // Add children content
        node.children.forEach(child => {
          md += "\n\n" + collectContent(child, level + 1);
        });
        return md;
      }

      const fullMdContent = collectContent(s, 1);

      breadcrumb.push({ title: actualTitle, fileName: fileNameMd });
      const fileMd = pageMdTpl({
        layout: "layout-chapter-md",
        title: actualTitle,
        breadcrumb,
        content: fullMdContent,
      });
      writeFile(fileNameMd, fileMd, outDirMd);
      breadcrumb.pop();
    });
  }

  // Section Index (Full for HTML)
  breadcrumb.push({ title, fileName: "index.html" });
  const indexHtml = pageHtmlTpl({
    title,
    layout: "layout-index-html",
    children: children.map(c => ({ ...c, fileName: c.fileName + ".html" })),
    breadcrumb,
  });
  breadcrumb.pop();
  writeFile("index.html", indexHtml, outDirHtml);

  // Section Index (Top-level only for MD)
  breadcrumb.push({ title, fileName: "index.md" });
  const indexMd = pageMdTpl({
    title,
    layout: "layout-index-md",
    children: children.map((c) => ({
      ...c,
      fileName: c.fileName + ".md",
    })),
    breadcrumb,
    isMd: true,
    flat: true, // Non-recursive TOC
  });
  breadcrumb.pop();
  writeFile("index.md", indexMd, outDirMd);

  writeHtmlTree(children);
  writeMdFlattened(children);
}
