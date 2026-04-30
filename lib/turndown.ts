import TurndownService from "turndown";
// @ts-ignore
import { gfm } from "turndown-plugin-gfm";

export const turndownService = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
});
turndownService.use(gfm);

// Preserve internal links by converting .html to .md
turndownService.addRule("rewriteLinks", {
  filter: ["a"],
  replacement: function (content, node) {
    const href = (node as HTMLAnchorElement).getAttribute("href");
    if (href && href.endsWith(".html")) {
      const newHref = href.replace(/\.html$/, ".md");
      return `[${content}](${newHref})`;
    }
    if (href && href.includes(".html#")) {
      const newHref = href.replace(/\.html#/, ".md#");
      return `[${content}](${newHref})`;
    }
    return `[${content}](${href})`;
  },
});
