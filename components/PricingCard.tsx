"use client";

import { Clock, Info } from "lucide-react";

export function PricingCard({
  title,
  duration,
  subtitle,
}: {
  title: string;
  duration: string;
  subtitle?: string;
}) {
  const phoneNumber = "6281339673719";
  const encodedMessage = encodeURIComponent(
    `Hello, I am interested in the ${title} service. Could you please provide more information?`
  );

  const handleApply = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-brand-sky hover:shadow-card">
      <h4 className="font-semibold text-brand-text leading-snug">{title}</h4>

      <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
        <Clock className="h-3.5 w-3.5 shrink-0 text-brand-sky" />
        <span>{duration}</span>
      </div>

      {subtitle && (
        <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-400">
          <Info className="h-3 w-3 shrink-0" />
          <span>{subtitle}</span>
        </div>
      )}

      <button
        onClick={handleApply}
        className="mt-4 w-full cursor-pointer rounded-lg bg-brand-sky py-2.5 text-sm font-semibold text-brand-text transition-all hover:bg-sky-300"
      >
        Apply via WhatsApp
      </button>
    </div>
  );
}
