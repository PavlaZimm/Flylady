import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Blog o létání | Tipy, recenze a inspirace",
  description:
    "Tipy na letecké zážitky, recenze vyhlídkových letů, rady pro první let a inspirace pro dárky. Vše od Flylady.",
  alternates: {
    canonical: "/blog",
  },
};

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
          Novinky, tipy na létání a videa z dronu.
          Inspirujte se a vyberte ten pravý zážitek.
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
                {post.date}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-900 transition group-hover:text-slate-700">
                {post.title}
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

      {/* E-book banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-6 py-10 text-white sm:px-10">
        <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/20">
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold sm:text-2xl">E-book: 5 míst z ptačí perspektivy</h2>
            <p className="mt-1 text-white/90">
              Stáhněte si zdarma průvodce nejkrásnějšími místy pro vyhlídkové lety v ČR.
            </p>
          </div>
          <Link
            href="/ebook"
            className="flex-shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-orange-600 shadow-lg transition hover:bg-orange-50 press-effect"
          >
            Stáhnout zdarma
          </Link>
        </div>
      </section>

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
