import { SubPageHero } from "@/components/sections/SubPageHero";

export default function CovidSafetyPlanPage() {
  return (
    <>
      <SubPageHero
        eyebrow="COVID-19 Safety Plan"
        title="Health and cleanliness protocols for every journey."
        description="Keep this page updated with your current cleaning, screening, and travel policies."
      />
      <section className="container py-16">
        <div className="panel rounded-3xl p-8 text-[#d8dde9] md:p-12">
          Regular sanitisation, vehicle ventilation, and chauffeur hygiene standards.
        </div>
      </section>
    </>
  );
}