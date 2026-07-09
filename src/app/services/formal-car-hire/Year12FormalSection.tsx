import Image from "next/image";

interface Year12FormalProps {
  data: {
    title: { rest: string; highlight: string; end: string };
    description: string;
    subDescription: string;
    image: string;
  };
}

export function Year12FormalSection({ data }: Year12FormalProps) {
  if (!data) return null;

  return (
    <section className="py-16 bg-white w-full">
      <div className="max-w-8xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-center">
        <div className="w-full">
          <h1
            className="text-black font-bold text-[32px] sm:text-[45px] md:text-[55px] leading-tight mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {data.title.rest}
            <span className="text-[#C69E65]">{data.title.highlight}</span>
            {data.title.end}
          </h1>

          <p className="text-[16px] text-black mb-6 leading-relaxed" style={{ fontFamily: '"Poppins", sans-serif' }}>
            {data.description}
          </p>

          <p className="text-[16px] text-black leading-relaxed" style={{ fontFamily: '"Poppins", sans-serif' }}>
            {data.subDescription}
          </p>
        </div>
        <div
          className="relative w-full rounded-xl overflow-hidden shadow-xl"
          style={{ aspectRatio: '610 / 457.1' }}
        >
          <Image
            src={data.image}
            alt="Year 12 Formal Car Hire"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}