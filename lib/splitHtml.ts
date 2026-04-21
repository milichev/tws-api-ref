import type { Cheerio, CheerioAPI } from "cheerio";
import type { AnyNode } from "domhandler";
import { pageTpl, writeFile } from "./utils";
import { type Chapter, type Breadcrumb } from "./generate";

export type HtmlContent = Cheerio<AnyNode>;

/**
 * Sets filenames for all chapters in the tree.
 */

export async function splitHtml({
  $,
  chapters,
  outDir,
  sectionName,
  title,
  breadcrumb,
}: {
  $: CheerioAPI;
  chapters: Chapter<HtmlContent>[];
  outDir: string;
  sectionName: string;
  title: string;
  breadcrumb: Breadcrumb<HtmlContent>[];
}) {
  console.log(`Splitting ${sectionName} into chapters...`);

  function process(list: Chapter<HtmlContent>[]) {
    list.forEach((s) => {
      const fileName = s.fileName!;

      // Normalization: Adjust heading
      const $content = s.content;
      const hTag = `h${s.level + 1}`;
      const hTitle = $content.find("h2, h3, h4").first();
      const actualTitle = `${s.pos} ${s.title}`;

      hTitle.replaceWith(`<${hTag} id="${s.slug}">${actualTitle}</${hTag}>`);

      breadcrumb.push({ title: actualTitle, fileName });
      const fileHtml = pageTpl({
        layout: "layout-chapter-html",
        title: actualTitle,
        breadcrumb,
        content: $.html(s.content),
      });

      writeFile(fileName, fileHtml, outDir);

      if (s.children.length > 0) {
        process(s.children);
      }
      breadcrumb.pop();
    });
  }

  breadcrumb.push({ title, fileName: "index.html" });

  process(chapters);

  const indexHtml = pageTpl({
    title,
    layout: "layout-index",
    children: chapters,
    breadcrumb,
  });

  breadcrumb.pop();

  writeFile("index.html", indexHtml, outDir);
}
