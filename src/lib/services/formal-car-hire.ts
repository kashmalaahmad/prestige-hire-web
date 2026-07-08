import type { ServiceData } from "@/lib/types/service";

export interface FormalCarServiceData extends ServiceData {
  ctaSection: {
    title: string;
    paragraphs: string[];
    buttonText: string;
    buttonLink: string;
    image: string;
  };
  fleetHeading: { highlight: string; rest: string };
  fleetSubheading: string;
  typesSection: {
    title: { highlight: string; rest: string };
    description: string;
    items: string[];
    footerText: string;
    image: string;
  };
}

export const formalCarHire: FormalCarServiceData = {
  layout: [
    "hero",
    "about",
    "fleet",
    "typesSection",
    "bookingSection",
    "ctaSection",
    "whyChoose",
    "formSection",
    "faqSection",
  ],
  hero: {
    heroImage: "https://www.prestigehire.co/wp-content/uploads/2026/04/image_2020_07_15T12_24_22_549Z-1.png",
    heroTitle: "Formal Car Hire Sydney",
  },
  about: {
    heading: { highlight: "Formal Car Hire", rest: "Luxury" },
    text: "Your school formal deserves more than just a ride. At Prestige Hire, we make every arrival memorable with our range of luxury cars and professional chauffeurs. From your doorstep to the red carpet, we bring style, comfort, and confidence to your night. Whether it is a school formal or a Year 12 celebration, our formal car hire in Sydney adds that special touch that makes the evening unforgettable. Every ride is planned with care from home pickup and photo stops to your final drop-off. Simply choose your preferred car, confirm your pickup time, and leave the rest to us. We handle everything smoothly so you can enjoy every moment without worrying about timing, parking, or coordination.",
    image: "https://www.prestigehire.co/wp-content/uploads/2026/04/Untitled-design-59-1.png",
  },
  fleet: [
    { name: "Rolls Royce Dawn", text: "Rent Price: $720/day", logo: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-70-1.png", carImage: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-19-1.png" },
    { name: "Rolls Royce Phantom", text: "Rent Price: $720/day", logo: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-70-1.png", carImage: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-19-1.png" },
    { name: "Lamborghini Huracan", text: "Rent Price: $720/day", logo: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-26-1.png", carImage: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-28-1.png" },
    { name: "Bentley Continental GT", text: "Rent Price: $720/day", logo: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-42-3-1.png", carImage: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-38-1.png" },
    { name: "Mercedes-Benz AMG", text: "Rent Price: $720/day", logo: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-42-3-1.png", carImage: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-36-1-1.png" },
    { name: "Maserati GranTurismo", text: "Rent Price: $720/day", logo: "https://tse1.mm.bing.net/th/id/OIP.oRi7jfpl8FPiLzYIb5XUtAHaEY?pid=Api&h=220&P=0", carImage: "https://www.prestigehire.co/wp-content/uploads/2026/04/image-31-1.png" },
  ],
  fleetHeading: { highlight: "Car Fleet", rest: "Our Formal" },
  fleetSubheading: "Turn heads with our luxury cars designed to make your formal night unforgettable:",
  typesSection: {
    title: { highlight: "Formal Car", rest: "Services" },
    description: "A school formal is a night to remember, and your arrival sets the tone. Our school formal car hire lets you travel like a star without worrying about traffic or parking.",
    items: [
      "Luxury cars to match your outfit and theme",
      "Professional chauffeurs for reliable service",
      "Music setup, comfortable interiors and photo time",
    ],
    footerText: "Parents trust our safety standards and students love the grand entrance.",
    image: "https://www.prestigehire.co/wp-content/uploads/2026/04/new-gallery4.png",
  },
  bookingSection: {
    title: { highlight: "Yacht for Hire in Sydney", rest: "How to Book a "},
    subtitle: "Booking your formal car hire with Prestige Hire is quick and simple:",
    steps: [
      "Choose Your Car – Explore our luxury fleet and pick the one that suits your vibe.",
      "Book Easily – Secure your date online or call us directly.",
      "Relax and Enjoy – Our chauffeur arrives early with your car ready for the big night.",
      "Celebrate – Arrive on time, take photos and enjoy the evening stress-free.",
    ],
    footerText: "Need help picking the right car? Contact us anytime through our contact page.",
  },
  ctaSection: {
    title: "Year 12 Formal Car Hire — Make It Count",
    paragraphs: [
      "Finishing school calls for something special, and your formal night should feel just as memorable. With our Year 12 formal car hire in Sydney, you get a stylish chauffeur-driven experience from home pickup to your red-carpet arrival.",
      "We handle the timing, photo stops, and routes so you can simply enjoy the moment. Travel solo or with your friends, play your music, and arrive relaxed and ready for the night ahead. It’s more than a ride, it’s part of the celebration.",
    ],
    buttonText: "Get Free Quote",
    buttonLink: "#",
    image: "https://www.prestigehire.co/wp-content/uploads/2026/04/new-gallery16.png",
  },
  whyChoose: {
    title: "Why Choose Prestige Hire",
    paragraphs: ["From your doorstep to the venue, we make sure every ride feels smooth and enjoyable."],
    bullets: [
      "Trusted Sydney brand for luxury transport",
      "Licensed, experienced chauffeurs",
      "Clear pricing with no surprises",
      "3-hour and custom hire packages",
      "Add-on options like private chauffeurs or yacht hire in Sydney for after-party celebrations"
    ],
    closing: "From your doorstep to the venue, we make sure every ride feels smooth and enjoyable.",
    images: ["https://www.prestigehire.co/wp-content/uploads/2026/04/about-img.jpg"]
  },
  formSection: {
    title: "Get Free Quote for Your Formal Cars",
    subtitle: "Experience the finest chauffeur service Sydney has to offer. Book your journey today and discover the PrestigeHire difference.",
  },
  faqSection: {
    title: "Frequently Asked Questions",
    description: "Still have questions? Find answers to our most commonly asked questions.",
  },
};