"use client";

import { Cpu, PenTool, Zap, Layers } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React from "react";
import { ServicesContent } from "@/lib/content/types";

const icons = [Zap, PenTool, Layers, Cpu];

function ServiceCard({ service, icon: Icon, index }: { service: { title: string; description: string }; icon: React.ElementType; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-none border border-white/10 bg-black/5 p-8 transition-all hover:border-primary/50"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-none opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(165, 134, 60, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center text-primary">
        <Icon className="h-8 w-8" strokeWidth={1} />
      </div>
      <h3 className="mb-4 text-2xl font-serif font-light">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed font-sans text-sm tracking-wide">
        {service.description}
      </p>
    </motion.div>
  );
}

export function Services({ content }: { content: ServicesContent }) {
  const services = content;
  
  return (
    <section id="servicos" className="py-24 md:py-32 bg-background border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight mb-6">{services.title}</h2>
          <div className="h-px w-20 bg-primary mx-auto mb-8" />
          <p className="max-w-[600px] text-muted-foreground text-lg mx-auto font-sans">
            {services.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {services.items.map((service, index) => (
            <ServiceCard key={index} service={service} icon={icons[index % icons.length]} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
