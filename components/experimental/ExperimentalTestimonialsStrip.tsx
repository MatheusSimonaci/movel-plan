"use client";

import { useRef, useEffect, useState } from "react";
import { movelPlanContent } from "@/lib/content/movel-plan";

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

export function ExperimentalTestimonialsStrip() {
  const { testimonials } = movelPlanContent;
  const [headerRef, headerVisible] = useInView("-20px");
  const [gridRef, gridVisible] = useInView("-20px");

  if (!testimonials.length) return null;

  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      aria-label="Depoimentos de clientes"
    >
      <div className="container mx-auto px-6 md:px-12">
        <p
          ref={headerRef as React.RefObject<HTMLParagraphElement>}
          className={`text-xs tracking-[0.2em] uppercase font-semibold mb-10 text-center ${headerVisible ? "exp-animate-in" : "opacity-0"}`}
          style={{ color: "var(--color-yellow-primary, #F8E058)" }}
        >
          O Que Dizem Nossos Clientes
        </p>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {testimonials.map((t, idx) => (
            <blockquote
              key={idx}
              className={gridVisible ? "p-8 exp-animate-in" : "p-8 opacity-0"}
              style={{
                backgroundColor: "#0F0F0E",
                border: "1px solid rgba(255,255,255,0.06)",
                ...(gridVisible ? { animationDelay: `${idx * 100}ms` } : {}),
              }}
            >
              <span
                className="block text-4xl font-bold leading-none mb-4"
                style={{ color: "rgba(248,224,88,0.3)" }}
                aria-hidden="true"
              >
                "
              </span>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--color-white-off, #F5F2EA)" }}
              >
                {t.quote}
              </p>
              <footer>
                <p className="text-sm font-semibold text-white">{t.author}</p>
                <p
                  className="text-xs uppercase tracking-[0.1em] mt-0.5"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {t.role}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
