import type { MetadataRoute } from "next";
import { getAviationProducts } from "@/lib/feed";
import { getAllPosts } from "@/lib/blog";

const siteUrl = "https://flylady.cz";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAviationProducts();
  const posts = await getAllPosts();

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
    ...productEntries,
    ...postEntries,
  ];
}
