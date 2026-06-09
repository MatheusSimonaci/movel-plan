"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { movelPlanContent, waLink } from "@/lib/content/movel-plan";
import { PortfolioItem } from "@/lib/content/types";
import { cn } from "@/lib/utils";

const categories = movelPlanContent.portfolioCategories;

export function PortfolioMovelPlan() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const reducedMotion = useReducedMotion();

  const filteredProjects = movelPlanContent.portfolio.filter(
    (project) => activeCategory === "Todos" || project.category === activeCategory
  );

  // Fecha o modal com Esc e trava o scroll do body enquanto aberto
  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex flex-col mb-14 gap-8">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.25em] uppercase text-primary font-semibold mb-4">
              Portfólio
            </p>
            <h2 className="font-display font-medium text-4xl sm:text-5xl md:text-7xl text-white leading-[1.05] tracking-tight">
              Projetos <em className="font-normal">entregues</em>
            </h2>
          </div>

          {/* Category filters — underline tabs */}
          <div
            className="flex flex-wrap gap-x-5 md:gap-x-8 gap-y-1 border-b border-white/10"
            role="tablist"
            aria-label="Filtrar projetos por ambiente"
          >
            {categories.map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "relative py-3 text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors duration-200",
                  activeCategory === category
                    ? "text-white"
                    : "text-white/40 hover:text-white/75"
                )}
              >
                {category}
                {activeCategory === category && (
                  <motion.span
                    layoutId="portfolio-tab-underline"
                    transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid — sharp corners, 4:5 aspect, poster-first */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.button
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileTap={{ scale: 0.99 }}
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer w-full text-left bg-[#1A1A19]"
                onClick={() => setSelectedProject(project)}
                aria-label={`Ver detalhes: ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={`${project.category} — ${project.title}`}
                  width={640}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />

                {/* Hover: deepen gradient, no extra chrome */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Label strip */}
                <div className="absolute bottom-0 left-0 right-0 p-5 pt-10 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-primary text-[10px] uppercase tracking-[0.2em] font-semibold mb-1.5">
                      {project.category}
                    </p>
                    <p className="font-display text-white text-2xl leading-tight">
                      {project.title}
                    </p>
                    {project.materials && project.materials.length > 0 && (
                      <p className="text-white/50 text-[11px] uppercase tracking-[0.08em] mt-1.5">
                        {project.materials.join(" · ")}
                      </p>
                    )}
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="w-5 h-5 text-white/0 group-hover:text-primary transition-all duration-300 translate-y-1 group-hover:translate-y-0 shrink-0 mb-1"
                  />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Detail Modal — sharp corners on desktop, bottom sheet on mobile */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center md:p-8 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.category} — ${selectedProject.title}`}
              initial={{ y: reducedMotion ? 0 : 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: reducedMotion ? 0 : 60, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full md:max-w-5xl bg-[#0B0B0A] border border-[#272727] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh] md:max-h-[88vh] rounded-t-lg md:rounded-none"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 text-white hover:text-primary transition-colors"
                onClick={() => setSelectedProject(null)}
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Media panel */}
              <div className="md:w-3/5 relative bg-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-0">
                {selectedProject.video && !reducedMotion ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain"
                    poster={selectedProject.poster}
                  >
                    <source src={selectedProject.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={selectedProject.poster ?? selectedProject.image}
                    alt={`${selectedProject.category} — ${selectedProject.title}`}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* Info panel */}
              <div className="md:w-2/5 p-8 md:p-10 flex flex-col justify-center overflow-y-auto">
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary mb-3 font-semibold">
                  {selectedProject.category}
                </p>
                <h3 className="font-display text-3xl md:text-4xl text-white mb-5 leading-tight">
                  {selectedProject.title}
                </h3>

                {selectedProject.materials && selectedProject.materials.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {selectedProject.materials.map((m) => (
                      <span
                        key={m}
                        className="px-3 py-1 border border-[#272727] text-[11px] uppercase tracking-[0.1em] text-muted-foreground"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                )}

                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ color: "var(--color-white-off, #F5F2EA)" }}
                >
                  {selectedProject.description}
                </p>

                <div className="space-y-3">
                  <a
                    href={waLink(movelPlanContent.site.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-[0.18em] transition-opacity hover:opacity-90"
                  >
                    Quero um Projeto Como Este
                  </a>
                  {selectedProject.instagramUrl && (
                    <a
                      href={selectedProject.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-3 border border-[#272727] text-white/60 text-xs uppercase tracking-widest hover:text-white hover:border-white/30 transition-colors"
                    >
                      Ver no Instagram
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
