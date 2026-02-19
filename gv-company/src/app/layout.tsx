import type { Metadata } from "next";
import "./globals.css";
import HeaderAman from "@/components/layout/HeaderAman";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "GV&Co™ — Branding & Systems for Retail & Small Biz | Bangalore",
    template: "%s | GV&Co™",
  },
  description:
    "GV&Co helps retail shops, distributors, and small businesses in Bangalore look professional, organize inventory, and sell more.",
  keywords: [
    "retail branding",
    "inventory management",
    "small business website",
    "bangalore digital agency",
    "POS systems",
    "distributor marketing",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gvandco.in",
    siteName: "GV&Co",
    title: "GV&Co™ — Branding & Systems for Retail & Small Biz",
    description:
      "Helping retailers and distributors in Bangalore look professional and run efficiently.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GV&Co — Retail & Small Business Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GV&Co™ — Branding & Systems for Retail & Small Biz",
    description:
      "Helping retailers and distributors in Bangalore look professional and run efficiently.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text font-body antialiased">
        <HeaderAman />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
