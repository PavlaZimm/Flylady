import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { CATEGORY_CONFIG } from "@/lib/categories";
import { getAviationProducts } from "@/lib/feed";

const siteUrl = "https://flylady.cz";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAviationProducts();
  const posts = await getAllPosts();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/zazitky`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/ebook`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const categoryEntries: MetadataRoute.Sitemap = CATEGORY_CONFIG.map(
    (category) => ({
      url: `${siteUrl}/kategorie/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })
  );

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/zazitek/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...categoryEntries, ...productEntries, ...postEntries];
}
