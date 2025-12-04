// components/sections/About/AboutHero.tsx

export default function AboutHero() {
  return (
    <section
      id="about-hero"
      className="text-center text-white bg-[url('/assets/about.jpg')] bg-cover bg-center bg-no-repeat px-4 py-32"
    >
      <div className="mx-auto max-w-4xl animate-fade-in-up">
        <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
          About Us
        </h1>
      </div>
    </section>
  );
}
