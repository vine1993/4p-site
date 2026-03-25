"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

const serviceLinks = [
  { label: "Criação de Sites", href: "/servicos/criacao-de-sites" },
  { label: "Aplicativos Mobile", href: "/servicos/aplicativos-mobile" },
  { label: "Sistemas Web", href: "/servicos/sistemas-web" },
  { label: "Produtos Customizados", href: "/servicos/produtos-customizados" },
];

const navLinks = [
  { label: "Como Funciona", href: "/#como-funciona" },
  { label: "Resultados", href: "/#resultados" },
  { label: "Contato", href: "/#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-(--color-bg-base)/95 backdrop-blur-xl border-b border-(--color-border)"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-(--layout-max-width) flex items-center justify-between px-6 py-5 lg:px-20">
        <a href="/">
          <Image
            src="/logo.png"
            alt="4 Pixels — Agência Digital"
            width={360}
            height={100}
            className={`w-auto transition-all duration-300 ${scrolled ? "h-8" : "h-20"}`}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {/* Services dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-sm font-medium text-(--color-text-secondary) transition-colors duration-200 hover:text-(--color-text-primary)"
            >
              Serviços
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M3 5L6 8L9 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 rounded-xl border border-(--color-glass-border) bg-(--color-bg-elevated)/95 backdrop-blur-xl p-2 shadow-xl shadow-black/20">
                {serviceLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setServicesOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-sm text-(--color-text-secondary) transition-colors duration-150 hover:bg-(--color-glass-hover) hover:text-(--color-text-primary)"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

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
            href="https://wa.me/5511961848388?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-(--color-accent-orange)/30 hover:brightness-110"
            style={{ background: "var(--gradient-primary)" }}
          >
            Solicitar Orçamento
          </a>
        </nav>

        {/* Mobile hamburger */}
        {!menuOpen && (
          <button
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <span className="block h-0.5 w-6 bg-(--color-text-primary)" />
            <span className="block h-0.5 w-6 bg-(--color-text-primary)" />
            <span className="block h-0.5 w-6 bg-(--color-text-primary)" />
          </button>
        )}
      </div>

    </header>

      {/* Mobile menu overlay — rendered via portal so backdrop-filter on header doesn't break fixed positioning */}
      {menuOpen && createPortal(
        <div className="fixed inset-0 z-100 flex flex-col items-center justify-center gap-6 bg-bg-base/98 backdrop-blur-2xl md:hidden">
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
            className="absolute top-5 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) text-(--color-text-primary)"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Services accordion */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center gap-2 text-2xl font-medium text-(--color-text-primary)"
            >
              Serviços
              <svg
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M3 5L6 8L9 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="mt-3 flex flex-col items-center gap-3">
                {serviceLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-base text-(--color-text-secondary) transition-colors hover:text-(--color-text-primary)"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

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
            href="https://wa.me/5511961848388?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-2xl px-8 py-3 text-lg font-semibold text-white"
            style={{ background: "var(--gradient-primary)" }}
          >
            Solicitar Orçamento
          </a>
        </div>,
        document.body
      )}
    </>
  );
}
