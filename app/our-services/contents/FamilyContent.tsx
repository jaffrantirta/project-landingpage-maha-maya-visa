// app/our-services/contents/FamilyContent.tsx

import { PricingCard } from "@/components/PricingCard";

export function FamilyContent() {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {/* Left */}
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <span className="text-5xl">👨‍👩‍👧</span> Family Visa Services
        </h2>

        <p className="text-gray-600 leading-relaxed">
          We reunite families by helping with dependent visas, spouse visas,
          sponsorship applications, and long-term relocation processing.
        </p>

        <div>
          <h3 className="text-lg font-semibold mb-2">Required Documents</h3>
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>Passport (6+ months)</li>
            <li>Proof of family relationship</li>
            <li>Financial support documents</li>
            <li>Medical results</li>
            <li>Police clearance</li>
            <li>Marriage or birth certificate</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">What We Offer</h3>
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>Spouse & dependent visa support</li>
            <li>Parent sponsorship assistance</li>
            <li>Family reunification guidance</li>
            <li>Long-term relocation advice</li>
            <li>Complete assistance until approval</li>
          </ul>
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-6">
        <PricingCard title="Single" price="$399" duration="Per Applicant" />
        <PricingCard
          title="Family"
          price="$899"
          duration="Up to 4 Members"
          featured
        />
        <PricingCard
          title="Extended"
          price="$1,499"
          duration="Up to 8 Members"
        />
      </div>
    </div>
  );
}
