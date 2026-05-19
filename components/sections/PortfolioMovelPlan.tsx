"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Play } from "lucide-react";
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
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Nossos Projetos
            </h2>
            <p className="text-zinc-400">
              Explore nossa galeria de ambientes planejados e inspire-se para transformar o seu espaço.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                  activeCategory === category
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-transparent border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.button
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer w-full text-left focus:outline-none focus:ring-2 focus:ring-primary/50 bg-zinc-900"
                onClick={() => setSelectedProject(project)}
                aria-label={`Ver detalhes do projeto ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {project.video && (
                  <div className="absolute top-4 right-4 z-10 p-2 bg-black/40 backdrop-blur-sm rounded-full text-white">
                    <Play className="w-4 h-4 fill-white" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-primary text-xs uppercase tracking-widest mb-2 font-bold">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  {project.materials && (
                    <p className="text-white/60 text-xs mb-4">
                      {project.materials.join(" + ")}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Maximize2 className="w-4 h-4" />
                    <span>Ver detalhes</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Detail View Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative max-w-5xl w-full bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-black transition-colors"
                onClick={() => setSelectedProject(null)}
                aria-label="Fechar modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="lg:w-3/5 relative bg-black flex items-center justify-center overflow-hidden min-h-[300px]">
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
                    alt={selectedProject.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                <span className="text-primary text-sm uppercase tracking-widest mb-4 font-bold">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {selectedProject.title}
                </h3>
                
                {selectedProject.materials && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.materials.map((m) => (
                      <span key={m} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                        {m}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <div className="space-y-4">
                  <a 
                    href="https://wa.me/5521992032834" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-transform active:scale-95"
                  >
                    Quero um Projeto Como Este
                  </a>
                  {selectedProject.instagramUrl && (
                    <a 
                      href={selectedProject.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-4 bg-white/5 text-white rounded-full font-medium hover:bg-white/10 transition-colors text-sm"
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
