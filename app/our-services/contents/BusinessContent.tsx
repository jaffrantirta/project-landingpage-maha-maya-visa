// app/our-services/contents/BusinessContent.tsx

import { PricingCard } from "@/components/PricingCard";

export function BusinessContent() {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {/* Left Section */}
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <span className="text-5xl">💼</span> Business Visa Services
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Designed for professionals, entrepreneurs, and companies who need
          reliable, fast business visa solutions. We manage documentation,
          appointment scheduling, and business invitation requirements.
        </p>

        <div>
          <h3 className="text-lg font-semibold mb-2">Required Documents</h3>
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>Passport (6+ months validity)</li>
            <li>Business invitation letter</li>
            <li>Company registration documents</li>
            <li>Proof of business activities</li>
            <li>Recent passport photo</li>
            <li>Bank statements</li>
            <li>Travel itinerary</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">What We Offer</h3>
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>Corporate visa management</li>
            <li>Priority processing for urgent meetings</li>
            <li>Multi-entry visa support</li>
            <li>Dedicated business support specialist</li>
            <li>Document preparation</li>
          </ul>
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-6">
        <PricingCard title="Standard" price="$299" duration="7–10 days" />
        <PricingCard
          title="Express"
          price="$499"
          duration="3–5 days"
          featured
        />
        <PricingCard title="Rush" price="$799" duration="1–2 days" />
      </div>
    </div>
  );
}
