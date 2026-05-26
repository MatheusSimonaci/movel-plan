"use client";

import { Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto border border-[#272727] p-10 md:p-16 text-center bg-[#0B0B0A]">
          <p className="text-xs tracking-[0.15em] uppercase text-primary font-semibold mb-4">
            Contato
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Pronto para começar?
          </h2>
          <p
            className="text-sm leading-relaxed mb-10 max-w-sm mx-auto"
            style={{ color: "var(--color-white-off, #F5F2EA)" }}
          >
            Transforme seu espaço com projetos planejados sob medida. Atendemos Niterói, Barra e Zona Sul.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="https://wa.me/5521992032834"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
            >
              Conversar no WhatsApp
            </a>
            <a
              href="tel:+5521992032834"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 border border-[#272727] text-white/70 text-sm font-medium uppercase tracking-widest hover:border-white/40 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
            >
              <Phone className="w-4 h-4" />
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
