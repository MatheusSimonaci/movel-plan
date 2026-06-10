"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { HeroContent } from "@/lib/content/types";

interface HeroMovelPlanProps {
  content: HeroContent;
  videoUrl?: string;
  fallbackImageUrl?: string;
}

const easeOut = [0.16, 1, 0.3, 1] as const;

export function HeroMovelPlan({ content, videoUrl, fallbackImageUrl }: HeroMovelPlanProps) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();

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

  const showVideo = videoUrl && !reducedMotion;

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-[100svh] min-h-[640px] flex items-center justify-start overflow-hidden bg-black"
    >
      {/* Background Media */}
      <motion.div
        style={reducedMotion ? undefined : { scale: scaleVideo }}
        className="absolute inset-0 z-0"
      >
        {showVideo ? (
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
            role="img"
            aria-label="Sala de estar com marcenaria planejada Móvel Plan"
          />
        )}
        {/* Gradient: transparent top → dark bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/10" />
        {/* Left vignette for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
        {/* Ambient brand glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(248,224,88,0.10),transparent_55%)]" />
      </motion.div>

      <div className="container relative z-10 px-6 md:px-10 mx-auto h-full flex flex-col justify-end pb-24 md:pb-32">
        <motion.div
          style={reducedMotion ? undefined : { y: yText, opacity: opacityText }}
          className="max-w-3xl text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="text-[11px] tracking-[0.25em] uppercase text-primary mb-5 font-semibold"
          >
            {content.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.1 }}
            className="font-display font-medium text-[2.75rem] sm:text-6xl md:text-8xl tracking-tight mb-6 text-white leading-[0.98]"
          >
            {content.headline}{" "}
            <em className="text-primary font-normal inline-block">{content.headlineAccent}</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: easeOut }}
            className="text-base md:text-lg font-light leading-relaxed mb-10 max-w-md"
            style={{ color: "var(--color-white-off, #F5F2EA)" }}
          >
            {content.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease: easeOut }}
          >
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-200 hover:gap-4 hover:shadow-[0_0_40px_rgba(248,224,88,0.35)]"
            >
              {content.primaryButton}
              <span aria-hidden="true" className="text-base leading-none">↓</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 right-10 z-10 hidden md:block"
        aria-hidden="true"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
}
