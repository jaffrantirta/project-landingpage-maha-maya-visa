// app/our-services/page.tsx

import Footer from "@/components/layout/Footer";
import TabsSection from "./TabsSection";
import Navbar from "@/components/layout/Navbar";
import ServiceHero from "@/components/sections/Service/ServiceHero";

export default function OurServicesPage() {
  return (
    <div className="relative">
      <Navbar />
      <main className="min-h-screen bg-white">
        <ServiceHero />

        {/* Tabs Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 animate-fade-in-up">
          <TabsSection />
        </section>

        <Footer />
      </main>
    </div>
  );
}
