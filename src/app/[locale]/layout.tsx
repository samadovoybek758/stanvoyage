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

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const messages = await getMessages();
  const title = (messages["meta.title"] as string) || "Stanvoyage | Travel";
  const description =
    (messages["meta.description"] as string) || "Best travel company online";

  return {
    title,
    description,
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-32x32.png",
    },
    manifest: "/site.webmanifest",
    alternates: {
      canonical: `https://stanvoyage.en/${locale}`,
      languages: {
        en: "https://stanvoyage.en/en",
        ru: "https://stanvoyage.en/ru",
        fr: "https://stanvoyage.en/fr",
        de: "https://stanvoyage.en/de",
        es: "https://stanvoyage.en/es",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://stanvoyage.en/${locale}`,
      siteName: "Stanvoyage Travel",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Stanvoyage Travel",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@stanvoyage_travel",
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
  if (!routing.locales.includes(locale as "en" | "ru" | "fr" | "de" | "es" )) {
    notFound();
  }

  const messages = await getMessages();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Stanvoyage Travel",
    url: "https://stanvoyage.en",
    logo: "https://stanvoyage.en/logo.png",
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
