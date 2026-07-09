export type SectionKey = 
  | "hero" 
  | "about" 
  | "whyChoose" 
  | "fleet" 
  | "bookingSection" 
  | "formSection";
    "faqSection";

export interface ServiceData {
  layout: string[]; // Keep as string[] for flexibility or use SectionKey[]
  hero: {
    heroImage: string;
    heroTitle: string;
    heroLayout?:string;
  };
  about: { 
    heading: { highlight: string; rest: string }; 
    text: string; 
    image: string;
  };
  whyChoose: {
    title: string;
    paragraphs?: string[];
    bullets: string[];
    closing: string;
    images: string[];
  };
  fleet?: Array<{ 
    name: string; 
    text: string; 
    image?: string; 
    logo?: string; 
    carImage?: string; 
  }>;
  fleetHeading?: { highlight: string; rest: string };
  fleetSubheading?: string;
  bookingSection?: { 
    title: { highlight: string; rest: string }; 
    subtitle: string; 
    steps: string[]; 
    footerText: string 
  };
  formSection?: { title: string; subtitle: string };
  faqSection?: {
    title: string;
    description: string;
  },
}