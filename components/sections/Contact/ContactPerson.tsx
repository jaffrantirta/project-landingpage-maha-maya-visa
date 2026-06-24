import Image from "next/image";

export default function ContactPerson() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="mb-6 text-lg font-bold text-brand-text">WhatsApp Us</h2>

      <div className="flex flex-col items-center text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50">
          <Image
            src="/logo.png"
            width={44}
            height={44}
            alt="MAHAMAYA VISA"
            className="rounded-xl object-contain"
          />
        </div>

        <p className="font-semibold text-brand-text">MAHAMAYA VISA</p>
        <p className="mb-6 mt-1 text-sm text-slate-400">
          Available Monday–Friday, 8 AM–5 PM (Bali Time)
        </p>

        <a
          href="https://wa.me/6281339673719"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 font-bold text-white transition-all hover:bg-[#22c35e]"
        >
          <Image
            src="/whatsapp_logo.jpg"
            width={20}
            height={20}
            className="rounded-full"
            alt="WhatsApp"
          />
          +62 813-3967-3719
        </a>

        <p className="mt-5 text-xs text-slate-400">
          Tap the button above — we&apos;ll reply as soon as possible.
        </p>
      </div>
    </div>
  );
}
