"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why CWS" },
  { href: "#process", label: "How it works" },
  { href: "#stats", label: "Impact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-bg/70 border-b border-line/80"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <a href="#" className="group flex items-center" aria-label="Company Wellness Solutions — home">
          <Logo size={38} variant="stacked" className="transition-transform group-hover:-translate-y-0.5" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm text-muted transition-colors hover:text-fg"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-mint transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgba(244,244,241,0.45)]"
          >
            Book a discovery call
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-line"
          >
            <span className="space-y-1.5">
              <span className={`block h-px w-5 bg-fg transition-all ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`block h-px w-5 bg-fg transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-5 bg-fg transition-all ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-b border-line transition-[max-height,opacity] duration-500 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-base text-fg/90"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-fg px-4 py-3 text-sm font-medium text-bg"
          >
            Book a discovery call
          </a>
        </div>
      </div>
    </header>
  );
}
