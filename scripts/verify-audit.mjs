// Run after npm run build. Uses an isolated local feed; never buys or posts anything.
import { createServer } from 'node:http';
import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';
import { setTimeout as delay } from 'node:timers/promises';

const items = [
  ['16', 'Let balónem', 'Letecké zážitky | Lety balónem', 3290],
  ['746', 'Let balónem pro dva', 'Letecké zážitky | Lety balónem', 6580],
  ['22', 'Soukromý let balónem pro dva', 'Letecké zážitky | Lety balónem', 14490],
  ['1122', 'Staňte se pilotem stíhačky F35', 'Simulátory | Letecké simulátory', 2990],
  ['966', 'Adrenalinový let vrtulníkem BELL 206B', 'Letecké zážitky | Lety vrtulníkem', 10990],
  ['854', 'Let vrtulníkem nad památkami', 'Letecké zážitky | Lety vrtulníkem', 2990],
  ['979', 'Soukromý let ve vrtulníku pro dva', 'Letecké zážitky | Lety vrtulníkem', 8990],
  ['853', 'Vyhlídkový let vrtulníkem', 'Letecké zážitky | Lety vrtulníkem', 2990],
  ['7110', 'Vyzkoušejte si řízení letadla', 'Letecké zážitky | Pilotování', 1990],
];
const xml = '<SHOP>' + items.map(([id, name, category, price]) => `<SHOPITEM><ID>${id}</ID><PRODUCT>${name}</PRODUCT><DESCRIPTION>Izolovaná testovací nabídka</DESCRIPTION><URL>https://www.zazitky.cz/test-${id}</URL><IMGURL>/fotky/aeroklub-roudnice-ultralehky-letoun.webp</IMGURL><CATEGORYTEXT>${category}</CATEGORYTEXT><CATEGORYTEXT>Ústecký</CATEGORYTEXT>${[1, 2, 3].map(n => `<VARIANT><VARIANTID>${id}-${n}</VARIANTID><PRODUCTNAMEEXT>${name}, ${n} osoby, 1 hodina</PRODUCTNAMEEXT><PRICE_VAT>${price * n}</PRICE_VAT></VARIANT>`).join('')}</SHOPITEM>`).join('') + '</SHOP>';
let feedReads = 0;
const feed = createServer((req, res) => { feedReads++; res.writeHead(200, { 'Content-Type': 'application/xml' }); res.end(xml); });
await new Promise(resolve => feed.listen(0, '127.0.0.1', resolve));
const portProbe = createServer();
await new Promise(resolve => portProbe.listen(0, '127.0.0.1', resolve));
const port = portProbe.address().port;
await new Promise(resolve => portProbe.close(resolve));
const origin = `http://127.0.0.1:${port}`;
const app = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', String(port)], { env: { ...process.env, FLYLADY_FEED_URL: `http://127.0.0.1:${feed.address().port}/feed.xml` }, stdio: ['ignore', 'pipe', 'pipe'] });
let logs = '';
app.stdout.on('data', b => { logs += b; }); app.stderr.on('data', b => { logs += b; });
try {
  let started = false;
  for (let attempt = 0; attempt < 80; attempt++) {
    if (app.exitCode !== null) throw new Error(logs);
    try { started = (await fetch(origin + '/o-webu')).ok; } catch { /* server not listening yet */ }
    if (started) break;
    await delay(250);
  }
  assert.ok(started, 'Production server starts');
  const sitemapResponse = await fetch(origin + '/sitemap.xml');
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  assert.ok(urls.some(url => url.includes('stante-se-pilotem-stihacky-f35-1122')));
  const pages = new Map();
  for (const url of urls) {
    const path = new URL(url).pathname;
    const response = await fetch(origin + path);
    assert.equal(response.status, 200, `Sitemap target ${path}`);
    const html = await response.text();
    assert.equal((html.match(/<main(?:\s|>)/g) ?? []).length, 1, `One main landmark: ${path}`);
    assert.match(html, /property="og:image"/, `OG image: ${path}`);
    assert.doesNotMatch(html, /<script[^>]+src="https:\/\/www.googletagmanager.com/, `No GA before consent: ${path}`);
    pages.set(path, html);
  }
  const product = pages.get('/zazitek/let-balonem-16');
  assert.match(product, /href="\/let-balonem"/, 'Specific primary category');
  assert.match(product, /data naposledy načtena/, 'Price uses feed timestamp');
  assert.match(pages.get('/zazitky'), /Název nebo kraj/);
  assert.doesNotMatch(pages.get('/zazitky'), /Např\. balón nebo Most/);
  assert.match(pages.get('/o-webu'), /https:\/\/linklady.cz\/kontakt/);
  assert.match(product, /Nastavení cookies/);
  const article = pages.get('/blog/let-balonem-pro-dva-cena');
  assert.match(article, /Aktuální nabídky pro dva z katalogu/);
  assert.match(article, /historický průzkum k 30\. 9\. 2026/);
  assert.match(article, /6\s*580/);
  for (const id of ['966', '854', '979', '853', '7110']) {
    const html = [...pages.entries()].find(([path]) => path.endsWith('-' + id))[1];
    assert.match(html, /product-copy-heading/);
  }
  assert.equal(feedReads, 1, 'All routes use one cached successful feed snapshot');
  const missing = await fetch(origin + '/__audit-missing');
  assert.equal(missing.status, 404);
  const image = await fetch(origin + '/opengraph-image');
  assert.equal(image.status, 200);
  assert.match(image.headers.get('content-type'), /image\/png/);
  const png = Buffer.from(await image.arrayBuffer());
  assert.equal(png.readUInt32BE(16), 1200);
  assert.equal(png.readUInt32BE(20), 630);
  console.log(JSON.stringify({ fixture: true, sitemapUrls: urls.length, allTargets200: true, oneMainPerPage: true, ogImage: '1200×630 PNG', feedReads, missingStatus: missing.status }));
} catch (error) {
  console.error(logs.slice(-6000));
  throw error;
} finally {
  app.kill('SIGTERM');
  await new Promise(resolve => feed.close(resolve));
}
