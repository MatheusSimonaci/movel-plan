"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Contato", href: "/#contato" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="z-50 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
            <img 
              src="/assets/movel-plan/profile-logo.webp" 
              alt="Móvel Plan Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tighter text-white uppercase">
            Móvel<span className="text-primary">Plan</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex gap-8">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-xs tracking-widest uppercase hover:text-primary transition-colors text-white/70"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button 
          className="md:hidden z-50 p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed inset-0 h-screen w-screen bg-black z-40 flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-white hover:text-primary transition-colors uppercase tracking-widest"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
