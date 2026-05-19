"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

type CalApi = {
  q?: unknown[];
  ns?: Record<string, CalApi>;
  loaded?: boolean;
  (...args: unknown[]): void;
};

declare global {
  interface Window {
    Cal?: CalApi;
  }
}

const CAL_NAMESPACE = "reuniao-de-website";
const CAL_LINK = "matheus-simonaci-vieira/reuniao-de-website";
const CAL_ELEMENT_ID = "my-cal-inline-reuniao-de-website";
const CAL_TIMEZONE = "America/Sao_Paulo";
const CAL_URL = `https://cal.com/${CAL_LINK}?cal.tz=${encodeURIComponent(CAL_TIMEZONE)}`;

export function Schedule() {
  useEffect(() => {
    (function initCal(C: Window, A: string, L: string) {
      const pushQueue = (api: CalApi, args: unknown[]) => {
        api.q = api.q || [];
        api.q.push(args);
      };
      const doc = C.document;

      C.Cal =
        C.Cal ||
        function Cal(...args: unknown[]) {
          const cal = C.Cal as CalApi;

          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            doc.head.appendChild(doc.createElement("script")).src = A;
            cal.loaded = true;
          }

          if (args[0] === L) {
            const api = function namespaceApi(...namespaceArgs: unknown[]) {
              pushQueue(api as CalApi, namespaceArgs);
            } as CalApi;
            const namespace = args[1];

            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns = cal.ns || {};
              cal.ns[namespace] = cal.ns[namespace] || api;
              pushQueue(cal.ns[namespace], args);
              pushQueue(cal, ["initNamespace", namespace]);
            } else {
              pushQueue(cal, args);
            }

            return;
          }

          pushQueue(cal, args);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal?.("init", CAL_NAMESPACE, { origin: "https://app.cal.com" });
    window.Cal?.ns?.[CAL_NAMESPACE]?.("inline", {
      elementOrSelector: `#${CAL_ELEMENT_ID}`,
      config: {
        layout: "month_view",
        "cal.tz": CAL_TIMEZONE,
        useSlotsViewOnSmallScreen: "true",
      },
      calLink: CAL_LINK,
    });
    window.Cal?.ns?.[CAL_NAMESPACE]?.("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <section id="agenda" className="bg-background py-24 text-white md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
              <CalendarDays className="h-3 w-3" />
              Agendamento
            </div>
            <h2 className="font-serif text-4xl font-light tracking-tight md:text-6xl">
              Escolha o melhor horário para conversarmos.
            </h2>
          </div>
          <div className="space-y-5 lg:pb-2">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Reserve uma reunião rápida para alinharmos objetivo, prazo e o melhor caminho para transformar sua presença digital em uma fonte real de confiança e conversão.
            </p>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "rounded-none border-primary/50 px-6 text-primary hover:bg-primary/10",
              })}
            >
              Abrir agenda em nova aba
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden border border-white/10 bg-zinc-950"
        >
          <div
            id={CAL_ELEMENT_ID}
            className="h-[680px] w-full overflow-auto md:h-[760px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
