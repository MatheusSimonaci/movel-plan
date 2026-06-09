"use client";

import { Phone } from "lucide-react";
import { movelPlanContent, waLink } from "@/lib/content/movel-plan";

export function Contact() {
  const { site, contact } = movelPlanContent;

  return (
    <section id="contato" className="py-28 md:py-40 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.25em] uppercase text-primary font-semibold mb-5">
            {contact.eyebrow}
          </p>
          <h2 className="font-display font-medium text-4xl sm:text-5xl md:text-7xl text-white mb-6 leading-[1.05] tracking-tight">
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-[0.18em] transition-opacity hover:opacity-90"
            >
              {contact.primaryButton}
            </a>
            <a
              href={`tel:+${site.whatsapp}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 border border-[#272727] text-white/70 text-sm font-medium uppercase tracking-[0.18em] hover:border-white/40 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {contact.secondaryButton}
            </a>
          </div>

          <p className="text-[11px] uppercase tracking-[0.2em] text-white/35 mt-12">
            {site.areas}
          </p>
        </div>
      </div>
    </section>
  );
}
