"use client";

import { useEffect, useState } from "react";
import { ServiceContent } from "./ServiceContent";
import { pricingData } from "@/services";
import { SERVICE_ICONS } from "@/lib/serviceIcons";

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

  return (
    <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
      {/* Left: vertical tab list */}
      <nav
        aria-label="Visa service categories"
        className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0 lg:sticky lg:top-6 lg:self-start [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {pricingData.map((tab) => {
          const Icon = SERVICE_ICONS[tab.id];
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              aria-selected={isActive}
              role="tab"
              className={`flex shrink-0 cursor-pointer items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-semibold text-left transition-all lg:w-full ${
                isActive
                  ? "bg-brand-sky text-brand-text"
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-brand-text"
              }`}
            >
              {Icon && (
                <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-brand-text" : "text-slate-400"}`} />
              )}
              <span className="whitespace-nowrap lg:whitespace-normal">{tab.tabTitle}</span>
            </button>
          );
        })}
      </nav>

      {/* Right: service content — all rendered in DOM for SEO */}
      <div>
        {pricingData.map((item) => (
          <article
            key={item.id}
            id={item.id}
            role="tabpanel"
            className={active === item.id ? "block animate-fade-in-up" : "hidden"}
          >
            <ServiceContent data={item} />
          </article>
        ))}
      </div>
    </div>
  );
}
