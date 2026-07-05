import { Hero } from "@/components/sections/Hero";
import { FleetGrid } from "@/components/sections/FleetGrid";
import { About } from "@/components/sections/About";
import { ServiceHighlight } from "@/components/sections/ServiceHighlight";
import { YachtGrid } from "@/components/sections/YachtGrid";
import { JetGrid } from "@/components/sections/JetGrid";
import { ContactForm } from "@/components/sections/ContactForm"
import { Testimonials } from "@/components/sections/Testimonials";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CallToAction } from "@/components/sections/CallToAction";
import { FAQ } from "@/components/sections/FAQ";
export default function Home() {
  return (
    <main>
      <Hero />
      <FleetGrid />
      <About />
      <ServiceHighlight 
        highlight="Wedding Car Hire"
        title="in Sydney"
        description="Your wedding day deserves something really unique. Hiring the appropriate <a href='/wedding-hire' style='color:#C69E65'><strong><em>wedding car in Sydney</em></strong></a> can make all the difference. Choose a vehicle that is your style with our experienced chauffeur service, whether it’s a classic Rolls Royce, luxury sedan or a head turning supercar."
        buttonText="Book Your Wedding Cars"
        buttonLink="/wedding-hire"
        imageSrc="https://www.prestigehire.co/wp-content/uploads/2026/04/Hosting-Plan-1.png"
        imageAlt="Wedding Car Hire Sydney"
      />
      <YachtGrid/>
      <JetGrid/>
      <ContactForm/>
      <Testimonials/>
      <ServicesGrid/>
      <CallToAction/>
      <FAQ/>
    </main>
  );
}