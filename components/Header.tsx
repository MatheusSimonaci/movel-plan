"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { movelPlanContent, waLink } from "@/lib/content/movel-plan";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { site } = movelPlanContent;

  const navLinks = [
    { name: "Portfólio", href: "/#portfolio" },
    { name: "Contato", href: "/#contato" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/85 backdrop-blur-md"
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-10 h-16">
        <Link href="/" className="z-50 flex items-center gap-3">
          <div className="w-8 h-8 overflow-hidden border border-white/10">
            <img
              src={site.logo}
              alt={`${site.name} Logo`}
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-bold tracking-[0.14em] text-white uppercase">
            Móvel<span className="text-primary">Plan</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative py-2 text-[11px] tracking-[0.18em] uppercase text-white/60 hover:text-white transition-colors"
            >
              {item.name}
              <span
                aria-hidden="true"
                className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full"
              />
            </Link>
          ))}
          <a
            href={waLink(site.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-primary text-primary-foreground text-[11px] font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-90"
          >
            Orçamento
          </a>
        </nav>

        <button
          className="md:hidden z-50 p-2.5 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 h-[100dvh] w-screen bg-[#050505] z-40 flex flex-col items-center justify-center gap-10"
              aria-label="Menu móvel"
            >
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-4xl text-white hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                href={waLink(site.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-[0.18em] hover:opacity-90 transition-opacity"
              >
                Pedir Orçamento
              </motion.a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
