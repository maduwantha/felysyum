import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  turbopack: {
    resolveAlias: {
      "@": "./src",
      "@public": "./public",
    },
  },
  images: {
    unoptimized: true,
    qualities: [25, 50, 75, 100],
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "connect-src 'self' https://www.google-analytics.com https://gasstation.polygon.technology https://polygon-rpc.com",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
