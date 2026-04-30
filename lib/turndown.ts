import TurndownService from "turndown";
// @ts-ignore
import { gfm, tables } from "turndown-plugin-gfm";

export const turndownService = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
});
turndownService.use(gfm);
turndownService.use(tables);

// Preserve internal links by converting .html to .md
turndownService.addRule("rewriteLinks", {
  filter: ["a"],
  replacement: function (content, node) {
    const href = (node as HTMLAnchorElement).getAttribute("href");
    if (!href) return content;
    if (href.endsWith(".html")) {
      const newHref = href.replace(/\.html$/, ".md");
      return `[${content}](${newHref})`;
    }
    if (href.includes(".html#")) {
      const newHref = href.replace(/\.html#/, ".md#");
      return `[${content}](${newHref})`;
    }
    return `[${content}](${href})`;
  },
});

// Wrap inlined XML/JSON-like blocks in code blocks
turndownService.addRule("wrapInlinedCodeBlocks", {
  filter: function (node) {
    if (node.nodeName !== "P" && node.nodeName !== "DIV") return false;
    const text = node.textContent || "";
    const trimmed = text.trim();
    return trimmed.startsWith("<?xml") || trimmed.startsWith("<ListOfGroups") || trimmed.startsWith("<Group>");
  },
  replacement: function (content) {
    return "\n\n```xml\n" + content.trim() + "\n```\n\n";
  },
});

// Custom Table Rule (fallback for GFM)
turndownService.addRule("tables", {
  filter: ["table"],
  replacement: function (content, node) {
    const table = node as HTMLTableElement;
    const rows = Array.from(table.rows);
    if (rows.length === 0) return "";

    const mdRows = rows.map((row) => {
      const cells = Array.from(row.cells);
      return "| " + cells.map((cell) => cell.textContent?.trim().replace(/\|/g, "\\|") || "").join(" | ") + " |";
    });

    const header = mdRows[0];
    const cellCount = (rows[0] as HTMLTableRowElement).cells.length;
    const separator = "| " + Array(cellCount).fill("---").join(" | ") + " |";

    return "\n\n" + [header, separator, ...mdRows.slice(1)].join("\n") + "\n\n";
  },
});
