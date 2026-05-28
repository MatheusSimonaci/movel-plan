"use client";

import { motion } from "framer-motion";
import { movelPlanContent } from "@/lib/content/movel-plan";

export function ExperimentalTestimonialsStrip() {
  const { testimonials } = movelPlanContent;
  if (!testimonials.length) return null;

  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      aria-label="Depoimentos de clientes"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.2em] uppercase font-semibold mb-10 text-center"
          style={{ color: "var(--color-yellow-primary, #F8E058)" }}
        >
          O Que Dizem Nossos Clientes
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="p-8"
              style={{ backgroundColor: "#0F0F0E", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {/* Quote mark */}
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
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
