import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "ru","fr","de","es"];
  const pages = [
    "", 
    "/company",
    "/countries",
    "/gallery",
    "/travel",
    "/blogs",
  ];

  const now = new Date().toISOString();

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `https://stanvoyage.en/${locale}${page}`,
      lastModified: now,
    }))
  );
}
