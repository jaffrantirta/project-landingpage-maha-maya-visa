// components/sections/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gradient-to-br from-brand-sky to-[#E0F6FF] px-4 py-16"
    >
      {/* Floating shapes */}
      <div className="pointer-events-none absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-white/10 blur-2xl animate-float" />
      <div className="pointer-events-none absolute bottom-[15%] right-[15%] h-52 w-52 rounded-full bg-white/10 blur-xl animate-float" />
      <div className="pointer-events-none absolute left-[65%] top-[55%] h-40 w-40 rounded-full bg-white/10 blur-xl animate-float" />

      <div className="relative z-10 max-w-3xl text-center text-white animate-fade-in-up">
        <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          Your Gateway to the World
        </h1>
        <p className="mb-8 text-lg opacity-95 sm:text-xl">
          Fast, reliable visa processing services for all your travel needs.
        </p>
        <Link
          href="#services"
          className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-brand-sky shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
}
