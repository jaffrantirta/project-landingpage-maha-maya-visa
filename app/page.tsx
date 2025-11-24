// app/page.tsx
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="relative">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <ServicesSection />
        <WhyUsSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
}
