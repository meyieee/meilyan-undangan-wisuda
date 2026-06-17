import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = join(__dirname, "../src/assets");

const FILES = [
  { input: "fl.jpg", output: "fl.webp", maxWidth: 320 },
  { input: "dreamy.jpg", output: "dreamy.webp", maxWidth: 400 },
  { input: "gmbr.jpg", output: "gmbr.webp", maxWidth: 280 },
  { input: "kup.jpg", output: "kup.webp", maxWidth: 240 },
];

const WHITE = 240;
const FUZZ = 35;

async function removeWhiteBackground(inputPath, outputPath, maxWidth) {
  let pipeline = sharp(inputPath).ensureAlpha();
  const meta = await sharp(inputPath).metadata();

  if (meta.width > maxWidth) {
    pipeline = pipeline.resize(maxWidth, null, { fit: "inside", withoutEnlargement: true });
  }

  const { data, info } = await pipeline.raw().toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const maxDiff = Math.max(r, g, b) - Math.min(r, g, b);

    if (r >= WHITE && g >= WHITE && b >= WHITE) {
      data[i + 3] = 0;
    } else if (
      r >= WHITE - FUZZ &&
      g >= WHITE - FUZZ &&
      b >= WHITE - FUZZ &&
      maxDiff < 35
    ) {
      const avg = (r + g + b) / 3;
      const t = (avg - (WHITE - FUZZ)) / FUZZ;
      const alpha = Math.round(255 * (1 - Math.min(1, Math.max(0, t))));
      data[i + 3] = Math.min(data[i + 3], alpha);
    }
  }

  await sharp(Buffer.from(data), {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim({ threshold: 8 })
    .webp({ quality: 80, alphaQuality: 85, effort: 6 })
    .toFile(outputPath);
}

for (const { input, output, maxWidth } of FILES) {
  const inputPath = join(assetsDir, input);
  const outputPath = join(assetsDir, output);
  await removeWhiteBackground(inputPath, outputPath, maxWidth);
  const stat = await sharp(outputPath).metadata();
  const size = (await import("fs")).statSync(outputPath).size;
  console.log(`${output}: ${stat.width}x${stat.height}, ${Math.round(size / 1024)}KB`);
}
