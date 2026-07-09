"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import { testimonials, avatarUrls } from "@/lib/data";

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.9;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 md:py-20 bg-white px-4">
      <div
        className="mx-auto relative"
        style={{
          maxWidth: "1140px",
          padding: "clamp(20px, 4vw, 40px)",
          backgroundImage: "linear-gradient(90deg, #C69E65 1.92%, #FBE4BA 53.46%, #C69E65 100%)",
          borderRadius: "12px",
        }}
      >
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-[55px] sm:text-[55px] md:text-[48px] font-bold text-black leading-tight mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
            What Our Clients Say
          </h2>
          <p className="text-[24px] sm:text-[24px] font-bold tracking-widest text-black mb-1">EXCELLENT</p>
          
          {/* Updated Google Star Icons */}
          <div className="flex justify-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Image 
                key={i} 
                src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" 
                alt="Star" 
                width={30} 
                height={30} 
              />
            ))}
          </div>

          <p className="text-[15px] sm:text-[15px] text-black/80 mb-3">Based on <span className="font-bold">169 reviews</span></p>
          
          {/* Updated Google Logo */}
          <div className="flex justify-center mb-6">
            <Image 
              src="https://cdn.trustindex.io/assets/platform/Google/logo.svg" 
              alt="Google" 
              width={100} 
              height={28} 
            />
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button onClick={() => scroll("left")} className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md items-center justify-center">
            <ChevronLeft size={18} />
          </button>

          <div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-1" style={{ scrollbarWidth: "none" }}>
            {testimonials.map((t, index) => (
              <div key={index} className="snap-start shrink-0 w-[85%] sm:w-[48%] lg:w-[32%] bg-[#F2F3F4] rounded-[10px] p-5 flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 relative bg-[#C69E65]">
                      <Image src={avatarUrls[index % avatarUrls.length]} alt={t.name} fill sizes="40px" className="object-cover" />
                    </div>
                    <div>
                      <p className="text-[15px] font-bold text-black leading-tight">{t.name}</p>
                      <p className="text-[12px] text-[#70757a] leading-tight mt-0.5">3 weeks ago</p>
                    </div>
                  </div>
                  {/* Small Google Icon in Review Header */}
                  <Image src="https://cdn.trustindex.io/assets/platform/Google/logo.svg" alt="Google" width={18} height={18} />
                </div>

                <div className="flex items-center gap-1.5">
                  {[...Array(Number(t.rating) || 0)].map((_, i) => (
                    <Image key={i} src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Star" width={15} height={15} />
                  ))}
                  <BadgeCheck size={15} className="text-[#4285F4] fill-[#4285F4]/10 ml-0.5" />
                </div>

                <p className="text-[15px] text-[#3c4043] leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>

          <button onClick={() => scroll("right")} className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md items-center justify-center">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}