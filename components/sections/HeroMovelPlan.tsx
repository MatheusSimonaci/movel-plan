"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { HeroContent } from "@/lib/content/types";
import { cn } from "@/lib/utils";

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

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slightly slower for more premium feel
    }
  }, []);

  return (
    <section 
      id="hero" 
      ref={ref} 
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black"
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
            className="w-full h-full object-cover opacity-60"
            poster={fallbackImageUrl}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${fallbackImageUrl || 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000'})` }}
          />
        )}
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </motion.div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto h-full flex flex-col justify-end pb-24 md:pb-32">
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="max-w-3xl text-left"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-bold tracking-tight mb-6 text-white leading-[1.05]"
          >
            {content.headline}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-2xl text-white/80 mb-10 max-w-xl font-light leading-relaxed"
          >
            {content.subheadline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#portfolio" 
              className={cn(
                buttonVariants({ size: "lg" }),
                "text-lg px-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 h-16"
              )}
            >
              {content.primaryButton}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
