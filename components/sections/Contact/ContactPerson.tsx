// components/sections/Contact/ContactPerson.tsx

import Image from "next/image";

export default function ContactPerson() {
  return (
    <div className="rounded-2xl text-center bg-gradient-to-br from-blue-600 to-blue-400 p-10 text-white shadow-xl animate-fade-in-up">
      <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-white text-5xl text-gray-800 shadow-lg">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="Whatsapp Logo"
          className="h-full w-full rounded-full object-contain"
        />
      </div>

      <h2 className="text-center text-2xl font-bold">WhatsApp us!</h2>
      <p className="mt-1 text-center text-blue-100">
        We're here to help with all your visa processing needs
      </p>

      <div className="mt-6 space-y-3 text-center text-blue-50">
        <a href="https://wa.me/6281339673719">
          <div className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600  p-3 rounded-full">
            <span>
              <Image
                src="/whatsapp_logo.jpg"
                width={20}
                height={20}
                className="rounded-full"
                alt="whatsapp logo"
              />
            </span>
            <span className="">+62 813-3967-3719</span>
          </div>
        </a>
      </div>

      <p className="mt-8 border-t border-white/30 pt-6 text-sm leading-relaxed text-blue-100">
        We're here to help you with any questions or concerns you may have.
      </p>
    </div>
  );
}
