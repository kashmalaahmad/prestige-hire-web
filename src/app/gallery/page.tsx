"use client";

import Image from "next/image";
import { galleryImages } from "@/lib/data";

export default function GalleryPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#4C4C4C]">
      <section
        className="relative flex items-center justify-center w-full h-[300px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://www.prestigehire.co/wp-content/uploads/2026/04/breadcrumb.jpg')",
        }}
      >
        <div className="text-center px-4">
          <h1
            className="text-black text-4xl md:text-5xl lg:text-6xl font-bold underline underline-offset-8 decoration-2"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Gallery
          </h1>
        </div>
      </section>


      <section className="flex-1 py-16 px-4 bg-white">
        <div className="max-w-[1300px] mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#C69E65]" style={{ fontFamily: '"Playfair Display", serif' }}>
              Our Rides
            </h2>
            <Image 
              src="https://www.prestigehire.co/wp-content/uploads/2026/04/heading-fleet.png" 
              width={335} height={24} alt="divider" className="mx-auto" 
            />
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
            {galleryImages.map((src, index) => (
              <div 
                key={index} 
                className={`relative overflow-hidden rounded-lg group ${
                  index === 0 ? "lg:col-span-1 lg:row-span-2 !h-full" : // Tall image
                  index === 1 ? "lg:col-span-1 lg:row-span-2 !h-full" : // Tall image
                  "col-span-1 row-span-1"
                }`}
              >
                <Image
                  src={src}
                  fill
                  alt="Luxury Ride"
                  className="object-cover transition-transform duration-500 "
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0  transition-opacity flex items-center justify-center">
                  <span className="text-white text-3xl font-light">+</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}