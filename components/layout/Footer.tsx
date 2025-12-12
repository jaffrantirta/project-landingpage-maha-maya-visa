// components/layout/Footer.tsx
import { pricingData } from "@/services";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/our-services" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

const socialMedia = [
  {
    icon: "/assets/icons/instagram.png",
    link: "https://instagram.com/mahamayavisa",
  },
  {
    icon: "/assets/icons/facebook.png",
    link: "https://www.facebook.com/mahamayavisaextension",
  },
];

const serviceLinks = [
  "Tourist",
  "Business",
  "Retirement Visa",
  "Family Visa",
  "Working Visa",
];

export default function Footer() {
  return (
    <footer className="bg-brand-text text-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2 text-xl font-extrabold text-brand-sky">
              <span>
                <Image src="/logo.png" width={50} height={50} alt="logo" />
              </span>
              <span>MAHAMAYA VISA</span>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Your trusted partner for seamless visa processing services.
            </p>
            <div className="mt-4 flex gap-3">
              {socialMedia.map((icon, link) => (
                <a
                  href={icon.link}
                  key={link}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-lg text-brand-sky transition-all hover:-translate-y-0.5 hover:bg-brand-sky hover:text-brand-text"
                  aria-label="Social link"
                >
                  <Image src={icon.icon} width={20} height={20} alt="icon" />
                </a>
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
              {pricingData.map((item: any) => (
                <li key={item.id}>
                  <Link
                    href={"/our-services#" + item.id}
                    className="inline-block transition-transform hover:translate-x-1 hover:text-brand-sky"
                  >
                    {item.title}
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
            <p>
              <a
                href="https://maps.app.goo.gl/RoSpkx5aXYPkTmSz7?g_st=ic"
                className="text-sm text-white/80 hover:underline"
              >
                📍 Jl. Tirtanadi I No.119, Sanur Kauh, Denpasar Selatan, Kota
                Denpasar
                <br />
                Bali, Indonesia 80228
              </a>
            </p>
            <p>
              <a
                href="https://wa.me/6281339673719"
                className="mt-3 text-sm text-white/80 hover:underline"
              >
                📞 +62 813-3967-3719
              </a>
            </p>
            <p>
              <a
                href="mailto:jinguan99@yahoo.com"
                className="mt-1 text-sm text-white/80 hover:underline"
              >
                ✉️ jinguan99@yahoo.com
              </a>
            </p>
            <p>
              <a
                href="mailto:druzhwisatamenejemen@gmail.com"
                className="mt-1 text-sm text-white/80 hover:underline"
              >
                ✉️ druzhwisatamenejemen@gmail.com
              </a>
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
