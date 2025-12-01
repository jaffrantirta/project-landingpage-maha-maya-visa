// components/sections/About/VisionMission.tsx

const cards = [
  {
    icon: "",
    title: "Our Vision & Mission",
    description: `Mahamaya Visa's vision and mission are "Partnering with Government, Providing Solutions." With this vision and mission, the company aims to be a partner to the government, providing visa coordination services for international tourists visiting Indonesia. Mahamaya Visa also strives to consistently provide the best solutions and services to its clients.`,
  },
];

export default function VisionMission() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-10 md:grid-cols-1">
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
