export interface ImageReference {
  alt: string;
  src: string;
}

export interface LinkContent {
  href: string;
  label: string;
  external?: boolean;
}

export interface HeroContent {
  description: string;
  image?: ImageReference;
  title: string;
  actions?: LinkContent[];
}

export interface SiteContent {
  description: string;
  hero?: HeroContent;
  title: string;
}
