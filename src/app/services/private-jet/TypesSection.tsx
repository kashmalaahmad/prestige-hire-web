"use client";

import Image from "next/image";

interface TypesSectionData {
  title: {
    rest: string;
    highlight: string;
  };
  description: string;
  items: string[];
  footerText: string;
  image?: string;
}

interface TypesSectionProps {
  data: TypesSectionData;
  fallbackImage: string;
}

export function TypesSection({ data, fallbackImage }: TypesSectionProps) {
  return (
    <section className="py-10 md:py-16 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h2
            className="font-bold mb-6 text-black text-[32px] sm:text-[40px] md:text-[55px]"
            style={{ fontFamily: '"Playfair Display", serif', lineHeight: "1.1" }}
          >
            {data.title.rest}{" "}
            <span className="text-[#C69E65]">{data.title.highlight}</span>
          </h2>

          <div
            className="text-black space-y-2"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px" }}
          >
            <p>{data.description}</p>
            <ul className="list-disc pl-5 space-y-1 mt-4 mb-4">
              {data.items.map((item, i) => (
                <li key={i} className="leading-6">{item}</li>
              ))}
            </ul>
            <p className="mt-4 font-medium">{data.footerText}</p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={data.image ?? fallbackImage}
            width={588}
            height={401}
            alt="Types of Jet"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}