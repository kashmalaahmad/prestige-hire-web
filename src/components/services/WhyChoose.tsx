import Image from "next/image";

interface WhyChooseProps {
  data: {
    title: string;
    paragraphs?: string[];
    bullets: string[];
    closing: string;
    images: string[];
  };
  maxWidth?: string;
}

export function WhyChoose({ data, maxWidth = "max-w-7xl" }: WhyChooseProps) {
  return (
    <section className="bg-white py-10 md:py-16 px-4">
      <div className={`${maxWidth} mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start`}>
        
        {/* Dynamic Vertical Image Stack */}
        <div className="flex flex-col gap-6">
          {data.images.map((img, i) => (
            <div key={i} className="relative w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src={img}
                width={588}
                height={401}
                alt={`Feature ${i + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div>
          <h2
            className="font-bold mb-6 text-black text-[32px] sm:text-[40px] md:text-[50px]"
            style={{ fontFamily: '"Playfair Display", serif', lineHeight: "1.1" }}
          >
            {data.title}
          </h2>
          
          <div className="font-poppins text-[16px] text-black space-y-4">
            {(data.paragraphs || []).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            
            <ul className="list-disc pl-5 space-y-2">
              {data.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            
            <p className="font-poppins text-[16px] text-black space-y-4">{data.closing}</p>
          </div>
        </div>
      </div>
    </section>
  );
}