"use client";

import { formalCarHire } from "@/lib/services/formal-car-hire";
import { Hero } from "@/components/sections/Hero";

export default function FormalCarHirePage() {
  const data = formalCarHire;

  return (
    <main className="overflow-hidden">

      <Hero
        backgroundImage={data.hero.heroImage}
        titleContent={
          <h1
            className="text-white font-bold text-[32px] sm:text-[45px] md:text-[65px]"
            style={{ fontFamily: '"Playfair Display", sans-serif' }}
          >
            {data.hero.heroTitle}
          </h1>
        }
        primaryButtonText="Book Your Ride"
        primaryButtonLink="/contact"
        secondaryButtonText="View Fleet"
        secondaryButtonLink="#fleet"
      />

      
    </main>
  );
}