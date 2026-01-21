import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {

};

const withNextConfig = createNextIntlPlugin();

export default withNextConfig(nextConfig);
