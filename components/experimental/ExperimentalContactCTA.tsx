"use client";

import { motion } from "framer-motion";

const trustSignals = [
  { label: "Projetos entregues", value: "200+" },
  { label: "Anos de experiência", value: "15" },
  { label: "Atendimento", value: "WhatsApp" },
];

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
            Consulta gratuita, sem compromisso.
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

          {/* Trust signals */}
          <div
            className="mt-12 pt-10 flex flex-wrap justify-center gap-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            {trustSignals.map((signal) => (
              <div key={signal.label} className="text-center">
                <p className="text-2xl font-bold text-white">{signal.value}</p>
                <p
                  className="text-xs uppercase tracking-[0.12em] font-medium mt-1"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {signal.label}
                </p>
              </div>
            ))}
          </div>

          {/* Location trust */}
          <p
            className="mt-6 text-xs uppercase tracking-[0.15em]"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Niterói · Barra · Zona Sul
          </p>
        </motion.div>
      </div>
    </section>
  );
}
