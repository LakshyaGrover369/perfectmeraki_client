import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "ext.same-assets.com",
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
