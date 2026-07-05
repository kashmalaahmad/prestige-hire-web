"use client";

import { useRef, useState } from "react";
import { Button } from "../ui/Button";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<{ type: "success" | "error" | null, msg: string }>({ type: null, msg: "" });
  const [isPending, setIsPending] = useState(false);

  // You can replace this URL with your own API endpoint or a service like Formspree
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    setStatus({ type: null, msg: "" });

    const formData = new FormData(e.currentTarget);
    
    try {
      // Example: Using Formspree (replace with your own endpoint)
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        setStatus({ type: "success", msg: "Thank you! Your message has been sent." });
        formRef.current?.reset();
      } else {
        throw new Error("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus({ type: "error", msg: "Failed to send message. Please try again later." });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-heading text-4xl md:text-[55px] font-semibold text-dark mb-6 leading-tight">
            Book Your Luxury Experience
          </h2>
          <p className="font-body text-dark-muted mb-8 text-lg">
            Ready to elevate your journey? Fill out the form to request a quote or secure your booking. Our dedicated concierge team will be in touch shortly.
          </p>
        </div>

        <div className="bg-cream-light p-8 md:p-10 rounded-[12px] shadow-card border border-gray-100">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-sans font-medium text-sm text-dark">Full Name *</label>
                <input type="text" id="name" name="name" required className="border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-gold font-body bg-white" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-sans font-medium text-sm text-dark">Email Address *</label>
                <input type="email" id="email" name="email" required className="border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-gold font-body bg-white" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-sans font-medium text-sm text-dark">Phone Number</label>
              <input type="tel" id="phone" name="phone" className="border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-gold font-body bg-white" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-sans font-medium text-sm text-dark">Message *</label>
              <textarea id="message" name="message" rows={4} required className="border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-gold font-body bg-white resize-none"></textarea>
            </div>

            {status.msg && (
              <div className={`p-3 rounded text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {status.msg}
              </div>
            )}

            <Button type="submit" variant="primary" className="w-full" disabled={isPending}>
              {isPending ? "Submitting..." : "Submit Enquiry"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}