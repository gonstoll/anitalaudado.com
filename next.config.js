/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_WEBHOOK_SECRET: process.env.SANITY_WEBHOOK_SECRET,
    SANITY_WEBHOOK_SECRET_POSTS: process.env.SANITY_WEBHOOK_SECRET_POSTS,
    SANITY_WEBHOOK_SECRET_CAROUSEL: process.env.SANITY_WEBHOOK_SECRET_CAROUSEL,
    REVALIDATE_TOKEN: process.env.REVALIDATE_TOKEN,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;
