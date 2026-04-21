import { Readable } from "node:stream";
import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";
import { getSlug, REPO_ROOT } from "./utils";
import { Chapter, SectionName } from "./generate";

export async function chopLargeMd({
  source,
  outDir,
  sectionName,
}: {
  source: string;
  outDir: string;
  sectionName: SectionName;
}) {
  const absOutDir = path.isAbsolute(outDir)
    ? outDir
    : path.join(REPO_ROOT, outDir);

  fs.mkdirSync(absOutDir, { recursive: true });

  let input: Readable;

  if (source.startsWith("http")) {
    const res = await fetch(source);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${source}: ${res.statusText}`);
    }
    if (!res.body) {
      throw new Error(`Response body is empty for ${source}`);
    }
    input = Readable.fromWeb(res.body as any);
  } else {
    const absPath = path.isAbsolute(source)
      ? source
      : path.join(REPO_ROOT, source);
    input = fs.createReadStream(absPath);
  }

  const rl = readline.createInterface({
    input,
    crlfDelay: Infinity,
  });

  const chapters: Chapter<string>[] = [];
  let currentChapterLines: string[] = [];
  let chapterCount = 0;

  const saveChapter = () => {
    // Filter out trailing/leading empty lines but preserve content
    const content = currentChapterLines.join("\n").trim();
    if (!content) return;

    chapterCount++;
    // Extract title from the first heading found
    const titleMatch = content.match(/^#+ +([^\n]+)/m);
    const title = titleMatch ? titleMatch[1].trim() : `Chapter ${chapterCount}`;

    // TODO: add lookahead for https?:\/\/ or qualified URL pattern to the end of the line
    const sourceLink = content.match(/^Source: ([^\n]+)/m)?.[1];

    const numStr = String(chapterCount).padStart(3, "0");
    const slug = getSlug(title);
    const fileName = `${numStr}-${slug}.md`;
    const fullPath = path.join(absOutDir, fileName);

    fs.writeFileSync(fullPath, content + "\n");

    chapters.push({
      title,
      fileName,
      num: chapterCount,
      content,
      level: 1,
      children: [],
      sectionName,
      slug,
      sourceLink,
    });
  };

  for await (const line of rl) {
    if (line.trim() === "--------------------------------") {
      saveChapter();
      currentChapterLines = [];
    } else {
      currentChapterLines.push(line);
    }
  }

  // Final chapter
  saveChapter();

  return chapters;
}
