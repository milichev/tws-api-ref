import type { CheerioAPI, Cheerio } from "cheerio";
import type { Element } from "domhandler";

export function cleanupIbkrHtmlContent($: CheerioAPI): Cheerio<Element> {
  const pageContent = $("div.page-content");

  pageContent.find(".copy-link").remove();

  pageContent
    .find("ul.nav-tabs > li.nav-item > button.tab-python")
    .each((_, btn) => {
      const $btn = $(btn);
      const $ul = $btn.closest("ul");
      const $pane = $ul.next(".tab-content");
      const $active = $pane.find(".tab-pane.active");
      const $code = $active.find(".enlighter-origin");

      if ($code.length) {
        $ul.parent().before(`<pre><code>${$code.text()}</code></pre>`);
      } else {
        $ul.parent().before($active.children());
      }
      $ul.parent().remove();
    });

  pageContent.find("p > img").each((_, img) => {
    const $img = $(img);
    if ($img.parent().next("div").length) $img.parent().before($img);
  });

  ["div.row > div.entry-content", "section > .inner-col", "p > div"].forEach(
    (s) => {
      $(s).each((_, el) => {
        $(el).replaceWith($(el).contents());
      });
    },
  );

  return pageContent;
}
