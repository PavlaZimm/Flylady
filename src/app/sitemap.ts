import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { CATEGORY_CONFIG } from "@/lib/categories";
import { getAviationProducts } from "@/lib/feed";

const siteUrl = "https://flylady.cz";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAviationProducts();
  const posts = await getAllPosts();
  const categoryEntries = CATEGORY_CONFIG.map((category) => ({
    url: `${siteUrl}/kategorie/${category.slug}`,
    lastModified: new Date(),
  }));

  const productEntries = products.map((product) => ({
    url: `${siteUrl}/zazitek/${product.slug}`,
    lastModified: new Date(),
  }));

  const postEntries = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
    },
    ...categoryEntries,
    ...productEntries,
    ...postEntries,
  ];
}
