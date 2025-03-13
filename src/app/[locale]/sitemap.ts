import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["uz", "en", "ru"];
  const pages = [
    "", 
    "/company",
    "/contact",
    "/factories",
    "/gallery",
    "/news",
    "/products",
    "/vacancies",
  ];

  const now = new Date().toISOString();

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `https://samo.uz/${locale}${page}`,
      lastModified: now,
    }))
  );
}
