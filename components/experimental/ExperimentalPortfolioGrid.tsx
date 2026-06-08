"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { movelPlanContent, type PortfolioItem } from "@/lib/content/movel-plan";
import { cn } from "@/lib/utils";

type Category = "Todos" | "Salas" | "Quartos / Closets" | "Cozinhas" | "Banheiros / Lavabos";

const categories: Category[] = ["Todos", "Salas", "Quartos / Closets", "Cozinhas", "Banheiros / Lavabos"];

function useSticky() {
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const threshold = window.innerHeight * 0.8;
    const handler = () => setStuck(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return stuck;
}

function ProjectModal({
  project,
  onClose,
}: {
  project: PortfolioItem;
  onClose: () => void;
}) {
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    triggerRef.current = document.activeElement as HTMLElement;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center md:p-8 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full md:max-w-5xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh] md:max-h-[88vh] rounded-t-lg md:rounded-none"
        style={{ backgroundColor: "#0B0B0A", border: "1px solid #272727" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-20 p-2 bg-black/60 text-white hover:text-yellow-400 transition-colors focus-visible:outline focus-visible:outline-2"
          onClick={onClose}
          aria-label="Fechar"
          style={{ outlineColor: "var(--color-yellow-primary, #F8E058)" }}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media panel */}
        <div className="md:w-3/5 relative bg-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-0">
          {project.video ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain"
              poster={project.poster}
              aria-label={`${project.category} — ${project.title}`}
            >
              <source src={project.video} type="video/mp4" />
            </video>
          ) : (
            <img
              src={project.image}
              alt={`${project.category} — ${project.title}`}
              className="w-full h-full object-contain"
            />
          )}
        </div>

        {/* Info panel */}
        <div className="md:w-2/5 p-8 md:p-10 flex flex-col justify-center overflow-y-auto">
          <p className="text-[11px] uppercase tracking-[0.18em] font-semibold mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
            {project.category}
          </p>
          <h3
            id="modal-title"
            className="text-2xl md:text-3xl font-bold text-white mb-5 leading-snug"
          >
            {project.title}
          </h3>

          {project.materials && project.materials.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {project.materials.map((m) => (
                <span
                  key={m}
                  className="px-3 py-1 text-[11px] uppercase tracking-[0.1em]"
                  style={{ border: "1px solid #272727", color: "rgba(255,255,255,0.5)" }}
                >
                  {m}
                </span>
              ))}
            </div>
          )}

          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--color-white-off, #F5F2EA)" }}>
            {project.description}
          </p>

          <div className="space-y-3">
            <a
              href="https://wa.me/5521992032834"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-4 text-sm font-semibold uppercase tracking-widest transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2"
              style={{
                backgroundColor: "var(--color-yellow-primary, #F8E058)",
                color: "#050505",
                outlineColor: "var(--color-yellow-primary, #F8E058)",
              }}
            >
              Quero um Projeto Como Este
            </a>
            {project.instagramUrl && (
              <a
                href={project.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 text-xs uppercase tracking-widest transition-colors hover:text-white"
                style={{ border: "1px solid #272727", color: "rgba(255,255,255,0.5)" }}
              >
                Ver no Instagram
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ExperimentalPortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const stuck = useSticky();

  const filteredProjects = movelPlanContent.portfolio.filter(
    (p) => activeCategory === "Todos" || p.category === activeCategory
  );

  return (
    <>
      {/* Sticky Category Nav */}
      <nav
        id="exp-portfolio"
        aria-label="Filtro de categorias"
        className="sticky top-0 z-30 transition-all duration-300"
        style={{
          backgroundColor: stuck ? "rgba(5,5,5,0.97)" : "#050505",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: stuck ? "blur(12px)" : "none",
        }}
      >
        <div className="container mx-auto px-6 md:px-12 py-4 flex gap-2 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "flex-shrink-0 px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-200 border focus-visible:outline focus-visible:outline-2",
                activeCategory === cat
                  ? "border-transparent text-black"
                  : "bg-transparent border-white/15 text-white/50 hover:border-white/30 hover:text-white"
              )}
              style={
                activeCategory === cat
                  ? {
                      backgroundColor: "var(--color-yellow-primary, #F8E058)",
                      outlineColor: "var(--color-yellow-primary, #F8E058)",
                    }
                  : { outlineColor: "var(--color-yellow-primary, #F8E058)" }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* Portfolio Grid */}
      <section
        className="py-16 md:py-20 bg-[#050505]"
        aria-label="Portfólio de projetos"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-10">
            <p className="text-xs tracking-[0.18em] uppercase font-semibold mb-3" style={{ color: "var(--color-yellow-primary, #F8E058)" }}>
              Portfólio
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Nossos Projetos
            </h2>
          </div>

          <div
            className="grid gap-4 md:gap-5"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))" }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.button
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="group relative overflow-hidden cursor-pointer w-full text-left focus:outline-none focus-visible:outline focus-visible:outline-2 bg-[#1A1A19]"
                  style={{ aspectRatio: "4/5", outlineColor: "var(--color-yellow-primary, #F8E058)" }}
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Ver detalhes: ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.category} — ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <span
                      className="text-white text-xs font-semibold uppercase tracking-widest px-6 py-2"
                      style={{ border: "1px solid rgba(255,255,255,0.6)" }}
                    >
                      Ver Detalhes
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-4 pt-10">
                    <p
                      className="text-[11px] uppercase tracking-[0.12em] font-semibold mb-1"
                      style={{ color: "var(--color-yellow-primary, #F8E058)" }}
                    >
                      {project.category}
                    </p>
                    <p className="text-white text-sm font-medium leading-snug">{project.title}</p>
                    {project.materials && project.materials.length > 0 && (
                      <p className="text-white/40 text-[11px] uppercase tracking-[0.08em] mt-1">
                        {project.materials.join(" · ")}
                      </p>
                    )}
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
