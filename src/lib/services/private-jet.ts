// src/lib/services/private-jet.ts
import type { ServiceData } from "@/lib/types/service";

export const privateJet: ServiceData = {
  layout: [
    "about",
    "whyChoose",
    "fleet",
    "typesSection",
    "bookingSection",
    "routesSection",
    "ctaSection",
    "featuresSection",
    "formSection",
  ],
  hero: {
    heroImage: "https://www.prestigehire.co/wp-content/uploads/2026/04/jethire-luxury-Jet.jpg",
    heroTitle: "Private Jet Hire",
  },
  about: {
    heading: { highlight: "Private Jet Hire",rest: "in Sydney" },
    text: "Flying across Australia or internationally is easier and more comfortable with Prestige Hire. Our private jet hire service gives you the flexibility to set your own departure times and destinations. Whether for business or leisure, our private jet charter offers speed, privacy, and convenience. For clients seeking the finest travel experience on the ground as well, Prestige Hire also provides luxury cars in Sydney with professional chauffeur services.",
    image: "https://www.prestigehire.co/wp-content/uploads/2026/04/gulfstream-giv1.jpg",
  },
  whyChoose: {
    title: "Why Choose Prestige Hire",
    paragraphs: [
      "When it comes to private jet hire, Prestige Hire ensures every flight meets the highest standards of comfort and efficiency.",
      "When you book with Prestige Hire, you enjoy:",
    ],
    bullets: [
      "Flexible flight schedules based on your itinerary",
      "Direct access to both domestic and international destinations",
      "Luxury cabins for privacy and comfort",
      "An experienced crew with years of aviation expertise",
    ],
    closing:
      "Our private aircraft hire is ideal for executives, corporate teams, and travellers who value comfort and style. From short city-to-city flights to long international journeys, we make every trip smooth and enjoyable. We also arrange luxury airport transfers to complement your flight experience.",
    images: [
      "https://www.prestigehire.co/wp-content/uploads/2026/04/gulfstream-giv2.jpg",
      "https://www.prestigehire.co/wp-content/uploads/2026/04/gulfstream-giv3.jpg",
    ],
  },
  fleet: [
    {
      name: "Gulfstream GIV Luxury Jet",
      text: "The Gulfstream GIV offers long transcontinental range, flown by two professional pilots and a flight attendant. The newly refurbished cabin features 10 reclining leather seats, a four-seat lounge, and fold-out business tables. With capacity for up to 14 passengers, it’s a top choice for corporate jet hire and extended travel.",
      image: "https://www.prestigehire.co/wp-content/uploads/2026/04/larjet-3.jpg",
    },
    {
      name: "Learjet 31 Luxury Jet",
      text: "Compact, efficient, and fast, the Learjet 31 is a favourite for shorter interstate flights. Its Delta-Fins and Ski-Locker features deliver both stability and performance. This aircraft is often chosen for business jet hire and private jet charter flights across Australia.",
      image: "https://www.prestigehire.co/wp-content/uploads/2026/04/larjet-1.jpg",
    },
    {
      name: "Falcon 900 Luxury Jet",
      text: "With a range exceeding 5,000 miles, the Falcon 900 is ideal for international routes. Its three-engine configuration enhances safety and flexibility. A spacious interior makes it one of the most popular private jets for long-haul travel.",
      image: "https://www.prestigehire.co/wp-content/uploads/2026/04/falcon-1.jpg",
    },
  ],
  fleetHeading: "Our Fleet Private Jets",
  fleetSubheading: "Prestige Hire operates a selection of respected aircraft trusted worldwide.",
  typesSection: {
    title: {
    rest: "Types of",
    highlight: "Private Jet Charter Sydney",
  },
    description: "Prestige Hire provides a variety of private jet options to match every travel need:",
    items: [
      "Business Jet Charter – Perfect for executives and corporate teams needing punctual and discreet travel.",
      "Leisure Jet Charter – Ideal for weekend getaways, holidays, or family trips in complete comfort.",
      "VIP & Event Charter – Designed for red carpet events and celebrity transfers.",
      "Urgent or Special Charter Flights – For time-critical medical or last-minute travel needs.",
    ],
    footerText: "No matter the purpose, each private jet charter is tailored to ensure a seamless and comfortable journey.",
    image: "https://www.prestigehire.co/wp-content/uploads/2026/04/falcon-4-1.jpg",
  },
  bookingSection: {
    title: "How to Book a Private Jet",
    subtitle: "Booking your private plane hire with Prestige Hire is quick and simple:",
    steps: [
      "Choose your preferred aircraft from our fleet of private jets for hire.",
      "Share your travel details, including destination and schedule.",
      "Receive a tailored quote based on your needs.",
      "Confirm your booking and enjoy a smooth, first-class flight experience.",
    ],
    footerText: "Our team can also arrange formal car in Sydney for ground transport, ensuring a premium experience from home to the hangar.",
  },
  routesSection: {
    title: {
    rest: "Popular Routes from",
    highlight: "Sydney",
  },
    description: "Prestige Hire operates across Australia and beyond. Some of our most popular charter routes include:",
    routes: [
      "Sydney to Melbourne – A top choice for business and executive travel.",
      "Sydney to Brisbane – Ideal for quick corporate or family trips.",
      "Sydney to Gold Coast – A favourite for leisure and holiday travellers, often paired with premium cars.",
      "Sydney to Auckland – Perfect for international connections or weekend getaways.",
    ],
    footerText: "Each route is managed with the same attention to safety, timing, and luxury that defines every Prestige Hire flight.",
    mainImage: "https://www.prestigehire.co/wp-content/uploads/2026/04/gulfstream-giv3-1.jpg",
    galleryImages: [
      "https://www.prestigehire.co/wp-content/uploads/2026/04/larjet-2.jpg",
      "https://www.prestigehire.co/wp-content/uploads/2026/04/falcon-3.jpg",
      "https://www.prestigehire.co/wp-content/uploads/2026/04/larjet-4.jpg",
    ],
  },
  ctaSection: {
    title: "Book Your Jet Charter Today",
    paragraphs: [
      "At Prestige Hire, private jet hire is more than travel, it is a luxury experience. Whether you need a business jet for corporate purposes or a private plane for a personal journey, our fleet is ready to take you anywhere in the world.",
      "For weddings, corporate events, or coastal getaways, explore our other premium services such as wedding car hire and yacht hire in Sydney.",
      "Contact our team today to discuss your route and receive a personalised quote for your next flight.",
    ],
    buttonText: "Book Your Jet Charter",
    buttonLink: "/contact",
    image: "https://www.prestigehire.co/wp-content/uploads/2026/04/gulfstream-giv1.jpg",
  },
  formSection: {
    title: "Book Your Jet Charter Today",
    subtitle: "Experience the finest luxury aviation service Sydney has to offer. Book your flight today and discover the PrestigeHire difference.",
  },
  featuresSection: {
    title: "Sydney Jet Charter Services",
    description: "Prestige Hire provides a variety of private jet options in Sydney, including:",
    items: [
      "Private plane hire Sydney to major Australian cities",
      "Private jet charter Sydney for international travel",
      "Sydney business charter flights for executives and groups",
      "Charter flights Sydney for leisure or personal events",
      "Private jets for hire tailored to your travel needs",
    ],
    footerText: "Many clients pair their flights with our chauffeur service ensuring smooth travel from start to finish. For standout arrivals, you can combine your jet charter with luxury vehicles like the Rolls Royce Ghost or Ferrari 488.",
    mainImage: "https://www.prestigehire.co/wp-content/uploads/2026/04/larjet-1.jpg",
    galleryImages: [
      "https://www.prestigehire.co/wp-content/uploads/2026/04/falcon-1.jpg",
      "https://www.prestigehire.co/wp-content/uploads/2026/04/larjet-3.jpg",
      "https://www.prestigehire.co/wp-content/uploads/2026/04/falcon-4-1.jpg",
    ],
  },
};