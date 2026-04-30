import type { Cheerio } from "cheerio";
import type { AnyNode } from "domhandler";
import fs from "node:fs";
import { pageHtmlTpl, writeFile } from "./utils";
import { type Chapter, type Breadcrumb, HtmlFetchInfo } from "./generate";
import { turndownService } from "./turndown";

export type HtmlContent = Cheerio<AnyNode>;

export async function writeHtmlSections(
  { sectionName, title, children, outDirHtml, outDirMd, $ }: HtmlFetchInfo,
  breadcrumb: Breadcrumb<HtmlContent>[],
) {
  console.log(`Writing ${sectionName} into chapters...`);

  fs.mkdirSync(outDirHtml, { recursive: true });
  fs.mkdirSync(outDirMd, { recursive: true });

  function process(list: Chapter<HtmlContent>[]) {
    list.forEach((s) => {
      const fileNameHtml = s.fileName!;
      const fileNameMd = fileNameHtml.replace(/\.html$/, ".md");

      // Normalization: Adjust heading
      const $content = s.content;
      const hTag = `h${s.level + 1}`;
      const hTitle = $content.find("h2, h3, h4").first();
      const actualTitle = `${s.pos} ${s.title}`;

      hTitle.replaceWith(`<${hTag} id="${s.slug}">${actualTitle}</${hTag}>`);

      // 1. Generate HTML
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

      // 2. Generate MD
      breadcrumb.push({ title: actualTitle, fileName: fileNameMd });
      const mdContentStr = turndownService.turndown(htmlContentStr);
      // For MD, if there are children, we append them as a TOC
      const fileMd = pageHtmlTpl({
        layout: "layout-chapter-md",
        title: actualTitle,
        breadcrumb,
        content: mdContentStr,
        children:
          s.children.length > 0
            ? s.children.map((c) => ({
                ...c,
                fileName: c.fileName!.replace(/\.html$/, ".md"),
              }))
            : undefined,
      });
      writeFile(fileNameMd, fileMd, outDirMd);
      breadcrumb.pop();

      process(s.children);
    });
  }

  breadcrumb.push({ title, fileName: "index.html" });
  const indexHtml = pageHtmlTpl({
    title,
    layout: "layout-index-html",
    children: children,
    breadcrumb,
  });
  breadcrumb.pop();
  writeFile("index.html", indexHtml, outDirHtml);

  breadcrumb.push({ title, fileName: "index.md" });
  const indexMd = pageHtmlTpl({
    title,
    layout: "layout-index-md",
    children: children.map((c) => ({
      ...c,
      fileName: c.fileName!.replace(/\.html$/, ".md"),
    })),
    breadcrumb,
    isMd: true,
  });
  breadcrumb.pop();
  writeFile("index.md", indexMd, outDirMd);

  process(children);
}
