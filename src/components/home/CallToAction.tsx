"use client";

import Image from "next/image";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://www.prestigehire.co/wp-content/uploads/2026/04/new-gallery16-711x533-640x480-1.png"
          alt="Luxury Cars in Sydney"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Dark overlay for text contrast */}
      </div>

      {/* Content */}
      <div className="container-default relative z-10 text-center flex flex-col items-center">
        <h2 
          className="text-4xl md:text-[55px] font-semibold text-white leading-tight mb-6"
          style={{ fontFamily: '"Playfair Display", sans-serif' }}
        >
          Luxury Car Hire Throughout Sydney
        </h2>
        
        <p 
          className="text-[16px] text-white/90 max-w-[700px] mb-10 leading-relaxed"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          We proudly offer luxury automobile hiring services throughout Sydney including the CBD, Parramatta, Western Sydney and neighboring areas providing superior travel wherever you need to go.
        </p>

        <Link 
          href="/contact"
          className="px-8 py-3 text-[#23282D] font-medium text-[16px] rounded transition-transform hover:scale-105"
          style={{ 
            background: "linear-gradient(360deg, #C69E65 0%, #FBE4BA 86%)", 
            fontFamily: '"Poppins", sans-serif' 
          }}
        >
          Book Your Luxury Cars
        </Link>
      </div>
    </section>
  );
}