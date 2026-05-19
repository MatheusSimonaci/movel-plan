"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const features = [
  "Design Premium e Exclusivo",
  "Carregamento Ultra-rápido",
  "Totalmente Responsivo",
  "Configuração de SEO Base",
];

export function Offer({ price = "497" }: { price?: string }) {
  return (
    <section id="oferta" className="py-24 md:py-32 bg-zinc-950 text-white overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-widest">
              <Zap className="h-3 w-3" />
              Oferta Especial de Reposicionamento
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight leading-tight">
              Sua marca entre as <span className="text-primary italic whitespace-nowrap">referências do mercado</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl font-sans leading-relaxed">
              Abrimos vagas para empresas que querem deixar de competir por preço e começar a atrair clientes pelo que realmente importa: autoridade e confiança.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[450px]"
          >
            <div className="relative p-8 md:p-12 border border-primary/30 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[100px] group-hover:bg-primary/20 transition-colors duration-700" />
              
              <div className="relative z-10 text-center space-y-6">
                <div className="space-y-2">
                  <p className="text-zinc-500 uppercase tracking-widest text-xs">A partir de</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-light text-zinc-400">R$</span>
                    <span className="text-7xl md:text-8xl font-serif font-light tracking-tighter">{price}</span>
                  </div>
                  <p className="text-primary text-sm font-medium">ou 10x de R$ {(parseInt(price) / 10).toFixed(2).replace('.', ',')}</p>
                </div>
                
                <div className="h-px w-full bg-zinc-800" />
                
                <a 
                  href="#agenda"
                  className={buttonVariants({ 
                    size: "lg", 
                    className: "w-full text-lg py-8 rounded-none bg-primary hover:bg-primary/90 text-black font-medium" 
                  })}
                >
                  Marcar Agendamento
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
