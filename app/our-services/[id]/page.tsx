import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { pricingData } from "@/services";
import { SERVICE_ICONS } from "@/lib/serviceIcons";
import { PricingCard } from "@/components/PricingCard";
import Footer from "@/components/layout/Footer";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

/* ─── Per-service SEO metadata ──────────────────────────────────────── */
const SERVICE_META: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  tourist: {
    title: "Tourist Visa Bali — C1 Single Entry & D1 Multiple Entry Indonesia",
    description:
      "Apply for an Indonesia tourist visa with MAHAMAYA VISA in Bali. C1 single-entry (60 days, extendable to KITAS) and D1 multiple-entry up to 2 years. Processing in 7–10 working days.",
    keywords: [
      "tourist visa Indonesia",
      "C1 visa Bali",
      "D1 multiple entry visa Indonesia",
      "tourist visa extension Bali",
      "60 day visa Indonesia",
      "visa on arrival extension Bali",
    ],
  },
  business: {
    title: "Business Visa Bali — C2, D2 & D12 Pre-Investment Visa Indonesia",
    description:
      "Business visa processing in Bali for meetings, conventions, and commercial activities. C2 single-entry, D2 multiple-entry, and D12 pre-investment visa. Fast turnaround with expert support.",
    keywords: [
      "business visa Indonesia",
      "C2 visa Bali",
      "D2 multiple entry visa Indonesia",
      "D12 pre-investment visa",
      "business visa extension Bali",
    ],
  },
  working: {
    title: "Working Visa & KITAS Bali — Remote Worker E33G Visa Indonesia",
    description:
      "Work legally in Indonesia with a KITAS through MAHAMAYA VISA. Offshore working KITAS, KITAS renewal, and remote worker visa E33G. 7–14 working days processing in Bali.",
    keywords: [
      "working visa Indonesia",
      "KITAS Bali",
      "work permit Indonesia",
      "remote worker visa Bali",
      "E33G visa Indonesia",
      "KITAS renewal Bali",
    ],
  },
  family: {
    title: "Family KITAS Bali — Dependent Visa for Spouses & Children Indonesia",
    description:
      "Family KITAS for spouses and children of Indonesian citizens or KITAS holders. 1-year and 2-year options with renewal. Expert processing in Bali, Indonesia.",
    keywords: [
      "family KITAS Indonesia",
      "dependent visa Bali",
      "spouse visa Indonesia",
      "family visa Bali",
      "KITAS family renewal",
    ],
  },
  retirement: {
    title: "Retirement Visa Bali — KITAS & E33F Visa Indonesia",
    description:
      "Retire in Bali with an Indonesia retirement KITAS (E33F). Offshore application and onshore conversion available. KITAS renewal handled by MAHAMAYA VISA.",
    keywords: [
      "retirement visa Bali",
      "retirement KITAS Indonesia",
      "E33F visa Bali",
      "retire in Bali visa",
      "retirement permit Indonesia",
    ],
  },
  others: {
    title: "Volunteer, Event & Internship Visa Bali — C6, C10, C22A Indonesia",
    description:
      "Special category visa processing in Bali: volunteer visa (C6), event invitation visa (C10), and internship visa (C22A). Single-entry and multi-month options available.",
    keywords: [
      "volunteer visa Indonesia C6",
      "event invitation visa Bali C10",
      "internship visa Indonesia C22A",
      "volunteer permit Bali",
      "NGO visa Indonesia",
    ],
  },
};

/* ─── Static params (pre-renders all 6 pages at build time) ─────────── */
export function generateStaticParams() {
  return pricingData.map((s) => ({ id: s.id }));
}

