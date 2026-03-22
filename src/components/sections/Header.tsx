"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-(--color-bg-base)/95 backdrop-blur-xl border-b border-(--color-border)"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-(--layout-max-width) flex items-center justify-between px-6 py-5 lg:px-20">
        <a href="#">
          <Image
            src="/logo.png"
            alt="Four Pixels — Agência Digital"
            width={360}
            height={100}
            className={`w-auto transition-all duration-300 ${scrolled ? "h-8" : "h-20"}`}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-(--color-text-secondary) transition-colors duration-200 hover:text-(--color-text-primary)"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-2xl px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-(--color-accent-orange)/30 hover:brightness-110"
            style={{ background: "var(--gradient-primary)" }}
          >
            Solicitar Orçamento
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-(--color-text-primary) transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-(--color-text-primary) transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-(--color-text-primary) transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-(--color-bg-base)/98 backdrop-blur-2xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium text-(--color-text-primary)"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-2xl px-8 py-3 text-lg font-semibold text-white"
            style={{ background: "var(--gradient-primary)" }}
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  );
}
