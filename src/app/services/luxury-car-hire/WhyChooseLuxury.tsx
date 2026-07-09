import Image from "next/image";

export interface WhyChooseLuxuryData {
  title: { rest: string; highlight: string };
  paragraphs: string[];
  image: string;
}
interface WhyChooseProps {
  data: WhyChooseLuxuryData;
}

export const WhyChooseLuxury = ({ data }: WhyChooseProps) => {
  return (
    <section className="py-20 bg-white w-full">
      <div className="max-w-8xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            className="text-black font-bold text-[32px] sm:text-[45px] md:text-[55px] leading-tight mb-8"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {data.title.rest}
            <span className="text-[#C69E65]">{data.title.highlight}</span>
          </h2>
          <div className="space-y-6">
            {data.paragraphs.map((para, index) => (
              <p
                key={index}
                className="text-[16px] text-black leading-relaxed"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
          <Image src={data.image} alt="Why Choose Prestige Hire" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
};