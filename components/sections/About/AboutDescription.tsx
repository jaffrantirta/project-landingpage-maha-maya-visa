export default function AboutDescription() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          {/* Left label */}
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-sky">
              Who We Are
            </p>
            <h2 className="text-2xl font-bold text-brand-text sm:text-3xl">
              A Trusted Visa Partner in Bali
            </h2>
            <div className="mt-6 h-px w-10 bg-brand-sky" />
          </div>

          {/* Right content */}
          <div className="space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              Mahamaya Visa is a company operating in the tourism sector,
              particularly on the island of Bali. We focus on coordinating the
              provision of entry visas for international tourists visiting
              Indonesia and assisting with visa extensions.
            </p>
            <p>
              Our experienced professionals understand the complexities of visa
              procedures and work with dedication to ensure your application is
              handled with precision and care. We serve you with integrity, a
              transparent process, and exceptional customer service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
