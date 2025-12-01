// components/sections/Contact/ContactMap.tsx

export default function ContactMap() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-xl animate-fade-in-up">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-gray-900">
        <span className="text-3xl"></span> Find Us Here
      </h2>

      <div className="h-[450px] w-full overflow-hidden rounded-xl bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.8601017092824!2d115.2540305!3d-8.704832699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241c005432759%3A0x55ef0add75503748!2sPT%20Druzh%20Wisata%20Menejemen!5e0!3m2!1sen!2sid!4v1764598873874!5m2!1sen!2sid"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
          className="h-full w-full border-0"
        ></iframe>
      </div>
    </div>
  );
}
