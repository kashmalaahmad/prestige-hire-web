// src/lib/services/luxury-car-hire.ts
import type { ServiceData } from "@/lib/types/service";

export const luxuryCarHire: ServiceData = {
  layout: [
    "hero",
    "about",
    "fleet",
    "whyChoose",
    "formSection",
    "faqSection",
  ],
  hero: {
    heroImage: "https://www.prestigehire.co/wp-content/uploads/2026/04/image_2020_07_15T12_24_22_549Z-1.png",
    heroTitle: "Luxury Car Hire Sydney",
  },
  about: {
    title: "Luxury Car Hire in Sydney",
    text: "Are you searching for a luxury car hire in Sydney that defines luxury and style? Prestige Hire is your premier destination for exclusive, high-end travel experiences. We provide an exceptional range of luxury vehicles for weddings, formals, corporate events and private occasions. Choose from world-class brands including Rolls Royce, Lamborghini, Ferrari, Bentley, and Mercedes-Benz all maintained to perfection.\n\nAt Prestige Hire, we know that luxury is more than appearance, it’s about the feeling of elegance from the moment you step inside. Our professional chauffeurs ensure you arrive at every destination with confidence, comfort and class.",
    image: "https://www.prestigehire.co/wp-content/uploads/2026/04/new-gallery29-1.png",
  },
  fleetHeading: "Our Chauffer Car Hire Fleet",
  fleetSubheading: "If you’re looking for reliable private drivers for hire, Prestige Hire provides highly trained, courteous, and punctual chauffeurs across Sydney.",
  fleet: [
    { 
      name: "Rolls Royce Dawn", 
      text: "Rent Price: $720/day",
      logo: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-70-1.png",
      image: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-70-1.png" 
    },
    { 
      name: "Rolls Royce Phantom", 
      text: "Rent Price: $720/day",
      logo: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-70-1.png",
      image: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-70-1.png" 
    },
    { 
      name: "Lamborghini Huracan", 
      text: "Rent Price: $720/day",
      logo: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-26-1.png",
      image: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-26-1.png" 
    },
    { 
      name: "Rolls Royce Dawn", 
      text: "Rent Price: $720/day",
      logo: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-42-3.png",
      image: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-42-3.png" 
    },
    { 
      name: "Mercedes-Benz AMG", 
      text: "Rent Price: $720/day",
      logo: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-42-3-1.png",
      image: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-42-3-1.png" 
    },
    { 
      name: "Maserati GranTurismo", 
      text: "Rent Price: $720/day",
      logo: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-32-1.png",
      image: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-32-1.png" 
    },
  ],
  whyChoose: {
    title: "Why Choose Prestige Hire for Your Private Chauffeur Service?",
    paragraphs: [
      "Planning an event that calls for class, prestige and luxury? At Prestige Hire, we redefine what luxury car hire means in Sydney. Each of our vehicles reflects unmatched craftsmanship and is presented in flawless condition to complement your event.",
      "Our chauffeurs are trained to deliver professional, discreet and courteous service, ensuring your journey is as memorable as the destination itself."
    ],
    bullets: [
      "Over a decade of experience in luxury transport across Sydney",
      "Licensed, insured, and professionally trained chauffeurs",
      "Premium vehicles from Rolls Royce, Mercedes, Bentley, Maserati & Audi",
      "Ideal for weddings, airport transfers, school formals, and VIP travel",
      "On-time service, 24/7 availability, and real-time booking support",
      "Complimentary bottled water, Wi-Fi, and climate-controlled comfort"
    ],
    closing: "Choose Prestige Hire for a service that blends style, discretion, and reliability.",
    images: [
      "https://www.prestigehire.co/wp-content/uploads/2026/04/new-gallery20.png",
      "https://www.prestigehire.co/wp-content/uploads/2026/04/new-gallery13.png"
    ]
  },
  formSection: {
    title: "Get Quote For Chauffeur Hire",
    subtitle: "Experience the finest chauffeur service Sydney has to offer. Book your journey today and discover the PrestigeHire difference.",
  },
  faqSection: {
    title: "Frequently Asked Questions",
    description: "Still have questions? Find answers to our most commonly asked questions.",
  },
};