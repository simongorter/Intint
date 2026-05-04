"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { href: "#diensten", label: "Over mij" },
  { href: "#tarieven", label: "Tarieven" },
  { href: "#werkwijze", label: "Werkwijze" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-bg/95 backdrop-blur-md border-b border-card-border shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#" className="flex items-center">
          <Image src="/logo.svg" alt="Intint logo" width={220} height={64} priority />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="px-4 py-2 text-sm font-medium text-sub hover:text-accent transition-colors rounded-xl">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="glow-btn btn-3d ml-4 px-6 py-2.5 text-bg text-sm font-semibold rounded-2xl">
            Afspraak maken
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
          <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-bg backdrop-blur-md border-b border-card-border px-6 pb-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-4 text-sm font-medium text-sub hover:text-accent transition-colors border-b border-card-border last:border-0">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="glow-btn btn-3d mt-4 block text-center py-3 text-bg font-semibold rounded-2xl text-sm">
            Afspraak maken
          </a>
        </div>
      )}
    </nav>
  );
}
