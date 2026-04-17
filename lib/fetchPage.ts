import { load as loadCheerio } from "cheerio";
import fs from "node:fs";
import { getCleanContent } from "./getCleanContent";
import { fetchImages } from "./fetchImages";
import { PageInfo } from "./generate";
import { fetchText, pageTpl, styles, writeFile } from "./utils";

export type FetchInfo = Awaited<ReturnType<typeof fetchPage>>;

export async function fetchPage({
  name,
  srcFilename,
  imageDir,
  pageDir,
  url,
}: PageInfo) {
  console.info(`Fetching: ${name}...`);

  fs.mkdirSync(imageDir, { recursive: true });
  const rawHtml = await fetchText(url);
  const $ = loadCheerio(rawHtml);
  const title = $("h1").text();
  const content = getCleanContent($);
  await fetchImages($, content, url, imageDir);
  const html = pageTpl({ styles, title, content: $.html(content) });
  writeFile(srcFilename, html, pageDir);

  return { name, srcFilename, imageDir, pageDir, url, title };
}
