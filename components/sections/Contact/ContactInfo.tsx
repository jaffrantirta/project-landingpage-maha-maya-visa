import { MapPinIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline";

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
  { day: "Saturday, Sunday & Public Holidays", time: "Closed" },
];

export default function ContactInfo() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="mb-6 text-lg font-bold text-brand-text">Contact Information</h2>

      <div className="space-y-3">
        <a
          href="https://maps.app.goo.gl/RoSpkx5aXYPkTmSz7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all hover:border-brand-sky"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-sky/15">
            <MapPinIcon className="h-5 w-5 text-brand-text" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Main Office</p>
            <p className="mt-0.5 text-sm text-brand-text leading-relaxed">
              Jl. Tirtanadi I No.119, Sanur Kauh,<br />Denpasar Selatan, Bali 80228
            </p>
          </div>
        </a>

        <a
          href="https://maps.app.goo.gl/bF4CJ9goS1EWPy2y8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all hover:border-brand-sky"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-sky/15">
            <MapPinIcon className="h-5 w-5 text-brand-text" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Branch Office — Ubud</p>
            <p className="mt-0.5 text-sm text-brand-text leading-relaxed">
              Singakerta, Kecamatan Ubud,<br />Kabupaten Gianyar, Bali 80571
            </p>
          </div>
        </a>

        <a
          href="mailto:jinguan99@yahoo.com"
          className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all hover:border-brand-sky"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-sky/15">
            <EnvelopeIcon className="h-5 w-5 text-brand-text" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email 1</p>
            <p className="mt-0.5 text-sm text-brand-text">jinguan99@yahoo.com</p>
          </div>
        </a>

        <a
          href="mailto:druzhwisatamenejemen@gmail.com"
          className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all hover:border-brand-sky"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-sky/15">
            <EnvelopeIcon className="h-5 w-5 text-brand-text" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email 2</p>
            <p className="mt-0.5 text-sm text-brand-text">druzhwisatamenejemen@gmail.com</p>
          </div>
        </a>

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <div className="flex gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-sky/15">
              <ClockIcon className="h-5 w-5 text-brand-text" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Business Hours
              </p>
              <dl className="space-y-1.5">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-start justify-between gap-3 text-sm">
                    <dt className="text-slate-500">{h.day}</dt>
                    <dd className="shrink-0 font-semibold text-brand-text">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
