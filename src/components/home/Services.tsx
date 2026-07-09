"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Star } from "lucide-react";

const services = [
  {
    title: "Professional Chauffeurs",
    description: "Highly trained, discreet, and courteous professionals dedicated to providing a seamless journey.",
    icon: ShieldCheck
  },
  {
    title: "24/7 Support & Availability",
    description: "Our dedicated team is available around the clock to accommodate your schedule and requirements.",
    icon: Clock
  },
  {
    title: "Premium Fleet",
    description: "Meticulously maintained luxury vehicles ensuring maximum comfort, safety, and prestige.",
    icon: Star
  }
];

export function Services() {
  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[12px] shadow-card flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mb-6">
                  <Icon size={32} className="text-gold" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-dark mb-4">{service.title}</h3>
                <p className="font-body text-dark-muted">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}