import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["samo-admin.novacode.uz"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "samo-admin.novacode.uz",
        pathname: "/media/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
