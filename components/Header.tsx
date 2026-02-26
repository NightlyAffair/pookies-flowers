"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/vase-arrangements", label: "Vase Arrangements" },
    { href: "/custom-bouquets", label: "Custom Bouquets" },
  ];

  return (
    <header className="bg-[#0F2044] text-[#F5EDE0] py-1 px-6 md:px-12 relative z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <div className="h-24 w-24 overflow-hidden flex items-center justify-center">
            <img
              src="/images/Logo/logo.jpg"
              alt="Pookie's Flowers"
              className="h-40 w-40 object-cover object-center"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8" style={{ fontFamily: "'Lora', serif" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#E88AB5] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden p-2 hover:text-[#E88AB5] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0F2044] border-t border-[#F5EDE0]/10 shadow-lg">
          <div className="flex flex-col py-4 px-6" style={{ fontFamily: "'Lora', serif" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 hover:text-[#E88AB5] transition-colors border-b border-[#F5EDE0]/10 last:border-b-0"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
