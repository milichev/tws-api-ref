import fs from "node:fs";
import { fetchIbkrSection } from "./fetchIbkrPage";
import { pageHtmlTpl, writeFile, HTML_DIR, SKILL_DIR } from "./utils";
import { fetchCtx7Section } from "./fetchCtx7Page";
import { writeSections } from "./writeSections";
import { writeRoot } from "./writeRoot";

[HTML_DIR, SKILL_DIR].forEach((dir) => {
  console.log(`Cleaning ${dir}`);
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
});

export type SectionUrls = typeof SECTION_URLS;
export type SectionName = SectionUrls[number]["name"];
export type SectionType = "html" | "md";

export type SectionInfo = {
  sectionName: SectionName;
  type: SectionType;
  url: string;
};

export type FetchInfo = (typeof fetchInfos)[number];
export type HtmlFetchInfo = Extract<FetchInfo, { type: "html" }>;
export type MdFetchInfo = Extract<FetchInfo, { type: "md" }>;

export type Chapter<Content> = {
  sectionName: SectionName;
  title: string;
  fileName?: string;
  level: number;
  num?: number;
  pos?: string;
  content: Content;
  children: Chapter<Content>[];
  slug: string;
  sourceLink?: string;
};

export type SlugMap = Map<
  string,
  { title: string; fileName: string; sectionName: SectionName }
>;

export type Breadcrumb<Content> = Pick<Chapter<Content>, "title" | "fileName">;

export interface TocItem {
  title: string;
  fileName: string;
  num: number;
  pos: string;
}

export const IBKR_CAMPUS = "https://ibkrcampus.com/campus/ibkr-api-page";

const SECTION_URLS = [
  {
    type: "ibkr",
    name: "twsapi-doc",
    instruction: "TODO: when to use this docs",
  },
  {
    type: "ibkr",
    name: "twsapi-ref",
    instruction: "TODO: when to use this docs",
  },
  {
    type: "ibkr",
    name: "protobuf-reference",
    instruction: "TODO: when to use this docs",
  },
  {
    type: "ctx7",
    name: "ib-async",
    instruction: "TODO: when to use this docs",
    url: "https://context7.com/websites/ib-api-reloaded_github_io_ib_async/llms.txt?tokens=100000",
  },
] as const;

const sectionInfos = SECTION_URLS.map((info): SectionInfo => {
  const type: SectionType = info.type === "ibkr" ? "html" : "md";
  return {
    type,
    sectionName: info.name,
    url: info.type === "ibkr" ? `${IBKR_CAMPUS}/${info.name}` : info.url,
  };
});

const fetchInfos = await Promise.all(
  sectionInfos.map((info) => {
    console.info(`Fetching page: ${info.sectionName} from ${info.url}...`);
    switch (info.type) {
      case "html":
        return fetchIbkrSection(info);
      case "md":
        return fetchCtx7Section(info);
    }
  }),
);

await writeRoot(fetchInfos);

// await writeSections(fetchInfos, breadcrumb);

// Generate HTML index (excluding Ctx7)
// const ibkrInfos = fetchInfos.filter((s) => s.type === "html");
// const indexHtml = pageHtmlTpl({
//   layout: "layout-index-html",
//   title,
//   children: ibkrInfos.map(
//     (info, i): TocItem => ({
//       title: info.title,
//       fileName: `${info.sectionName}/index.html`,
//       num: i + 1,
//       pos: `${i + 1}`.padStart(2, "0"),
//     }),
//   ),
// });

// writeFile("index.html", indexHtml, HTML_DIR);

// const skillRoot: Chapter<unknown> = {
//   children: [
//     ...ibkrInfos.map((info) => ({ ...info, fileName: "index.html" })),
//     ...ctx7Infos.map((info) => ({ ...info, fileName: "index.md" })),
//   ],
// };

// Generate SKILL.md
// writeFile(
//   "SKILL.md",
//   skillTpl({
//     children,
//   }),
//   SKILL_DIR,
// );
// const tocMd = fetchInfos
//   .map((info) => `- [${info.title}](./docs/${info.name}/index.md)`)
//   .join("\n");
// // const skillTpl = fs.readFileSync(SKILL_TPL, "utf8");
// const skillMd = skillTpl.replace("{{TOC}}", tocMd);
// fs.writeFileSync(path.join(SKILL_DIR, "SKILL.md"), skillMd);
