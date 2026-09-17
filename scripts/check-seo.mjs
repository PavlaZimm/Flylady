import assert from 'node:assert/strict';
const base = process.env.SEO_BASE_URL || 'http://127.0.0.1:3100';
let count = 0;
async function check(path, status, inspect = () => {}) {
  const response = await fetch(base + path, { redirect: 'manual' });
  assert.equal(response.status, status, `${path}: HTTP status`);
  await inspect(await response.text(), response);
  count++;
}
await check('/', 200, html => {
  assert.match(html, /rel="canonical" href="https:\/\/www\.flylady\.cz\/?"/);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
});
await check('/kategorie/vyhlidkove-lety', 308, (_, response) => assert.equal(response.headers.get('location'), '/vyhlidkove-lety'));
for (const path of ['/neexistujici-kategorie', '/blog/neexistujici-clanek', '/zazitek/neexistujici-zazitek-999999']) {
  await check(path, 404, html => assert.match(html, /name="robots" content="noindex"/));
}
await check('/zazitek/stary-nazev-15', 404);
await check('/zazitek/tandemovy-seskok-padakem-15', 200, html => {
  assert.match(html, /rel="sponsored nofollow noopener"/);
  assert.match(html, /BreadcrumbList/);
  assert.match(html, /rel="canonical" href="https:\/\/www\.flylady\.cz\/zazitek\/tandemovy-seskok-padakem-15"/);
});
await check('/let-balonem', 200, html => assert.match(html, /rel="canonical" href="https:\/\/www\.flylady\.cz\/let-balonem"/));
await check('/blog/jak-vybrat-letecky-zazitek', 200, html => assert.match(html, /BlogPosting/));
await check('/admin/index.html', 200, (_, response) => assert.equal(response.headers.get('x-robots-tag'), 'noindex, nofollow'));
await check('/sitemap.xml', 200, html => {
  assert.match(html, /https:\/\/www\.flylady\.cz\/zazitky/);
  assert.match(html, /https:\/\/www\.flylady\.cz\/let-balonem/);
  assert.doesNotMatch(html, /\/kategorie\//);
  assert.match(html, /<lastmod>2026-09-17/);
});
await check('/robots.txt', 200, html => assert.match(html, /Sitemap: https:\/\/www\.flylady\.cz\/sitemap.xml/));
console.log(`${count} HTTP SEO checks passed.`);
await check('/', 200, html => {
  assert.equal((html.match(/name="google-site-verification"/g) || []).length, 2);
  assert.doesNotMatch(html, /href="\/ebook"/);
});
await check('/ebook', 200, html => assert.match(html, /rel="canonical" href="https:\/\/www\.flylady\.cz\/ebook"/));
await check('/blog/vyhlidkove-lety-pribram', 200);
await check('/blog/vyhlidkove-lety-roudnice-nad-labem', 200);
await check('/ebook', 200, html => {
  assert.match(html, /name="robots" content="noindex, follow"/);
  assert.doesNotMatch(html, /<form/);
});
await check('/blog/let-balonem-pro-dva-cena', 200, html => {
  assert.match(html, /BlogPosting/);
  assert.match(html, /href="\/let-balonem"/);
});
await check('/sitemap.xml', 200, html => {
  assert.match(html, /\/blog\/let-balonem-pro-dva-cena/);
  assert.doesNotMatch(html, /\/ebook/);
});
console.log(`${count} total HTTP checks passed, including the new article and unavailable ebook.`);

await check('/blog/tandemovy-seskok-most', 200, html => {
  assert.match(html, /BlogPosting/);
  assert.match(html, /href="\/tandemove-seskoky"/);
});
await check('/blog/vyhlidkove-lety-pribram', 200, html => {
  assert.match(html, /dateModified/);
  assert.doesNotMatch(html, /Kompletní průvodce 2025/);
});
await check('/zazitky', 200, html => {
  assert.match(html, /Název nebo lokalita/);
  assert.doesNotMatch(html, /ověřených zážitků|Garance vrácení peněz/);
});
console.log(`${count} complete SEO and content HTTP checks passed.`);
