import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: undefined, // disable turbopack to avoid SST cache corruption
};

export default nextConfig;
