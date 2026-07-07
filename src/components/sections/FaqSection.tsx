export function FaqSection() {
  return (
    <section className="py-12 sm:py-16 px-4 bg-[#FBF7F5]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-bold mb-4 text-[32px] sm:text-[40px] md:text-[55px] leading-[1.2]" style={{ fontFamily: '"Playfair Display", sans-serif' }}>
          <span className="text-[#C69E65]">Frequently</span> <span className="text-black">Asked Questions</span>
        </h2>
        <p className="text-black text-[15px] sm:text-[16px]" style={{ fontFamily: "Poppins, sans-serif" }}>
          Still have questions? Find answers to our most commonly asked questions.
        </p>
      </div>
    </section>
  );
}