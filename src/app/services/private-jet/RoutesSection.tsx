"use client";

import Image from "next/image";

interface RoutesSectionData {
  title: {
    rest: string;
    highlight: string;
  };
  description: string;
  routes: string[];
  footerText: string;
  mainImage: string;
  galleryImages: string[];
}

interface RoutesSectionProps {
  data: RoutesSectionData;
}

export function RoutesSection({ data }: RoutesSectionProps) {
  return (
    <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="text-left">
          <h2
            className="font-bold mb-6 text-black text-[32px] sm:text-[40px] md:text-[55px]"
            style={{ fontFamily: '"Playfair Display", serif', lineHeight: "1.1" }}
          >
            {data.title.rest}{" "}
            <span className="text-[#C69E65]">{data.title.highlight}</span>
          </h2>
          <p className="mb-4 text-[16px]" style={{ fontFamily: "Poppins, sans-serif" }}>
            {data.description}
          </p>
          <ul
            className="list-disc pl-5 space-y-3 mb-6 text-[16px]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {(data.routes || []).map((route, i) => (
              <li key={i}>{route}</li>
            ))}
          </ul>
          <p className="text-[16px]" style={{ fontFamily: "Poppins, sans-serif" }}>
            {data.footerText}
          </p>
        </div>

        <div className="space-y-4">
          <Image
            src={data.mainImage}
            width={588}
            height={401}
            alt="Popular Route"
            className="rounded-2xl shadow-lg w-full h-auto"
          />
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {(data.galleryImages || []).map((img, i) => (
              <Image
                key={i}
                src={img}
                width={180}
                height={120}
                alt="Gallery"
                className="rounded-lg shadow-sm w-full h-auto object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}