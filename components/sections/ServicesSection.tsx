// components/sections/ServicesSection.tsx
const services = [
  {
    icon: "✈️",
    title: "Tourist Visa",
    description:
      "Hassle-free tourist visa processing for your dream vacation destinations worldwide.",
  },
  {
    icon: "💼",
    title: "Business Visa",
    description:
      "Fast-track business visa services to help you expand your global opportunities.",
  },
  {
    icon: "🎓",
    title: "Student Visa",
    description:
      "Complete support for student visa applications to study abroad programs.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Visa",
    description:
      "Reunite with your loved ones through our family visa assistance services.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-24">
      <h2 className="text-center text-3xl font-bold text-brand-text sm:text-4xl lg:text-5xl">
        Our Services
      </h2>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm transition-all duration-200 hover:-translate-y-2 hover:shadow-card"
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <div className="mb-4 text-4xl animate-bounce-soft">
              {service.icon}
            </div>
            <h3 className="mb-2 text-xl font-semibold text-brand-text">
              {service.title}
            </h3>
            <p className="text-sm text-slate-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
