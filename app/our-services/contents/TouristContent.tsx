import { PricingCard } from "@/components/PricingCard";

export function TouristContent() {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <span className="text-5xl">✈️</span> Tourist Visa Services
        </h2>

        <p className="text-gray-600 leading-relaxed">
          We can help you plan an unforgettable holiday in Indonesia. Our team
          of experts will assist you in preparing the required documents,
          filling out the application form, and scheduling an appointment at the
          Indonesian embassy or consulate. Let us help you plan your dream
          holiday in Indonesia today!
        </p>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            Required Documents for C1
          </h3>
          <ul className="text-gray-600 list-disc ml-5 space-y-1">
            <li>Valid passport (at least 6 months validity)</li>
            <li>Passport-size photos</li>
            <li>Travel itinerary or flight itinerary</li>
            <li>
              Bank statement or proof of sufficient funds within the last 3
              months (min. USD 2000 or equivalent)
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Required Documents for D1
          </h3>
          <ul className="text-gray-600 list-disc ml-5 space-y-1">
            <li>Valid passport (at least 6 months validity)</li>
            <li>Passport-size photos</li>
            <li>Travel itinerary or flight itinerary</li>
            <li>
              Bank statement or proof of sufficient funds within the last 3
              months (min. USD 2000 or equivalent)
            </li>
            <li>Curiculum vitae (CV) or resume (in English or Indonesian)</li>
          </ul>
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-6">
        <PricingCard
          title="Standard | Express - C1 Visa"
          price="IDR 2.700.000 | IDR 4.200.000"
          duration="7 - 10 working days | 5 - 6 working days"
        />
        <PricingCard
          title="Extension - C1 Visa"
          price="IDR 850.000"
          duration="2 - 4 working days"
        />
        <PricingCard
          title="Standard | Express - D1 Visa (1 Year)"
          price="IDR 5.500.000 | IDR 7.000.000"
          duration="7 - 10 working days | 5 - 6 working days"
        />
        <PricingCard
          title="Extension - D1 Visa (1 Year)"
          price="IDR -"
          duration="3 - 5 working days"
        />
        <PricingCard
          title="Standard | Express - D1 Visa (2 Year)"
          price="IDR 9.000.000 | IDR 10.500.000"
          duration="7 - 10 working days | 5 - 6 working days"
        />
        <PricingCard
          title="Extension - D1 Visa (2 Year)"
          price="IDR -"
          duration="3 - 5 working days"
        />
      </div>
    </div>
  );
}
