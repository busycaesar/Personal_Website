/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.buymeacoffee.com", "media.dev.to"],
  },
};

module.exports = nextConfig;
