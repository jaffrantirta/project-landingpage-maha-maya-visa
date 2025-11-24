// components/sections/WhyUsSection.tsx
type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: "⚡",
    title: "Fast Processing",
    description:
      "We prioritize speed without compromising accuracy, getting your visa approved quickly.",
  },
  {
    icon: "🛡️",
    title: "100% Secure",
    description:
      "Your personal information and documents are protected with bank-level security.",
  },
  {
    icon: "🌟",
    title: "Expert Support",
    description:
      "Our experienced team provides personalized guidance throughout the entire process.",
  },
  {
    icon: "💯",
    title: "High Success Rate",
    description:
      "95% visa approval rate thanks to our thorough application review process.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    description:
      "No hidden fees. Clear pricing structure with all costs disclosed upfront.",
  },
  {
    icon: "🌍",
    title: "Global Coverage",
    description:
      "We process visas for over 150 countries across all continents.",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="bg-linear-to-br from-[#f8fbff] to-white py-24"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
