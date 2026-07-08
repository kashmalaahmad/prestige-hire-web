// src/lib/services/stretch-limousine-hire.ts
import type { ServiceData } from "@/lib/types/service";

export const stretchLimousine: ServiceData = {
  layout: [
    "hero",
    "about",
    "fleet",
    "typesSection",
    "bookingSection",
    "formSection",
    "faqSection",
  ],
  hero: {
    heroImage: "https://www.prestigehire.co/wp-content/uploads/2026/04/gullwing-1-1.jpg",
    heroTitle: "Stretch Limousine Hire Sydney",
  },
  about: {
    title: "Luxury Stretch Limousine Hire in Sydney",
    text: "A stretch limo makes any occasion feel special. At Prestige Hire, we offer stylish stretch limousine hire in Sydney with friendly chauffeurs, clean interiors and a smooth ride from pick-up to drop-off. From school formals and weddings to birthday parties and VIP events, our limos help you arrive with confidence. We organise your pick-up, photo stops and timing so the trip feels easy. Just share the date, preferred car and location. Our team will handle everything while you enjoy the moment with your friends or family.",
    image: "https://www.prestigehire.co/wp-content/uploads/2026/04/gullwing-1-1.jpg",
  },
  fleetHeading: "Our Stretch Limo Fleet",
  fleetSubheading: "Turn heads with our professional stretch limousine selection:",
  fleet: [
    { 
      name: "Jeep SRT Limousine", 
      text: "Rent Price: $720/day",
      logo: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-70-1.png",
      carImage: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-70-1.png" 
    },
    { 
      name: "Audi Q7 Limousine", 
      text: "Rent Price: $720/day",
      logo: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-70-1.png",
      carImage: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-70-1.png" 
    },
    { 
      name: "Hummer Limousine", 
      text: "Rent Price: $720/day",
      logo: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-26-1.png",
      carImage: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-26-1.png" 
    },
    { 
      name: "Chrysler 300 Stretch Limousine", 
      text: "Rent Price: $720/day",
      logo: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-42-3.png",
      carImage: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-42-3.png" 
    },
  ],
  typesSection: {
    title: "Stretch Limo Hire for Events",
    description: "Whether the event is formal or casual, a stretch limo brings a memorable start to your night.",
    items: [
      "Spacious seating for groups",
      "Professional chauffeurs",
      "Photo stops available on request",
      "Music setup",
      "Direct pick-up and drop-off"
    ],
    footerText: "Comfortable interiors, smooth travel and great photos make the experience worth it.",
    image: "https://www.prestigehire.co/wp-content/uploads/2026/04/lemozine-car3-1.jpg",
  },
  bookingSection: {
    title: "How Booking Works",
    subtitle: "Booking your private plane hire with Prestige Hire is quick and simple:",
    steps: [
      "Choose Your Limo: Look at our limos and pick one that suits the size of your group.",
      "Send Your Details: Share your date, time and location.",
      "Confirm: We confirm your booking and timing.",
      "Enjoy the Ride: Your chauffeur arrives early, and you travel in comfort."
    ],
    footerText: "Need help picking the right car? Contact us anytime through our contact page.",
  },
  ctaSection: {
    title: "Wedding Stretch Limo Hire",
    paragraphs: [
      "Your wedding day deserves a grand arrival. Our stretch limousine hire in Sydney gives you a relaxed ride from home to ceremony and reception.",
      "We look after timing, pick-up and your preferred photo locations, so you can enjoy the day with no stress.",
      "Each limo is cleaned before each booking for a fresh, comfortable experience. You can also request ribbons to match your theme."
    ],
    buttonText: "Book Your Ride",
    buttonLink: "#",
    image: "https://www.prestigehire.co/wp-content/uploads/2026/04/lemozine-car1.webp",
  },
  whyChoose: {
    title: "Why Choose Prestige Hire",
    paragraphs: [""],
    bullets: [
      "Trusted Sydney transport brand",
      "Helpful, licensed chauffeurs",
      "Clear pricing based on event and trip time",
      "Options for weddings, formals and group trips",
      "Clean cars, ready for photos",
      "Add-ons available on request"
    ],
    closing:"From your door to your venue, we aim to make every ride smooth and relaxed.",
    images: ["https://www.prestigehire.co/wp-content/uploads/2026/04/lemozine-car4.jpg"]
  },
  formSection: {
    title: "Book Limo Hire Here",
    subtitle: "Experience the finest chauffeur service Sydney has to offer. Book your journey today and discover the PrestigeHire difference.",
  },
  faqSection: {
    title: "Frequently Asked Questions",
    description: "Still have questions? Find answers to our most commonly asked questions.",
  },
};