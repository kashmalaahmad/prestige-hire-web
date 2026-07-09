import { Hero } from "@/components/common-sections/Hero";
import { FleetGrid } from "@/components/common-sections/FleetGrid";
import { About } from "@/components/home/About";
import { ServiceHighlight } from "@/components/home/ServiceHighlight";
import { YachtGrid } from "@/components/home/YachtGrid";
import { JetGrid } from "@/components/home/JetGrid";
import { ContactForm } from "@/components/common-sections/ContactForm"
import { Testimonials } from "@/components/common-sections/Testimonials";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { CallToAction } from "@/components/home/CallToAction";
import { FAQ } from "@/components/common-sections/FAQ";
import { fleetData } from "@/lib/data";
export default function Home() {
  return (
    <main>
      <Hero />
      <FleetGrid 
            data={fleetData} 
            heading={{ highlight: "Premium Fleet", rest: "Our" }} 
            subheading="Ideal for weddings, events and VIP transport across Sydney."
            showPrice={false} 
          />
      
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