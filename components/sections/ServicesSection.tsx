import Link from "next/link";
import { pricingData } from "@/services";
import { SERVICE_ICONS } from "@/lib/serviceIcons";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 flex items-end justify-between border-b border-slate-100 pb-6">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-brand-sky">
              Services
            </p>
            <h2 className="text-3xl font-bold text-brand-text sm:text-4xl">
              What We Offer
            </h2>
          </div>
          <Link
            href="/our-services"
            className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-slate-400 transition-colors hover:text-brand-text sm:flex"
          >
            See all <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Numbered editorial list */}
        <ul className="divide-y divide-slate-100">
          {pricingData.map((service, index) => {
            const Icon = SERVICE_ICONS[service.id] ?? DocumentFallback;
            return (
              <li key={service.id}>
                <Link
                  href={`/our-services/${service.id}`}
                  className="group flex items-center gap-5 py-5 sm:gap-7"
                >
                  <span className="w-8 shrink-0 text-right text-xs font-bold tabular-nums text-slate-200 transition-colors group-hover:text-brand-sky">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 transition-colors group-hover:bg-brand-sky/15">
                    <Icon className="h-5 w-5 text-slate-400 group-hover:text-brand-text transition-colors" />
                  </span>

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-brand-text transition-colors group-hover:text-brand-sky">
                      {service.tabTitle}
                    </p>
                    <p className="mt-0.5 truncate text-sm text-slate-400">
                      {service.description}
                    </p>
                  </div>

                  <span
                    className="shrink-0 text-slate-200 transition-all group-hover:translate-x-1 group-hover:text-brand-sky"
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 sm:hidden">
          <Link
            href="/our-services"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-brand-sky py-3 text-sm font-semibold text-brand-sky transition-colors hover:bg-brand-sky hover:text-brand-text"
          >
            See All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}

function DocumentFallback({ className }: { className?: string }) {
  return <span className={className} />;
}
