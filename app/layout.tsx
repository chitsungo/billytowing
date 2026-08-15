import type { Metadata } from "next";
import { FloatingActions, Footer, Header } from "./components";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
