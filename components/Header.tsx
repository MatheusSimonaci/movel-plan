"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Portfólio", href: "/#portfolio" },
    { name: "Contato", href: "/#contato" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/85 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-18 items-center justify-between px-6 md:px-10" style={{ height: "72px" }}>
        <Link
          href="/"
          className="z-50 flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
        >
          <div className="w-8 h-8 overflow-hidden border border-white/10">
            <img
              src="/assets/movel-plan/profile-logo.webp"
              alt="Móvel Plan Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-base font-bold tracking-[0.12em] text-white uppercase">
            Móvel<span className="text-primary">Plan</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[11px] tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://wa.me/5521992032834"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-primary text-primary-foreground text-[11px] font-semibold uppercase tracking-[0.12em] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
          >
            Orçamento
          </a>
        </nav>

        <button
          className="md:hidden z-50 p-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 h-screen w-screen bg-[#050505] z-40 flex flex-col items-center justify-center gap-10"
              aria-label="Menu móvel"
            >
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-white hover:text-primary transition-colors uppercase tracking-[0.15em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/5521992032834"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Pedir Orçamento
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
