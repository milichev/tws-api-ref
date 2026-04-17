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
          const fileName = path.basename(new URL(url).pathname);
          const localPath = path.join(imgDir, fileName);
          if (fs.existsSync(localPath)) {
            throw new Error(`Image file already exists: ${localPath}`);
          }

          const res = await fetch(url);
          if (!res.ok) throw new Error(`Status ${res.status}: ${url}`);

          fs.writeFileSync(localPath, Buffer.from(await res.arrayBuffer()));
          imageCount++;

          const alt = $img.attr("alt");
          for (const attr in img.attribs) $img.removeAttr(attr);

          $img.attr("src", `./images/${fileName}`);
          if (alt) $img.attr("alt", alt);
        } catch (e) {
          console.error(`Failed: ${rawSrc}`);
          $img.remove();
        }
      }),
    );
  }
  console.log(`Fetched ${imageCount} images.`);
}
