import { luxuryCarHire, WhyChooseLuxuryData } from "@/lib/services/luxury-car-hire";
import { Hero } from "@/components/common-sections/Hero";
import AboutSection from "@/components/services/AboutSection";
import { FleetGrid } from "@/components/common-sections/FleetGrid";
import { WhyChoose } from "@/components/services/ContentBlock";
import { FaqSection } from "@/components/common-sections/FaqSection";
import { ContactForm } from "@/components/common-sections/ContactForm";
import { BookingSection } from "@/components/services/BookingSection";
import { Button } from "@/components/ui/Button";
import { WhyChooseLuxury } from "./WhyChooseLuxury";
import Link from "next/link";

export default function LuxuryCarHirePage() {
  const data = luxuryCarHire;
  if (!data.bookingSection) return null;

  return (
    <main>
      <Hero
        titleContent={
          <h1
            className="text-white font-bold text-[32px] sm:text-[45px] md:text-[65px]"
            style={{ fontFamily: '"Playfair Display", sans-serif' }}
          >
            {data.hero.heroTitle}
          </h1>
        }
        backgroundImage={data.hero.heroImage}
        primaryButtonText="Book Now"
        primaryButtonLink="/contact"
        secondaryButtonText="View Fleet"
        secondaryButtonLink="/contact"
      />

      <AboutSection data={data.about} maxWidth="max-w-7xl" />

      <WhyChoose data={data.whyChoose} />
      <WhyChooseLuxury data={WhyChooseLuxuryData} />
      <ContactForm
        title={data.formSection?.title || "Get Quote For Luxury Car Hire"}
        subtitle={data.formSection?.subtitle || "Experience the finest luxury car service Sydney has to offer."}
      />

      <BookingSection
        title={data.bookingSection?.title ?? { highlight: "", rest: "" }}
        subtitle={data.bookingSection?.subtitle ?? ""}
        steps={data.bookingSection.steps.map((text) => ({ text }))}
        footerText={data.bookingSection?.footerText ?? ""}
        buttons={
          <div className="flex gap-4">
            <Link href="/contact">
              <Button variant="primary">Book Your Ride</Button>
            </Link>
            <Link href="tel:+61XXXXXXXXXX">
              <Button variant="primary">Call Now</Button>
            </Link>
          </div>
        }
      />
      <FaqSection />
    </main>
  );
}