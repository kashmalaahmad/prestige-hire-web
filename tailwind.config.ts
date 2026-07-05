import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          light: "#FFFBFA",
          DEFAULT: "#FBF7F5",
          dark: "#F7F2F2",
        },
        gold: {
          light: "#FBE4BA",
          DEFAULT: "#C69E65",
          dark: "#C59D64",
        },
        dark: {
          DEFAULT: "#1E1E1E",
          alt: "#23282D",
          muted: "#595959",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)"],
        body: ["var(--font-poppins)"],
        sans: ["var(--font-inter)"],
      },
      boxShadow: {
        card: "0px 2.43px 19.45px 0px rgba(0,0,0,0.07)",
        glow: "4px 0px 14px 0px rgba(198,158,101,0.25)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(90deg, #C69E65 1.92%, #FBE4BA 53.46%, #C59D64 100%)",
      },
    },
  },
  plugins: [],
};
export default config;