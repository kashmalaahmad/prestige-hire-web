"use client";

import Image from "next/image";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

export function ContactForm({
  title = "Book Your Luxury Ride",
  subtitle,
}: ContactFormProps) {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://www.prestigehire.co/wp-content/uploads/2026/04/image-43-1.png"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="container-default relative z-10 px-4">
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2
            className="text-[32px] sm:text-[40px] md:text-[55px] font-bold text-black leading-tight"
            style={{ fontFamily: '"Playfair Display", sans-serif' }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-[16px] sm:text-[16px] text-black/80 mt-3 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Form Container */}
        <div
          className="mx-auto w-full"
          style={{
            maxWidth: "1140px",
            padding: "24px",
            backgroundColor: "rgba(198, 158, 101, 0.78)",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            transitionProperty: "background, border, box-shadow, transform",
            transitionDuration: "0.3s",
            transitionTimingFunction: "ease",
          }}
        >
          <div className="p-0 sm:p-4 md:p-6">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

              <div className="flex flex-col gap-2">
                <label className="text-[15px] font-bold text-black">
                  First Name <span className="text-red-600">*</span>
                </label>
                <input type="text" className="premium-input" placeholder="First Name" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[15px] font-bold text-black">
                  Email <span className="text-red-600">*</span>
                </label>
                <input type="email" className="premium-input" placeholder="Email Address" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[15px] font-bold text-black">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input type="tel" className="premium-input" placeholder="Mobile Number" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[15px] font-bold text-black">
                  Select Event <span className="text-red-600">*</span>
                </label>
                <select className="premium-input">
                  <option>Select Event</option>
                  <option>Corporate</option>
                  <option>Wedding</option>
                  <option>Formal</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[15px] font-bold text-black">
                  Pickup Date <span className="text-red-600">*</span>
                </label>
                <input type="date" className="premium-input" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[15px] font-bold text-black">
                  Select Car <span className="text-red-600">*</span>
                </label>
                <select className="premium-input">
                  <option>Select Event</option>
                  <option>Rolls Royce Phantom</option>
                  <option>Rolls Royce Dawn</option>
                  <option>Lamborghini Huracan</option>
                  <option>Bentley Continental GT</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[15px] font-bold text-black">Your Message</label>
                <textarea className="premium-input h-32" placeholder="Your Message" />
              </div>

              {/* Wrap the button in a flex container to center it */}
              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="w-fit transition-transform hover:scale-[1.01]"
                  style={{
                    background: "linear-gradient(90deg, #C69E65 1.92%, #FBE4BA 53.46%, #C59D64 100%)",
                    border: "1px solid #C69E65",
                    color: "rgb(35, 40, 45)",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "15px",
                    fontWeight: 500,
                    padding: "10px 18px",
                    borderRadius: "6px"
                  }}
                >
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}