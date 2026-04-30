import fs from "node:fs";
import path from "node:path";
import { SectionInfo } from "./generate";
import { fetchText, HTML_DIR, writeFile } from "./utils";
import { chopLargeMd } from "./chopLargeMd";
import { SKILL_DIR } from "./utils";

export async function fetchCtx7Section(info: SectionInfo) {
  const { url, sectionName } = info;
  const outDirMd = path.join(SKILL_DIR, "docs", sectionName);
  const rawFilename = path.join(outDirMd, `${sectionName}.raw.md`);
  const indexFilename = path.join(outDirMd, `index.md`);
  const outDirHtml = path.join(HTML_DIR, sectionName);

  fs.mkdirSync(outDirMd, { recursive: true });
  const rawMd = await fetchText(url);
  writeFile(rawFilename, rawMd);

  const children = await chopLargeMd({
    source: rawFilename,
    outDir: outDirMd,
    sectionName,
  });

  return {
    ...info,
    type: "md",
    title: sectionName,
    children,
    outDirHtml,
    outDirMd,
    rawFilename,
    indexFilename,
  } as const;
}
