"use client";

import { useEffect, useState } from "react";
import { ServiceContent } from "./ServiceContent";
import { pricingData } from "@/services";

export default function TabsSection() {
  const [active, setActive] = useState("tourist");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && pricingData.some((item) => item.id === hash)) {
      setActive(hash);
    }
  }, []);

  const handleTabChange = (id: string) => {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  const activeData = pricingData.find((item) => item.id === active);

  return (
    <>
      {/* Tabs */}
      <div
        className="
          flex gap-4 mb-10 px-2
          overflow-x-auto snap-x snap-mandatory
          justify-start md:justify-center
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {pricingData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-6 py-3 cursor-pointer rounded-full border text-sm font-semibold flex items-center gap-2 transition snap-start whitespace-nowrap
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
      {activeData && (
        <div key={activeData.id} className="animate-fade-in-up">
          <ServiceContent data={activeData} />
        </div>
      )}
    </>
  );
}
