import { Chauffeur, ChauffeurFeaturesData } from "@/lib/services/chauffeur";
import { Hero } from "@/components/common-sections/Hero";
import AboutSection from "@/components/services/AboutSection";
import { FleetGrid } from "@/components/common-sections/FleetGrid";
import { WhyChoose } from "@/components/services/ContentBlock";
import { FaqSection } from "@/components/common-sections/FaqSection";
import { ContactForm } from "@/components/common-sections/ContactForm";
import { BookingSection } from "@/components/services/BookingSection";
import { Button } from "@/components/ui/Button";
import { ChauffeurFeatures } from "./ChauffeurFeatures";

export default function ChauffeurPage() {
  const data = Chauffeur;
  if (!data.bookingSection) return null;
  return (
    <main>
      <Hero
        titleContent={
          <h1
            className="text-white font-bold text-[32px] sm:text-[45px] md:text-[65px]"
            style={{ fontFamily: '"Playfair Display", sans-serif' }}
          >
            {Chauffeur.hero.heroTitle}
          </h1>
        }
        backgroundImage={data.hero.heroImage}
        primaryButtonText="Book Now"
        primaryButtonLink="/contact"
        secondaryButtonText="Book Now"
        secondaryButtonLink="/contact"
      />
      <AboutSection data={data.about} maxWidth="max-w-7xl" />
      <FleetGrid
        data={data.fleet || []}
        heading={{
          rest: data.fleetHeading?.rest || "",
          highlight: data.fleetHeading?.highlight || "",
          end: "Fleet"
        }}
        subheading={data.fleetSubheading ?? ""}
        showPrice={true}
      />
      <WhyChoose data={data.whyChoose} />
      <ChauffeurFeatures
        title={ChauffeurFeaturesData.title}
        items={ChauffeurFeaturesData.items}
        mainImage={ChauffeurFeaturesData.mainImage}
      />
      <BookingSection
        title={data.bookingSection?.title ?? { highlight: "", rest: "" }}
        subtitle={data.bookingSection?.subtitle ?? ""}
        steps={data.bookingSection.steps.map(stepText => ({ text: stepText }))}
        buttons={<Button variant="outline">View Fleet</Button>}
      />
      <ContactForm
        title={data.formSection?.title || ""}
        subtitle={data.formSection?.subtitle || ""}
      />
      <FaqSection />
    </main>
  );
}