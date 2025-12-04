export function PricingCard({
  title,
  price,
  duration,
  featured,
}: {
  title: string;
  price: string;
  duration: string;
  featured?: boolean;
}) {
  const phoneNumber = "6281339673719";
  const encodedMessage = encodeURIComponent(
    `Hello, I am interested in applying for the ${title} service. Could you please provide me with further information?`
  );

  const handleApplyClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div
      className={`p-6 rounded-2xl border transition ${
        featured
          ? "border-sky-400 bg-sky-50 shadow-lg"
          : "border-gray-200 bg-white hover:border-sky-400"
      }`}
    >
      {featured && (
        <span className="text-xs font-bold bg-sky-400 text-white px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}

      <h3 className="text-xl font-bold mt-3">{title}</h3>
      <p className="text-sky-400 text-2xl font-extrabold mt-2">{price}</p>
      <p className="text-gray-500 text-sm">{duration}</p>

      <button
        onClick={handleApplyClick}
        className="mt-5 w-full hover:shadow-card hover:cursor-pointer hover:scale-105 bg-sky-400 text-white py-2 rounded-full font-semibold hover:bg-sky-500 transition"
      >
        Apply
      </button>
    </div>
  );
}
