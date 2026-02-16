import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = async () => {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Článek nenalezen" };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-10 text-center">
        <h1 className="text-2xl font-semibold">Článek nenalezen</h1>
        <p className="mt-2 text-sm text-slate-600">Tento článek neexistuje nebo byl odstraněn.</p>
        <Link
          href="/blog"
          className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
        >
          Zpět na blog
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-8">
      <Breadcrumbs
        items={[
          { name: "Domů", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${slug}` },
        ]}
      />

      <header className="space-y-3">
        <p className="text-sm text-slate-500">{post.date}</p>
        <h1 className="text-3xl font-bold text-slate-900">{post.title}</h1>
        {post.description && (
          <p className="text-lg text-slate-600">{post.description}</p>
        )}
      </header>

      <div
        className="blog-content max-w-3xl text-slate-700"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      {/* CTA pod článkem */}
      <div className="space-y-6 border-t border-slate-100 pt-8">
        {/* E-book */}
        <div className="rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 p-6 sm:p-8">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex-1">
              <h2 className="font-semibold text-slate-900">E-book zdarma: 5 míst z ptačí perspektivy</h2>
              <p className="mt-1 text-sm text-slate-600">
                Stáhněte si průvodce nejkrásnějšími místy pro vyhlídkové lety v ČR.
              </p>
            </div>
            <Link
              href="/ebook"
              className="flex-shrink-0 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 press-effect"
            >
              Stáhnout zdarma
            </Link>
          </div>
        </div>

        {/* Zážitky CTA */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center sm:p-8">
          <h2 className="font-semibold text-slate-900">Už víte, co chcete?</h2>
          <p className="mt-1 text-sm text-slate-600">Prohlédněte si nabídku leteckých zážitků.</p>
          <Link
            href="/zazitky"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 press-effect"
          >
            Zobrazit zážitky
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
