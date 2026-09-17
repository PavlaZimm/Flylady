import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { getAllPosts, formatPostDate } from "@/lib/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const revalidate = 3600;
export const metadata = pageMetadata("Průvodce výběrem leteckých zážitků", "Praktické rady pro výběr leteckého zážitku jako dárku a co ověřit před koupí.", "/blog");

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { name: "Domů", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />

      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">Blog Flylady</h1>
        <p className="max-w-2xl text-slate-600">
          Praktické srovnání leteckých zážitků, místní průvodci a otázky před koupí poukazu.
          Vyberte si místo, porovnejte varianty a připravte se na rezervaci.
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                {post.updated ? `Aktualizováno ${formatPostDate(post.updated)}` : post.date ? formatPostDate(post.date) : "Průvodce"}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-900 transition group-hover:text-slate-700">
                <Link href={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link>
              </h2>
              <p className="mt-2 text-sm text-slate-600 line-clamp-3">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 transition group-hover:gap-2"
              >
                Číst dál
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center">
          <p className="text-slate-600">Zatím žádné články. Brzy přidáme nový obsah!</p>
        </div>
      )}

      {/* CTA na zážitky */}
      <section className="rounded-2xl border border-slate-100 bg-white p-6 text-center sm:p-8">
        <h2 className="text-lg font-semibold text-slate-900">Nečekejte a vybírejte</h2>
        <p className="mt-1 text-sm text-slate-600">
          Prohlédněte si nabídku leteckých zážitků a překvapte někoho blízkého.
        </p>
        <Link
          href="/zazitky"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 press-effect"
        >
          Zobrazit zážitky
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </div>
  );
}
