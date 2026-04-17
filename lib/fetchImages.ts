import fs from "node:fs";
import path from "node:path";
import { CheerioAPI, Cheerio } from "cheerio";
import { Element } from "domhandler";

export async function fetchImages(
  $: CheerioAPI,
  content: Cheerio<Element>,
  pageUrl: string,
  imgDir: string,
) {
  const imgs = content.find("img").toArray();

  let imageCount = 0;

  const BATCH_SIZE = 8;
  for (let i = 0; i < imgs.length; i += BATCH_SIZE) {
    const batch = imgs.slice(i, i + BATCH_SIZE);
    await Promise.all(
      batch.map(async (img) => {
        const $img = $(img);
        const rawSrc = $img.attr("data-src") || $img.attr("src");

        if (!rawSrc || rawSrc.startsWith("data:")) {
          $img.remove();
          return;
        }

        try {
          const url = new URL(rawSrc, pageUrl).href;
          const urlObj = new URL(url);
          const fileNameEncoded = path.basename(urlObj.pathname);
          const fileName = decodeURIComponent(fileNameEncoded);
          
          const localPath = path.join(imgDir, fileName);
          
          // If the file doesn't exist, we fetch it
          if (!fs.existsSync(localPath)) {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`Status ${res.status}: ${url}`);
            fs.writeFileSync(localPath, Buffer.from(await res.arrayBuffer()));
            imageCount++;
          }

          const alt = $img.attr("alt");
          for (const attr in img.attribs) $img.removeAttr(attr);

          // We use the decoded fileName in the HTML src
          $img.attr("src", `./images/${fileName}`);
          if (alt) $img.attr("alt", alt);
        } catch (e) {
          console.error(`Failed: ${rawSrc}`, e);
          $img.remove();
        }
      }),
    );
  }
  console.log(`Fetched ${imageCount} images.`);
}
