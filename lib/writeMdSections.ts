import fs from "node:fs";
import { pageMdTpl, writeFile } from "./utils";
import type { Breadcrumb, MdFetchInfo } from "./generate";

export async function writeMdSections(
  { sectionName, title, children, outDirMd }: MdFetchInfo,
  breadcrumb: Breadcrumb<string>[],
) {
  console.log(`Writing ${sectionName} with topical routing...`);
  if (!fs.existsSync(outDirMd)) fs.mkdirSync(outDirMd, { recursive: true });

  const sectionBreadcrumbMd: Breadcrumb<any>[] = [
    { title: "IBKR TWS API", fileName: "../../SKILL.md" },
    { title, fileName: "index.md" },
  ];

  const buckets: Record<string, { title: string; content: string[] }> = {
    ib: { title: "IB Module", content: [] },
    client: { title: "Client Module", content: [] },
    order: { title: "Order Module", content: [] },
    contract: { title: "Contract Module", content: [] },
    ticker: { title: "Ticker Module", content: [] },
    objects: { title: "Objects & Types", content: [] },
    util: { title: "Utilities & Reports", content: [] },
    controller: { title: "IBC & Controller", content: [] },
    general: { title: "General Reference", content: [] },
  };

  const routingRules: Array<{ bucket: string; keywords: string[] }> = [
    { bucket: "ib", keywords: ["ib.html", "ib_async.ib", "class IB"] },
    { bucket: "client", keywords: ["client.html", "ib_async.client", "class Client"] },
    { bucket: "order", keywords: ["order.html", "ib_async.order", "class Order", "Trade", "Execution"] },
    { bucket: "contract", keywords: ["contract.html", "ib_async.contract", "class Contract"] },
    { bucket: "ticker", keywords: ["ticker.html", "ib_async.ticker", "class Ticker", "Bar"] },
    { bucket: "objects", keywords: ["objects.html", "ib_async.objects", "Dataclass"] },
    { bucket: "util", keywords: ["util.html", "flexreport.html", "ib_async.util", "FlexReport"] },
    { bucket: "controller", keywords: ["ibcontroller.html", "Watchdog", "IBC"] },
  ];

  children.forEach((chunk) => {
    let assigned = false;
    const source = chunk.sourceLink || "";
    const content = chunk.content || "";
    const titleText = chunk.title || "";

    for (const rule of routingRules) {
      if (
        rule.keywords.some(
          (k) =>
            source.toLowerCase().includes(k.toLowerCase()) ||
            titleText.toLowerCase().includes(k.toLowerCase()) ||
            content.toLowerCase().includes(k.toLowerCase())
        )
      ) {
        buckets[rule.bucket].content.push(content);
        assigned = true;
        break;
      }
    }

    if (!assigned) {
      buckets.general.content.push(content);
    }
  });

  // Write bucket files
  const bucketList = Object.entries(buckets)
    .filter(([_, data]) => data.content.length > 0)
    .map(([key, data], i) => {
      const fileName = `${(i + 1).toString().padStart(2, "0")}-${key}.md`;
      const fullContent = `# ${data.title}\n\n` + data.content.join("\n\n---\n\n");
      
      const nextBreadcrumb = [...sectionBreadcrumbMd, { title: data.title, fileName }];
      const fileMd = pageMdTpl({
        layout: "layout-chapter-md",
        title: data.title,
        breadcrumb: nextBreadcrumb,
        content: fullContent,
      });
      writeFile(fileName, fileMd, outDirMd);

      return { title: data.title, fileName };
    });

  // Section Index
  const indexMd = pageMdTpl({
    title,
    layout: "layout-index-md",
    children: bucketList,
    breadcrumb: sectionBreadcrumbMd,
    isMd: true,
    flat: true,
  });
  writeFile("index.md", indexMd, outDirMd);
}
