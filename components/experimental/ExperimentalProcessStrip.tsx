"use client";

import { useRef, useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Consulta Gratuita",
    description: "Conversamos sobre seu espaço, estilo e orçamento. Presencialmente ou por WhatsApp, sem compromisso.",
  },
  {
    number: "02",
    title: "Projeto 3D",
    description: "Nosso time cria o projeto personalizado com visualização 3D para você aprovar cada detalhe antes da execução.",
  },
  {
    number: "03",
    title: "Fabricação e Entrega",
    description: "Produzimos com materiais de alto padrão e instalamos com precisão. Garantia total em todos os projetos.",
  },
];

function useInView(rootMargin = "-20px") {
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

export function ExperimentalProcessStrip() {
  const [headerRef, headerVisible] = useInView("-40px");
  const [gridRef, gridVisible] = useInView("-20px");

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: "#0B0B0A", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      aria-label="Como funciona"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={headerVisible ? "exp-animate-in mb-12" : "opacity-0 mb-12"}
        >
          <p
            className="text-xs tracking-[0.2em] uppercase font-semibold mb-3"
            style={{ color: "var(--color-yellow-primary, #F8E058)" }}
          >
            Como Funciona
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Do projeto à instalação
          </h2>
        </div>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={gridVisible ? "relative exp-animate-in" : "relative opacity-0"}
              style={gridVisible ? { animationDelay: `${idx * 100}ms` } : undefined}
            >
              <p
                className="text-5xl font-bold mb-5 leading-none"
                style={{ color: "rgba(248,224,88,0.15)" }}
                aria-hidden="true"
              >
                {step.number}
              </p>

              <div
                className="absolute top-7 left-0 h-[1px] w-8"
                style={{ backgroundColor: "var(--color-yellow-primary, #F8E058)" }}
              />

              <h3 className="text-lg font-semibold text-white mb-3 mt-1">{step.title}</h3>
              <p
                className="text-sm font-light leading-relaxed"
                style={{ color: "rgba(245,242,234,0.55)" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
