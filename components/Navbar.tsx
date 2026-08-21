"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto mt-6 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/80 px-5 py-4 backdrop-blur-xl md:px-8">
        <a
          href="#top"
          onClick={closeMenu}
          className="text-xl font-bold tracking-wide text-white"
        >
          Shashwat<span className="text-green-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden gap-8 text-sm text-gray-300 md:flex">
          <a
            href="#results"
            className="transition hover:text-green-400"
          >
            Results
          </a>

          <a
            href="#journey"
            className="transition hover:text-green-400"
          >
            Journey
          </a>

          <a
            href="#framework"
            className="transition hover:text-green-400"
          >
            Sales Framework
          </a>

          <a
            href="#contact"
            className="transition hover:text-green-400"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-green-400 hover:text-green-400 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span className="text-xl leading-none">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mx-4 mt-3 rounded-3xl border border-white/10 bg-black/95 p-4 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col">
            <a
              href="#results"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-4 text-sm text-gray-300 transition hover:bg-white/5 hover:text-green-400"
            >
              Results
            </a>

            <a
              href="#journey"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-4 text-sm text-gray-300 transition hover:bg-white/5 hover:text-green-400"
            >
              Journey
            </a>

            <a
              href="#framework"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-4 text-sm text-gray-300 transition hover:bg-white/5 hover:text-green-400"
            >
              Sales Framework
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-4 text-sm text-gray-300 transition hover:bg-white/5 hover:text-green-400"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
