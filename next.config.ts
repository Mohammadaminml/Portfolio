import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : "standalone",
  images: isGitHubPages
    ? { unoptimized: true }
    : { formats: ["image/avif", "image/webp"] },
  poweredByHeader: false,
};

export default nextConfig;