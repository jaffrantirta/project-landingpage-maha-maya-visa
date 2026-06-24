import {
  BoltIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  BanknotesIcon,
  ChatBubbleLeftRightIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  note?: string;
};

const features: Feature[] = [
  {
    icon: BoltIcon,
    title: "Fast Processing",
    description: "We prioritize speed without compromising accuracy.",
  },
  {
    icon: ShieldCheckIcon,
    title: "100% Secure",
    description: "Your documents and personal data are fully protected.",
  },
  {
    icon: AcademicCapIcon,
    title: "Expert Support",
    description: "Personalized guidance from our experienced team throughout the process.",
  },
  {
    icon: BanknotesIcon,
    title: "Flexible Payment",
    description: "Pay in full, partially, or after the process is completed.",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Free Consultation",
    description: "No-cost consultations to clarify process and requirements.",
  },
  {
    icon: TruckIcon,
    title: "Free Pickup & Delivery",
    description: "We collect and return your documents at no extra cost.",
    note: "Denpasar · Canggu · Kuta · Ubud",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
          {/* Left: sticky heading */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-sky">
              Why Choose Us
            </p>
            <h2 className="text-3xl font-bold text-brand-text sm:text-4xl">
              Everything you need, handled.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              We&apos;ve helped hundreds of clients navigate Indonesia&apos;s visa system with confidence.
            </p>
            <div className="mt-8 h-px w-10 bg-brand-sky" />
          </div>

          {/* Right: feature grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-sky/15">
                    <Icon className="h-5 w-5 text-brand-text" />
                  </div>
                  <h3 className="mb-1 font-semibold text-brand-text">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                  {feature.note && (
                    <p className="mt-1.5 text-xs text-slate-400 italic">{feature.note}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
