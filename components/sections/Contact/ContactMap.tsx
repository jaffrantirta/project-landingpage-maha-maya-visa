const offices = [
  {
    label: "Main Office",
    name: "PT Druzh Wisata Menejemen",
    address: "Jl. Tirtanadi I No.119, Sanur Kauh, Denpasar Selatan, Bali 80228",
    mapsHref: "https://maps.app.goo.gl/RoSpkx5aXYPkTmSz7",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.8601017092824!2d115.2540305!3d-8.704832699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241c005432759%3A0x55ef0add75503748!2sPT%20Druzh%20Wisata%20Menejemen!5e0!3m2!1sen!2sid!4v1764598873874!5m2!1sen!2sid",
  },
  {
    label: "Branch Office",
    name: "Mahamaya Visa Extension Ubud",
    address: "Singakerta, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571",
    mapsHref: "https://maps.app.goo.gl/bF4CJ9goS1EWPy2y8",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.5!2d115.2558!3d-8.5196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d00360b3907%3A0x4502ce3b0973f886!2sMahamaya+Visa+Extension+Ubud!5e0!3m2!1sen!2sid!4v1764598873874!5m2!1sen!2sid",
  },
];

export default function ContactMap() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {offices.map((office) => (
        <div
          key={office.label}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
        >
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 px-5 py-4">
            <div>
              <div className="mb-0.5 flex items-center gap-2">
                <span className="rounded-md bg-brand-sky/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-text">
                  {office.label}
                </span>
              </div>
              <h2 className="mt-1.5 font-bold text-brand-text">{office.name}</h2>
              <p className="mt-0.5 text-xs text-slate-400">{office.address}</p>
            </div>
            <a
              href={office.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-xs font-semibold text-brand-sky hover:underline"
            >
              Open Maps →
            </a>
          </div>
          <div className="h-[280px] w-full">
            <iframe
              src={office.embedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${office.name} — Location Map`}
              className="h-full w-full border-0"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
