"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface CtaSectionData {
  title: string;
  paragraphs: string[];
  buttonLink: string;
  buttonText: string;
  image: string;
}

interface CtaSectionProps {
  data: CtaSectionData;
}

export function CtaSection({ data }: CtaSectionProps) {
  return (
    <section className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6">
          <h2
            className="text-[26px] sm:text-[30px] md:text-[35px] font-bold text-black leading-tight"
            style={{ fontFamily: "'Playfair Display', sans-serif" }}
          >
            {data.title}
          </h2>
          <div
            className="font-poppins text-[16px] text-black space-y-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {data.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <Link href={data.buttonLink}>
            <Button>{data.buttonText}</Button>
          </Link>
        </div>
        <div className="relative w-full aspect-[588/401] rounded-lg overflow-hidden">
          <Image src={data.image} alt={data.title} fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}