import { pricingData } from "@/services";
import Image from "next/image";
import Link from "next/link";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/our-services" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

const socialMedia = [
  { name: "Instagram", icon: "/assets/icons/instagram.png", link: "https://instagram.com/mahamayavisa" },
  { name: "Facebook", icon: "/assets/icons/facebook.png", link: "https://www.facebook.com/mahamayavisaextension" },
];

export default function Footer() {
  return (
    <footer>
      {/* Pre-footer CTA */}
      <div className="bg-brand-text px-4 py-14 text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-sky">
          Ready to Apply?
        </p>
        <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
          Let&apos;s get your visa sorted.
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://wa.me/6281339673719"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-sky px-7 py-3 text-sm font-bold text-brand-text transition-all hover:bg-sky-300"
          >
            <ChatBubbleOvalLeftEllipsisIcon className="h-4 w-4" />
            WhatsApp Us
          </a>
          <Link
            href="/our-services"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-white/15"
          >
            View Services
          </Link>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-[#111] px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="mb-4 flex items-center gap-2.5">
                <Image src="/logo.png" width={36} height={36} alt="Mahamaya Visa" />
                <span className="text-sm font-bold text-brand-sky">MAHAMAYA VISA</span>
              </Link>
              <p className="mb-5 text-xs leading-relaxed text-white/40">
                Your trusted partner for seamless visa processing in Bali, Indonesia.
              </p>
              <div className="flex gap-2">
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 transition-colors hover:border-brand-sky hover:bg-brand-sky/10"
                  >
                    <Image src={social.icon} width={16} height={16} alt={social.name} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-white/30">
                Pages
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/50 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-white/30">
                Services
              </h3>
              <ul className="space-y-2.5">
                {pricingData.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/our-services/${item.id}`}
                      className="text-xs text-white/50 transition-colors hover:text-white"
                    >
                      {item.tabTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-white/30">
                Contact
              </h3>
              <address className="not-italic space-y-3 text-xs text-white/50">
                <div>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-white/25">Main Office</p>
                  <a
                    href="https://maps.app.goo.gl/RoSpkx5aXYPkTmSz7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-relaxed hover:text-white transition-colors"
                  >
                    Jl. Tirtanadi I No.119,<br />Sanur Kauh, Bali 80228
                  </a>
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-white/25">Branch Office</p>
                  <a
                    href="https://maps.app.goo.gl/bF4CJ9goS1EWPy2y8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-relaxed hover:text-white transition-colors"
                  >
                    Singakerta, Kecamatan Ubud,<br />Kabupaten Gianyar, Bali 80571
                  </a>
                </div>
                <p>
                  <a href="https://wa.me/6281339673719" className="hover:text-white transition-colors">
                    +62 813-3967-3719
                  </a>
                </p>
                <p>
                  <a href="mailto:jinguan99@yahoo.com" className="hover:text-white transition-colors">
                    jinguan99@yahoo.com
                  </a>
                </p>
              </address>
            </div>
          </div>

          <div className="mt-10 border-t border-white/8 pt-6 text-center text-[10px] text-white/20">
            © {new Date().getFullYear()} MAHAMAYA VISA. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
