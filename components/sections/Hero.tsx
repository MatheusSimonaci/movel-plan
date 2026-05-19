"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { HeroContent } from "@/lib/content/types";

export function Hero({ content }: { content: HeroContent }) {
  const hero = content;
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Aurora Effect Container */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(165,134,60,0.15),transparent_50%)] animate-pulse" />
      </motion.div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center text-center">
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-8xl font-light tracking-tight mb-8 font-serif leading-tight">
            {hero.headline.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-sans"
          >
            {hero.subheadline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#oferta" className={buttonVariants({ size: "lg", className: "text-lg px-8 rounded-none border border-primary/50 hover:bg-primary/10 transition-colors" })}>
              {hero.primaryButton}
            </a>
            <a href="#portfolio" className={buttonVariants({ size: "lg", variant: "outline", className: "text-lg px-8 rounded-none transition-colors" })}>
              {hero.secondaryButton}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
