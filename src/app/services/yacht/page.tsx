import { yacht } from "@/lib/services/yacht";
import {Hero} from "@/components/sections/Hero";
import {ContactForm} from "@/components/sections/ContactForm";
import {FaqSection} from "@/components/sections/FaqSection";
import AboutSection from "@/components/services/AboutSection";
import { FeatureGrid } from "@/components/services/FeatureGrid";
import { WhyChoose } from "@/components/services/WhyChoose";
import { BookingSection } from "@/components/services/BookingSection"; 
import { YachtIcon } from "@/components/icons/YachtIcon";
import Image from "next/image";
import Link from "next/link";

export default function YachtPage() {
  const { hero } = yacht;
  const fleetItems = (yacht.fleet || []).map((vessel) => ({
  image: vessel.image,
  heading: vessel.name,
  paragraphs: [vessel.text],
  buttonText: "View detail",
  buttonLink: `/services/yacht/details`,
}));

  return (
    <main>
      <Hero
        backgroundImage={hero.heroImage}
        
        titleContent={
          <h1
            className="text-white font-bold text-[32px] sm:text-[45px] md:text-[65px]"
            style={{ fontFamily: '"Playfair Display", sans-serif' }}
          >
            {hero.heroTitle}
          </h1>
        }
        
        primaryButtonText="Book Your Ride"
        primaryButtonLink="/contact"
        secondaryButtonText="View Fleet"
        secondaryButtonLink="#fleet"
        
        layout={(hero.heroLayout as "full" | "boxed") || "full"}
      />
      <AboutSection data={yacht.about} maxWidth="max-w-6xl" />
      <FeatureGrid 
        titleHighlight={yacht.occasionsSection.title.highlight}
        titleRest={yacht.occasionsSection.title.rest}
        items={yacht.occasionsSection.cards}
      />
      <WhyChoose data={yacht.whyChoose} maxWidth="max-w-6xl"/>
      <FeatureGrid 
  titleHighlight={yacht.fleetHeading.highlight}
  titleRest={yacht.fleetHeading.rest}
  subheading={yacht.fleetSubheading} 
  items={fleetItems}
  highlightPosition="after"
/>
<section className="py-12 md:py-20 px-4 max-w-6xl mx-auto">
  <div className="grid sm:grid-cols-2 gap-10 items-center">
    <div>
      <h2
        className="font-bold mb-6 text-black text-[32px] sm:text-[40px] md:text-[50px]"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        Sydney Harbour <span className="text-[#C69E65]">Yacht Hire</span> Experience
      </h2>

      <div
        className="text-gray-700 text-[16px] space-y-4 leading-relaxed"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <p>
          Sydney Harbour is one of the world's most iconic waterways. Our yacht hire
          services in Sydney Harbour let you enjoy the area at your own pace. You can
          avoid crowded public transport and regular cruises.
        </p>
        <p>
          From short harbour tours to extended charters, our yachts offer privacy,
          comfort and uninterrupted views. This is a great choice for people looking
          for a classy alternative to land venues. Enjoy unforgettable experiences on
          a private boat.
        </p>
      </div>
    </div>

    <div className="relative w-full h-64 sm:h-80 md:h-[401px] overflow-hidden rounded-md">
      <Image
        src="https://www.prestigehire.co/wp-content/uploads/2026/04/86ft-yacht2.jpg"
        alt="Sydney Harbour Yacht Hire Experience"
        fill
        className="object-cover rounded-md"
      />
    </div>
  </div>
</section>
<ContactForm 
  title={yacht.formSection?.title || ""} 
  subtitle={yacht.formSection?.subtitle || ""} 
/>
{yacht.bookingSection && (
        <BookingSection
          title={yacht.bookingSection.title}
          subtitle={yacht.bookingSection.subtitle}
          footerText={yacht.bookingSection.footerText}
          steps={yacht.bookingSection.steps.map((stepText) => ({
            text: stepText,
            // Using your YachtIcon here
            icon: <YachtIcon className="w-6 h-6 flex-shrink-0 fill-[#C69E65]" />,
          }))}
        />
      )}
       <FaqSection />
    </main>
  );
}