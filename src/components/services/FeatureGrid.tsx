import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface CardData {
  image: string;
  heading: string; 
  paragraphs: string[]; 
  buttonText: string;
  buttonLink: string;
}

interface FeatureGridProps {
  titleHighlight: string;
  titleRest: string;
  subheading?: string;
  items: CardData[];
  highlightPosition?: "before" | "after"; 
}

export function FeatureGrid({ titleHighlight, titleRest, items,subheading,highlightPosition = "before"}: FeatureGridProps) {
  return (
    <section className="mx-auto py-10 md:py-16 px-4">
      <h2
        className="text-black font-bold text-[28px] sm:text-[34px] md:text-[55px] text-center mb-12"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
       {highlightPosition === "before" ? (
          <>
            <span className="text-[#C69E65]">{titleHighlight}</span> {titleRest}
          </>
        ) : (
          <>
            {titleRest} <span className="text-[#C69E65]">{titleHighlight}</span>
          </>
        )}
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col rounded-xl overflow-hidden bg-white border-[20px] border-white shadow-sm hover:shadow-lg transition-shadow duration-300"
            style={{ width: "353px" }}
          >
            <div className="relative h-64 w-full overflow-hidden rounded-md">
              <Image
                src={item.image}
                alt={item.heading}
                width={400}
                height={260}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: '"Playfair Display", serif' }}>
                {item.heading}
              </h3>
              <div className="text-gray-700 text-[16px] mb-4 flex-grow space-y-2" style={{ fontFamily: "Inter, sans-serif" }}>
                {item.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
              <Link href={item.buttonLink} className="self-start">
                <Button type="button">
                  {item.buttonText}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}