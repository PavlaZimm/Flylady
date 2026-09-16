import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';
const svg = await readFile(new URL('../src/app/icon.svg', import.meta.url));
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(size => sharp(svg).resize(size, size).png().toBuffer()));
const header = Buffer.alloc(6 + sizes.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
images.forEach((image, index) => {
  const entry = 6 + index * 16;
  header[entry] = sizes[index];
  header[entry + 1] = sizes[index];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(image.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
await writeFile(new URL('../src/app/favicon.ico', import.meta.url), Buffer.concat([header, ...images]));
for (const [size, path] of [[180, '../src/app/apple-icon.png'], [192, '../public/icon-192.png'], [512, '../public/icon-512.png']]) {
  await sharp(svg).resize(size, size).png().toFile(new URL(path, import.meta.url).pathname);
}
console.log('Generated ICO (16/32/48), Apple icon (180), and app icons (192/512).');
