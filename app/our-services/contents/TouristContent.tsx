import { PricingCard } from "@/components/PricingCard";

export function TouristContent() {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <span className="text-5xl">✈️</span> Tourist Visa Services
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Visit over 150 countries with our streamlined tourist visa assistance.
          We handle paperwork, review documents, and guide you from start to
          finish.
        </p>

        <div>
          <h3 className="text-lg font-semibold mb-2">Required Documents</h3>
          <ul className="text-gray-600 list-disc ml-5 space-y-1">
            <li>Valid passport (6+ months validity)</li>
            <li>Passport-size photos</li>
            <li>Visa application form</li>
            <li>Travel itinerary</li>
            <li>Hotel booking</li>
            <li>Travel insurance</li>
            <li>Bank statements (6 months)</li>
          </ul>
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-6">
        <PricingCard title="Standard" price="$199" duration="7-10 days" />
        <PricingCard
          title="Express"
          price="$349"
          duration="3-5 days"
          featured
        />
        <PricingCard title="Rush" price="$599" duration="1-2 days" />
      </div>
    </div>
  );
}
