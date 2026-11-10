import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // Minimal self-contained server for the Docker image.
  output: "standalone",
  allowedDevOrigins: process.env.DEV_ORIGIN ? [process.env.DEV_ORIGIN] : [],
};

const withNextConfig = createNextIntlPlugin();

export default withNextConfig(nextConfig);
