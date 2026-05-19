"use client";

import { motion } from "framer-motion";
import { StatItem, DifferentiatorItem } from "@/lib/content/movel-plan";
import { Layout, Eye, Award, CheckCircle2 } from "lucide-react";

const iconMap = {
  layout: Layout,
  eye: Eye,
  award: Award,
};

export function TrustStats({ stats }: { stats: StatItem[] }) {
  return (
    <section className="py-20 bg-zinc-950 text-white border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </span>
              <span className="text-sm md:text-base text-zinc-400 uppercase tracking-widest">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Differentiators({ items }: { items: DifferentiatorItem[] }) {
  return (
    <section id="diferenciais" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Por que escolher a Móvel Plan?
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || CheckCircle2;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-primary/30 transition-colors group"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
