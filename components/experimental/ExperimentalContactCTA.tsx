"use client";

import { motion } from "framer-motion";

export function ExperimentalContactCTA() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ backgroundColor: "#1A1A19" }}
      aria-label="Fale conosco"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-xs tracking-[0.2em] uppercase font-semibold mb-5"
            style={{ color: "var(--color-yellow-primary, #F8E058)" }}
          >
            Fale Conosco
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Vamos criar algo incrível juntos?
          </h2>
          <p
            className="text-base font-light leading-relaxed mb-10"
            style={{ color: "var(--color-white-off, #F5F2EA)" }}
          >
            Entre em contato e descubra como transformamos seu espaço com móveis planejados de alto padrão.
          </p>
          <a
            href="https://wa.me/5521992032834"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 text-sm font-semibold uppercase tracking-widest transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2"
            style={{
              backgroundColor: "var(--color-yellow-primary, #F8E058)",
              color: "#050505",
              outlineColor: "var(--color-yellow-primary, #F8E058)",
            }}
          >
            Solicitar Orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
}
