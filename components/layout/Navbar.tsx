// components/layout/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/our-services" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsScrolled(window.scrollY > 100);
    };
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md animation slide-down transition-shadow ${
        isScrolled ? "shadow-nav-strong" : "shadow-nav"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-extrabold text-brand-sky"
        >
          <span>
            <Image src="/logo.png" width={50} height={50} alt="logo" />
          </span>

          <span
            className={`transition-opacity duration-300 ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            MAHAMAYA VISA
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-10 text-sm font-medium text-brand-text md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative transition-colors hover:text-brand-sky"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 block h-0.5 w-0 bg-brand-sky transition-all group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          className="text-2xl text-brand-text md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="shadow-nav absolute inset-x-0 top-full bg-white/98 px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 text-sm font-medium text-brand-text">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2 hover:bg-slate-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
