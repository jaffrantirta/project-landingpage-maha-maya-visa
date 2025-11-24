// components/sections/About/AboutDescription.tsx

export default function AboutDescription() {
  return (
    <section className="-mt-16 px-4 pb-12">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-xl animate-fade-in-up sm:p-14">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Your Trusted Visa Partner Since 2010
        </h2>

        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-gray-600 sm:text-xl">
          VisaGo is a leading visa processing agency dedicated to making
          international travel accessible for everyone. With over a decade of
          experience, we've successfully processed more than 50,000 visa
          applications for clients across the globe.
          <br />
          <br />
          Our team of experienced professionals understands the complexities of
          visa procedures and works tirelessly to ensure your application is
          handled with precision and care. We pride ourselves on our high
          success rate, transparent processes, and exceptional customer service.
        </p>
      </div>
    </section>
  );
}
