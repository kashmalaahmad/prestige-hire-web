"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface FleetItem {
  image?: string;
  name: string;
  text: string;
}

interface FleetSectionProps {
  fleet: FleetItem[];
  slug: string;
}

export function FleetSection({ fleet, slug }: FleetSectionProps) {
  return (
    <section id="fleet" className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2
            className="text-[32px] sm:text-[40px] md:text-[55px] font-bold mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Our Fleet of <span className="text-[#C69E65]">Private Jets</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Prestige Hire operates a selection of respected aircraft trusted worldwide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {(fleet || []).map((item, i) => (
            <div
              key={i}
              className="p-2 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-xl">
                <Image src={item.image || "/placeholder-image.jpg"} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3
                  className="text-xl md:text-2xl font-bold mb-4"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {item.name}
                </h3>
                <p
                  className="text-gray-600 text-[16px] mb-6 flex-grow leading-relaxed"
                  style={{ fontFamily: 'Inter, "sans-serif"' }}
                >
                  {item.text}
                </p>
                <Link href={`/services/${slug}/details`}>
                  <Button type="button">View detail</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}