// app/our-services/contents/StudentContent.tsx

import { PricingCard } from "@/components/PricingCard";

export function StudentContent() {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {/* Left */}
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <span className="text-5xl">🎓</span> Student Visa Services
        </h2>

        <p className="text-gray-600 leading-relaxed">
          We support students applying to institutions worldwide. From
          university guidance to interview prep, our team ensures you are ready
          for a successful academic journey.
        </p>

        <div>
          <h3 className="text-lg font-semibold mb-2">Required Documents</h3>
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>Passport</li>
            <li>Acceptance letter from institution</li>
            <li>Proof of tuition payment</li>
            <li>Financial statements</li>
            <li>Academic transcripts</li>
            <li>English test results (IELTS/TOEFL)</li>
            <li>Medical exam results</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">What We Offer</h3>
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>University-specific visa coaching</li>
            <li>Scholarship support</li>
            <li>F-1, J-1, M-1 visa guidance</li>
            <li>Interview coaching</li>
            <li>Post-study visa advice</li>
          </ul>
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-6">
        <PricingCard title="Standard" price="$249" duration="10–15 days" />
        <PricingCard
          title="Express"
          price="$449"
          duration="5–7 days"
          featured
        />
        <PricingCard title="Premium" price="$699" duration="Full Package" />
      </div>
    </div>
  );
}
