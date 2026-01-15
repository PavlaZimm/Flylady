import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog o létání",
  description:
    "Tipy, recenze a inspirace pro letecké zážitky, drony a cestování ve vzduchu.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">Blog Flylady</h1>
        <p className="text-sm text-slate-600">
          Novinky, tipy na létání a videa z dronu.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              {post.date}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-flex text-sm font-semibold text-slate-900"
            >
              Číst dál →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
