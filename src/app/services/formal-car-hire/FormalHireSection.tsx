import Image from "next/image";

interface FormalHireProps {
  data: {
    title: { highlight: string; rest: string };
    description: string;
    items: string[];
    footerText: string;
    image: string;
  };
}

export function FormalHireSection({ data }: FormalHireProps) {
  if (!data) return null;

  return (
    <section className="py-16 bg-white w-full">
      <div className="max-w-8xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-center">
        
        {/* Image on the left */}
        <div 
          className="relative w-full rounded-xl overflow-hidden shadow-xl" 
          style={{ aspectRatio: '610 / 457.1' }}
        >
          <Image 
            src={data.image} 
            alt="School Formal Car Hire" 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Text Content */}
        <div className="w-full">
          <h1
            className="text-black font-bold text-[32px] sm:text-[45px] md:text-[55px] leading-tight mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {data.title.rest} <span className="text-[#C69E65]">{data.title.highlight}</span>
          </h1>
          
          <p 
            className="text-[16px] text-black max-w-[700px] mb-10 leading-relaxed"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            {data.description}
          </p>
          
          <ul className="list-disc list-inside mb-6 space-y-2 text-black text-[16px]" style={{ fontFamily: '"Poppins", sans-serif' }}>
            {data.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
          <p className="text-black text-[16px]" style={{ fontFamily: '"Poppins", sans-serif' }}>{data.footerText}</p>
        </div>
      </div>
    </section>
  );
}