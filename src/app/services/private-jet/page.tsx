"use client";

import { useParams } from "next/navigation";
import { Hero } from "@/components/common-sections/Hero";
import { privateJet } from "@/lib/services/private-jet";
import { BookingSection } from "@/components/services/BookingSection";
import { PlaneIcon } from "@/components/icons/Planeicon";
import { ContactForm } from "@/components/common-sections/ContactForm";
import { FaqSection } from "@/components/common-sections/FaqSection";
import AboutSection from "@/components/services/AboutSection";
import { WhyChoose } from "@/components/services/ContentBlock";
import { FleetSection } from "./FleetSection";
import { TypesSection } from "./TypesSection";
import { RoutesSection } from "./RoutesSection";
import { FeaturesSection } from "./FeaturesSection";
import { CtaSection } from "./CtaSection";

export default function PrivateJetPage() {
  const data = privateJet;
  const params = useParams();
  const slug = params.slug as string;
  const typesSection = data.typesSection;
  const routesSection = data.routesSection;

  return (
    <main className="overflow-hidden">
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
      />

      <AboutSection data={privateJet.about} maxWidth="max-w-7xl" />
      <WhyChoose data={privateJet.whyChoose} />

      <FleetSection fleet={data.fleet || []} slug={slug} />

      {typesSection && (
        <TypesSection data={typesSection} fallbackImage={data.about.image} />
      )}

      {data.bookingSection && (
        <BookingSection
          title={data.bookingSection.title}
          subtitle={data.bookingSection.subtitle}
          footerText={data.bookingSection.footerText}
          steps={data.bookingSection.steps.map((stepText) => ({
            text: stepText,
            icon: <PlaneIcon className="w-5 h-5 flex-shrink-0 fill-[#555]" />,
          }))}
        />
      )}

      {routesSection && <RoutesSection data={routesSection} />}

      {data.featuresSection && <FeaturesSection data={data.featuresSection} />}

      {data.formSection && (
        <ContactForm title={data.formSection.title} subtitle={data.formSection.subtitle} />
      )}

      {data.ctaSection && <CtaSection data={data.ctaSection} />}

      <FaqSection />
    </main>
  );
}