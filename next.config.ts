import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/_next/static/chunks/0l-gzvtqamuts.css", destination: "/luna-legacy.css", permanent: false },
      { source: "/_next/static/chunks/0~b5_r0l4ekib.css", destination: "/luna-legacy.css", permanent: false },
    ];
  },
};

export default nextConfig;
