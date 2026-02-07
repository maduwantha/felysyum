import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
  images: {
    unoptimized: true,
    qualities: [25, 50, 75, 100],
  },
  // Added this line:
  trailingSlash: true,
};

export default nextConfig;
