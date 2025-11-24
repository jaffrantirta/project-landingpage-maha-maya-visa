// components/sections/About/AboutHero.tsx

export default function AboutHero() {
  return (
    <section
      id="about-hero"
      className="bg-linear-to-br from-blue-600 to-blue-400 px-4 py-32 text-center text-white"
    >
      <div className="mx-auto max-w-4xl animate-fade-in-up">
        <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
          About Us
        </h1>
        <p className="text-lg opacity-95 sm:text-xl lg:text-2xl">
          Connecting people across borders with trust, expertise, and dedication
        </p>
      </div>
    </section>
  );
}
