export interface HeroContent {
  headline: string;
  subheadline: string;
  primaryButton: string;
  secondaryButton: string;
}

export interface AboutContent {
  tag: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServicesContent {
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

export interface SiteContent {
  hero: HeroContent;
  about: AboutContent;
  services: ServicesContent;
}
