// components/sections/Contact/ContactHero.tsx

export default function ContactHero() {
  return (
    <section className="text-center text-white bg-[url('/assets/about.jpg')] bg-cover bg-center bg-no-repeat px-4 py-32">
      <div className="mx-auto max-w-2xl animate-fade-in-up">
        <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg opacity-95 sm:text-xl">
          We're here to help with all your visa processing needs
        </p>
      </div>
    </section>
  );
}
