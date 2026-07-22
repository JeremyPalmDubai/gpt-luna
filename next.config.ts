import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  generateBuildId: async () => `luna-${Date.now()}`,
};

export default nextConfig;
