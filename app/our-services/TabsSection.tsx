"use client";

import { useState } from "react";
import { TouristContent } from "./contents/TouristContent";
import { BusinessContent } from "./contents/BusinessContent";
import { StudentContent } from "./contents/StudentContent";
import { FamilyContent } from "./contents/FamilyContent";

const tabs = [
  { id: "tourist", label: "Tourist Visa", icon: "✈️" },
  { id: "business", label: "Business Visa", icon: "💼" },
  { id: "retirement", label: "Retirement Visa", icon: "👴👵" },
  { id: "family", label: "Family Visa", icon: "👨‍👩‍👧" },
  { id: "working", label: "Working Visa", icon: "👷" },
];

export default function TabsSection() {
  const [active, setActive] = useState("tourist");

  return (
    <>
      {/* Tabs */}
      <div className="flex gap-4 mb-10 px-2 overflow-x-auto no-scrollbar snap-x snap-mandatory justify-start md:justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-6 py-3 rounded-full border text-sm font-semibold flex items-center gap-2 transition snap-start whitespace-nowrap
        ${
          active === tab.id
            ? "bg-sky-400 text-white border-sky-400"
            : "bg-white text-gray-600 border-gray-200 hover:border-sky-400 hover:text-sky-400"
        }
      `}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-8">
        {active === "tourist" && <TouristContent />}
        {active === "business" && <BusinessContent />}
        {active === "retirement" && <StudentContent />}
        {active === "family" && <FamilyContent />}
        {active === "working" && <FamilyContent />}
      </div>
    </>
  );
}
