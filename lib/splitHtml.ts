import fs from "node:fs";
import path from "node:path";
import { load as loadCheerio } from "cheerio";
import { getSlug, pageTpl, styles, writeFile } from "./utils";

export async function splitHtml({
  html,
  outDir,
}: {
  html: string;
  outDir: string;
}) {
  console.log("Splitting sections...");
  const $ = loadCheerio(html);
  const allContent = $("body").children();
  const groups: { title: string; nodes: any[] }[] = [];
  let currentGroup: { title: string; nodes: any[] } | null = null;

  allContent.each((_, el) => {
    const $el = $(el);
    const isH2 = el.tagName === "h2";
    const foundH2Inside = $el.find("h2").first();

    if (isH2 || foundH2Inside.length > 0) {
      const title = (isH2 ? $el.text() : foundH2Inside.text()).trim();
      currentGroup = { title: title || "Untitled Section", nodes: [] };
      groups.push(currentGroup);
    }
    if (currentGroup) currentGroup.nodes.push($el.clone());
  });

  const indexLinks: string[] = [];
  groups.forEach((group, index) => {
    const pos = (index + 1).toString().padStart(2, "0");
    const slug = getSlug(group.title);
    const fileName = `${pos}-${slug}.html`;
    const sectionHtml = group.nodes.map((n) => $.html(n)).join("\n");

    const fileHtml = pageTpl({
      styles,
      title: group.title,
      content: sectionHtml,
    });

    writeFile(fileName, fileHtml, outDir);

    indexLinks.push(
      `<li><code>${pos}</code> <a href="${fileName}">${group.title}</a></li>`,
    );
  });

  const indexHtml = `<!DOCTYPE html><html><body><h1>API Index</h1><ul>${indexLinks.join("")}</ul></body></html>`;
  fs.writeFileSync(path.join(outDir, "index.html"), indexHtml);
}
