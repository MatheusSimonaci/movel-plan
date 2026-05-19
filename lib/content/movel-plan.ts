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

export interface MovelPlanContent extends SiteContent {
  trustStats: StatItem[];
  differentiators: DifferentiatorItem[];
  process: ProcessStep[];
  testimonials: {
    quote: string;
    author: string;
    role: string;
  }[];
}

export const movelPlanContent: MovelPlanContent = {
  hero: {
    headline: "Móveis Planejados Personalizados",
    subheadline: "Projetos únicos feitos para você",
    primaryButton: "Conheça Nossos Projetos",
    secondaryButton: "Solicitar Orçamento",
  },
  trustStats: [
    { number: "500+", label: "Projetos Realizados" },
    { number: "4.9 ⭐", label: "Avaliação Média" },
    { number: "10+", label: "Anos de Experiência" },
    { number: "100%", label: "Satisfação Garantida" },
  ],
  differentiators: [
    {
      title: "Projetos 100% Personalizados",
      description: "Cada detalhe pensado para o seu espaço e estilo de vida.",
      icon: "layout",
    },
    {
      title: "Processo Transparente",
      description: "Acompanhe cada etapa, do projeto à instalação final.",
      icon: "eye",
    },
    {
      title: "Qualidade de Acabamento",
      description: "Materiais premium e execução impecável em cada peça.",
      icon: "award",
    },
  ],
  process: [
    { step: 1, title: "Consultoria Gratuita", description: "Reunião inicial para entender suas necessidades e desejos." },
    { step: 2, title: "Projeto Detalhado", description: "Visualização 3D completa do seu futuro ambiente." },
    { step: 3, title: "Aprovação e Ajustes", description: "Refinamos o projeto até que esteja perfeito para você." },
    { step: 4, title: "Produção", description: "Fabricação cuidadosa com os melhores materiais do mercado." },
    { step: 5, title: "Instalação", description: "Montagem profissional com atenção máxima aos detalhes." },
  ],
  services: {
    title: "Nossas Soluções",
    subtitle: "Ambientes planejados para todos os espaços",
    items: [
      { title: "Cozinhas", description: "Funcionalidade e beleza para o coração da casa." },
      { title: "Dormitórios", description: "Conforto e organização para o seu descanso." },
      { title: "Salas", description: "Ambientes acolhedores para receber e relaxar." },
      { title: "Banheiros", description: "Aproveitamento inteligente de pequenos espaços." },
    ],
  },
  about: {
    tag: "Quem Somos",
    title: "Excelência em Móveis Sob Medida",
    description: "Com anos de tradição, a Móvel Plan transforma sonhos em realidade através de projetos exclusivos e execução de alta qualidade.",
  },
  testimonials: [
    {
      quote: "O projeto da minha cozinha superou todas as expectativas. A qualidade é impressionante.",
      author: "Maria Silva",
      role: "Cliente Residencial",
    },
    {
      quote: "Profissionais extremamente competentes e entrega no prazo combinado.",
      author: "João Pereira",
      role: "Empresário",
    },
  ],
};
