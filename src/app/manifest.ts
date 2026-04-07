import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Flylady.cz - Letecké zážitky a dárky",
    short_name: "Flylady",
    description:
      "Darujte nezapomenutelný letecký zážitek. Vyhlídkové lety, tandemové seskoky, simulátory.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
