"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { movelPlanContent, waLink } from "@/lib/content/movel-plan";

export function Contact() {
  const { site, contact } = movelPlanContent;

  return (
    <section id="contato" className="py-24 md:py-36 bg-[#050505]">
      <div className="container mx-auto px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl mx-auto text-center rounded-[2.5rem] glass overflow-hidden px-6 py-16 md:px-16 md:py-24"
        >
          {/* Glow radial interno */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(248,224,88,0.12),transparent_55%)]"
          />

          <div className="relative">
            <p className="text-[11px] tracking-[0.25em] uppercase text-primary font-semibold mb-5">
              {contact.eyebrow}
            </p>
            <h2 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-[1.08] tracking-tight">
              {contact.headline}
            </h2>
            <p
              className="text-base leading-relaxed mb-12 max-w-md mx-auto font-light"
              style={{ color: "var(--color-white-off, #F5F2EA)" }}
            >
              {contact.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href={waLink(site.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-[0.18em] transition-all hover:shadow-[0_0_40px_rgba(248,224,88,0.35)]"
              >
                {contact.primaryButton}
              </a>
              <a
                href={`tel:+${site.whatsapp}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full glass text-white/70 text-sm font-medium uppercase tracking-[0.18em] hover:border-white/30 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {contact.secondaryButton}
              </a>
            </div>

            <p className="text-[11px] uppercase tracking-[0.2em] text-white/35 mt-12">
              {site.areas}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
