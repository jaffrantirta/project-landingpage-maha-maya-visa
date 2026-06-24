import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "MAHAMAYA VISA — Your Gateway to the Island of the Gods",
  description:
    "Professional visa processing services in Bali, Indonesia. We handle tourist, business, working, family, and retirement visas with fast turnaround and expert support.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <WhyUsSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}
