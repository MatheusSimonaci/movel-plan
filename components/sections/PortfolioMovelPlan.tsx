"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { movelPlanContent } from "@/lib/content/movel-plan";
import { cn } from "@/lib/utils";

type Category = "Todos" | "Salas" | "Quartos / Closets" | "Cozinhas" | "Banheiros / Lavabos";

const categories: Category[] = ["Todos", "Salas", "Quartos / Closets", "Cozinhas", "Banheiros / Lavabos"];

export function PortfolioMovelPlan() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const [selectedProject, setSelectedProject] = useState<typeof movelPlanContent.portfolio[0] | null>(null);

  const filteredProjects = movelPlanContent.portfolio.filter(
    (project) => activeCategory === "Todos" || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex flex-col mb-12 gap-6">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.15em] uppercase text-primary font-semibold mb-3">
              Portfólio
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Nossos Projetos
            </h2>
          </div>

          {/* Category Filter Chips — uppercase labels, sharp corners per spec */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-150 border focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring",
                  activeCategory === category
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-transparent border-white/20 text-white/60 hover:border-white/40 hover:text-white"
                )}
              >
                {category}
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
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer w-full text-left focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring bg-[#1A1A19]"
                onClick={() => setSelectedProject(project)}
                aria-label={`Ver detalhes: ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={`${project.category} — ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover overlay — centered "Ver Detalhes" */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                  <span className="text-white text-sm font-semibold uppercase tracking-widest border border-white/60 px-6 py-2">
                    Ver Detalhes
                  </span>
                </div>

                {/* Always-visible bottom label strip */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-8">
                  <p className="text-primary text-[11px] uppercase tracking-[0.12em] font-semibold mb-1">
                    {project.category}
                  </p>
                  <p className="text-white text-sm font-medium leading-snug">
                    {project.title}
                  </p>
                  {project.materials && project.materials.length > 0 && (
                    <p className="text-white/50 text-[11px] uppercase tracking-[0.08em] mt-1">
                      {project.materials.join(" · ")}
                    </p>
                  )}
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Detail Modal — sharp corners on desktop, full-screen sheet on mobile */}
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
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full md:max-w-5xl bg-[#0B0B0A] border border-[#272727] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh] md:max-h-[88vh] rounded-t-lg md:rounded-none"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-20 p-2 bg-black/60 text-white hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                onClick={() => setSelectedProject(null)}
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Media panel */}
              <div className="md:w-3/5 relative bg-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-0">
                {selectedProject.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                    poster={selectedProject.poster}
                  >
                    <source src={selectedProject.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.category} — ${selectedProject.title}`}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* Info panel */}
              <div className="md:w-2/5 p-8 md:p-10 flex flex-col justify-center overflow-y-auto">
                <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-3 font-semibold">
                  {selectedProject.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-snug">
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
                    href="https://wa.me/5521992032834"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
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
