"use client";

import { motion } from "framer-motion";
import { Star, Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const testimonials = [
  {
    quote: "O projeto da minha cozinha superou todas as expectativas. A qualidade é impressionante.",
    author: "Maria Silva",
    role: "Cliente Residencial",
  },
  {
    quote: "Profissionais extremamente competentes e entrega no prazo combinado.",
    author: "João Pereira",
    role: "Empresário",
  },
  {
    quote: "O closet ficou exatamente como eu sonhava. Cada detalhe foi pensado com carinho.",
    author: "Ana Oliveira",
    role: "Arquiteta",
  },
];

export function Testimonials() {
  return (
    <section id="testemunhos" className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-zinc-300 italic text-lg leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div>
                <p className="text-white font-bold">{t.author}</p>
                <p className="text-zinc-500 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-b from-primary/20 to-zinc-900 border border-primary/20 p-8 md:p-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pronto para Seu Projeto Personalizado?
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Agende uma consultoria gratuita e descubra como podemos transformar seu espaço com móveis planejados de alta qualidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#" 
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full sm:w-auto text-lg px-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 py-8"
              )}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Solicitar Orçamento Gratuito
            </a>
            <a 
              href="tel:+5511999999999" 
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "w-full sm:w-auto text-lg px-12 rounded-full border-white/20 text-white hover:bg-white/10 py-8"
              )}
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </a>
          </div>

          <p className="mt-12 text-zinc-500 text-sm">
            Atendimento em toda a Grande São Paulo e região.
          </p>
        </div>
      </div>
    </section>
  );
}
