import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: "export", trailingSlash: true } : {}),
  images: isGitHubPages
    ? { unoptimized: true }
    : { formats: ["image/avif", "image/webp"] },
  poweredByHeader: false,
};

export default nextConfig;