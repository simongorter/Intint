import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Intint – Autoruiten tinten op locatie in Friesland",
  description:
    "Simon Gorter tint autoruiten op uw locatie, binnen 60 km van Balk. Particulier en zakelijk. Standaard en ceramic folie. Vraag vrijblijvend een offerte aan.",
  openGraph: {
    title: "Intint – Autoruiten tinten op locatie in Friesland",
    description:
      "Simon Gorter tint autoruiten op uw locatie, binnen 60 km van Balk. Particulier en zakelijk. Standaard en ceramic folie. Vraag vrijblijvend een offerte aan.",
    locale: "nl_NL",
    type: "website",
    siteName: "Intint",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Intint",
  description:
    "Professioneel autoruiten tinten op locatie in Friesland. Standaard en ceramic folie.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Westein 27G",
    addressLocality: "Balk",
    postalCode: "8561 BZ",
    addressCountry: "NL",
  },
  email: "info@intint.nl",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 52.9,
      longitude: 5.58,
    },
    geoRadius: "60000",
  },
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${raleway.className} antialiased`}>{children}</body>
    </html>
  );
}
