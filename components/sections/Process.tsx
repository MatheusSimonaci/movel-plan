"use client";

import { motion } from "framer-motion";
import { ProcessStep } from "@/lib/content/movel-plan";

export function Process({ steps }: { steps: ProcessStep[] }) {
  return (
    <section id="processo" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Nosso Processo
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Do sonho à realidade, acompanhamos você em cada etapa para garantir o resultado perfeito.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-zinc-800 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-zinc-900 border-4 border-zinc-800 flex items-center justify-center mb-6 group-hover:border-primary transition-colors duration-500 relative z-10 bg-zinc-950">
                  <span className="text-3xl font-bold text-primary">
                    {step.step}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-0.5 h-12 bg-zinc-800 my-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
