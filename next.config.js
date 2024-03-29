/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    REVALIDATE_TOKEN: process.env.REVALIDATE_TOKEN,
    SANITY_POSTS_WEBHOOK_SECRET: process.env.SANITY_POSTS_WEBHOOK_SECRET,
    SANITY_CAROUSEL_WEBHOOK_SECRET: process.env.SANITY_CAROUSEL_WEBHOOK_SECRET,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;
