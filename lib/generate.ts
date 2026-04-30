import fs from "node:fs";
import { fetchIbkrSection } from "./fetchIbkrPage";
import { HTML_DIR, SKILL_DIR } from "./utils";
import { fetchCtx7Section } from "./fetchCtx7Page";
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
    title: "TWS API Documentation",
  },
  {
    type: "ibkr",
    name: "twsapi-ref",
    title: "TWS API Reference",
  },
  {
    type: "ibkr",
    name: "protobuf-reference",
    title: "Protobuf Reference",
  },
  {
    type: "ctx7",
    name: "ib-async",
    title: "ib_async Reference",
    url: "https://context7.com/websites/ib-api-reloaded_github_io_ib_async/llms.txt?tokens=100000",
    externalUrl: "https://ib-api-reloaded.github.io/ib_async",
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
  sectionInfos.map(async (info) => {
    console.info(`Fetching page: ${info.sectionName} from ${info.url}...`);
    const config = SECTION_URLS.find((s) => s.name === info.sectionName)!;
    switch (info.type) {
      case "html": {
        const fetched = await fetchIbkrSection(info);
        return { ...fetched, title: config.title };
      }
      case "md": {
        const fetched = await fetchCtx7Section(info);
        return {
          ...fetched,
          title: config.title,
          externalUrl: "externalUrl" in config ? config.externalUrl : undefined,
        };
      }
    }
  }),
);

await writeRoot(fetchInfos);
