import type { Metadata } from "next";
import "./globals.css";
import HeaderAman from "@/components/layout/HeaderAman";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "GV&Co™ — Branding & Digital Operations Studio | Bangalore",
    template: "%s | GV&Co™",
  },
  description:
    "GV&Co helps restaurants, hotels, retail shops and local businesses in India grow through sharp branding, powerful websites and digital operations that actually work.",
  keywords: [
    "branding studio Bangalore",
    "digital operations",
    "small business branding",
    "restaurant branding India",
    "retail branding Bangalore",
    "business website Bangalore",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gvandco.in",
    siteName: "GV&Co™",
    title: "GV&Co™ — Branding & Digital Operations Studio, Bangalore",
    description:
      "We help restaurants, hotels, retail shops and local businesses in India grow through sharp branding, powerful websites and digital operations that actually work.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GV&Co™ — Branding & Digital Operations Studio, Bangalore",
    description:
      "We help restaurants, hotels, retail shops and local businesses in India grow through sharp branding, powerful websites and digital operations that actually work.",
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
