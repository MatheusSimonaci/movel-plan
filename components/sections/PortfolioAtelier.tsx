"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { movelPlanContent, type PortfolioItem } from "@/lib/content/movel-plan";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { Chip } from "@/components/ui/chip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Category = "Todos" | "Salas" | "Quartos / Closets" | "Cozinhas" | "Banheiros / Lavabos";

const categories: Category[] = ["Todos", "Salas", "Quartos / Closets", "Cozinhas", "Banheiros / Lavabos"];

function useSticky(threshold = 0.6) {
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const limit = window.innerHeight * threshold;
    const handler = () => setStuck(window.scrollY > limit);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return stuck;
}

function ProjectModal({ project, onClose }: { project: PortfolioItem; onClose: () => void }) {
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    triggerRef.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
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
      transition={{ duration: 0.28 }}
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center md:p-8"
      style={{ backgroundColor: "rgba(27, 22, 20, 0.72)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full md:max-w-5xl overflow-hidden shadow-lg flex flex-col md:flex-row max-h-[92vh] md:max-h-[88vh] rounded-t-lg md:rounded-lg bg-bone"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-sm border border-ink-line text-ink-soft hover:text-ink hover:border-ink transition-colors duration-fast focus-visible:outline focus-visible:outline-1 focus-visible:outline-brass"
          onClick={onClose}
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="md:w-3/5 relative bg-walnut flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-0">
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

        <div className="md:w-2/5 p-8 md:p-10 flex flex-col justify-center overflow-y-auto">
          <p className="text-eyebrow uppercase text-brass-ink mb-3">{project.category}</p>
          <h3 id="modal-title" className="font-display text-display-md text-ink mb-5">
            {project.title}
          </h3>

          {project.materials && project.materials.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {project.materials.map((m) => (
                <Badge key={m}>{m}</Badge>
              ))}
            </div>
          )}

          <p className="text-body text-ink-soft leading-relaxed mb-8">{project.description}</p>

          <div className="flex flex-col gap-3">
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
              Quero um projeto como este
            </a>
            {project.instagramUrl && (
              <a
                href={project.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center w-full min-h-[48px] px-7",
                  "text-meta font-medium tracking-[0.04em] rounded-sm",
                  "bg-transparent text-ink border border-ink-line",
                  "hover:bg-linen transition-colors duration-fast",
                  "focus-visible:outline focus-visible:outline-1 focus-visible:outline-brass focus-visible:outline-offset-2 focus-visible:shadow-focus"
                )}
              >
                Ver no Instagram →
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PortfolioCard({
  project,
  featured,
  onClick,
}: {
  project: PortfolioItem;
  featured?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={cn(
        "group relative w-full text-left focus:outline-none",
        "focus-visible:outline focus-visible:outline-1 focus-visible:outline-brass focus-visible:outline-offset-2 focus-visible:shadow-focus"
      )}
      style={{ aspectRatio: featured ? "16/10" : "4/5" }}
      onClick={onClick}
      aria-label={`Ver detalhes: ${project.title}`}
    >
      <div
        className="absolute inset-0 overflow-hidden rounded-md bg-bone-50 shadow-sm transition-shadow duration-base group-hover:shadow-md"
        style={{
          boxShadow: undefined,
        }}
      >
        <img
          src={project.image}
          alt={`${project.category} — ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-base ease-standard group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div
          className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-base"
          style={{
            boxShadow: "inset 0 0 0 1px var(--color-brass), inset 0 0 0 5px var(--color-bone)",
          }}
        />
      </div>

      <div className="mt-3 px-1">
        <p className="text-eyebrow uppercase text-brass-ink mb-1">{project.category}</p>
        <p className="font-display text-h3 text-ink mb-1">{project.title}</p>
        {project.materials && project.materials.length > 0 && (
          <p className="text-meta text-ink-muted">{project.materials.join(" · ")}</p>
        )}
      </div>
    </button>
  );
}

export function PortfolioAtelier() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const stuck = useSticky(0.6);

  const filteredProjects = movelPlanContent.portfolio.filter(
    (p) => activeCategory === "Todos" || p.category === activeCategory
  );

  const handleClose = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      <nav
        id="portfolio"
        aria-label="Filtro de categorias"
        className="sticky top-0 z-30 transition-all duration-base"
        style={{
          backgroundColor: stuck ? "rgba(244, 239, 231, 0.85)" : "var(--color-bone)",
          backdropFilter: stuck ? "blur(12px)" : "none",
          borderBottom: "1px solid var(--color-ink-line)",
        }}
      >
        <Container className="py-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <Chip
                key={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Chip>
            ))}
          </div>
        </Container>
      </nav>

      <section
        className="bg-bone py-[128px] md:py-[160px]"
        aria-label="Portfólio de projetos"
      >
        <Container>
          <div className="mb-[32px]">
            <p className="text-eyebrow uppercase text-brass-ink mb-4">Projetos</p>
            <h2 className="font-display text-display-lg text-ink mb-4">
              Ambientes pensados, executados, entregues.
            </h2>
            <p className="text-lead text-ink-soft max-w-[54ch]">
              Marcenaria sob medida para salas, quartos, cozinhas e banheiros em toda a Zona Sul e Grande Rio.
            </p>
          </div>

          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {filteredProjects.map((project, idx) => {
                const isFeatured = activeCategory === "Todos" && idx === 0;
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.28, delay: idx * 0.04 }}
                    className={isFeatured ? "md:col-span-2" : "md:col-span-1"}
                  >
                    <PortfolioCard
                      project={project}
                      featured={isFeatured}
                      onClick={() => setSelectedProject(project)}
                    />
                  </motion.div>
                );
              })}
            </div>
          </AnimatePresence>
        </Container>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleClose} />
        )}
      </AnimatePresence>
    </>
  );
}
