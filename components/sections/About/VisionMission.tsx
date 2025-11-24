// components/sections/About/VisionMission.tsx

const cards = [
  {
    icon: "🔭",
    title: "Our Vision",
    description:
      "To become the world's most trusted and innovative visa processing agency, breaking down barriers and connecting people across borders. We envision a future where international travel is seamless, accessible, and stress-free for everyone.",
  },
  {
    icon: "🎯",
    title: "Our Mission",
    description:
      "To provide fast, reliable, and transparent visa processing services while delivering exceptional customer experiences. We simplify complex visa procedures and offer expert guidance at every step.",
  },
];

export default function VisionMission() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        {cards.map((card, index) => (
          <div
            key={card.title}
            className="rounded-3xl bg-white p-10 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-blue-300/50 animate-fade-in-up"
            style={{ animationDelay: `${0.15 * (index + 1)}s` }}
          >
            <div className="mb-4 text-6xl animate-bounce-soft">{card.icon}</div>

            <h3 className="mb-3 text-2xl font-bold text-gray-900">
              {card.title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
