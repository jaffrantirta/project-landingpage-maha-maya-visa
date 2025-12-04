import { PricingCard } from "@/components/PricingCard";

export function ServiceContent({ data }: any) {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {/* Left Column */}
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <span className="text-5xl">{data.icon}</span> {data.title}
        </h2>

        <p className="text-gray-600 leading-relaxed">{data.description}</p>

        {data.requiredDocuments.map((doc: any, i: number) => (
          <div key={i}>
            <h3 className="text-lg font-semibold mb-2">{doc.title}</h3>
            <ul className="text-gray-600 list-disc ml-5 space-y-1">
              {doc.list.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Right Column — Pricing */}
      <div className="space-y-6">
        {data.priceList.map((item: any, i: number) => (
          <PricingCard
            key={i}
            title={item.title}
            price={item.price}
            duration={item.duration}
          />
        ))}
      </div>
    </div>
  );
}
