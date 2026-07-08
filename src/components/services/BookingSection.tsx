import { ReactNode } from "react";

interface BookingStep {
  text: string;
  icon?: ReactNode;
}

interface BookingSectionProps {
  title: { highlight: string; rest: string };
  highlightPosition?: "before" | "after";
  subtitle: string;
  steps: BookingStep[];
  footerText?: string;
  buttons?: ReactNode;
  className?: string;
}

export const BookingSection = ({ 
  title, 
  highlightPosition = "after",
  subtitle, 
  steps, 
  footerText, 
  buttons, 
  className = "" 
}: BookingSectionProps) => {

   return (
    <section className={`bg-[#F5F5F5] py-[30px] px-4 ${className}`}>
      <div className="max-w-[1300px] mx-auto px-[25.5px]">
        <h2
          className="text-4xl md:text-5xl font-bold mb-2 text-black text-center"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          {highlightPosition === "before" ? (
          <>
            <span className="text-[#C69E65]">{title.highlight}</span> {title.rest}
          </>
        ) : (
          <>
            {title.rest} <span className="text-[#C69E65]">{title.highlight}</span>
          </>
        )}
        </h2>

        <p className="mb-4 text-[16px] text-black text-center " style={{ fontFamily: 'Poppins, sans-serif' }}>
          {subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 mb-4">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="flex-shrink-0">{step.icon}</span>
              <p className="text-[15px] text-gray-500 " style={{ fontFamily: ', sans-serif' }}>
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {footerText && (
          <p className="mb-4 text-[16px] text-black text-center " style={{ fontFamily: 'Poppins, sans-serif' }}>
            {footerText}
          </p>
        )}

        {buttons && <div className="flex justify-center gap-4 mt-4">{buttons}</div>}
      </div>
    </section>
  );
};