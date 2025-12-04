import Image from "next/image";

// components/sections/PartnersSection.tsx
const partners = [
  { name: "DRUZH", logo: "/assets/partners/DRUZH-logo.png" },
  { name: "ASITA", logo: "/assets/partners/ASITA-logo.png" },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="mx-auto max-w-6xl px-4 py-24 text-center">
      <h2 className="text-3xl font-bold text-brand-text sm:text-4xl lg:text-5xl">
        Our Partners
      </h2>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-2 h-full">
        {partners.map((partner, index) => (
          <div
            key={partner.name}
            className="flex h-full items-center justify-center rounded-xl border border-slate-100 bg-white/80 text-sm font-bold uppercase tracking-wide text-brand-sky opacity-70 shadow-sm transition-all duration-200 hover:scale-105 hover:opacity-100"
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              className="h-52 w-52"
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
