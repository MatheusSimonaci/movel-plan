"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Projetos", href: "/#portfolio" },
  { name: "Materiais", href: "/#materiais" },
  { name: "Contato", href: "/#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const threshold = window.innerHeight * 0.6;
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const close = () => setDrawerOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-base ease-standard"
        style={{
          backgroundColor: scrolled ? "rgba(244, 239, 231, 0.9)" : "rgba(244, 239, 231, 0)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-ink-line)" : "1px solid transparent",
        }}
      >
        <Container className="flex h-20 md:h-[80px] items-center justify-between">
          <Link
            href="/"
            className="z-50 font-display text-display-md text-ink focus-visible:outline focus-visible:outline-1 focus-visible:outline-brass focus-visible:outline-offset-2"
            aria-label="Móvel Plan — página inicial"
          >
            Móvel Plan
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-eyebrow uppercase text-ink-soft hover:text-ink underline-offset-4 hover:underline decoration-brass transition-colors duration-fast"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/5521992032834"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-meta font-medium tracking-[0.04em] rounded-sm px-5 py-[10px] min-h-[40px] bg-transparent text-ink border border-ink-line hover:bg-linen transition-colors duration-fast focus-visible:outline focus-visible:outline-1 focus-visible:outline-brass focus-visible:outline-offset-2 focus-visible:shadow-focus"
            >
              Orçamento
            </a>
          </nav>

          <button
            className="md:hidden z-50 flex flex-col justify-center items-center w-11 h-11 gap-[6px] focus-visible:outline focus-visible:outline-1 focus-visible:outline-brass"
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label={drawerOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
          >
            <span
              className="block w-[18px] h-px bg-ink transition-transform duration-base origin-center"
              style={{ transform: drawerOpen ? "translateY(4px) rotate(45deg)" : "none" }}
            />
            <span
              className="block w-[18px] h-px bg-ink transition-transform duration-base origin-center"
              style={{ transform: drawerOpen ? "translateY(-3px) rotate(-45deg)" : "none" }}
            />
          </button>
        </Container>
      </header>

      <nav
        id="mobile-drawer"
        aria-label="Menu móvel"
        aria-hidden={!drawerOpen}
        className="fixed inset-0 z-40 flex flex-col bg-bone transition-transform duration-base"
        style={{
          transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
          transitionTimingFunction: "var(--ease-out)",
        }}
      >
        <div className="flex h-20 items-center justify-between px-6">
          <span className="font-display text-display-md text-ink">Móvel Plan</span>
        </div>
        <div className="flex flex-col items-start px-6 pt-8 gap-6 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={close}
              className="font-display text-display-md text-ink hover:text-brass-ink transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-brass"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="px-6 pb-10 flex flex-col gap-4">
          <a
            href="https://wa.me/5521992032834"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="inline-flex items-center justify-center gap-2 text-meta font-medium tracking-[0.04em] rounded-sm px-7 py-3 min-h-[48px] w-full bg-ink text-bone border border-ink hover:bg-walnut-soft hover:border-walnut-soft transition-colors duration-fast focus-visible:outline focus-visible:outline-1 focus-visible:outline-brass focus-visible:outline-offset-2 focus-visible:shadow-focus"
          >
            Pedir orçamento
          </a>
          <a
            href="tel:+5521992032834"
            onClick={close}
            className="text-meta text-brass-ink underline underline-offset-4 decoration-brass text-center hover:text-ink transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-brass"
          >
            Ligar agora
          </a>
        </div>
      </nav>
    </>
  );
}
