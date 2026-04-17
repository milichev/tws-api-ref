import fs from "node:fs";
import path from "node:path";
import { fetchPage } from "./fetchPage";
import { REPO_ROOT } from "./utils";

export const OUTPUT_DIR = path.join(REPO_ROOT, "out");
export const MD_OUT_DIR = path.join(REPO_ROOT, "md-out");
export const SKILL_TPL = path.join(REPO_ROOT, "templates/SKILL.md");

export type PageInfo = ReturnType<typeof getPageInfos>[number];

function getPageInfos(pageUrls: Record<string, string>) {
  return Object.entries(pageUrls).map(([name, url]) => {
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

const pageInfos = getPageInfos({
  "twsapi-doc": "https://ibkrcampus.com/campus/ibkr-api-page/twsapi-doc/",
  "twsapi-ref": "https://ibkrcampus.com/campus/ibkr-api-page/twsapi-ref/",
  "protobuf-ref":
    "https://ibkrcampus.com/campus/ibkr-api-page/protobuf-reference/",
});

recreateOutDirs();
const fetchInfos = await Promise.all(pageInfos.map(fetchPage));

// await splitHtml({ html: finalHtml, outDir: OUTPUT_DIR });
// await makeMarkdown();
