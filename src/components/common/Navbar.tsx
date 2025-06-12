import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import perfectmeraki_logo from "../../../public/assets/images/perfectmeraki_logo.jpg";
import { AnimatedRevealButton } from "./AnimatedRevealButton";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "about" },
  { name: "Services", href: "services" },
  { name: "Products", href: "user/products" },
  { name: "Sign In", href: "signin" },
  { name: "Sign Up", href: "signup" },
  { name: "Admin", href: "admin/admin-dashboard" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function clsx(...classes: (string | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <nav className="w-full sticky top-0 z-30 text-sm  backdrop-blur-sm border-b border-[#e0d6c5]">
      <div className="mx-auto px-7 flex items-center h-32 justify-around">
        {/* Logo */}
        <Link
          href="/"
          target="blank"
          aria-label="Home"
          className="flex items-center gap-2 shrink-0"
        >
          <Image
            src={perfectmeraki_logo.src}
            width={20}
            height={20}
            alt="perfect_meraki_logo"
            className="w-32 h-28 object-cover rounded-full shadow-lg"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-16 ml-7 flex-1 items-center justify-end">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative inline-block overflow-hidden px-1 py-1 w-fit"
            >
              {/* Static text (cursive on hover, fades out up) */}
              <span className="block transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                <span className="text-base text-[#2d2926] font-sans tracking-tight">
                  {link.name}
                </span>
              </span>

              {/* Animated-in new text (cursive from below) */}
              <span className="absolute left-0 top-full block transition-all duration-300 group-hover:top-0 group-hover:opacity-100 opacity-0">
                <span className=" text-base text-[#63ccbb] font-[cursive] tracking-tight">
                  {link.name}
                </span>
              </span>
            </Link>
          ))}

          <div className="flex items-center gap-4">
            <AnimatedRevealButton href="https://wa.link/k2vcjx">
              Order Now
            </AnimatedRevealButton>

            <Link
              href="https://wa.link/odndf9"
              className="text-3xl rounded-full w-10 h-10 border border-[#2d2926] flex items-center justify-center bg-white shadow-sm hover:bg-[#e0d6c5] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#2d2926] focus:ring-offset-2"
              aria-label="Have Link question?"
            >
              ?
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
          href="https://wa.link/k2vcjx"
          className="rounded-full px-7 py-3 mt-3 bg-[#63ccbb] text-[#2d2926] font-semibold text-lg border border-[#2d2926] shadow transition-all duration-150 hover:bg-[#3ebea6] focus:outline-none focus:ring-2 focus:ring-[#2d2926] focus:ring-offset-2"
          onClick={() => setMenuOpen(false)}
        >
          Order Now
        </Link>
        <Link
          href="/question-jar"
          className="rounded-full w-12 h-12 border border-[#2d2926] flex items-center justify-center bg-white shadow-sm hover:bg-[#e0d6c5] mt-4 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#2d2926] focus:ring-offset-2"
          aria-label="Have Link question?"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="https://ext.same-assets.com/368670237/1330813499.png"
            alt="?"
            width={28}
            height={28}
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