/* ─── Per-service metadata ───────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const meta = SERVICE_META[id];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
    },
    alternates: { canonical: `/our-services/${id}` },
  };
}

/* ─── Page ───────────────────────────────────────────────────────────── */
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = pricingData.find((s) => s.id === id);
  if (!service) notFound();

  const Icon = SERVICE_ICONS[service.id];
  const meta = SERVICE_META[service.id];

  /* JSON-LD: BreadcrumbList */
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mahamayavisa.com/" },
      { "@type": "ListItem", position: 2, name: "Our Services", item: "https://mahamayavisa.com/our-services" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://mahamayavisa.com/our-services/${id}` },
    ],
  };

  /* JSON-LD: Service */
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "MAHAMAYA VISA",
      url: "https://mahamayavisa.com",
      telephone: "+62813-3967-3719",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Tirtanadi I No.119, Sanur Kauh, Denpasar Selatan",
        addressLocality: "Denpasar",
        addressRegion: "Bali",
        postalCode: "80228",
        addressCountry: "ID",
      },
    },
    areaServed: { "@type": "Country", name: "Indonesia" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Options`,
      itemListElement: service.priceList.map((p, i) => ({
        "@type": "Offer",
        position: i + 1,
        name: p.title,
        description: p.duration,
      })),
    },
  };

  /* JSON-LD: FAQPage (from required documents) */
  const faqLd =
    service.requiredDocuments.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.requiredDocuments.map((doc) => ({
            "@type": "Question",
            name: `What documents are required for ${doc.title}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${doc.subtitle} Required documents: ${doc.list.join(", ")}.`,
            },
          })),
        }
      : null;

  const otherServices = pricingData.filter((s) => s.id !== id);

  return (
    <main>
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}

      {/* Page hero */}
      <div className="border-b border-slate-100 bg-slate-50 px-4 pt-10 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-1.5 text-xs text-slate-400">
              <li><Link href="/" className="hover:text-brand-text transition-colors">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/our-services" className="hover:text-brand-text transition-colors">Our Services</Link></li>
              <li aria-hidden>/</li>
              <li className="font-medium text-brand-text">{service.tabTitle}</li>
            </ol>
          </nav>

          <div className="flex items-start gap-4">
            {Icon && (
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-sky/15">
                <Icon className="h-7 w-7 text-brand-text" />
              </div>
            )}
            <div>
              <h1 className="text-2xl font-extrabold text-brand-text sm:text-3xl">
                {service.title}
              </h1>
              <p className="mt-1 text-slate-500">{service.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

          {/* Left: required documents */}
          <div>
            {service.requiredDocuments.length > 0 ? (
              <>
                <h2 className="mb-5 text-xs font-bold uppercase tracking-widest text-brand-sky">
                  Requirements & Eligibility
                </h2>
                <div className="space-y-5">
                  {service.requiredDocuments.map((doc, i) => (
                    <div key={i} className="rounded-xl border border-slate-200 bg-white p-6">
                      <h3 className="mb-1 font-bold text-brand-text">{doc.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-slate-500">{doc.subtitle}</p>
                      <ul className="space-y-2">
                        {doc.list.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sky" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-6 text-sm text-slate-400">
                Contact us directly for the specific documents required for this visa type.
              </div>
            )}

            {/* Other services */}
            <div className="mt-10">
              <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-sky">
                Other Services
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {otherServices.map((s) => {
                  const OtherIcon = SERVICE_ICONS[s.id];
                  return (
                    <Link
                      key={s.id}
                      href={`/our-services/${s.id}`}
                      className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-brand-sky"
                    >
                      {OtherIcon && (
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 group-hover:bg-brand-sky/15 transition-colors">
                          <OtherIcon className="h-4 w-4 text-slate-400 group-hover:text-brand-text transition-colors" />
                        </div>
                      )}
                      <span className="text-sm font-medium text-slate-600 group-hover:text-brand-text transition-colors">
                        {s.tabTitle}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: pricing options */}
          <div className="lg:sticky lg:top-6 lg:self-start">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-sky">
              Available Options
            </h2>
            <div className="space-y-3">
              {service.priceList.map((item, i) => (
                <PricingCard
                  key={i}
                  title={item.title}
                  duration={item.duration}
                  subtitle={item.subtitle}
                />
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-5 text-center">
              <p className="mb-1 text-sm font-semibold text-brand-text">Not sure which to choose?</p>
              <p className="mb-4 text-xs text-slate-500">We offer free consultations to help you decide.</p>
              <a
                href="https://wa.me/6281339673719"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-brand-sky py-3 text-sm font-bold text-brand-text transition-all hover:bg-sky-300"
              >
                Chat with Us
              </a>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12 border-t border-slate-100 pt-6">
          <Link
            href="/our-services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-brand-text"
          >
            <ChevronLeftIcon className="h-4 w-4" />
            All Services
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
