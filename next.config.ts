import type { NextConfig } from "next";

const securityHeaders = [
  // Prevence XSS útoků
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // Prevence clickjacking
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Prevence MIME type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Referrer policy pro ochranu soukromí
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Permissions policy - omezení funkcí prohlížeče
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Strict Transport Security - HTTPS only
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https://alis.zazitky.cz https://www.zazitky.cz",
      "font-src 'self' data:",
      "connect-src 'self' https://alis.zazitky.cz",
      "frame-ancestors 'self'",
    ].join("; "),
  },
];

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
  // Security headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  // Komprese a optimalizace
  compress: true,
  // Powered by header skrytí
  poweredByHeader: false,
};

export default nextConfig;
