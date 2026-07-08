"use client";

import { Hero } from "@/components/sections/Hero";
import { FleetGrid } from "@/components/sections/FleetGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactForm } from "@/components/sections/ContactForm";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { weddingHireData } from "@/lib/data";
import { fleetData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Car } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function WeddingHirePage() {
  const listItems = [
    "Your special day will be the talk of the town.",
    "An impressive wedding from beginning to end.",
    "Feel like royalty with the second to none treatment you will receive from our professional team and staff.",
    "Our highly experienced staff will provide the best VIP treatment with every event hire.",
  ];

  return (
    <main className="overflow-x-hidden">
      <Hero
        backgroundImage="https://www.prestigehire.co/wp-content/uploads/2026/04/image_2020_07_15T12_25_15_960Z.png"
        titleContent={
          <h1
            className="font-bold text-[32px] sm:text-[48px] lg:text-[65px]"
            style={{ fontFamily: '"Playfair Display", serif', color: "#fbe4ba" }}
          >
            Wedding Car Hire
          </h1>
        }
        primaryButtonText="Book Your Ride"
        primaryButtonLink="/book"
        secondaryButtonText="View Fleet"
        secondaryButtonLink="/fleet"
      />

     <FleetGrid 
      data={fleetData} 
      heading={{ highlight: "Premium Fleet", rest: "Our" }} 
      subheading="Ideal for weddings, events and VIP transport across Sydney."
      showPrice={false} 
    />

      <section className="py-8 md:py-12 px-4 bg-white overflow-hidden">
        <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-4">
          <div className="flex-1 space-y-4 w-full">
            <h2
              className="text-[32px] sm:text-4xl md:text-5xl font-bold m-0"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Our <span className="text-[#C69E65]">Wedding</span> Car
            </h2>

            <p className="text-[#54595F] leading-relaxed text-[15px] sm:text-[16px]">
              Prestige Hire Sydney can help you with the perfect wedding car hire.
              Our reliable service and impeccable range of exotic super cars and
              limousines will ensure your special day runs smoothly and leaves
              guests impressed.
            </p>

            <ul className="space-y-3">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Car aria-hidden="true" className="w-5 h-5 text-[#555] mt-1 shrink-0" />
                  <span className="text-[#54595F] text-[15px] sm:text-[16px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-auto md:flex-shrink-0">
            <Image
              src="https://www.prestigehire.co/wp-content/uploads/2026/04/image_2020_09_08T07_05_55_892Z.png"
              alt="Wedding Car Hire"
              width={530}
              height={440}
              className="object-cover rounded-lg shadow-sm w-full h-auto md:w-[530px] md:h-[440px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-12 px-4">
        <div className="container-default">
          <p className="font-poppins text-[15px] sm:text-[16px] leading-[24px] text-[#333333] text-center max-w-[900px] mx-auto">
            The Rolls Royce chauffeur Sydney we appoint for you is very professional
            and highly experienced. Rolls Royce hire Sydney service is now offered
            by Prestige Hire and in affordable price. That means you can hire such a
            luxury car in cheap. Wedding limo hire Sydney service is something that
            you should look for now. If the wedding time is coming quick, then Rolls
            Royce wedding car hire Sydney can bring the best way for you to travel
            to that wedding venue in style. Rolls Royce wedding car Sydney announced
            now can be availed in cheap.
          </p>
        </div>
      </section>

      <section className="bg-[#121212] section-padding px-4">
        <div className="container-default text-center">
          <h2 className="font-heading text-white text-[32px] sm:text-[42px] md:text-[48px] leading-tight mb-4">
            Why Choose Us
          </h2>

          <div className="flex items-center justify-center gap-4 mb-12 md:mb-16">
            <span className="h-px w-16 sm:w-24 md:w-32 bg-gray-600" />
            <Car className="w-6 h-6 text-gray-400 shrink-0" strokeWidth={1.5} />
            <span className="h-px w-16 sm:w-24 md:w-32 bg-gray-600" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {weddingHireData.features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-[#121212]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-white text-lg sm:text-xl mb-3">
                  {title}
                </h3>
                <p className="font-poppins text-[15px] leading-[26px] text-gray-400 max-w-[320px]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding px-4">
        <div className="container-default grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="font-bold mb-4 text-[32px] sm:text-[40px] md:text-[55px] leading-[1.2]"
              style={{ fontFamily: '"Playfair Display", sans-serif' }}
            >
              <span className="text-dark">{weddingHireData.locatedIn.titlePrefix} </span>
              <span className="text-gold">{weddingHireData.locatedIn.titleHighlight}</span>{" "}
              <span className="text-dark">{weddingHireData.locatedIn.titleSuffix}</span>
            </h2>

            <ul className="space-y-3 mb-8">
              {weddingHireData.locatedIn.fleet.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-dark shrink-0" strokeWidth={1.5} />
                  <span className="font-poppins text-[15px] text-dark">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link href={weddingHireData.locatedIn.ctaLink}>
              <Button variant="primary">
                {weddingHireData.locatedIn.ctaText}
              </Button>
            </Link>
          </div>

          <div className="relative w-full aspect-[800/620] rounded-lg overflow-hidden shadow-card">
            <Image
              src={weddingHireData.locatedIn.image}
              alt="Prestige Hire fleet of luxury wedding cars"
              fill
              className="object-cover"
            />

          </div>
        </div>
      </section>

      <ServicesGrid services={weddingHireData.services} />

      <ContactForm
        title="Book Your Wedding Car Here"
        subtitle="Experience the finest chauffeur service Sydney has to offer. Book your journey today and discover the PrestigeHire difference."
      />

      <Testimonials />

      <FaqSection/>
    </main>
  );
}