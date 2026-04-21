import fs from "node:fs";
import path from "node:path";
import { fetchIbkrSection } from "./fetchIbkrPage";
import { pageTpl, REPO_ROOT, writeFile } from "./utils";
import { makeMarkdown } from "./makeMarkdown";
import { fetchCtx7Section } from "./fetchCtx7Page";
import { relinkIbkrSections } from "./relinkIbkrSections";

export const HTML_DIR = path.join(REPO_ROOT, "html");
export const SKILL_DIR = path.join(REPO_ROOT, "skill");

[HTML_DIR, SKILL_DIR].forEach((dir) => {
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
});

export const SKILL_TPL = path.join(REPO_ROOT, "templates/SKILL.md");

export type SectionUrls = typeof SECTION_URLS;
export type SectionName = SectionUrls[number]["name"];
export type SourceType = keyof typeof InTypeMap;

export type SectionInfo = {
  [K in SourceType]: {
    name: SectionName;
    type: K;
    url: string;
    dir: string;
    file: string;
    imageDir: string;
  };
}[SourceType];

export type FetchInfo = (typeof fetchInfos)[number];
export type IbkrFetchInfo = Extract<FetchInfo, { type: "ibkr" }>;
export type Ctx7FetchInfo = Extract<FetchInfo, { type: "ctx7" }>;

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

const InTypeMap = {
  ibkr: { ext: "html", out: HTML_DIR, fetch: fetchIbkrSection },
  ctx7: {
    ext: "md",
    out: path.join(SKILL_DIR, "docs"),
    fetch: fetchCtx7Section,
  },
} as const;

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
  const { out, ext } = InTypeMap[info.type];
  const dir = path.join(out, info.name);
  const url = info.type === "ibkr" ? `${IBKR_CAMPUS}/${info.name}` : info.url;
  return {
    type: info.type,
    name: info.name,
    url,
    dir,
    file: `${info.name}.${ext}`,
    imageDir: path.join(dir, "images"),
  };
});

const fetchInfos = await Promise.all(
  sectionInfos.map((info) => {
    console.info(`Fetching page: ${info.name} from ${info.url}...`);
    switch (info.type) {
      case "ibkr":
        return fetchIbkrSection(info);
      case "ctx7":
        return fetchCtx7Section(info);
    }
  }),
);

const title = "IBKR TWS API";
const breadcrumb: Breadcrumb<unknown>[] = [
  { title, fileName: "../index.html" },
];

await relinkIbkrSections(
  fetchInfos.filter((s) => s.type === "ibkr") as IbkrFetchInfo[],
  breadcrumb,
);

const indexHtml = pageTpl({
  layout: "layout-index",
  title,
  children: fetchInfos.map(
    (info, i): TocItem => ({
      title: info.title,
      fileName: `${info.name}/index.html`,
      num: i + 1,
      pos: `${i + 1}`.padStart(2, "0"),
    }),
  ),
});

writeFile("index.html", indexHtml, HTML_DIR);

await makeMarkdown();
