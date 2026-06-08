"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export function HeroAtelier() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaWrapRef = useRef<HTMLDivElement>(null);
  const textWrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const section = sectionRef.current;
    if (!section) return;

    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const sectionH = section.offsetHeight;
        const scrollTop = window.scrollY;
        const progress = Math.max(0, Math.min(1, scrollTop / sectionH));

        if (mediaWrapRef.current) {
          const scale = 1 + progress * 0.05;
          mediaWrapRef.current.style.transform = `scale(${scale})`;
        }
        if (textWrapRef.current) {
          const yPct = progress * 8;
          const opacity = Math.max(0, 1 - progress / 0.5);
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
      className="relative overflow-hidden bg-bone"
      style={{ height: "100svh", minHeight: "720px" }}
      aria-label="Hero — Móvel Plan Atelier"
    >
      <Container className="relative z-10 h-full flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12 pb-10 md:pb-[128px] pt-24 md:pt-0">
        <div
          ref={textWrapRef}
          className="flex-none md:w-5/12 text-left flex flex-col gap-5 md:gap-6 order-1 md:order-1"
        >
          <p
            className="text-eyebrow uppercase text-brass-ink atelier-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            Atelier de marcenaria · Rio de Janeiro
          </p>

          <h1
            className="font-display text-display-xl text-ink atelier-fade-up leading-none"
            style={{ animationDelay: "80ms" }}
          >
            Móveis planejados
            <br />
            para seu espaço
          </h1>

          <p
            className="text-lead text-ink-soft atelier-fade-up max-w-[42ch]"
            style={{ animationDelay: "200ms" }}
          >
            Cada peça desenhada e executada para a sua casa.
            Atendemos Niterói, Barra e Zona Sul.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 atelier-fade-up"
            style={{ animationDelay: "340ms" }}
          >
            <Button variant="primary" size="md">
              <a href="#portfolio">Ver projetos</a>
            </Button>
            <Button variant="link" size="md">
              <a
                href="https://wa.me/5521992032834"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp →
              </a>
            </Button>
          </div>
        </div>

        <div className="flex-none md:w-6/12 order-2 md:order-2 w-full">
          <div
            ref={mediaWrapRef}
            className="relative overflow-hidden rounded-lg shadow-portrait"
            style={{ aspectRatio: "4/5", transformOrigin: "center center" }}
          >
            <Image
              src="/assets/movel-plan/DYPtgxORg-Q-poster.webp"
              alt="Sala planejada — Móvel Plan"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              onCanPlay={() => setVideoReady(true)}
              aria-label="Vídeo de sala planejada Móvel Plan"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-slow"
              style={{ opacity: videoReady ? 1 : 0 }}
            >
              <source src="/assets/movel-plan/DYPtgxORg-Q.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="text-micro text-ink-muted mt-3 pl-1 atelier-fade-in-delayed">
            01 / Sala planejada · Itapuã
          </p>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block atelier-fade-in-delayed">
        <div
          className="w-px h-16"
          style={{ backgroundImage: "linear-gradient(to bottom, var(--color-brass) 0%, transparent 100%)" }}
        />
      </div>
    </section>
  );
}
