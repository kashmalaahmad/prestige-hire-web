import Image from "next/image";

interface AboutSectionProps {
  data: {
    heading: { highlight: string; rest: string };
    text: string;
    image: string;
  };
  // We add an optional items array to support your new card layout
  items?: Array<{ image: string; name: string; text: string }>;
  maxWidth?: string;
}

export default function AboutSection({ data, items, maxWidth = "max-w-7xl" }: AboutSectionProps) {
  return (
    <section className={`${maxWidth} mx-auto py-10 md:py-16 px-4`}>
      {/* Existing Text/Image Layout */}
      <div className="grid sm:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h1 className="text-black font-bold text-[32px] sm:text-[40px] md:text-[50px] mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            <span className="text-[#C69E65]">{data.heading.highlight}</span> {data.heading.rest}
          </h1>
          <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px" }}>
            {data.text}
          </p>
        </div>
        <div className="relative w-full h-64 sm:h-80 md:h-[401px] overflow-hidden rounded-md">
          <Image src={data.image} alt={data.heading.highlight} fill className="object-cover rounded-md" />
        </div>
      </div>

      {items && (
        <div className="flex flex-wrap justify-center gap-8">
          {items.map((item, i) => (
            <div 
              key={i} 
              className="flex flex-col rounded-xl overflow-hidden bg-white border-[20px] border-white shadow-sm hover:shadow-lg transition-shadow duration-300"
              style={{ width: "353px", height: "726px" }}
            >
              <div className="relative h-64 w-full overflow-hidden rounded-md">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={260}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: '"Playfair Display", serif' }}>
                  {item.name}
                </h3>
                <p className="text-gray-700 text-[16px] mb-4 flex-grow" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {item.text}
                </p>
   
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}