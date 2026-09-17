import fs from "fs/promises";
import path from "path";
import { cache } from "react";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  category?: string;
  coverImage?: string;
  contentHtml: string;
};

type BlogFrontmatter = {
  title?: string;
  description?: string;
  date?: string | Date;
  updated?: string | Date;
  category?: string;
  coverImage?: string;
};

const normalizeDate = (value: string | Date | undefined) => {
  if (!value) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : date.toISOString().slice(0, 10);
};

export const getAllPosts = cache(async (): Promise<BlogPost[]> => {
  const files = await fs.readdir(BLOG_DIR);
  const posts = await Promise.all(files.filter((file) => file.endsWith(".md")).map(async (file) => {
    const { data, content } = matter(await fs.readFile(path.join(BLOG_DIR, file), "utf-8"));
    const frontmatter = data as BlogFrontmatter;
    const processed = await remark().use(html).process(content);
    const date = normalizeDate(frontmatter.date);
    const updated = normalizeDate(frontmatter.updated);
    return {
      slug: file.replace(/\.md$/, ""),
      title: frontmatter.title ?? file.replace(/\.md$/, ""),
      description: frontmatter.description ?? "",
      date,
      updated: updated && (!date || updated >= date) ? updated : "",
      category: frontmatter.category,
      coverImage: frontmatter.coverImage,
      contentHtml: processed.toString().replace(/<table>/g, '<div class="table-wrapper"><table>').replace(/<\/table>/g, "</table></div>"),
    } satisfies BlogPost;
  }));
  return posts.sort((a, b) => (b.updated || b.date).localeCompare(a.updated || a.date) || a.slug.localeCompare(b.slug));
});

export const getPostBySlug = async (slug: string) => (await getAllPosts()).find((post) => post.slug === slug) ?? null;

export const getRelatedPosts = (post: BlogPost, posts: BlogPost[], limit = 3) => posts
  .filter((candidate) => candidate.slug !== post.slug)
  .sort((a, b) => Number(Boolean(post.category && b.category === post.category)) - Number(Boolean(post.category && a.category === post.category)) || (b.updated || b.date).localeCompare(a.updated || a.date))
  .slice(0, limit);

export const formatPostDate = (date: string) => new Intl.DateTimeFormat("cs-CZ", { dateStyle: "long", timeZone: "UTC" }).format(new Date(date));
