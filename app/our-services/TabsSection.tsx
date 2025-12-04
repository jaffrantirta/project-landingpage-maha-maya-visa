"use client";

import { useState } from "react";
import { ServiceContent } from "./ServiceContent";
import { pricingData } from "@/services";

export default function TabsSection() {
  const [active, setActive] = useState("tourist");

  const activeData = pricingData.find((item) => item.id === active);

  return (
    <>
      {/* Tabs */}
      <div className="flex gap-4 mb-10 px-2 overflow-x-auto no-scrollbar snap-x snap-mandatory justify-start md:justify-center">
        {pricingData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-6 py-3 rounded-full border text-sm font-semibold flex items-center gap-2 transition snap-start whitespace-nowrap
            ${
              active === tab.id
                ? "bg-sky-400 text-white border-sky-400"
                : "bg-white text-gray-600 border-gray-200 hover:border-sky-400 hover:text-sky-400"
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.tabTitle}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      {activeData && <ServiceContent data={activeData} />}
    </>
  );
}
