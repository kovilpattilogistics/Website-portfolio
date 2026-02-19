import HeroAman from "@/components/home/HeroAman";
import JourneysSection from "@/components/home/JourneysSection";
import EditorialSplit from "@/components/home/EditorialSplit";
import SeasonalGrid from "@/components/home/SeasonalGrid";
import FeaturedCarousel from "@/components/home/FeaturedCarousel";
import DarkManifesto from "@/components/home/DarkManifesto";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/layout/StickyCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GV&Co — Branding & Digital Operations Studio, Bangalore",
  description: "We help restaurants, hotels, retail shops and local businesses in India grow through sharp branding, powerful websites and digital operations that actually work.",
};

export default function Home() {
  return (
    <main className="bg-[#F4EFE8] min-h-screen selection:bg-[#1A1916]/10 selection:text-[#1A1916]">
      {/* 1. Hero — full-bleed image + text below */}
      <HeroAman />

      {/* 2. Journeys — 1 large + 3 small editorial cards by industry */}
      <JourneysSection />

      {/* 3. Editorial Split — 2-col: Services | New & Noteworthy */}
      <EditorialSplit />

      {/* 4. Seasonal Grid — 6-card service grid with hover overlays */}
      <SeasonalGrid />

      {/* 5. Featured Work Carousel */}
      <FeaturedCarousel />

      {/* 6. Dark Manifesto — full dark section + stats */}
      <DarkManifesto />

      {/* 7. Footer */}
      <Footer />

      {/* Sticky CTA */}
      <StickyCTA />
    </main>
  );
}
