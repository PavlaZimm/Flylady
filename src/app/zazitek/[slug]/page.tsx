import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getAviationProducts,
  getIdFromSlug,
  getProductById,
  getProductBySlug,
} from "@/lib/feed";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const formatPrice = (value: number | null) => {
  if (value === null) return "Cena na dotaz";
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(value);
};

export const generateStaticParams = async () => {
  const products = await getAviationProducts();
  return products.map((product) => ({ slug: product.slug }));
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const id = getIdFromSlug(slug);
  const product = (await getProductById(id)) ?? (await getProductBySlug(slug));

  if (!product) {
    return {
      title: "Zážitek nenalezen",
    };
  }

  return {
    title: product.name,
    description: product.description.slice(0, 160),
    openGraph: {
      title: product.name,
      description: product.description.slice(0, 160),
      images: product.imageUrls[0] ? [product.imageUrls[0]] : undefined,
    },
  };
};

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const id = getIdFromSlug(slug);
  const product = (await getProductById(id)) ?? (await getProductBySlug(slug));

  if (!product) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-10 text-center">
        <h1 className="text-2xl font-semibold">Zážitek nenalezen</h1>
        <p className="mt-2 text-sm text-slate-600">
          Možná byl produkt odstraněn nebo změnil kategorii.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
        >
          Zpět na přehled
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <Link href="/" className="text-sm text-slate-500 hover:text-slate-900">
        ← Zpět na výběr
      </Link>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100">
            {product.imageUrls[0] ? (
              <Image
                src={product.imageUrls[0]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            ) : null}
          </div>
          {product.imageUrls.length > 1 ? (
            <div className="grid gap-4 sm:grid-cols-3">
              {product.imageUrls.slice(1, 4).map((url) => (
                <div
                  key={url}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100"
                >
                  <Image
                    src={url}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 20vw"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <aside className="flex flex-col gap-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">
              {product.name}
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              {product.categories.slice(0, 2).join(" · ")}
            </p>
          </div>
          <p className="text-sm text-slate-700">{product.description}</p>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-900">Od</span>
              <span className="text-base font-semibold text-slate-900">
                {formatPrice(product.minPriceVat)}
              </span>
            </div>
            {product.location ? (
              <div className="flex items-center justify-between">
                <span>Místo</span>
                <span>{product.location}</span>
              </div>
            ) : null}
            {product.deliveryDate ? (
              <div className="flex items-center justify-between">
                <span>Doručení</span>
                <span>{product.deliveryDate}</span>
              </div>
            ) : null}
          </div>
          <a
            href={product.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Koupit na Zážitky.cz
          </a>
        </aside>
      </div>

      {product.variants.length ? (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Dostupné varianty
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {product.variants.map((variant) => (
              <div
                key={variant.id}
                className="rounded-2xl border border-slate-100 bg-white p-5"
              >
                <h3 className="text-sm font-semibold text-slate-900">
                  {variant.name}
                </h3>
                <div className="mt-2 flex items-center justify-between text-sm text-slate-600">
                  <span>{variant.location ?? "—"}</span>
                  <span className="font-semibold text-slate-900">
                    {formatPrice(variant.priceVat)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
