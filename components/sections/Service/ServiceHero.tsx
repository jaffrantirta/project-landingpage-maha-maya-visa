// components/sections/Contact/ContactHero.tsx

export default function ServiceHero() {
  return (
    <section className="text-center text-white bg-[url('/assets/about.jpg')] bg-cover bg-center bg-no-repeat px-4 py-32">
      <div className="mx-auto max-w-2xl animate-fade-in-up">
        <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
          Our Services
        </h1>
        <p className="mt-4 text-lg opacity-95 sm:text-xl">
          Find the visa services that match your travel or career goals
        </p>
      </div>
    </section>
  );
}
