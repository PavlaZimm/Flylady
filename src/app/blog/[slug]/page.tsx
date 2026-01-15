import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

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
    return {
      title: "Článek nenalezen",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
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
    <article className="space-y-6">
      <Link href="/blog" className="text-sm text-slate-500">
        ← Zpět na blog
      </Link>
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">{post.title}</h1>
        <p className="text-sm text-slate-500">{post.date}</p>
      </header>
      <div
        className="blog-content max-w-3xl text-sm text-slate-700"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
