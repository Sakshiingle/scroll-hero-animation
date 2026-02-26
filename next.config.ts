import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  // ONLY the repository name, starting with a slash. 
  // NO "github.com", NO "https://"
  basePath: '/scroll-hero-animation', 
};

export default nextConfig;