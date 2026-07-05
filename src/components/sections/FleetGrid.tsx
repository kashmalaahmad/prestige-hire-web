"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { fleetData } from "@/lib/data";

function FleetCard({ item }: { item: (typeof fleetData)[number] }) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[12px] sm:rounded-[15px] shadow-lg">
      <Image
        src={item.carImage}
        alt={item.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute top-0 left-0 p-4 sm:p-6 flex flex-col items-start text-left">
        <div className="relative w-[32px] h-[32px] sm:w-[42px] sm:h-[42px] mb-2 sm:mb-3">
          <Image src={item.logo} alt="Brand Logo" fill className="object-contain" />
        </div>
        <h3
          className="text-white text-[16px] sm:text-[19px] md:text-[22px] font-semibold tracking-wide font-serif leading-tight"
          style={{ textShadow: "0px 2px 6px rgba(0,0,0,0.8)" }}
        >
          {item.name}
        </h3>
      </div>
    </div>
  );
}

export function FleetGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActiveIndex(index);
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-default">
        <div className="text-center mb-8 sm:mb-10 px-4">
          <h2
            className="text-[28px] xs:text-[32px] sm:text-[36px] md:text-[42px] font-bold mb-2 sm:mb-3"
            style={{ fontFamily: '"Playfair Display", serif', color: "#000000" }}
          >
            Our <span className="text-[#C69E65]">Premium</span> Fleet
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[#23282D]">
            Ideal for weddings, events and VIP transport across Sydney.
          </p>
        </div>

        {/* Mobile carousel - one card per view, swipeable, with dots */}
        <div className="sm:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 -mx-4 px-4 pb-1 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {fleetData.map((item, index) => (
              <div
                key={index}
                className="relative shrink-0 snap-center w-[88%]"
                style={{ aspectRatio: "360 / 220" }}
              >
                <FleetCard item={item} />
              </div>
            ))}
          </div>

          {fleetData.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {fleetData.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => scrollToIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-5 bg-[#C69E65]" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

      
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleetData.map((item, index) => (
            <div key={index} className="relative w-full p-[10px]" style={{ aspectRatio: "360 / 220" }}>
              <FleetCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}