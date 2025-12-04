import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/sections/Contact/ContactHero";
import ContactMap from "@/components/sections/Contact/ContactMap";
import ContactInfo from "@/components/sections/Contact/ContactInfo";
import ContactPerson from "@/components/sections/Contact/ContactPerson";

export default function ContactPage() {
  return (
    <div className="relative">
      <Navbar />

      <main className="">
        <ContactHero />

        <div className="mx-auto max-w-6xl px-4 -mt-16 pb-16 space-y-12">
          <ContactMap />

          <div className="grid gap-8 md:grid-cols-2">
            <ContactInfo />
            <ContactPerson />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
