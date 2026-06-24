export default function VisionMission() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          {/* Left label */}
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-sky">
              Our Direction
            </p>
            <h2 className="text-2xl font-bold text-brand-text sm:text-3xl">
              Vision &amp; Mission
            </h2>
          </div>

          {/* Right content */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <div className="mb-4 h-1 w-10 rounded-full bg-brand-sky" />
            <h3 className="mb-3 font-bold text-brand-text">
              Partnering with Government, Providing Solutions
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Mahamaya Visa&apos;s vision and mission are rooted in collaboration with the
              government to provide visa coordination services for international tourists
              visiting Indonesia. We consistently strive to deliver the best solutions
              and services to every client we work with.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
