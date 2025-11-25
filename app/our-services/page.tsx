// app/our-services/page.tsx

import Footer from "@/components/layout/Footer";
import TabsSection from "./TabsSection";
import Navbar from "@/components/layout/Navbar";

export default function OurServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-100 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-2xl text-white/90">
            Find the visa services that match your travel or career goals
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <TabsSection />
      </section>

      <Footer />
    </main>
  );
}
