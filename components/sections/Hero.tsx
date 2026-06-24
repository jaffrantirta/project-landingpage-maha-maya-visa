import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-end bg-[url('/assets/hero.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 px-6 pb-14 pt-32 sm:px-10 lg:px-14 animate-fade-in-up">
        <div className="mb-6">
          <Image
            src="/logo.png"
            width={72}
            height={72}
            alt="Mahamaya Visa"
            className="rounded-2xl"
          />
        </div>

        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-brand-sky">
          Bali&apos;s Trusted Visa Partner
        </p>

        <h1 className="mb-6 max-w-2xl text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          Your Gateway<br />
          to the Island<br />
          of the Gods
        </h1>

        <p className="mb-10 max-w-md text-base text-white/65 sm:text-lg">
          Professional visa processing in Bali — tourist, business, working,
          family, and more.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/our-services"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-sky px-7 py-3.5 text-sm font-bold text-brand-text transition-all hover:bg-sky-300"
          >
            View Services <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20"
          >
            Contact Us
          </Link>
        </div>

        {/* Bottom bar: quick stats */}
        <div className="mt-14 flex flex-wrap gap-8 border-t border-white/15 pt-8">
          {[
            { value: "6+", label: "Visa Types" },
            { value: "Fast", label: "7–14 Day Processing" },
            { value: "Free", label: "Pickup & Delivery" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-white/45">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
