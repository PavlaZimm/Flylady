import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { CATEGORY_CONFIG } from "@/lib/categories";
import { getAviationProducts } from "@/lib/feed";
import { absoluteUrl } from "@/lib/seo";
export const revalidate = 3600;
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, posts] = await Promise.all([getAviationProducts(), getAllPosts()]);
  return [
    ...["/", "/zazitky", "/blog", "/o-webu"].map((path) => ({ url: absoluteUrl(path) })),
    ...CATEGORY_CONFIG.map((category) => ({ url: absoluteUrl(`/${category.slug}`) })),
    ...products.map((product) => ({ url: absoluteUrl(`/zazitek/${product.slug}`) })),
    // Only editorially recorded updates are modification timestamps.
    ...posts.map((post) => ({ url: absoluteUrl(`/blog/${post.slug}`), ...(post.updated ? { lastModified: post.updated } : {}) })),
  ];
}
