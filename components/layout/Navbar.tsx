"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DocumentCheckIcon,
  HomeIcon,
  IdentificationIcon,
  PhoneIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/solid";

const navItems = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "Our Services", href: "/our-services", icon: DocumentCheckIcon },
  { label: "About Us", href: "/about-us", icon: IdentificationIcon },
  { label: "Contact Us", href: "/contact-us", icon: PhoneIcon },
];

/* Liquid-glass token for the light mobile pill */
const mobileGlass: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.72)",
  backdropFilter: "blur(32px) saturate(200%)",
  WebkitBackdropFilter: "blur(32px) saturate(200%)",
  /* top edge highlight = light refraction */
  boxShadow:
    "0 8px 32px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(0,0,0,0.04)",
  border: "1px solid rgba(255,255,255,0.55)",
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* ── Desktop: liquid-glass left sidebar ── */}
      <aside
        className="fixed inset-y-0 left-0 z-50 hidden w-60 flex-col border-r border-white/8 bg-brand-text lg:flex"
      >
        {/* Logo */}
        <div className="border-b border-white/[0.06] px-6 py-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" width={40} height={40} alt="Mahamaya Visa logo" />
            <div className="leading-tight">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-sky">
                MAHAMAYA
              </p>
              <p className="text-sm font-bold text-white">VISA</p>
            </div>
          </Link>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 py-5">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-widest text-white/25">
            Navigation
          </p>
          <ul className="space-y-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                      isActive
                        ? "bg-brand-sky/20 text-brand-sky"
                        : "text-white/50 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {/* Bigger icon — 20 px */}
                    <Icon className="h-5 w-5 shrink-0" />
                    {item.label}
                    {isActive && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-sky" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom CTA */}
        <div className="border-t border-white/[0.06] p-4">
          <a
            href="https://wa.me/6281339673719"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-sky py-3 text-sm font-bold text-brand-text transition-all hover:bg-sky-300"
          >
            <ChatBubbleOvalLeftEllipsisIcon className="h-4 w-4" />
            WhatsApp Us
          </a>
          <p className="mt-3 text-center text-[10px] text-white/20">
            © {new Date().getFullYear()} MAHAMAYA VISA
          </p>
        </div>
      </aside>

      {/* ── Mobile: floating liquid-glass pill (Threads-style) ── */}
      <nav className="fixed inset-x-0 bottom-0 z-50 flex justify-center pb-6 lg:hidden">
        <div
          className="flex items-center gap-1 rounded-full px-3 py-2"
          style={mobileGlass}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex h-12 w-12 items-center justify-center rounded-full transition-all ${
                  isActive
                    ? "bg-black/8 text-brand-text"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                <Icon className="h-6 w-6" />
                {isActive && (
                  <span className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand-sky" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
