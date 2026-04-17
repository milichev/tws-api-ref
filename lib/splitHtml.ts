import type { Cheerio, CheerioAPI } from "cheerio";
import type { AnyNode } from "domhandler";
import { pageTpl, writeFile } from "./utils";

export type Section = {
  title: string;
  level: number;
  num?: string;
  slug: string;
  /** clone of the source elements to make manipulation pure */
  content: Cheerio<AnyNode>;
  children: Section[];
  fileName?: string;
  pageName?: string;
};

export type Breadcrumb = Pick<Section, "title" | "fileName" | "num">;

/**
 * Sets filenames for all sections in the tree.
 */
export function assignFilenames(
  list: Section[],
  pageName: string,
  parentPrefix = "",
) {
  list.forEach((s, i) => {
    const pos = (i + 1).toString().padStart(2, "0");
    s.num = parentPrefix ? `${parentPrefix}.${pos}` : pos;
    s.fileName = `${s.num}-${s.slug}.html`;
    s.pageName = pageName;
    if (s.children.length > 0) {
      assignFilenames(s.children, pageName, s.num);
    }
  });
}

export async function splitHtml({
  $,
  sections,
  outDir,
  pageName,
  title,
  breadcrumb,
}: {
  $: CheerioAPI;
  sections: Section[];
  outDir: string;
  pageName: string;
  title: string;
  breadcrumb: Breadcrumb[];
}) {
  console.log(`Splitting sections for ${pageName}...`);

  function process(list: Section[]) {
    list.forEach((s) => {
      const fileName = s.fileName!;

      // Normalization: Adjust heading
      const $content = s.content;
      const hTag = `h${s.level + 1}`;
      const hTitle = $content.find("h2, h3, h4").first();
      const actualTitle = `${s.num} ${s.title}`;

      hTitle.replaceWith(`<${hTag} id="${s.slug}">${actualTitle}</${hTag}>`);

      breadcrumb.push({ title: actualTitle, fileName, num: s.num });
      const fileHtml = pageTpl({
        layout: "layout-chapter",
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

  breadcrumb.push({ title, fileName: "index.html", num: "" });

  process(sections);

  const indexHtml = pageTpl({
    title: `${title}: Index`,
    layout: "layout-index",
    children: sections,
    breadcrumb,
  });

  breadcrumb.pop();

  writeFile("index.html", indexHtml, outDir);
}
