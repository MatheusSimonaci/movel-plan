import { SiteContent } from "./types";

export interface StatItem {
  number: string;
  label: string;
}

export interface DifferentiatorItem {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Salas" | "Quartos / Closets" | "Cozinhas" | "Banheiros / Lavabos";
  image: string;
  video?: string;
  poster?: string;
  description: string;
  materials?: string[];
  instagramUrl?: string;
}

export interface MovelPlanContent extends SiteContent {
  trustStats: StatItem[];
  differentiators: DifferentiatorItem[];
  process: ProcessStep[];
  testimonials: {
    quote: string;
    author: string;
    role: string;
  }[];
  portfolio: PortfolioItem[];
}

export const movelPlanContent: MovelPlanContent = {
  hero: {
    headline: "Móveis Planejados Personalizados",
    subheadline: "Projetos únicos feitos para você",
    primaryButton: "Ver Projetos",
    secondaryButton: "Solicitar Orçamento",
  },
  trustStats: [
    { number: "200+", label: "Projetos entregues" },
    { number: "15", label: "Anos de experiência" },
    { number: "100%", label: "Garantia nos projetos" },
  ],
  differentiators: [
    {
      title: "Projeto 3D Gratuito",
      description: "Visualize seu espaço antes de assinar qualquer contrato.",
      icon: "cube",
    },
    {
      title: "Materiais de Alto Padrão",
      description: "MDF premium, ferragens importadas e acabamentos duráveis.",
      icon: "star",
    },
    {
      title: "Entrega no Prazo",
      description: "Compromisso com prazo e qualidade em cada projeto.",
      icon: "check",
    },
  ],
  process: [
    {
      step: 1,
      title: "Consulta Gratuita",
      description: "Conversamos sobre seu espaço, estilo e orçamento. Presencialmente ou por WhatsApp.",
    },
    {
      step: 2,
      title: "Projeto 3D",
      description: "Criamos o projeto personalizado com visualização 3D para você aprovar cada detalhe.",
    },
    {
      step: 3,
      title: "Fabricação e Entrega",
      description: "Produzimos com materiais de alto padrão e instalamos com precisão. Garantia total.",
    },
  ],
  testimonials: [
    {
      quote: "O projeto ficou exatamente como imaginei. Equipe super profissional, prazo cumprido e acabamento impecável.",
      author: "Mariana S.",
      role: "Cliente — Niterói",
    },
    {
      quote: "Transformaram meu apartamento pequeno em algo muito mais funcional e bonito. Recomendo demais!",
      author: "Rafael T.",
      role: "Cliente — Barra da Tijuca",
    },
  ],
  about: {
    tag: "",
    title: "",
    description: "",
  },
  services: {
    title: "",
    subtitle: "",
    items: [],
  },
  portfolio: [
    {
      id: "living-room-1",
      title: "Sala planejada",
      category: "Salas",
      image: "/assets/movel-plan/DYPtgxORg-Q-poster.webp",
      video: "/assets/movel-plan/DYPtgxORg-Q.mp4",
      poster: "/assets/movel-plan/DYPtgxORg-Q-poster.webp",
      description: "Ambiente sofisticado integrando sala de estar com marcenaria sob medida de alto padrão.",
      materials: ["MDF Ares", "Off White", "Itapuã"],
      instagramUrl: "https://www.instagram.com/p/DYPtgxORg-Q/",
    },
    {
      id: "kitchen-1",
      title: "Cozinha planejada",
      category: "Cozinhas",
      image: "/assets/movel-plan/DNRSw3zSElq.webp",
      description: "Cozinha funcional com aproveitamento inteligente de espaços e acabamentos premium.",
      materials: ["Marcenaria sob medida"],
      instagramUrl: "https://www.instagram.com/p/DNRSw3zSElq/",
    },
    {
      id: "bedroom-1",
      title: "Quarto planejado",
      category: "Quartos / Closets",
      image: "/assets/movel-plan/DN6JZ30j4nC-poster.webp",
      video: "/assets/movel-plan/DN6JZ30j4nC.mp4",
      poster: "/assets/movel-plan/DN6JZ30j4nC-poster.webp",
      description: "Dormitório com closet integrado, priorizando conforto e organização.",
      materials: ["Marcenaria sob medida"],
      instagramUrl: "https://www.instagram.com/p/DN6JZ30j4nC/",
    },
    {
      id: "bathroom-1",
      title: "Banheiro planejado",
      category: "Banheiros / Lavabos",
      image: "/assets/movel-plan/DOHXUTIknN5-poster.webp",
      video: "/assets/movel-plan/DOHXUTIknN5.mp4",
      poster: "/assets/movel-plan/DOHXUTIknN5-poster.webp",
      description: "Banheiro compacto e funcional com marcenaria resistente a áreas úmidas.",
      materials: ["Ares", "Freijó"],
      instagramUrl: "https://www.instagram.com/p/DOHXUTIknN5/",
    },
    {
      id: "living-room-2",
      title: "Sala planejada",
      category: "Salas",
      image: "/assets/movel-plan/DOOaavrDSEE-poster.webp",
      video: "/assets/movel-plan/DOOaavrDSEE.mp4",
      poster: "/assets/movel-plan/DOOaavrDSEE-poster.webp",
      description: "Painel de TV e armários integrados para sala de estar contemporânea.",
      materials: ["MDF Ares", "Freijó"],
      instagramUrl: "https://www.instagram.com/p/DOOaavrDSEE/",
    },
    {
      id: "bathroom-2",
      title: "Banheiro planejado",
      category: "Banheiros / Lavabos",
      image: "/assets/movel-plan/DNWuNiPp41Z.webp",
      description: "Soluções inteligentes para banheiros e lavabos de todos os tamanhos.",
      materials: ["Marcenaria sob medida"],
      instagramUrl: "https://www.instagram.com/p/DNWuNiPp41Z/",
    },
  ],
};
