import Image from "next/image";

const partners = [
  { name: "DRUZH Wisata Menejemen", logo: "/assets/partners/DRUZH-logo.png" },
  { name: "ASITA", logo: "/assets/partners/ASITA-logo.png" },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="border-t border-slate-100 bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-slate-300">
          Trusted Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {partners.map((partner) => (
            <div key={partner.name} className="group">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={80}
                className="h-20 w-auto object-contain opacity-40 grayscale transition-all group-hover:opacity-80 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
