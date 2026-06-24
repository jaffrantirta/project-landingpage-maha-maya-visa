export default function AboutHero() {
  return (
    <section className="relative bg-[url('/assets/about.jpg')] bg-cover bg-center px-6 pt-28 pb-14 text-white sm:px-10 lg:px-14">
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 animate-fade-in-up">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-sky">
          MAHAMAYA VISA
        </p>
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">About Us</h1>
        <p className="mt-3 max-w-md text-base text-white/65">
          Trusted visa processing partner in Bali, Indonesia
        </p>
      </div>
    </section>
  );
}
