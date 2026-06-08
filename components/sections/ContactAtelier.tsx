"use client";

import { useRef, useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

function useInView(rootMargin = "-60px") {
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

export function ContactAtelier() {
  const [sectionRef, visible] = useInView("-60px");

  return (
    <section
      id="contato"
      className="bg-linen py-[160px] md:py-[160px]"
      aria-label="Contato"
    >
      <Container>
        <div
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className={cn(
            "grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8",
            visible ? "atelier-animate-in" : "opacity-0"
          )}
        >
          <div className="md:col-span-6">
            <p className="text-eyebrow uppercase text-brass-ink mb-4">Contato</p>
            <h2 className="font-display text-display-md text-ink mb-6">
              Pronto para projetar o seu?
            </h2>
            <p className="text-lead text-ink-soft max-w-[44ch] leading-relaxed">
              Mande uma mensagem com o ambiente, suas medidas, ou só uma foto de inspiração.
              Respondemos em horário comercial.
            </p>
          </div>

          <div id="materiais" className="md:col-span-5 md:col-start-8 flex flex-col gap-5">
            <a
              href="https://wa.me/5521992032834"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center w-full min-h-[48px] px-7",
                "text-meta font-medium tracking-[0.04em] rounded-sm",
                "bg-ink text-bone border border-ink",
                "hover:bg-walnut-soft hover:border-walnut-soft transition-colors duration-fast",
                "focus-visible:outline focus-visible:outline-1 focus-visible:outline-brass focus-visible:outline-offset-2 focus-visible:shadow-focus"
              )}
            >
              Falar no WhatsApp
            </a>
            <a
              href="tel:+5521992032834"
              className={cn(
                "inline-flex items-center justify-center w-full min-h-[48px] px-7",
                "text-meta font-medium tracking-[0.04em] rounded-sm",
                "bg-transparent text-ink border border-ink-line",
                "hover:bg-bone transition-colors duration-fast",
                "focus-visible:outline focus-visible:outline-1 focus-visible:outline-brass focus-visible:outline-offset-2 focus-visible:shadow-focus"
              )}
            >
              Ligar agora
            </a>

            <div className="pt-4 border-t border-ink-line">
              <p className="text-eyebrow uppercase text-ink-muted mb-3">Materiais</p>
              <p className="text-meta text-ink-muted leading-relaxed">
                Trabalhamos com MDF Ares, Off White, Itapuã, Freijó e outros acabamentos de alto padrão,
                selecionados conforme o projeto e o ambiente.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
