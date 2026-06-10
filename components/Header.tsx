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
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 inset-x-0 z-50 px-4 md:px-6"
    >
      <div className="mx-auto max-w-5xl flex items-center justify-between h-14 pl-3 pr-3 md:pl-4 md:pr-2.5 rounded-full glass shadow-[0_8px_40px_-12px_rgba(0,0,0,0.7)]">
        <Link href="/" className="z-50 flex items-center gap-3">
          <div className="w-8 h-8 overflow-hidden rounded-full border border-white/10">
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

        <nav className="hidden md:flex items-center gap-7" aria-label="Navegação principal">
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
            className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-200 hover:shadow-[0_0_24px_rgba(248,224,88,0.35)]"
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
              className="fixed inset-0 h-[100dvh] w-screen bg-[#050505]/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-10"
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
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-[0.18em] hover:shadow-[0_0_32px_rgba(248,224,88,0.4)] transition-shadow"
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
