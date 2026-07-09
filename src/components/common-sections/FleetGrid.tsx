"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface FleetItem {
  name: string;
  text?: string;
  logo?: string;
  carImage?: string;
}

interface FleetGridProps {
  data: FleetItem[];
  heading: { highlight: string; rest: string; end?: string };
  subheading: string;
  showPrice?: boolean;
}

function FleetCard({ item, showPrice }: { item: FleetItem; showPrice?: boolean }) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[12px] sm:rounded-[15px] shadow-lg flex flex-col justify-between">
      <Image
        src={item.carImage || "/placeholder.jpg"}
        alt={item.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-black/10" />
      
      {/* Top Section */}
      <div className="absolute top-0 left-0 p-4 sm:p-6">
        <div className="relative w-[32px] h-[32px] sm:w-[42px] sm:h-[42px] mb-2">
          <Image src={item.logo || "/placeholder.jpg"} alt="Brand Logo" fill className="object-contain" />
        </div>
        <h3 
          className="text-white text-[16px] sm:text-[19px] font-semibold tracking-wide font-serif leading-tight" 
          style={{ textShadow: "0px 2px 6px rgba(0,0,0,0.8)" }}
        >
          {item.name}
        </h3>
      </div>


     {showPrice && item.text && (
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
          <p className="text-white text-[14px] sm:text-[16px] font-medium">
            {item.text}
          </p>
        </div>
      )}
    </div>
  );
}

export function FleetGrid({ data, heading, subheading, showPrice = false }: FleetGridProps) {
  if (!data || !heading) {
    return null;
  }
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
            className="text-[28px] xs:text-[32px] sm:text-[36px] md:text-[55px] font-bold mb-2 sm:mb-3"
            style={{ fontFamily: '"Playfair Display", serif', color: "#000000" }}
          >
            <span className="text-[#C69E65] mx-2 ">{heading.highlight}</span> 
            {heading.end || ""}
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[#23282D] text-center" style={{ fontFamily: "Poppins, sans-serif" }}>
            {subheading}
          </p>
        </div>

        {/* Mobile carousel */}
        <div className="sm:hidden">
          <div className="hidden sm:grid gap-6 justify-items-center" 
             style={{ 
               gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
               maxWidth: "1200px",
               margin: "0 auto"
             }}>
            {data?.map((item, index) => (
              <div key={index} className="relative shrink-0 snap-center w-[88%]" style={{ aspectRatio: "360 / 220" }}>
                <FleetCard item={item} showPrice={showPrice} />
              </div>
            ))}
          </div>

          {data.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {data.map((_, index) => (
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

        {/* Desktop grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={index} className="relative w-full p-[10px]" style={{ aspectRatio: "360 / 220" }}>
              <FleetCard item={item} showPrice={showPrice} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}