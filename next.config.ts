import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // خروجی standalone برای Docker در فاز ۵؛ در حالت dev و build استاندارد هم کامل کار می‌کند
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
};

export default nextConfig;