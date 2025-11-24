import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/About/AboutHero";
import AboutDescription from "@/components/sections/About/AboutDescription";
import VisionMission from "@/components/sections/About/VisionMission";

export default function AboutPage() {
  return (
    <div className="relative">
      <Navbar />

      <main className="pt-20">
        <AboutHero />
        <AboutDescription />
        <VisionMission />
      </main>

      <Footer />
    </div>
  );
}
