import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/"],
      },
    ],
    sitemap: "https://www.flylady.cz/sitemap.xml",
    host: "https://www.flylady.cz",
  };
}
