import Image from "next/image";

interface FeaturesProps {
  title: { highlight: string; rest: string };
  items: string[];
  mainImage: string;
}

export const ChauffeurFeatures = ({ title, items, mainImage }: FeaturesProps) => {
  return (
    <section className="py-20 bg-white w-full">
      <div className="max-w-8xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            className="text-black font-bold text-[32px] sm:text-[45px] md:text-[55px] leading-tight mb-8"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {title.rest}
            <span className="text-[#C69E65]">{title.highlight}</span>
          </h2>

          <ul className="list-disc list-outside space-y-0.5 marker:text-black pl-8">
            {items.map((item, index) => (
              <li
                key={index}
                className="text-[16px] text-black leading-relaxed"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                <span className="pl-2">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="relative w-full rounded-xl overflow-hidden shadow-xl"
          style={{ aspectRatio: '610 / 457.1' }}
        >
          <Image
            src={mainImage}
            alt="Features of Our Service"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};