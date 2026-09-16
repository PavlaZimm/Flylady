import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { CATEGORY_CONFIG } from "@/lib/categories";
import { getAviationProducts } from "@/lib/feed";
import { absoluteUrl } from "@/lib/seo";
export const revalidate = 3600;
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, posts] = await Promise.all([getAviationProducts(), getAllPosts()]);
  return [
    ...["/", "/zazitky", "/blog", "/o-webu", "/ebook"].map((path) => ({ url: absoluteUrl(path) })),
    ...CATEGORY_CONFIG.map((category) => ({ url: absoluteUrl(`/${category.slug}`) })),
    ...products.map((product) => ({ url: absoluteUrl(`/zazitek/${product.slug}`) })),
    // Publication date isn't a modification timestamp. Omit lastModified until the CMS supplies one.
    ...posts.map((post) => ({ url: absoluteUrl(`/blog/${post.slug}`) })),
  ];
}
