export interface SiteInfo {
  name: string;
  /** Dígitos no formato internacional, ex: 5521992032834 */
  whatsapp: string;
  phoneDisplay: string;
  instagramUrl: string;
  /** Regiões atendidas, ex: "Niterói · Barra · Zona Sul" */
  areas: string;
  logo: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  /** Trecho final do headline, renderizado em itálico serifado */
  headlineAccent: string;
  subheadline: string;
  primaryButton: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  video?: string;
  poster?: string;
  description: string;
  materials?: string[];
  instagramUrl?: string;
}

export interface ContactContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryButton: string;
  secondaryButton: string;
}

export interface SiteContent {
  site: SiteInfo;
  hero: HeroContent;
  portfolio: PortfolioItem[];
  portfolioCategories: string[];
  contact: ContactContent;
}
