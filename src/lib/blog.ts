import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  coverImage?: string;
  contentHtml: string;
};

type BlogFrontmatter = {
  title?: string;
  description?: string;
  date?: string;
  coverImage?: string;
};

const getPostSlug = (fileName: string) => fileName.replace(/\.md$/, "");

export const getAllPosts = async (): Promise<BlogPost[]> => {
  const files = await fs.readdir(BLOG_DIR);
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const slug = getPostSlug(file);
        const fullPath = path.join(BLOG_DIR, file);
        const fileContents = await fs.readFile(fullPath, "utf-8");
        const { data, content } = matter(fileContents);
        const frontmatter = data as BlogFrontmatter;
        const processed = await remark().use(html).process(content);
        const contentHtml = processed.toString();

        return {
          slug,
          title: frontmatter.title ?? slug,
          description: frontmatter.description ?? "",
          date: frontmatter.date ?? "",
          coverImage: frontmatter.coverImage,
          contentHtml,
        } satisfies BlogPost;
      })
  );

  return posts.sort((a, b) => b.date.localeCompare(a.date));
};

export const getPostBySlug = async (slug: string) => {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) ?? null;
};
