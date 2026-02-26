import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',        // Tells Next.js to build a static site
  images: {
    unoptimized: true,     // GitHub doesn't have the "magic" to resize images for you
  },
  basePath: '/YOUR-REPO-NAME', // REPLACE THIS with your actual GitHub folder name
};

export default nextConfig;