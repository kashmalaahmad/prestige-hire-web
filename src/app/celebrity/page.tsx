"use client";

import Image from "next/image";
import { celebrityData } from "@/lib/data";

export default function CelebrityPage() {
  return (
    <main className="min-h-screen bg-[#4C4C4C] py-0">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center w-full h-[300px]"
        style={{
          backgroundImage: "url('https://www.prestigehire.co/wp-content/uploads/2026/04/breadcrumb.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-black underline text-[48px] md:text-[55px] font-bold" style={{ fontFamily: '"Playfair Display", serif' }}>
          Celebrity
        </h1>
      </section>

      {/* Celebrity Grid Section */}
      <section className="py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {celebrityData.map((celeb, index) => (
              <div 
                key={index} 
                className="flex flex-col bg-transparent overflow-hidden"
              >
                {/* Image container */}
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src={celeb.image}
                    alt={celeb.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                
                {/* Dark Name Card footer */}
                <div className="bg-[#2D2D2D] py-4 px-2 text-center">
                  <h2 
                    className="text-[16px] font-semibold text-white"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    {celeb.name}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}