"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroContent } from "@/lib/content/types";

interface HeroMovelPlanProps {
  content: HeroContent;
  videoUrl?: string;
  fallbackImageUrl?: string;
}

export function HeroMovelPlan({ content, videoUrl, fallbackImageUrl }: HeroMovelPlanProps) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85;
    }
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen min-h-[700px] flex items-center justify-start overflow-hidden bg-black"
    >
      {/* Background Media */}
      <motion.div style={{ scale: scaleVideo }} className="absolute inset-0 z-0">
        {videoUrl ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-70"
            poster={fallbackImageUrl}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url(${fallbackImageUrl})` }}
          />
        )}
        {/* Gradient: transparent top → dark bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        {/* Left vignette for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </motion.div>

      <div className="container relative z-10 px-6 md:px-10 mx-auto h-full flex flex-col justify-end pb-24 md:pb-32">
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="max-w-2xl text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs tracking-[0.15em] uppercase text-primary mb-4 font-semibold"
          >
            Niterói · Barra · Zona Sul
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-5 text-white leading-[1.08]"
          >
            {content.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base md:text-lg font-light leading-relaxed mb-10 max-w-md"
            style={{ color: "var(--color-white-off, #F5F2EA)" }}
          >
            {content.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a
              href="#portfolio"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
            >
              {content.primaryButton}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
}
