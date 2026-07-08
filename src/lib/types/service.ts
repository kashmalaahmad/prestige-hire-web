export type SectionKey = 
  | "hero" 
  | "about" 
  | "whyChoose" 
  | "fleet" 
  | "bookingSection" 
  | "formSection";

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
  fleet?: Array<{ name: string; text: string; image: string }>;
  bookingSection?: { 
    title: { highlight: string; rest: string }; 
    subtitle: string; 
    steps: string[]; 
    footerText: string 
  };
  formSection?: { title: string; subtitle: string };
}