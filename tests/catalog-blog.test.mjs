import test from 'node:test';
import assert from 'node:assert/strict';
import { filterCatalog } from '../src/lib/catalog.ts';
import { getAllPosts, getRelatedPosts } from '../src/lib/blog.ts';
import { CATEGORY_CONFIG } from '../src/lib/categories.ts';

const product = (id, name, price, location = '') => ({ id, name, minPriceVat: price, location: null, categories: [], variants: [{ location }] });
const products = [product('1', 'Let balónem', 5000, 'Roudnice nad Labem'), product('2', 'Tandemový seskok', 3000, 'Most'), product('3', 'Let bez ceny', null, 'Most')];

test('catalog search combines words, ignores accents and includes variant locations', () => {
  assert.deepEqual(filterCatalog(products, 'BALONEM Roudnice', null, 'name').map(p => p.id), ['1']);
  assert.deepEqual(filterCatalog(products, 'seskok most', null, 'name').map(p => p.id), ['2']);
  assert.deepEqual(filterCatalog(products, 'balonem most', null, 'name'), []);
});
test('price filters exclude unknown prices and sorting puts unknown prices last in both directions', () => {
  assert.deepEqual(filterCatalog(products, '', 3000, 'name').map(p => p.id), ['2']);
  assert.deepEqual(filterCatalog(products, '', null, 'price-asc').map(p => p.id), ['2', '1', '3']);
  assert.deepEqual(filterCatalog(products, '', null, 'price-desc').map(p => p.id), ['1', '2', '3']);
  assert.deepEqual(products.map(p => p.id), ['1', '2', '3']);
});
test('blog categories, metadata, dates and internal article/category links resolve', async () => {
  const posts = await getAllPosts();
  const categorySlugs = new Set(CATEGORY_CONFIG.map(c => c.slug));
  const paths = new Set(['/', '/o-webu', '/zazitky', '/blog', ...[...categorySlugs].map(slug => `/${slug}`), ...posts.map(p => `/blog/${p.slug}`)]);
  assert.equal(new Set(posts.map(p => p.slug)).size, posts.length);
  for (const post of posts) {
    assert.ok(post.title && post.description && post.date, post.slug);
    assert.ok(!post.updated || post.updated >= post.date, post.slug);
    assert.ok(!post.category || categorySlugs.has(post.category), post.slug);
    assert.doesNotMatch(post.contentHtml, /<h1[ >]/);
    for (const [, href] of post.contentHtml.matchAll(/href="(\/[^"#]*)"/g)) {
      assert.ok(paths.has(href), `${post.slug}: unresolved ${href}`);
    }
  }
});
test('related reading prioritizes the same category and excludes the current article', async () => {
  const posts = await getAllPosts();
  const post = posts.find(p => p.slug === 'vyhlidkove-lety-pribram');
  const related = getRelatedPosts(post, posts);
  assert.equal(related[0].slug, 'vyhlidkove-lety-roudnice-nad-labem');
  assert.ok(related.every(p => p.slug !== post.slug));
});
