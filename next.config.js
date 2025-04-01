/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vercel.saleor.cloud',
      },
      {
        protocol: 'https',
        hostname: 'storefront1.saleor.cloud',
      },
      {
        protocol: 'https',
        hostname: 'phis-env.eu.saleor.cloud',
      },
      {
        protocol: 'https',
        hostname: 'hoi-an-moon-cake.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'ideal-comfort-d7d245d943.media.strapiapp.com',
      },
    ],
  },
  env: {
    SALEOR_INSTANCE_URL: process.env.SALEOR_INSTANCE_URL,
  },
};
