"use client";

import { useRef, useState, useEffect } from "react";
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

function useInView(rootMargin = "-40px") {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, visible] as const;
}

export function ExperimentalMotionStrip() {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([null, null, null]);
  const sectionRef = useRef<HTMLElement>(null);
  const [headerRef, headerVisible] = useInView("-40px");

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
      className="bg-black"
      aria-label="Galeria de projetos em vídeo"
    >
      {/* Section header — CSS fade-in replacing framer-motion whileInView */}
      <div className="container mx-auto px-6 md:px-12 pt-16 pb-10">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={headerVisible ? "exp-animate-in" : "opacity-0"}
        >
          <p
            className="text-xs tracking-[0.2em] uppercase font-semibold mb-3"
            style={{ color: "var(--color-yellow-primary, #F8E058)" }}
          >
            Em Vídeo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Projetos em Movimento
          </h2>
          <p
            className="mt-3 text-sm font-light max-w-md"
            style={{ color: "rgba(245,242,234,0.6)" }}
          >
            Cada vídeo mostra um espaço transformado — da concepção ao acabamento final.
          </p>
        </div>
      </div>

      {/* Video strip — CSS opacity crossfade replacing AnimatePresence */}
      <div
        className="relative overflow-hidden"
        style={{ height: "60vh", minHeight: "380px" }}
      >
        {reels.map((reel, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-[400ms]"
            style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
            aria-hidden={i !== current}
          >
            <video
              ref={(el) => { videoRefs.current[i] = el; }}
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster={reel.poster}
              aria-label={reel.caption}
              preload="metadata"
            >
              <source src={reel.src} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

            <div className="absolute bottom-14 left-0 right-0 px-8 md:px-16 text-center">
              <p
                className="text-sm md:text-base font-light"
                style={{ color: "var(--color-white-off, #F5F2EA)" }}
              >
                {reel.caption}
              </p>
            </div>
          </div>
        ))}

        {/* Navigation buttons */}
        <button
          onClick={() => go("prev")}
          aria-label="Projeto anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-black/40 hover:bg-black/70 transition-colors focus-visible:outline focus-visible:outline-2"
          style={{ outlineColor: "var(--color-yellow-primary, #F8E058)" }}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={() => go("next")}
          aria-label="Próximo projeto"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-black/40 hover:bg-black/70 transition-colors focus-visible:outline focus-visible:outline-2"
          style={{ outlineColor: "var(--color-yellow-primary, #F8E058)" }}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {reels.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir para reel ${i + 1}`}
              className="w-2 h-2 transition-all duration-300 focus-visible:outline focus-visible:outline-2"
              style={{
                backgroundColor: i === current ? "var(--color-yellow-primary, #F8E058)" : "rgba(255,255,255,0.4)",
                outlineColor: "var(--color-yellow-primary, #F8E058)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
