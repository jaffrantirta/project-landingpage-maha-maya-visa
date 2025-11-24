// components/sections/PartnersSection.tsx
const partners = [
  { name: "Embassy", label: "EMBASSY" },
  { name: "Global", label: "GLOBAL" },
  { name: "Travel", label: "TRAVEL" },
  { name: "Consulate", label: "CONSULATE" },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="mx-auto max-w-6xl px-4 py-24 text-center">
      <h2 className="text-3xl font-bold text-brand-text sm:text-4xl lg:text-5xl">
        Trusted Partners
      </h2>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((partner, index) => (
          <div
            key={partner.name}
            className="flex h-20 items-center justify-center rounded-xl border border-slate-100 bg-white/80 text-sm font-bold uppercase tracking-wide text-brand-sky opacity-70 shadow-sm transition-all duration-200 hover:scale-105 hover:opacity-100"
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            {partner.label}
          </div>
        ))}
      </div>
    </section>
  );
}
