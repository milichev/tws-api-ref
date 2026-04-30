import path from "node:path";
import fs from "node:fs";
import type { Breadcrumb, FetchInfo } from "./generate";
import { pageHtmlTpl, HTML_DIR } from "./utils";
import { writeSections } from "./writeSections";

export async function writeRoot(sections: FetchInfo[]) {
  const breadcrumb: Breadcrumb<unknown>[] = [];
  const rootIndexHtml = path.join(HTML_DIR, "index.html");

  breadcrumb.push({
    title: "IBKR TWS API",
    fileName: rootIndexHtml,
  });

  const indexHtml = pageHtmlTpl({
    title: "IBKR TWS API",
    layout: "layout-index-html",
    children: sections,
    breadcrumb,
  });
  fs.writeFileSync(rootIndexHtml, indexHtml);

  writeSections(sections, breadcrumb);

  breadcrumb.pop();
}
