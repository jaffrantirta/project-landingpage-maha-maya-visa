import { PricingCard } from "@/components/PricingCard";
import { SERVICE_ICONS } from "@/lib/serviceIcons";

export function ServiceContent({ data }: { data: any }) {
  const Icon = SERVICE_ICONS[data.id];

  return (
    <div className="grid gap-10 xl:grid-cols-[1fr_360px]">
      {/* Left: description + required documents */}
      <div>
        <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-6">
          {Icon && (
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-sky/15">
              <Icon className="h-6 w-6 text-brand-text" />
            </div>
          )}
          <div>
            <h2 className="text-xl font-bold text-brand-text">{data.title}</h2>
            <p className="text-sm text-slate-500">{data.description}</p>
          </div>
        </div>

        {data.requiredDocuments.length > 0 ? (
          <div className="space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-sky">
              Required Documents
            </h3>
            {data.requiredDocuments.map((doc: any, i: number) => (
              <div key={i} className="rounded-xl border border-slate-100 p-5">
                <h4 className="mb-1 font-semibold text-brand-text">{doc.title}</h4>
                <p className="mb-4 text-sm text-slate-500 leading-relaxed">{doc.subtitle}</p>
                <ul className="space-y-2">
                  {doc.list.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sky" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-5 text-sm text-slate-400">
            Contact us for required documents and details for this visa type.
          </div>
        )}
      </div>

      {/* Right: pricing options */}
      <div>
        <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-brand-sky">
          Available Options
        </h3>
        <div className="space-y-3">
          {data.priceList.map((item: any, i: number) => (
            <PricingCard
              key={i}
              title={item.title}
              duration={item.duration}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
