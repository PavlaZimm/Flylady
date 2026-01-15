import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "alis.zazitky.cz",
      },
      {
        protocol: "https",
        hostname: "www.zazitky.cz",
      },
    ],
  },
};

export default nextConfig;
