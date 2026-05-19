"use client";

import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto rounded-[2rem] bg-zinc-900 border border-white/5 p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Solicite um Orçamento
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Transforme seu sonho em realidade com projetos exclusivos e materiais de alta qualidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/5521999999999" 
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full sm:w-auto text-lg px-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-16"
              )}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Conversar no WhatsApp
            </a>
            <a 
              href="tel:+5521999999999" 
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "w-full sm:w-auto text-lg px-12 rounded-full border-white/10 text-white hover:bg-white/5 h-16"
              )}
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </a>
          </div>

          <p className="mt-10 text-zinc-600 text-sm">
            Atendimento personalizado para Niterói, Barra e Zona Sul.
          </p>
        </div>
      </div>
    </section>
  );
}
