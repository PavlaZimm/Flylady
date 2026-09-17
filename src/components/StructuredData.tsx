import type { Product } from "@/lib/feed";

const SITE_URL = "https://www.flylady.cz";

type OrganizationSchemaProps = {
  name?: string;
};

export const OrganizationSchema = ({ name = "Flylady.cz" }: OrganizationSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url: SITE_URL,
    description: "Letecké zážitky, tipy a inspirace pro všechny, kdo milují létání.",
    "@id": `${SITE_URL}/#organization`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
};

type WebsiteSchemaProps = {
  name?: string;
  description?: string;
};

export const WebsiteSchema = ({
  name = "Flylady.cz",
  description = "Letecké zážitky, tipy a inspirace pro všechny, kdo milují létání.",
}: WebsiteSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    publisher: { "@id": `${SITE_URL}/#organization` },
    name,
    url: SITE_URL,
    description,

  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
};

type ProductSchemaProps = {
  product: Product;
};

export const ProductSchema = ({ product }: ProductSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.imageUrls[0],
    url: `${SITE_URL}/zazitek/${product.slug}`,
    ...(product.minPriceVat !== null ? { offers: {
      "@type": "Offer", url: product.url, priceCurrency: "CZK", price: product.minPriceVat,
      seller: { "@type": "Organization", name: "Zážitky.cz" },
    } } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
};

type FAQSchemaProps = {
  faqs: Array<{ question: string; answer: string }>;
};

export const FAQSchema = ({ faqs }: FAQSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
};

type BreadcrumbSchemaProps = {
  items: Array<{ name: string; url: string }>;
};

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
};

type LocalBusinessSchemaProps = {
  name?: string;
};

export const LocalBusinessSchema = ({ name = "Flylady.cz" }: LocalBusinessSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    url: SITE_URL,
    description: "Affiliate partner Zážitky.cz - letecké zážitky a dárky",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CZ",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
};
