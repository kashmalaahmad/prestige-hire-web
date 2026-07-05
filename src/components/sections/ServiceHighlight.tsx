import Image from "next/image";
import Link from "next/link";

interface ServiceProps {
  title: string;
  highlight: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export function ServiceHighlight({
  title,
  highlight,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  reverse = false,
}: ServiceProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-default">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className={`relative h-[400px] w-full ${reverse ? "lg:order-2" : "lg:order-1"}`}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text Column */}
          <div className={`flex flex-col gap-6 ${reverse ? "lg:order-1" : "lg:order-2"}`}>
            <h2
              className="text-[55px] font-semibold text-black leading-tight"
              style={{ fontFamily: '"Playfair Display", sans-serif' }}
            >
              <span className="text-[#C69E65]">{highlight}</span> {title}
            </h2>
            <div
              className="text-[16px] text-[#595959] leading-relaxed"
              style={{ fontFamily: "Poppins, sans-serif" }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <Link
              href={buttonLink}
              className="w-fit px-8 py-3 text-[#23282D] font-medium text-[16px] rounded transition-transform"
              style={{
                background: "linear-gradient(360deg, #C69E65 0%, #FBE4BA 86%)",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}