"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reels = [
  {
    src: "/assets/movel-plan/CuKvDcMtPUc.mp4",
    poster: "/assets/movel-plan/CuKvDcMtPUc-poster.webp",
    caption: "Sala integrada com marcenaria de alto padrão",
  },
  {
    src: "/assets/movel-plan/DOOaavrDSEE.mp4",
    poster: "/assets/movel-plan/DOOaavrDSEE-poster.webp",
    caption: "Painel TV e armários integrados",
  },
  {
    src: "/assets/movel-plan/DN6JZ30j4nC.mp4",
    poster: "/assets/movel-plan/DN6JZ30j4nC-poster.webp",
    caption: "Quarto com closet planejado",
  },
];

export function ExperimentalMotionStrip() {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const go = (dir: "prev" | "next") => {
    setCurrent((c) => (dir === "next" ? (c + 1) % reels.length : (c - 1 + reels.length) % reels.length));
  };

  // Play only the active video
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === current) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [current]);

  // Pause on scroll away, resume on re-entry
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const v = videoRefs.current[current];
        if (!v) return;
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [current]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black"
      style={{ height: "60vh", minHeight: "400px" }}
      aria-label="Galeria de projetos em vídeo"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <video
            ref={(el) => { videoRefs.current[current] = el; }}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster={reels[current].poster}
            aria-label={reels[current].caption}
            preload="metadata"
          >
            <source src={reels[current].src} type="video/mp4" />
          </video>
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

          {/* Caption */}
          <div className="absolute bottom-8 left-0 right-0 px-8 md:px-16 text-center">
            <p
              className="text-sm md:text-base font-light"
              style={{ color: "var(--color-white-off, #F5F2EA)" }}
            >
              {reels[current].caption}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <button
        onClick={() => go("prev")}
        aria-label="Projeto anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/40 hover:bg-black/70 transition-colors focus-visible:outline focus-visible:outline-2"
        style={{ outlineColor: "var(--color-yellow-primary, #F8E058)" }}
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={() => go("next")}
        aria-label="Próximo projeto"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/40 hover:bg-black/70 transition-colors focus-visible:outline focus-visible:outline-2"
        style={{ outlineColor: "var(--color-yellow-primary, #F8E058)" }}
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {reels.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ir para reel ${i + 1}`}
            className="w-1.5 h-1.5 transition-all duration-300 focus-visible:outline focus-visible:outline-2"
            style={{
              backgroundColor: i === current ? "var(--color-yellow-primary, #F8E058)" : "rgba(255,255,255,0.4)",
              outlineColor: "var(--color-yellow-primary, #F8E058)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
