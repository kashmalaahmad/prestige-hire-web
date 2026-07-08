import { Hero } from "@/components/sections/Hero";
import { FleetGrid } from "@/components/sections/FleetGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { formalCarHire } from "@/lib/services/formal-car-hire";
import AboutSection from "@/components/services/AboutSection";
import { WhyChoose } from "@/components/services/ContentBlock";
import { BookingSection } from "@/components/services/BookingSection"; 
import { ContactForm } from "@/components/sections/ContactForm";
import { CarIcon } from "@/components/icons/CarIcon";
export default function FormalCarPage() {
  const data = formalCarHire;

  return (
    <main>
      <Hero
        backgroundImage={data.hero.heroImage}
        titleContent={
          <h1
            className="text-white font-bold text-[32px] sm:text-[45px] md:text-[65px]"
            style={{ fontFamily: '"Playfair Display", sans-serif' }}
          >
            {data.hero.heroTitle}
          </h1>
        }
        primaryButtonText="Book Your Ride"
        primaryButtonLink="/contact"
        secondaryButtonText="View Fleet"
        secondaryButtonLink="#fleet"
        layout="full" 
      />
      <AboutSection data={data.about} maxWidth="max-w-7xl" />
      <FleetGrid 
          data={data.fleet || []}
          heading={data.fleetHeading} 
          subheading={data.fleetSubheading} 
          showPrice={true} 
        />
      
      <WhyChoose data={data.whyChoose} />
      
      <ContactForm 
        title={data.formSection?.title || ""} 
        subtitle={data.formSection?.subtitle || ""} 
      />
      {data.bookingSection && (
              <BookingSection
                title={data.bookingSection.title}
                subtitle={data.bookingSection.subtitle}
                footerText={data.bookingSection.footerText}
                steps={data.bookingSection.steps.map((stepText) => ({
                  text: stepText,
                  icon: <CarIcon className="w-6 h-6 flex-shrink-0 text-[#C69E65]" />,
                }))}
              />
            )}
      <FaqSection />

    </main>
  );
}