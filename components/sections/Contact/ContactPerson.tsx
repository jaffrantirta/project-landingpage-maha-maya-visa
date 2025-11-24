// components/sections/Contact/ContactPerson.tsx

export default function ContactPerson() {
  return (
    <div className="rounded-2xl bg-linear-to-br from-blue-600 to-blue-400 p-10 text-white shadow-xl animate-fade-in-up">
      <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-white text-5xl text-gray-800 shadow-lg">
        👤
      </div>

      <h2 className="text-center text-2xl font-bold">Sarah Johnson</h2>
      <p className="mt-1 text-center text-blue-100">
        Director of Client Relations
      </p>

      <div className="mt-6 space-y-3 text-center text-blue-50">
        <div className="flex items-center justify-center gap-2">
          <span>📧</span>
          <span>sarah.johnson@visago.com</span>
        </div>

        <div className="flex items-center justify-center gap-2">
          <span>📱</span>
          <span>+1 (555) 234-5678</span>
        </div>

        <div className="flex items-center justify-center gap-2">
          <span>💼</span>
          <span>LinkedIn: /in/sarahjohnson</span>
        </div>
      </div>

      <p className="mt-8 border-t border-white/30 pt-6 text-sm leading-relaxed text-blue-100">
        Sarah has over 15 years of experience in visa processing and
        international relations. She personally oversees all major client
        accounts and ensures smooth visa application processes.
      </p>
    </div>
  );
}
