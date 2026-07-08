// src/lib/types/service.ts

export type SectionKey =
  | "hero"
  | "about"
  | "whyChoose"
  | "fleet"
  | "typesSection"
  | "bookingSection"
  | "routesSection"
  | "ctaSection"
  | "formSection"
  | "featuresSection"
  | "faqSection";

export interface ServiceData {
  layout: SectionKey[];

  hero: {
    heroImage: string;
    heroTitle: string;
    heroLayout?: "full" | "boxed";
  };

  about: { 
    heading: { 
      highlight: string; 
      rest: string 
    }; 
    text: string; 
    image: string 
  };

  whyChoose: {
    title: string;
    paragraphs?: string[];
    bullets: string[];
    closing: string;
    images: string[];
  };

  fleet?: { name: string; text: string; image?: string; logo?: string; carImage?: string; price?: string }[];
  fleetHeading?: string;
  fleetSubheading?: string;

  typesSection?: {
    title: { highlight: string; rest: string };
    description: string;
    items: string[];
    footerText?: string;
    image?: string;
  };

  bookingSection?: {
    title: string;
    subtitle: string;
    steps: string[];
    footerText: string;
  };

  routesSection?: {
  title: { highlight: string; rest: string };
  description: string;
  routes?: string[];
  footerText?: string;
  mainImage: string;
  galleryImages?: string[];
};
  ctaSection?: {
    title: string;
    paragraphs: string[];
    buttonText: string;
    buttonLink: string;
    image: string;
  };

  formSection?: { title: string; subtitle: string };

  featuresSection?: {
    title: string;
    description?: string;
    items: string[];
    footerText?: string;
    mainImage?: string;
    galleryImages: string[];
  };


  faqSection?: {
    title: string;
    description?: string;
  };
}