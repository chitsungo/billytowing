import type { Metadata, Viewport } from "next";
import { FloatingActions, Footer, Header } from "./components";
import { EMAIL, INSTAGRAM_URL, PHONE_TEL } from "./data";
import "./globals.css";

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Billy Towing",
  description: "24/7 towing, vehicle recovery and roadside assistance in Harare.",
  telephone: PHONE_TEL,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nest Close, 15292 Falcon Drive",
    addressLocality: "Harare",
    addressCountry: "ZW",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -17.7993056,
    longitude: 30.9756111,
  },
  sameAs: [INSTAGRAM_URL],
  openingHours: "Mo-Su 00:00-23:59",
};

export const metadata: Metadata = {
  title: {
    default: "Billy Towing | 24/7 Towing in Harare",
    template: "%s | Billy Towing",
  },
  description: "24/7 emergency towing, flatbed recovery and roadside assistance in Harare, Zimbabwe. Call Billy Towing on +263 774 870 729.",
  keywords: ["towing Harare", "roadside assistance Harare", "flatbed towing Zimbabwe", "emergency towing"],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  other: { "codex-preview": "development" },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F3F5F7" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <Header />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
