// components/sections/Contact/ContactMap.tsx

export default function ContactMap() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-xl animate-fade-in-up">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-gray-900">
        <span className="text-3xl">📍</span> Find Us Here
      </h2>

      <div className="h-[450px] w-full overflow-hidden rounded-xl bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.682523040532!2d-73.98823492346389!3d40.748441735890935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1704123456789!5m2!1sen!2sus"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
          className="h-full w-full border-0"
        ></iframe>
      </div>
    </div>
  );
}
