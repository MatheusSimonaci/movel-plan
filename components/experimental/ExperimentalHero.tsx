"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export function ExperimentalHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const textWrapRef = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  // Vanilla JS scroll parallax — framer-motion removed from initial bundle
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const sectionH = section.offsetHeight;
        const scrollTop = window.scrollY;
        const progress = Math.max(0, Math.min(1, scrollTop / sectionH));

        if (videoWrapRef.current) {
          const scale = 1 + progress * 0.12;
          videoWrapRef.current.style.transform = `scale(${scale})`;
        }
        if (textWrapRef.current) {
          const yPct = progress * 30;
          const opacity = Math.max(0, 1 - progress / 0.6);
          textWrapRef.current.style.transform = `translateY(${yPct}%)`;
          textWrapRef.current.style.opacity = String(opacity);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex items-end justify-start overflow-hidden bg-black"
      style={{ height: "100svh", minHeight: "600px" }}
      aria-label="Hero - Móvel Plan Experimental"
    >
      {/* Background layer — scale driven by scroll */}
      <div ref={videoWrapRef} className="absolute inset-0 z-0" style={{ transformOrigin: "center center" }}>
        {/*
          Priority Image acts as LCP resource with fetchpriority=high + head preload (injected by Next.js).
          Shows instantly; the video fades in on top once it can play.
        */}
        <Image
          src="/assets/movel-plan/DYPtgxORg-Q-poster.webp"
          alt="Sala planejada Móvel Plan"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          onCanPlay={() => setVideoReady(true)}
          aria-label="Vídeo de sala planejada"
          className="w-full h-full object-cover absolute inset-0 transition-opacity duration-700"
          style={{ opacity: videoReady ? 1 : 0 }}
        >
          <source src="/assets/movel-plan/DYPtgxORg-Q.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* Text content — y/opacity driven by scroll; entrance via CSS */}
      <div className="container relative z-10 px-6 md:px-12 mx-auto pb-28 md:pb-36">
        <div ref={textWrapRef} className="max-w-2xl text-left">
          <p
            className="text-xs tracking-[0.2em] uppercase font-semibold mb-5 hero-fade-up"
            style={{ color: "var(--color-yellow-primary, #F8E058)", animationDelay: "0ms" }}
          >
            Niterói · Barra · Zona Sul
          </p>

          <h1
            className="font-bold tracking-tight text-white leading-[1.05] mb-6 hero-fade-up"
            style={{ fontSize: "clamp(2.75rem, 7vw, 4.5rem)", animationDelay: "100ms" }}
          >
            Móveis Planejados
            <br />
            para Seu Espaço
          </h1>

          <p
            className="text-base md:text-lg font-light leading-relaxed mb-10 max-w-sm hero-fade-up"
            style={{ color: "var(--color-white-off, #F5F2EA)", animationDelay: "300ms" }}
          >
            Seu espaço reimaginado com marcenaria sob medida de alto padrão.
            <br className="hidden md:block" />
            Atendemos Niterói, Barra e Zona Sul.
          </p>

          <div className="hero-fade-up" style={{ animationDelay: "500ms" }}>
            <a
              href="#exp-portfolio"
              className="inline-block px-10 py-4 text-sm font-semibold uppercase tracking-widest transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2"
              style={{
                backgroundColor: "var(--color-yellow-primary, #F8E058)",
                color: "#050505",
                outlineColor: "var(--color-yellow-primary, #F8E058)",
              }}
            >
              Ver Projetos
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator — CSS fade-in after 1.6s */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block hero-fade-in-delayed">
        <div
          className="w-[1px] h-16"
          style={{ backgroundImage: "linear-gradient(to bottom, #F8E058 0%, transparent 100%)" }}
        />
      </div>
    </section>
  );
}
