import fs from "node:fs";
import { SectionInfo } from "./generate";
import { fetchText, writeFile } from "./utils";
import { chopLargeMd } from "./chopLargeMd";

export async function fetchCtx7Section(
  info: Omit<SectionInfo, "type"> & { type: "ctx7" },
) {
  const { url, dir, file, name } = info;
  fs.mkdirSync(dir, { recursive: true });
  const rawContent = await fetchText(url);
  writeFile(file, rawContent, dir);

  const chapters = await chopLargeMd({
    source: file,
    outDir: dir,
    sectionName: name,
  });

  return { ...info, title: name, chapters };
}
