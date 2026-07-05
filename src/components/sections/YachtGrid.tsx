import Image from "next/image";
import Link from "next/link";
import { yachtData } from "@/lib/data";

export function YachtGrid() {
  return (
    // Switched to w-full and removed restricted container padding
    <section className="w-full py-[60px] bg-white">
      <div className="w-full px-2 sm:px-4">

        <div className="text-center mb-10 md:mb-16 px-4">
          <h2
            className="text-[32px] sm:text-[40px] md:text-[55px] font-bold text-[#515151] leading-tight mb-6 md:mb-10"
            style={{
              fontFamily: '"Playfair Display", sans-serif',
              fontFeatureSettings: "normal",
            }}
          >
            <span className="text-[#C69E65]">Luxury Yacht Charter</span> in Sydney
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {yachtData.map((yacht, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl overflow-hidden bg-white border-20 border-white shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-[220px] sm:h-[250px] w-full p-3 pb-0">
                <Image
                  src={yacht.image}
                  alt={yacht.name}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="font-heading text-[20px] sm:text-[22px] font-semibold text-black mb-3">
                  {yacht.name}
                </h3>
                <p className="font-body text-[15px] sm:text-[16px] text-[#595959] mb-6 flex-grow">
                  {yacht.description}
                </p>

                <Link
                  href={yacht.link}
                  className="w-fit px-5 py-2 text-[14px] font-medium text-black rounded transition-all hover:opacity-90"
                  style={{
                    background: "linear-gradient(90deg, #C69E65 0%, #FBE4BA 100%)",
                  }}
                >
                  View detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}