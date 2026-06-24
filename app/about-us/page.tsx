import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/About/AboutHero";
import AboutDescription from "@/components/sections/About/AboutDescription";
import VisionMission from "@/components/sections/About/VisionMission";

export const metadata: Metadata = {
  title: "About Us — Trusted Visa Agency in Bali",
  description:
    "Learn about MAHAMAYA VISA — a trusted visa processing company in Bali, Indonesia. We partner with the government to provide seamless visa coordination services for international visitors.",
  openGraph: {
    title: "About MAHAMAYA VISA — Trusted Visa Agency in Bali, Indonesia",
    description:
      "MAHAMAYA VISA focuses on coordinating entry visas for international tourists and assisting with visa extensions in Bali, Indonesia.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutDescription />
      <VisionMission />
      <Footer />
    </main>
  );
}
