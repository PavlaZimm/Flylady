import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { pageMetadata, absoluteUrl } from "@/lib/seo";
import { Breadcrumbs, JsonLd } from "@/components/Breadcrumbs";
import { ProductSection } from "@/components/ProductSection";
import { getAllPosts, getPostBySlug, getRelatedPosts, formatPostDate } from "@/lib/blog";
import { getAviationProducts } from "@/lib/feed";
import { getCategoryBySlug, matchesCategory } from "@/lib/categories";

export const revalidate = 3600;
type PageProps = { params: Promise<{ slug: string }> };
export const generateStaticParams = async () => (await getAllPosts()).map((post) => ({ slug: post.slug }));

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostBySlug((await params).slug);
  if (!post) notFound();
  const metadata = pageMetadata(post.title, post.description, `/blog/${post.slug}`, post.coverImage);
  return { ...metadata, openGraph: { ...metadata.openGraph, type: "article", ...(post.date ? { publishedTime: post.date } : {}), ...(post.updated ? { modifiedTime: post.updated } : {}) } };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPostBySlug((await params).slug);
  if (!post) notFound();
  const related = getRelatedPosts(post, await getAllPosts());
  const category = post.category ? getCategoryBySlug(post.category) : null;
  const products = category ? (await getAviationProducts()).filter((product) => matchesCategory(product, category)) : [];

  return <article className="space-y-8">
    <JsonLd data={{
      "@context": "https://schema.org", "@type": "BlogPosting",
      "@id": absoluteUrl(`/blog/${post.slug}#article`),
      headline: post.title, description: post.description,
      mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`), inLanguage: "cs",
      author: { "@type": "Organization", name: "Redakce Flylady.cz", url: absoluteUrl("/o-webu") },
      publisher: { "@id": absoluteUrl("/#organization") },
      ...(post.date ? { datePublished: post.date } : {}),
      ...(post.updated ? { dateModified: post.updated } : {}),
      ...(post.coverImage ? { image: absoluteUrl(post.coverImage) } : {}),
    }} />
    <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />
    <header className="max-w-3xl space-y-3">
      <p className="text-sm text-slate-500"><Link href="/o-webu" className="underline">Redakce Flylady.cz</Link>
        {post.date && <> · Vydáno <time dateTime={post.date}>{formatPostDate(post.date)}</time></>}
        {post.updated && <> · Aktualizováno <time dateTime={post.updated}>{formatPostDate(post.updated)}</time></>}
      </p>
      <h1 className="text-3xl font-bold text-slate-900">{post.title}</h1>
      <p className="text-lg text-slate-600">{post.description}</p>
      {category && <Link href={`/${category.slug}`} className="inline-block font-semibold underline">Nabídky: {category.title}</Link>}
    </header>
    <div className="blog-content max-w-3xl text-slate-700" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    {category && <ProductSection title={`Související nabídky: ${category.title}`} description="Nabídky pro celou kategorii. Místo konání ověřte u konkrétní varianty." products={products} limit={3} href={`/${category.slug}`} />}
    {related.length > 0 && <section className="space-y-5 border-t border-slate-100 pt-8">
      <h2 className="text-2xl font-semibold">Další průvodci výběrem</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{related.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-slate-500">
        <h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm text-slate-600">{item.description}</p>
      </Link>)}</div>
    </section>}
  </article>;
}
