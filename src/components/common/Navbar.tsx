"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

const navLinks = [
  { name: "My Guide", href: "/my-guide-overview" },
  { name: "Enlighten", href: "/enlighten" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Education", href: "/education" },
  { name: "Virtual Office", href: "/virtual-office" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-30 text-sm backdrop-blur-sm border-b border-[#e0d6c5]">
      <div className="mx-auto px-7 flex items-center h-32 justify-around">
        {/* Logo */}
        <Link
          href="https://google.com"
          aria-label="Home"
          className="flex items-center gap-2 shrink-0"
        >
          <img
            src="https://ext.same-assets.com/368670237/9541035.svg"
            alt="Five Pathways Logo"
            className="w-9 h-9"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-7 ml-7 flex-1 items-center justify-end">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm group relative px-0.5 py-1 font-sans text-base tracking-tight text-[#2d2926] hover:text-[#63ccbb] transition-colors duration-200 after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-[#63ccbb] after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:rounded"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center gap-4">
            <Link
              href="/virtual-office"
              className="text-sm shadow-2xl rounded-full px-5 py-2 bg-[#63ccbb] text-[#2d2926] font-semibold text-base border border-[#2d2926] shadow transition-all duration-150 hover:bg-[#3ebea6] focus:outline-none focus:ring-2 focus:ring-[#2d2926] focus:ring-offset-2"
            >
              Schedule Link meeting
            </Link>
            <Link
              href="/question-jar"
              className="rounded-full w-10 h-10 border border-[#2d2926] flex items-center justify-center bg-white shadow-sm hover:bg-[#e0d6c5] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#2d2926] focus:ring-offset-2"
              aria-label="Have Link question?"
            >
              <img
                src="https://ext.same-assets.com/368670237/1330813499.png"
                alt="?"
                className="w-5 h-5"
              />
            </Link>
            <button
              className="lg:hidden ml-2 focus:outline-none flex items-center justify-center"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="relative w-8 h-8 flex flex-col justify-center items-center">
                <span
                  className={clsx(
                    "absolute h-0.5 w-7 bg-[#2d2926] rounded-full transition-all duration-300",
                    menuOpen ? "rotate-45 top-4" : "-translate-y-2"
                  )}
                />
                <span
                  className={clsx(
                    "absolute h-0.5 w-7 bg-[#2d2926] rounded-full transition-all duration-300",
                    menuOpen ? "opacity-0 left-3" : ""
                  )}
                />
                <span
                  className={clsx(
                    "absolute h-0.5 w-7 bg-[#2d2926] rounded-full transition-all duration-300",
                    menuOpen ? "-rotate-45 bottom-4" : "translate-y-2"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-nav"
        className={clsx(
          "lg:hidden fixed inset-0 z-40 bg-[#faf9f0] bg-opacity-95 backdrop-blur pt-24 transition-all duration-500 flex flex-col items-center gap-8 text-2xl font-semibold text-[#2d2926] origin-top",
          menuOpen
            ? "visible scale-100 opacity-100"
            : "invisible scale-95 opacity-0 pointer-events-none"
        )}
        style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-[#63ccbb] transition-colors duration-200 mb-2 focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/virtual-office"
          className="rounded-full px-7 py-3 mt-3 bg-[#63ccbb] text-[#2d2926] font-semibold text-lg border border-[#2d2926] shadow transition-all duration-150 hover:bg-[#3ebea6] focus:outline-none focus:ring-2 focus:ring-[#2d2926] focus:ring-offset-2"
          onClick={() => setMenuOpen(false)}
        >
          Schedule Link meeting
        </Link>
        <Link
          href="/question-jar"
          className="rounded-full w-12 h-12 border border-[#2d2926] flex items-center justify-center bg-white shadow-sm hover:bg-[#e0d6c5] mt-4 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#2d2926] focus:ring-offset-2"
          aria-label="Have Link question?"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="https://ext.same-assets.com/368670237/1330813499.png"
            alt="?"
            className="w-7 h-7"
          />
        </Link>
      </div>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-30 bg-black bg-opacity-10 transition-opacity duration-500 lg:hidden"
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
