"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

const projects = [
  {
    id: "1",
    title: "Cozinha Minimalista",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000",
    description: "Cozinha com acabamento em laca branca e detalhes em madeira natural.",
  },
  {
    id: "2",
    title: "Dormitório Master",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1505693419148-db19f4d7144b?q=80&w=1000",
    description: "Closet integrado com iluminação LED e painéis ripados.",
  },
  {
    id: "3",
    title: "Escritório Executivo",
    category: "Corporativo",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000",
    description: "Mobiliário funcional com design ergonômico e acabamento premium.",
  },
  {
    id: "4",
    title: "Sala de Estar",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000",
    description: "Home theater com painel em pedra e nichos iluminados.",
  },
  {
    id: "5",
    title: "Espaço Gourmet",
    category: "Lazer",
    image: "https://images.unsplash.com/photo-1556912177-4517ca26df0e?q=80&w=1000",
    description: "Área integrada com churrasqueira e bancada em quartzo.",
  },
  {
    id: "6",
    title: "Biblioteca Particular",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000",
    description: "Estantes do chão ao teto com escada deslizante em metal.",
  },
];

export function PortfolioMovelPlan() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Projetos Realizados
            </h2>
            <p className="text-zinc-400">
              Uma seleção de nossos trabalhos mais recentes, demonstrando a versatilidade e o cuidado em cada detalhe.
            </p>
          </div>
          <div className="h-px flex-1 bg-zinc-800 hidden md:block mx-12 mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-primary text-xs uppercase tracking-widest mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Maximize2 className="w-4 h-4" />
                  <span>Ver detalhes</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/95"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-2/3 aspect-video lg:aspect-auto">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/3 p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-primary text-sm uppercase tracking-widest mb-4">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {selectedProject.title}
                  </h3>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>
                  <button className="w-full py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-transform active:scale-95">
                    Quero um Projeto Como Este
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
