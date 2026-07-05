"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { fleetDataCars } from "@/lib/data";

export default function FleetPage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-start w-full h-[280px] xs:h-[320px] sm:h-[350px] md:h-[380px] lg:h-[400px] overflow-hidden"
        style={{
          backgroundImage: "url('https://www.prestigehire.co/wp-content/uploads/2026/04/Untitled-design-59.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(41, 39, 39, 0.45)" }} />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-6 md:pt-10">
          <h1 className="text-white text-[32px] md:text-[55px] font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
            Our Fleet
          </h1>
          <p className="text-white text-[14px] md:text-[18px] mb-8 font-medium">
            Premium vehicles · Professional chauffeurs · Absolute discretion
          </p>
          <Link href="/contact" className="px-8 py-3 bg-[#C69E65] text-black font-semibold rounded  transition-opacity">
            Book Your Ride
          </Link>
        </div>
      </section>

      {/* New Exotic & Luxury Rides Section (image_1cf1e8.png) */}
      <section className="py-16 px-4 bg-[#f9f9f9]">
        <div className="text-center">
          <h2 className="text-[28px] sm:text-[35px] md:text-[45px] font-bold text-black mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
            Exotic & Luxury Rides
          </h2>
          <div className="flex items-center justify-center gap-4 text-gray-400">
      <hr className="w-10 sm:w-16 border-gray-300" />
      <Image 
        src="https://www.prestigehire.co/wp-content/uploads/2026/04/heading-fleet.png" 
        width={335} 
        height={24} 
        alt="Divider" 
        className="w-[140px] sm:w-[200px] h-auto" 
      />
      <hr className="w-10 sm:w-16 border-gray-300" />
    </div>
        </div>
      </section>

  
<section className="py-10 px-3 sm:px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {fleetDataCars.map((car, index) => (
      <div
        key={index}
        className="flex flex-col w-full gap-5 p-5 border border-gray-100 rounded-[12px]  transition-shadow duration-300 bg-white"
      >
        <div className="relative h-[220px] sm:h-[260px] md:h-[300px] w-full overflow-hidden rounded-[8px]">
          <Image
            src={car.image}
            alt={car.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        
        {/* Card Content */}
        <div className="flex flex-col flex-grow gap-3">
          <h2 className="text-[20px] sm:text-[24px] font-semibold font-heading text-black">
            {car.name}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#595959] font-body leading-relaxed flex-grow">
            Reserve this iconic luxury car for your next event, wedding, or corporate occasion.
          </p>
          <Link href={car.link} className="w-full sm:w-auto">
    <Button className="w-full sm:w-auto">
      Enquire Now
    </Button>
  </Link>
        </div>
      </div>
    ))}
  </div>
</section>
    </main>
  );
}