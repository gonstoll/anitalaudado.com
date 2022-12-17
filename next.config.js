/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_WEBHOOK_SECRET: process.env.SANITY_WEBHOOK_SECRET,
    REVALIDATE_TOKEN: process.env.REVALIDATE_TOKEN,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;
