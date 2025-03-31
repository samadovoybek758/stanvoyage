import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["stanvoyage-back.novacode.uz", "192.168.1.112",'s3-alpha-sig.figma.com',"s3-alpha-sig.figma.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stanvoyage-back.novacode.uz",
        pathname: "/media/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
