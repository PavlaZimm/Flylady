import type { Product } from "@/lib/feed";

const SITE_URL = "https://flylady.cz";

type OrganizationSchemaProps = {
  name?: string;
};

export const OrganizationSchema = ({ name = "Flylady.cz" }: OrganizationSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: "Letecké zážitky, tipy a inspirace pro všechny, kdo milují létání.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Czech",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
    name,
    url: SITE_URL,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/zazitky?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
    brand: {
      "@type": "Brand",
      name: "Zážitky.cz",
    },
    offers: {
      "@type": "Offer",
      url: product.url,
      priceCurrency: "CZK",
      price: product.minPriceVat ?? 0,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Zážitky.cz",
      },
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
