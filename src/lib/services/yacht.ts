import type { ServiceData } from "@/lib/types/service";

export interface YachtServiceData extends ServiceData {
  fleetHeading: { highlight: string; rest: string };
  fleetSubheading: string;
  faqSection: {
    title: string;
    description: string;
  };
  occasionsSection: {
    title: { highlight: string; rest: string };
    cards: Array<{
      image: string;
      heading: string;
      paragraphs: string[];
      buttonText: string;
      buttonLink: string;
    }>;
  };
}

export const yacht: YachtServiceData = {
  layout: [
    "hero",
    "about",
    "whyChoose",
    "fleet",
    "typesSection",
    "routesSection",
    "formSection",
    "bookingSection",
    "faqSection",
  ],
  hero: {
    heroImage: "https://www.prestigehire.co/wp-content/uploads/2026/04/Yacht-For-Hire-Sydney.webp",
    heroTitle: "Yacht for Hire in Sydney",
    heroLayout: "boxed",
  },
  about: {
    heading: { highlight: "Premium Yacht Hire", rest: "Services in Sydney" },
    text: "Prestige Hire offers premium yacht for hire in Sydney for private events, corporate gatherings and unforgettable experiences. Whether you are planning a fun cruise or a fancy event on the water, our yachts offer comfort, privacy, and style.\n\nOur services are designed for couples, families, corporate groups and event hosts who want more than a standard boat hire option. With experienced crew and fully equipped vessels, including a private boat, you enjoy a smooth and stress-free luxury boating experience on Sydney Harbour with friendly staff.\n\nHiring a yacht with Prestige Hire gives you complete freedom. You can customize your trip for sightseeing or celebrations. Enjoy the famous views of the boat on Sydney Harbour.",
    image: "https://www.prestigehire.co/wp-content/uploads/2026/04/boathire-img.jpg",
  },
  whyChoose: {
    title: "Why Choose Prestige Hire for Yacht Hire in Sydney",
    paragraphs: [
      "Customers choose Prestige Hire because we focus on quality service rather than exaggerated promises. Our team understands Sydney Harbour and delivers a premium yet approachable experience.",
      "Why clients trust us:",
    ],
    bullets: [
      "Sydney-based yacht hire specialists",
      "Fully crewed and licensed vessels",
      "Transparent pricing with clear quotes",
      "Suitable for private events and corporate functions",
      "Flexible hire durations",
      "Affordable private yacht hire with crew options",
    ],
    closing: "If you are looking for boat hire options, check out Prestige Hire. They provide good value and quality for luxury yacht charters.",
    images: [
      "https://www.prestigehire.co/wp-content/uploads/2026/04/86ft-yacht4.jpg",
      "https://www.prestigehire.co/wp-content/uploads/2026/04/50ft-yacht2.jpg",
    ],
  },
  fleet: [
    {
      name: "Oneworld Yacht",
      text: "The Oneworld Yacht is designed for guests who want a premium and relaxing boat hire option on Sydney Harbour. Its spacious layout makes it ideal for private events, small corporate gatherings and leisurely harbour cruises. The yacht has comfortable seating, open deck space, and a smooth ride. This lets guests enjoy great views of Sydney Harbour during the trip.\n\nInside, the Oneworld Yacht features a refined interior with modern finishes and well-planned spaces. It provides a comfortable environment for socialising, dining or simply relaxing while cruising past Sydney’s iconic landmarks. The onboard facilities are suitable for both daytime and evening charters.\n\nThe Oneworld Yacht comes with a professional skipper and friendly staff. This ensures a safe and relaxing luxury boating experience. It is a popular choice for those seeking a private boat that balances comfort, style and value.",
      image: "https://www.prestigehire.co/wp-content/uploads/2026/04/86ft-yacht2-1.jpg",
    },
    {
      name: "Galaxy I Yacht",
      text: "Galaxy I Yacht is a standout option for clients looking for a stylish and versatile yacht for hire in Sydney. This yacht has an elegant design and large deck areas. It is perfect for private events, birthday parties, corporate functions, and special occasions on the water. The layout allows guests to move freely and enjoy both indoor and outdoor spaces.\n\nThe designers created the interior of Galaxy I Yacht for comfort and sophistication. With plush seating, clean finishes and a welcoming atmosphere, it creates a relaxed setting for entertaining guests. Whether you are hosting a formal event or a casual gathering, this yacht adapts easily to different event styles.\n\nFully crewed and professionally maintained, Galaxy I Yacht offers a smooth and reliable charter experience. It is a great choice for those looking for a luxury boat rental. It offers beauty, comfort, and friendly service",
      image: "https://www.prestigehire.co/wp-content/uploads/2026/04/50ft-yacht2.jpg",
    },
    {
      name: "Windy 48 Triton Boat",
      text: "The Windy 48 Triton Boat is perfect for clients who enjoy performance, elegance and a more dynamic cruising experience. This vessel is ideal for smaller groups who want a fast, smooth and stylish way to explore Sydney Harbour. Its design offers both excitement and comfort, making it suitable for private boat cruises and relaxed harbour tours.\n\nThe Windy 48 Triton has a stylish outside and a great deck. Guests can enjoy fresh air and beautiful views of the harbor. The seating layout encourages conversation and social interaction, creating a more personal and intimate experience onboard.\n\nOperated with an experienced skipper and friendly staff, the Windy 48 Triton Boat ensures safety without compromising enjoyment. It is a great option for those seeking a refined yet energetic boat hire Sydney experience for unforgettable experiences.\n\nAll yachts come with experienced skippers and crew. These skippered yacht services ensure a smooth, enjoyable and secure journey on Sydney Harbour.",
      image: "https://www.prestigehire.co/wp-content/uploads/2026/04/50ft-yacht1.jpg",
    },
  ],
  fleetHeading: { highlight: "Yacht Fleet", rest: "Our Luxury " },
  fleetSubheading: "Prestige Hire offers a carefully selected fleet to suit different group sizes and event styles. Professional teams maintain each yacht and fully crew them for your comfort and safety, ensuring unforgettable experiences.Available vessels include:",

  bookingSection: {
    title: { highlight: "Yacht for Hire in Sydney", rest: "How to Book a "},
    subtitle: "Simple Booking Process",
    steps: [
      "Choose your preferred yacht",
      "Select your event date and duration",
      "Request a quote",
      "Confirm your booking",
    ],
    footerText: "Our team is available to guide you through every step, making boat hire in Sydney simple and stress-free with friendly staff.",
  },
  formSection: {
    title: "How to Book a Yacht for Hire in Sydney",
    subtitle: "Experience the finest chauffeur service Sydney has to offer. Book your journey today and discover the PrestigeHire difference.",
  },
  faqSection: {
    title: "Frequently Asked Questions",
    description: "Still have questions? Find ansers to our most commonly asked questions.",
  },
  occasionsSection: {
    title: { highlight: "Yacht Hire", rest: "for Every Occasion" },
    cards: [
      {
        image: "https://www.prestigehire.co/wp-content/uploads/2026/04/103ft-yacht1.jpg",
        heading: "Birthday Parties & Private Celebrations",
        paragraphs: [
          "Planning a birthday party on the water? Our yacht hire for birthday party in Sydney is perfect for intimate gatherings or lively celebrations. Enjoy music, catering options and stunning harbour views while our friendly staff manages everything onboard.",
          "Planning a wedding in Sydney? Complete your day with our luxury wedding car hire services.",
        ],
        buttonText: "View detail",
        buttonLink: "/services/yacht/details",
      },
      {
        image: "https://www.prestigehire.co/wp-content/uploads/2026/04/103ft-yacht2.jpg",
        heading: "Corporate Events & Business Functions",
        paragraphs: [
          "For meetings, client entertainment or networking events, our private yacht charter provides a professional and impressive setting. Many businesses pick Prestige Hire for boat hire in Sydney. Our reliable service and high-quality boats for corporate events earn us a strong reputation.",
          "Prefer a relaxed, chauffeur-driven journey before or after your cruise? Our chauffeur service in Sydney is available on demand.",
        ],
        buttonText: "View detail",
        buttonLink: "/services/yacht/details",
      },
      {
        image: "https://www.prestigehire.co/wp-content/uploads/2026/04/103ft-yacht3.jpg",
        heading: "Harbour Cruises & Sightseeing",
        paragraphs: [
          "Experience a relaxing boat cruise on Sydney Harbour with friends or family. Our guided harbour tour on a private yacht lets you see the Opera House, Harbour Bridge, and waterfront suburbs. Enjoy this experience in comfort and privacy.",
          "Travelling to or from the harbour or airport? Book our Sydney Airport transfer service for smooth connections.",
        ],
        buttonText: "View detail",
        buttonLink: "/services/yacht/details",
      },
      {
        image: "https://www.prestigehire.co/wp-content/uploads/2026/04/86ft-yacht3.jpg",
        heading: "Special Events & On-Water Venues",
        paragraphs: [
          "From engagements to private events, our yachts serve as a unique on-water event venue. A chartered private boat with crew allows you to focus on your guests while we handle navigation and safety.",
          "Organising a formal event or school formal? Explore our formal car hire options for a stylish arrival..",
        ],
        buttonText: "View detail",
        buttonLink: "/services/yacht/details",
      },
    ],
  },
};