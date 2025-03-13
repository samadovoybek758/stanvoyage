import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import StoreProvider from "./StoreProvider";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
// import OGImage from "@/components/ui/OGImage";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const messages = await getMessages();
  const title = (messages["meta.title"] as string) || "Samo | Textile";
  const description =
    (messages["meta.description"] as string) || "Best textile products online";

  return {
    title,
    description,
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-32x32.png",
    },
    manifest: "/site.webmanifest",
    alternates: {
      canonical: `https://samo.uz/${locale}`,
      languages: {
        en: "https://samo.uz/en",
        uz: "https://samo.uz/uz",
        ru: "https://samo.uz/ru",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://samo.uz/${locale}`,
      siteName: "Samo Textile",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Samo Textile",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@samo_textile",
      images: ["/og-image.jpg"],
    },
    robots: "index, follow",
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as "en" | "uz" | "ru")) {
    notFound();
  }

  const messages = await getMessages();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Samo Textile",
    url: "https://samo.uz",
    logo: "https://samo.uz/logo.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+998 90 123 45 67",
        contactType: "customer service",
      },
      {
        "@type": "ContactPoint",
        telephone: "+998 91 987 65 43",
        contactType: "sales",
      },
    ],
  };

  return (
    <html lang={locale}>
      <head>
        <link
          rel="preload"
          as="image"
          href="../../../public/Images/og-image.jpg"
        />
        {/* <OGImage /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Toaster position="top-right" reverseOrder={true} />
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
