// components/sections/WhyUsSection.tsx
type Feature = {
  icon: string;
  title: string;
  description: string;
  additionalInfo?: string;
};

const features: Feature[] = [
  {
    icon: "⚡",
    title: "Fast Processing",
    description: "We prioritize speed without compromising accuracy.",
  },
  {
    icon: "🛡️",
    title: "100% Secure",
    description: "Your personal information and documents are protected.",
  },
  {
    icon: "🌟",
    title: "Expert Support",
    description:
      "Our experienced team provides personalized guidance throughout the entire process.",
  },
  {
    icon: "💰",
    title: "Flexible Payment",
    description:
      "Pay in full upfront, partially or pay after the process is completed.",
  },
  {
    icon: "🗨️",
    title: "Free Consultation",
    description:
      "We offer free consultations to help you understand the process and requirements.",
  },
  {
    icon: "🛵",
    title: "Free Pickup and Delivery Documents",
    description:
      "We offer free pickup and delivery services for your documents.",
    additionalInfo: "(Denpasar, Canggu, Kuta and Ubud)",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="bg-gradient-to-br from-[#f8fbff] to-white py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-brand-text sm:text-4xl lg:text-5xl">
          Why Choose Us
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex gap-4 animate-fade-in-left"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-sky text-2xl text-white transition-transform duration-200 hover:scale-110 hover:rotate-3">
                {feature.icon}
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-brand-text">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
                <p className="text-xs text-slate-500 italic">
                  {feature.additionalInfo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
