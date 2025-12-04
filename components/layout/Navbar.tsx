// components/layout/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  DocumentCheckIcon,
  HomeIcon,
  IdentificationIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon className="size-6 text-slate-500" />,
  },
  {
    label: "Services",
    href: "/our-services",
    icon: <DocumentCheckIcon className="size-6 text-slate-500" />,
  },
  {
    label: "About Us",
    href: "/about-us",
    icon: <IdentificationIcon className="size-6 text-slate-500" />,
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    icon: <PhoneIcon className="size-6 text-slate-500" />,
  },
];

export default function Navbar() {
  const [isCompact, setIsCompact] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => {
      if (pathname === "/") {
        // On Home: Hide before 100px scroll
        setIsScrolled(window.scrollY > 100);
      } else {
        // On other pages: Always show (no hiding)
        setIsScrolled(true);
      }
    };

    handler(); // Check instantly on mount
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // Enter compact mode while user is scrolling
      setIsCompact(true);

      // Reset timer: when scroll stops for X ms, go back to normal
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsCompact(false);
      }, 350); // adjust duration if you want longer/shorter "compact" feel
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Desktop / Tablet navbar (top, pill) */}
      <nav className="fixed inset-x-0 top-0 z-50 hidden justify-center pointer-events-none lg:flex">
        <div
          className={`pointer-events-auto mx-4 mt-4 flex w-3/4 items-center justify-between rounded-full bg-white/80 backdrop-blur-xl shadow-nav transition-all duration-300 ease-out ${
            isCompact
              ? "py-2 px-6 scale-95 shadow-nav-strong"
              : "py-6 px-8 scale-100"
          }`}
        >
          {/* Logo + Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-extrabold text-brand-sky"
          >
            {" "}
            <span>
              {" "}
              <Image src="/logo.png" width={50} height={50} alt="logo" />{" "}
            </span>{" "}
            <span
              className={`transition-opacity duration-300 ${
                isScrolled ? "opacity-100" : "opacity-0"
              }`}
            >
              {" "}
              MAHAMAYA VISA{" "}
            </span>{" "}
          </Link>

          {/* Desktop nav items */}
          <ul className="flex items-center gap-8 text-sm font-medium text-brand-text">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group relative flex items-center gap-1 transition-colors ${
                      isActive ? "text-slate-600" : "hover:text-slate-600"
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span>{item.label}</span>
                    <span
                      className={`absolute -bottom-1 left-0 block h-0.5 rounded-full bg-slate-600 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile bottom navbar (floating glass pill) */}
      <nav className="fixed inset-x-0 bottom-0 z-50 flex justify-center pointer-events-none lg:hidden">
        <div
          className={`pointer-events-auto mx-4 mb-4 flex max-w-md flex-1 items-center justify-between rounded-full border border-white/20 bg-white/30 backdrop-blur-xl shadow-lg transition-all duration-300 ease-out ${
            isCompact ? "py-2 px-4 scale-75" : "py-3 px-5 scale-100"
          }`}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-1 flex-col items-center justify-center rounded-full px-2 py-1 text-[11px] font-medium transition-all ${
                  isActive
                    ? "bg-white/60 text-slate-600 shadow-sm"
                    : "text-slate-600/80"
                }`}
              >
                <span
                  className={`text-xl transition-transform duration-300 ${
                    isCompact ? "scale-110" : "scale-100"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`mt-1 transition-all duration-300 ${
                    isCompact
                      ? "opacity-0 translate-y-1 hidden"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
