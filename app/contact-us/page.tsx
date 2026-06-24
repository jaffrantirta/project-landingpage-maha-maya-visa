import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/sections/Contact/ContactHero";
import ContactMap from "@/components/sections/Contact/ContactMap";
import ContactInfo from "@/components/sections/Contact/ContactInfo";
import ContactPerson from "@/components/sections/Contact/ContactPerson";

export const metadata: Metadata = {
  title: "Contact Us — Reach MAHAMAYA VISA in Bali",
  description:
    "Get in touch with MAHAMAYA VISA in Denpasar, Bali. WhatsApp, email, or visit our office. We're here to help with all your visa processing needs.",
  openGraph: {
    title: "Contact MAHAMAYA VISA — Visa Services in Bali, Indonesia",
    description:
      "Contact MAHAMAYA VISA for visa processing in Bali. Office in Denpasar Selatan, WhatsApp available.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <div className="mx-auto max-w-5xl px-4 py-14 space-y-8">
        <ContactMap />
        <div className="grid gap-6 md:grid-cols-2">
          <ContactInfo />
          <ContactPerson />
        </div>
      </div>
      <Footer />
    </main>
  );
}
