import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAviationProducts } from "@/lib/feed";
import { groupProductsByCategory, CATEGORY_CONFIG } from "@/lib/categories";

// Mapování klíčových slov v článku na kategorie
const getRelevantCategory = (slug: string, title: string) => {
  const text = `${slug} ${title}`.toLowerCase();

  if (text.includes("vyhlidkov") || text.includes("vyhlídkov")) {
    return "vyhlidkove-lety";
  }
  if (text.includes("tandem") || text.includes("seskok") || text.includes("parašut")) {
    return "tandemove-seskoky";
  }
  if (text.includes("simulat") || text.includes("simulát")) {
    return "letecke-simulatory";
  }
  if (text.includes("vrtulník") || text.includes("vrtulnik") || text.includes("helikopt")) {
    return "let-vrtulnikem";
  }
  if (text.includes("stíhač") || text.includes("stihac")) {
    return "let-stihackou";
  }
  if (text.includes("balón") || text.includes("balon")) {
    return "let-balonem";
  }

  return "vyhlidkove-lety"; // default
};

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

const formatPrice = (value: number | null) => {
  if (value === null) return "Cena na dotaz";
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(value);
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // Fetch relevant products based on article topic
  const products = await getAviationProducts();
  const { groups } = groupProductsByCategory(products);
  const relevantCategorySlug = post ? getRelevantCategory(slug, post.title) : "vyhlidkove-lety";
  const relevantGroup = groups.find((g) => g.slug === relevantCategorySlug);
  const relevantProducts = relevantGroup?.products.slice(0, 3) ?? [];
  const relevantCategory = CATEGORY_CONFIG.find((c) => c.slug === relevantCategorySlug);

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

      {/* Tématické zážitky - hlavní prolinkování */}
      {relevantProducts.length > 0 && (
        <section className="border-t border-slate-100 pt-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {relevantCategory?.title || "Doporučené zážitky"}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Zážitky související s tímto článkem
              </p>
            </div>
            <Link
              href={`/kategorie/${relevantCategorySlug}`}
              className="text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1"
            >
              Zobrazit vše
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relevantProducts.map((product) => (
              <Link
                key={product.id}
                href={`/zazitek/${product.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white transition hover:border-slate-200 hover:shadow-lg"
              >
                {product.imageUrls[0] && (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.imageUrls[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-block rounded-full bg-green-500 px-2.5 py-1 text-xs font-semibold text-white">
                        od {formatPrice(product.minPriceVat)}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 line-clamp-2 group-hover:text-slate-700">
                    {product.name}
                  </h3>
                  {product.location && (
                    <p className="mt-1 text-xs text-slate-500 flex items-center gap-1">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {product.location}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

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

        {/* Kategorie */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-8">
          <h2 className="font-semibold text-slate-900">Prozkoumejte další kategorie</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/kategorie/vyhlidkove-lety" className="rounded-full bg-green-50 text-green-700 px-4 py-2 text-sm font-medium hover:bg-green-100 transition">
              Vyhlídkové lety
            </Link>
            <Link href="/kategorie/tandemove-seskoky" className="rounded-full bg-red-50 text-red-700 px-4 py-2 text-sm font-medium hover:bg-red-100 transition">
              Tandemové seskoky
            </Link>
            <Link href="/kategorie/letecke-simulatory" className="rounded-full bg-blue-50 text-blue-700 px-4 py-2 text-sm font-medium hover:bg-blue-100 transition">
              Letecké simulátory
            </Link>
            <Link href="/kategorie/let-vrtulnikem" className="rounded-full bg-amber-50 text-amber-700 px-4 py-2 text-sm font-medium hover:bg-amber-100 transition">
              Let vrtulníkem
            </Link>
          </div>
        </div>
      </div>

      {/* Související články */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-900">Další články</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group rounded-2xl border border-slate-100 bg-white p-5 transition hover:border-slate-200 hover:shadow-lg"
              >
                <p className="text-xs text-slate-500">{relatedPost.date}</p>
                <h3 className="mt-2 font-semibold text-slate-900 group-hover:text-slate-700">
                  {relatedPost.title}
                </h3>
                {relatedPost.description && (
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                    {relatedPost.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
