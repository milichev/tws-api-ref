import { load as loadCheerio } from "cheerio";
import fs from "node:fs";
import { getCleanContent } from "./getCleanContent";
import { fetchImages } from "./fetchImages";
import { PageInfo } from "./generate";
import { fetchText } from "./utils";
import { parseSections } from "./parseSections";

export type FetchInfo = Awaited<ReturnType<typeof fetchPage>>;

export async function fetchPage(info: PageInfo) {
  const { name, imageDir, url } = info;
  console.info(`Fetching: ${name}...`);

  fs.mkdirSync(imageDir, { recursive: true });
  const rawHtml = await fetchText(url);
  const $ = loadCheerio(rawHtml);
  const title = $("h1").text();
  const content = getCleanContent($);
  await fetchImages($, content, url, imageDir);

  const sections = parseSections($, content);

  return { ...info, title, sections, $ };
}
