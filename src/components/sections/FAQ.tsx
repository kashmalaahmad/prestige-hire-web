"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "@/lib/data";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      className="bg-[#FBF7F5]"
      style={{
        paddingTop: "clamp(40px, 8vw, 70px)",
        paddingBottom: "clamp(24px, 4vw, 30px)",
        borderRadius: 0,
      }}
    >
      <div className="container-default max-w-[800px] px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2
            className="text-[32px] sm:text-[40px] md:text-[55px] font-semibold text-black leading-tight"
            style={{ fontFamily: '"Playfair Display", sans-serif' }}
          >
            <span className="text-[#C69E65]">Frequently</span> Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-1">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-[#F3F4F6] rounded-[6px] overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-4 sm:p-6 flex justify-between items-center gap-4 text-left"
              >
                <span
                  className="text-[16px] sm:text-[18px] font-semibold text-black"
                  style={{ fontFamily: '"Playfair Display", sans-serif',color: activeIndex === index ? "#C69E65" : "#000000" }}
                >
                  {item.question}
                </span>
                {activeIndex === index ? (
                  <Minus className="text-black shrink-0" size={20} />
                ) : (
                  <Plus className="text-black shrink-0" size={20} />
                )}
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="px-4 sm:px-6 pb-4 sm:pb-6 text-[14px] sm:text-[16px] text-[#595959] leading-relaxed"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}