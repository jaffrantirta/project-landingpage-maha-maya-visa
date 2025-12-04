// components/layout/Footer.tsx
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#why-us" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" }, // you can add a real contact section later
];

const serviceLinks = [
  "Tourist Visa",
  "Business Visa",
  "Student Visa",
  "Family Visa",
  "Visa Consultation",
];

export default function Footer() {
  return (
    <footer className="bg-brand-text text-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2 text-2xl font-extrabold text-brand-sky">
              <span>
                <Image src="/logo.png" width={50} height={50} alt="logo" />
              </span>
              <span>MAHAMAYA VISA</span>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Your trusted partner for seamless visa processing services
              worldwide. We make your travel dreams a reality.
            </p>
            <div className="mt-4 flex gap-3">
              {["📘", "🐦", "📷", "💼"].map((icon, idx) => (
                <button
                  key={idx}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-lg text-brand-sky transition-all hover:-translate-y-0.5 hover:bg-brand-sky hover:text-brand-text"
                  aria-label="Social link"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-sky">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block transition-transform hover:translate-x-1 hover:text-brand-sky"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-sky">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#services"
                    className="inline-block transition-transform hover:translate-x-1 hover:text-brand-sky"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-sky">
              Contact Info
            </h3>
            <p className="text-sm text-white/80">
              📍 Jl. Tirtanadi I No.119, Sanur Kauh, Denpasar Selatan, Kota
              Denpasar
              <br />
              Bali, Indonesia 80228
            </p>
            <p className="mt-3 text-sm text-white/80">📞 +62 813-3967-3719</p>
            <p className="mt-1 text-sm text-white/80">
              ✉️ jinguan99@yahoo.com | druzhwisatamenejemen@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-4 text-center text-xs text-white/60">
          © {new Date().getFullYear()} MAHAMAYA VISA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
