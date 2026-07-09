"use client";

import Image from "next/image";

export function HarbourExperienceSection() {
  return (
    <section className="py-12 md:py-20 px-4 max-w-6xl mx-auto">
      <div className="grid sm:grid-cols-2 gap-10 items-center">
        <div>
          <h2
            className="font-bold mb-6 text-black text-[32px] sm:text-[40px] md:text-[50px]"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Sydney Harbour <span className="text-[#C69E65]">Yacht Hire</span> Experience
          </h2>

          <div
            className="text-gray-700 text-[16px] space-y-4 leading-relaxed"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <p>
              Sydney Harbour is one of the world's most iconic waterways. Our yacht hire
              services in Sydney Harbour let you enjoy the area at your own pace. You can
              avoid crowded public transport and regular cruises.
            </p>
            <p>
              From short harbour tours to extended charters, our yachts offer privacy,
              comfort and uninterrupted views. This is a great choice for people looking
              for a classy alternative to land venues. Enjoy unforgettable experiences on
              a private boat.
            </p>
          </div>
        </div>

        <div className="relative w-full h-64 sm:h-80 md:h-[401px] overflow-hidden rounded-md">
          <Image
            src="https://www.prestigehire.co/wp-content/uploads/2026/04/86ft-yacht2.jpg"
            alt="Sydney Harbour Yacht Hire Experience"
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
}