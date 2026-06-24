import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/sections/Service/ServiceHero";
import { pricingData } from "@/services";
import { SERVICE_ICONS } from "@/lib/serviceIcons";

export const metadata: Metadata = {
  title: "Visa Services in Bali — Tourist, Business, Working, Family & More",
  description:
    "Complete visa processing services in Bali, Indonesia: tourist visa (C1, D1), business visa (C2, D2, D12), working visa KITAS, family KITAS, retirement visa, and special category visas. Fast turnaround, expert support.",
  keywords: [
    "visa services Bali",
    "tourist visa Indonesia",
    "business visa Bali",
    "KITAS working visa Indonesia",
    "family visa Bali",
    "retirement visa Indonesia",
    "volunteer visa C6",
    "internship visa C22A",
    "visa extension Bali",
    "KITAS renewal Indonesia",
  ],
  openGraph: {
    title: "Visa Services in Bali — Tourist, Business, Working & More",
    description:
      "Full visa processing in Bali: tourist, business, working, family, retirement. Fast turnaround, expert support, flexible payment.",
  },
  alternates: { canonical: "/our-services" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Visa Services — MAHAMAYA VISA",
  description: "Complete visa processing services in Bali, Indonesia",
  itemListElement: pricingData.map((service, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://mahamayavisa.com/our-services/${service.id}`,
    name: service.title,
    description: service.description,
  })),
};

export default function OurServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ServiceHero />

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-sky">
            All Services
          </p>
          <h2 className="text-2xl font-bold text-brand-text sm:text-3xl">
            What We Offer
          </h2>
          <p className="mt-2 text-slate-500">
            Select a service below to see requirements and available options.
          </p>
        </div>

        {/* Service cards grid — fully server-rendered, every service indexed */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pricingData.map((service) => {
            const Icon = SERVICE_ICONS[service.id];
            return (
              <Link
                key={service.id}
                href={`/our-services/${service.id}`}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-brand-sky hover:shadow-card"
              >
                {Icon && (
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-sky/15 transition-colors group-hover:bg-brand-sky/25">
                    <Icon className="h-6 w-6 text-brand-text" />
                  </div>
                )}
                <h2 className="mb-1.5 font-bold text-brand-text group-hover:text-brand-sky transition-colors">
                  {service.tabTitle}
                </h2>
                <p className="flex-1 text-sm leading-relaxed text-slate-500">
                  {service.description}
                </p>
                <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-brand-sky">
                  View details <span aria-hidden>→</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* All options — static list, fully visible to search engines */}
        <div className="mt-14 divide-y divide-slate-100 border-t border-slate-100">
          {pricingData.map((service) => (
            <div key={service.id} className="py-8">
              <div className="mb-3 flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-bold text-brand-text">{service.title}</h2>
                  <p className="mt-1 text-sm text-slate-500">{service.description}</p>
                </div>
                <Link
                  href={`/our-services/${service.id}`}
                  className="shrink-0 text-xs font-semibold text-brand-sky hover:underline"
                >
                  Full details →
                </Link>
              </div>
              <ul className="grid gap-2 sm:grid-cols-2">
                {service.priceList.map((opt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sky" />
                    <span>
                      <span className="font-medium">{opt.title}</span>
                      <span className="ml-1.5 text-slate-400">— {opt.duration}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
