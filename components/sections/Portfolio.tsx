"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const niches = [
  {
    title: "Clínicas",
    category: "Saúde & Estética",
    description: "Sites de autoridade que convertem visitantes em pacientes agendados.",
    valueProposition: "Pacientes não escolhem a melhor clínica — escolhem a que aparece primeiro e transmite confiança imediata. Desenvolvemos uma presença digital que posiciona sua clínica como referência no segmento: design que reflete profissionalismo, arquitetura de informação que guia o visitante do primeiro clique ao agendamento, e SEO que coloca você à frente da concorrência quando o paciente está procurando. O resultado é uma plataforma que não apenas informa — ela converte.",
    tags: ["SEO Local", "Alta Conversão", "Design de Autoridade"],
    link: "https://md-odontologia.vercel.app/",
    linkLabel: "Ver Exemplo Real",
  },
  {
    title: "Landing Pages",
    category: "Estratégia Digital",
    description: "Múltiplas páginas de alta conversão, cada uma feita para um perfil de cliente específico.",
    valueProposition: "Uma página genérica fala com todo mundo e não convence ninguém. Nossa estratégia é diferente: desenvolvemos múltiplas landing pages especializadas, cada uma desenhada para um ICP (Ideal Customer Profile) específico. Copy que fala diretamente com as dores daquele público, design que ressoa com suas expectativas e CTAs calibrados para o momento de decisão de cada segmento. O resultado é relevância máxima — e taxas de conversão que refletem isso.",
    tags: ["Múltiplos ICPs", "Copy Estratégico", "Segmentação"],
    link: null,
    linkLabel: null,
  },
  {
    title: "Lojas",
    category: "E-commerce",
    description: "Layout premium que eleva a percepção de valor e posiciona a marca como referência.",
    valueProposition: "Em um mercado saturado, a loja que vende mais não é a que tem os melhores preços — é a que transmite mais autoridade e confiança. Construímos layouts premium que posicionam a marca como referência no seu segmento. Cada detalhe visual é pensado para fortalecer o branding: tipografia, paleta, espaçamento, hierarquia — tudo trabalha junto para fazer o cliente sentir que está comprando de uma marca de verdade, elevando o ticket médio e a fidelização.",
    tags: ["Layout Premium", "Branding Elevado", "Autoridade de Mercado"],
    link: null,
    linkLabel: null,
  },
];

export function Portfolio() {
  const [activeNiche, setActiveNiche] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-black border-b border-white/5 text-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight mb-6">Nichos que Atendemos</h2>
          <div className="h-px w-20 bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
          {niches.map((niche, index) => (
            <motion.div
              layout
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-zinc-950 overflow-hidden border-b border-white/5 last:border-b-0"
            >
              {/* Header / Trigger */}
              <div
                className="p-8 md:p-12 cursor-pointer relative"
                onClick={() => setActiveNiche(activeNiche === index ? null : index)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex-1">
                    <span className="text-[10px] uppercase tracking-widest text-primary mb-3 block">
                      {niche.category}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-serif font-light group-hover:text-primary/90 transition-colors duration-300">
                      {niche.title}
                    </h3>
                    <p className="mt-3 text-sm text-zinc-500 font-sans max-w-xl">
                      {niche.description}
                    </p>
                  </div>
                  <div className="hidden md:flex items-center gap-4 text-zinc-500">
                    <span className="text-sm tracking-wide uppercase">{activeNiche === index ? "Fechar" : "Saiba mais"}</span>
                    <motion.div
                      animate={{ rotate: activeNiche === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-center h-12 w-12 rounded-full border border-white/10 group-hover:border-primary/50 group-hover:text-primary transition-colors duration-300"
                    >
                      <Plus className="h-5 w-5" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Expandable Value Proposition */}
              <AnimatePresence>
                {activeNiche === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 md:p-12 pt-0 md:pt-0">
                      <div className="border-t border-white/5 pt-12 space-y-8 max-w-3xl">
                        <p className="text-lg text-zinc-300 font-sans leading-relaxed">
                          {niche.valueProposition}
                        </p>

                        <div className="flex flex-wrap gap-3">
                          {niche.tags.map((tag, i) => (
                            <div key={i} className="px-4 py-2 border border-white/10 rounded-full text-xs tracking-wider uppercase text-zinc-400">
                              {tag}
                            </div>
                          ))}
                        </div>

                        {niche.link && (
                          <div className="pt-4">
                            <a
                              href={niche.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={buttonVariants({ variant: "outline", className: "rounded-full px-8 border-primary/30 text-primary hover:bg-primary hover:text-black group/btn inline-flex gap-2" })}
                            >
                              {niche.linkLabel}
                              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
