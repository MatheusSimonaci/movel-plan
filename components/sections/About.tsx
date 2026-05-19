"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AboutContent } from "@/lib/content/types";
import websiteArt from "@/assets/website-building-art.png";

export function About({ content }: { content: AboutContent }) {

  const about = content;

  return (
    <section id="sobre" className="py-24 md:py-32 bg-black/5 overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="text-primary text-xs uppercase tracking-widest">{about.tag}</div>
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight">
              {about.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-sans">
              {about.description}
            </p>
            
            <div className="pt-8 border-t border-white/5">
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center aspect-square"
          >
            <div className="relative w-full max-w-[400px] aspect-square">
              <Image 
                src={websiteArt} 
                alt="Website building artwork" 
                fill 
                className="object-contain opacity-90"
              />
            </div>
          </motion.div>
        </div>

        {/* Process Timeline */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-4xl font-serif font-light tracking-tight mb-4">Nosso Processo Exclusivo</h3>
            <div className="h-px w-16 bg-primary mx-auto" />
          </div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Imersão", desc: "Mergulhamos na essência da sua marca e objetivos." },
                { step: "02", title: "Design", desc: "Criamos uma identidade visual única e premium." },
                { step: "03", title: "Desenvolvimento", desc: "Código limpo, animações fluidas e alta performance." },
                { step: "04", title: "Lançamento", desc: "Entrega impecável com SEO e Analytics configurados." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative bg-zinc-950 p-8 border border-white/10 hover:border-primary/30 transition-colors group"
                >
                  <div className="absolute -top-4 left-8 md:left-1/2 md:-translate-x-1/2 bg-background px-2 text-primary font-serif italic text-xl">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-serif font-light mb-3 mt-4">{item.title}</h4>
                  <p className="text-sm text-zinc-400 font-sans">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
