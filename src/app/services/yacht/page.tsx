import { yacht } from "@/lib/services/yacht";
import { Hero } from "@/components/common-sections/Hero";
import { ContactForm } from "@/components/common-sections/ContactForm";
import { FaqSection } from "@/components/common-sections/FaqSection";
import AboutSection from "@/components/services/AboutSection";
import { FeatureGrid } from "@/components/services/FeatureGrid";
import { WhyChoose } from "@/components/services/ContentBlock";
import { BookingSection } from "@/components/services/BookingSection";
import { YachtIcon } from "@/components/icons/YachtIcon";
import { HarbourExperienceSection } from "./HarbourExperienceSection";

export default function YachtPage() {
  const { hero } = yacht;
  const fleetItems = (yacht.fleet || []).map((vessel) => ({
    image: vessel.image || "/path/to/default-image.jpg",
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
      <WhyChoose data={yacht.whyChoose} maxWidth="max-w-6xl" />
      <FeatureGrid
        titleHighlight={yacht.fleetHeading.highlight}
        titleRest={yacht.fleetHeading.rest}
        subheading={yacht.fleetSubheading}
        items={fleetItems}
        highlightPosition="after"
      />
      <HarbourExperienceSection />
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
            icon: <YachtIcon className="w-6 h-6 flex-shrink-0 fill-[#C69E65]" />,
          }))}
        />
      )}
      <FaqSection />
    </main>
  );
}