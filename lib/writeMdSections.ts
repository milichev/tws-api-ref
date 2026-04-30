import type { Breadcrumb, MdFetchInfo } from "./generate";
import { pageHtmlTpl, writeFile } from "./utils";

export async function writeMdSections(
  { title, children, outDirMd }: MdFetchInfo,
  breadcrumb: Breadcrumb<string>[],
) {
  breadcrumb.push({ title, fileName: "index.md" });
  const indexMd = pageHtmlTpl({
    title,
    layout: "layout-index-md",
    children: children.map((c) => ({ ...c, fileName: c.fileName! })),
    breadcrumb,
    isMd: true,
    isCtx7: true,
  });
  breadcrumb.pop();
  writeFile("index.md", indexMd, outDirMd);
}
