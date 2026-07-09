"use client";

import Image from "next/image";

interface FeaturesSectionData {
  title: string;
  description: string;
  items: string[];
  footerText: string;
  mainImage?: string;
  galleryImages?: string[];
}

interface FeaturesSectionProps {
  data: FeaturesSectionData;
}

export function FeaturesSection({ data }: FeaturesSectionProps) {
  return (
    <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="space-y-4">
          <Image
            src={data.mainImage || "/placeholder-image.jpg"}
            width={588}
            height={401}
            alt={data.title}
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
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

        <div className="text-left">
          <h2
            className="font-bold mb-6 text-black text-[32px] sm:text-[40px] md:text-[55px]"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {data.title.split(" ").slice(0, 1).join(" ")}{" "}
            <span className="text-[#C69E65]">
              {data.title.split(" ").slice(1, 3).join(" ")}
            </span>{" "}
            {data.title.split(" ").slice(3).join(" ")}
          </h2>

          <p className="mb-4 text-[16px]" style={{ fontFamily: "Poppins, sans-serif" }}>
            {data.description}
          </p>

          <ul
            className="list-disc pl-5 space-y-3 mb-6 text-[16px]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {data.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <p className="text-[16px] leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
            {data.footerText}
          </p>
        </div>
      </div>
    </section>
  );
}