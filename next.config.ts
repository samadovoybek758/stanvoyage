import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["192.168.1.112"],
  },
};

export default withNextIntl(nextConfig);
