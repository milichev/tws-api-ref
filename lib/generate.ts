import fs from "node:fs";
import path from "node:path";
import { fetchPage } from "./fetchPage";
import { pageTpl, REPO_ROOT, writeFile } from "./utils";
import {
  type Breadcrumb,
  type Section,
  assignFilenames,
  splitHtml,
} from "./splitHtml";
import { resolveLinks } from "./resolveLinks";

export const OUTPUT_DIR = path.join(REPO_ROOT, "out");
export const MD_OUT_DIR = path.join(REPO_ROOT, "md-out");
export const SKILL_TPL = path.join(REPO_ROOT, "templates/SKILL.md");

export type PageInfo = ReturnType<typeof getPageInfos>[number];

const PAGE_URLS = {
  "twsapi-doc": "https://ibkrcampus.com/campus/ibkr-api-page/twsapi-doc/",
  "twsapi-ref": "https://ibkrcampus.com/campus/ibkr-api-page/twsapi-ref/",
  "protobuf-ref":
    "https://ibkrcampus.com/campus/ibkr-api-page/protobuf-reference/",
};

function getPageInfos(urls: Record<string, string>) {
  return Object.entries(urls).map(([name, url]) => {
    const pageDir = path.join(OUTPUT_DIR, name);
    const imageDir = path.join(pageDir, "images");
    const srcFilename = `${name}.src.html`;
    return {
      name,
      url,
      pageDir,
      imageDir,
      srcFilename,
    };
  });
}

function recreateOutDirs() {
  [OUTPUT_DIR, MD_OUT_DIR].forEach((dir) => {
    if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
    fs.mkdirSync(dir, { recursive: true });
  });
}

const pageInfos = getPageInfos(PAGE_URLS);

recreateOutDirs();

const fetchInfos = await Promise.all(pageInfos.map(fetchPage));

// 1. Assign filenames to all sections
fetchInfos.forEach((info) => {
  assignFilenames(info.sections, info.name);
});

// 2. Build global slug map
const slugMap = new Map<string, { pageName: string; fileName: string }>();

function collectSlugs(sections: Section[]) {
  sections.forEach((s) => {
    if (s.slug) {
      slugMap.set(s.slug, { pageName: s.pageName!, fileName: s.fileName! });
    }
    if (s.children.length > 0) collectSlugs(s.children);
  });
}

fetchInfos.forEach((info) => collectSlugs(info.sections));

// 3. Resolve links using the global map and defined URLs
fetchInfos.forEach((info) => {
  resolveLinks(info.$, info.sections, slugMap, PAGE_URLS);
});

const title = "TWS API";
const breadcrumb: Breadcrumb[] = [
  { title, fileName: "../index.html", num: "" },
];

// 4. Split and write files
for (const info of fetchInfos) {
  await splitHtml({
    $: info.$,
    sections: info.sections,
    outDir: info.pageDir,
    pageName: info.name,
    title: info.title,
    breadcrumb,
  });
}

const indexHtml = pageTpl({
  layout: "layout-index",
  title,
  children: fetchInfos.map((info, i) => ({
    title: info.title,
    fileName: `${info.name}/index.html`,
    num: (i + 1).toString().padStart(2, "0"),
  })),
});

writeFile("index.html", indexHtml, OUTPUT_DIR);

// await makeMarkdown();
