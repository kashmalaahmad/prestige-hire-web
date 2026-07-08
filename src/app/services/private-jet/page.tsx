"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { privateJet } from "@/lib/services/private-jet";
import { Button } from "@/components/ui/Button";
import { BookingSection } from "@/components/services/BookingSection";
import { PlaneIcon } from "@/components/icons/Planeicon";
import { ContactForm } from "@/components/sections/ContactForm";
import { FaqSection } from "@/components/sections/FaqSection";

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

      <section className="max-w-7xl mx-auto py-10 md:py-16 grid md:grid-cols-2 gap-8 md:gap-12 px-4">
        <div>
          <h1
            className="text-black font-bold text-[32px] sm:text-[40px] md:text-[55px]"
            style={{ fontFamily: '"Playfair Display", sans-serif' }}
          >
            <span className="text-[#C69E65]">{data.about.heading.highlight}</span>{" "}
            {data.about.heading.rest}
          </h1>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px" }}>
            {data.about.text}
          </p>
        </div>
        <Image
          src={data.about.image}
          width={588}
          height={401}
          alt="About"
          className="w-full h-auto object-cover rounded-lg"
        />
      </section>

      <section className="bg-white py-10 md:py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="flex flex-col gap-6">
            {data.whyChoose.images.map((img, i) => (
              <Image
                key={i}
                src={img}
                width={588}
                height={401}
                alt="Why Choose"
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            ))}
          </div>

          <div>
            <h2
              className="font-bold mb-6 text-black text-[32px] sm:text-[40px] md:text-[55px]"
              style={{ fontFamily: '"Playfair Display", serif', lineHeight: "1.1" }}
            >
              {data.whyChoose.title}
            </h2>
            <div className="font-poppins text-[16px] text-gray-700 space-y-4">
              {(data.whyChoose.paragraphs || []).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <ul className="list-disc pl-5 space-y-2">
                {(data.whyChoose.bullets || []).map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <p>{data.whyChoose.closing}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="fleet" className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2
              className="text-[32px] sm:text-[40px] md:text-[55px] font-bold mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Our Fleet of <span className="text-[#C69E65]">Private Jets</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Prestige Hire operates a selection of respected aircraft trusted worldwide.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {(data.fleet || []).map((item, i) => (
              <div
                key={i}
                className="p-2 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-xl">
                  <Image src={item.image || "/placeholder-image.jpg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3
                    className="text-xl md:text-2xl font-bold mb-4"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="text-gray-600 text-[16px] mb-6 flex-grow leading-relaxed"
                    style={{ fontFamily: 'Inter, "sans-serif"' }}
                  >
                    {item.text}
                  </p>
                  <Link href={`/services/${slug}/details`}>
                    <Button type="button">View detail</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {typesSection && (
        <section className="py-10 md:py-16 px-4 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2
                className="font-bold mb-6 text-black text-[32px] sm:text-[40px] md:text-[55px]"
                style={{ fontFamily: '"Playfair Display", serif', lineHeight: "1.1" }}
              >
                {typesSection.title.rest}{" "}
                <span className="text-[#C69E65]">{typesSection.title.highlight}</span>
              </h2>

              <div
                className="text-black space-y-2"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px" }}
              >
                <p>{typesSection.description}</p>
                <ul className="list-disc pl-5 space-y-3">
                  {typesSection.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 font-medium">{typesSection.footerText}</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={typesSection.image ?? data.about.image}
                width={588}
                height={401}
                alt="Types of Jet"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
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

      {routesSection && (
        <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="text-left">
              <h2
                className="font-bold mb-6 text-black text-[32px] sm:text-[40px] md:text-[55px]"
                style={{ fontFamily: '"Playfair Display", serif', lineHeight: "1.1" }}
              >
                {routesSection.title.rest}{" "}
                <span className="text-[#C69E65]">{routesSection.title.highlight}</span>
              </h2>
              <p className="mb-4 text-[16px]" style={{ fontFamily: "Poppins, sans-serif" }}>
                {routesSection.description}
              </p>
              <ul
                className="list-disc pl-5 space-y-3 mb-6 text-[16px]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {(routesSection.routes || []).map((route, i) => (
                  <li key={i}>{route}</li>
                ))}
              </ul>
              <p className="text-[16px]" style={{ fontFamily: "Poppins, sans-serif" }}>
                {routesSection.footerText}
              </p>
            </div>

            <div className="space-y-4">
              <Image
                src={routesSection.mainImage}
                width={588}
                height={401}
                alt="Popular Route"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {(routesSection.galleryImages || []).map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    width={180}
                    height={120}
                    alt="Gallery"
                    className="rounded-lg shadow-sm w-full h-auto object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {data.featuresSection && (
        <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-4">
              <Image
                src={data.featuresSection.mainImage || "/placeholder-image.jpg"}
                width={588}
                height={401}
                alt={data.featuresSection.title}
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {(data.featuresSection.galleryImages || []).map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    width={180}
                    height={120}
                    alt="Gallery"
                    className="rounded-lg shadow-sm w-full h-auto object-cover"
                  />
                ))}
              </div>
            </div>

            <div className="text-left">
              <h2
                className="text-4xl md:text-5xl font-bold mb-6 text-black"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {data.featuresSection.title.split(" ").slice(0, 1).join(" ")}{" "}
                <span className="text-[#C69E65]">
                  {data.featuresSection.title.split(" ").slice(1, 3).join(" ")}
                </span>{" "}
                {data.featuresSection.title.split(" ").slice(3).join(" ")}
              </h2>

              <p className="mb-4 text-[16px]" style={{ fontFamily: "Poppins, sans-serif" }}>
                {data.featuresSection.description}
              </p>

              <ul
                className="list-disc pl-5 space-y-3 mb-6 text-[16px]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {data.featuresSection.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <p className="text-[16px] leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
                {data.featuresSection.footerText}
              </p>
            </div>
          </div>
        </section>
      )}

      {data.formSection && (
        <ContactForm title={data.formSection.title} subtitle={data.formSection.subtitle} />
      )}

      {data.ctaSection && (
        <section className="bg-white py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2
                className="text-[26px] sm:text-[30px] md:text-[35px] font-bold text-black leading-tight"
                style={{ fontFamily: "'Playfair Display', sans-serif" }}
              >
                {data.ctaSection.title}
              </h2>
              <div
                className="font-poppins text-[16px] text-black space-y-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {data.ctaSection.paragraphs.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
              <Link href={data.ctaSection.buttonLink}>
                <Button>{data.ctaSection.buttonText}</Button>
              </Link>
            </div>
            <div className="relative w-full aspect-[588/401] rounded-lg overflow-hidden">
              <Image src={data.ctaSection.image} alt={data.ctaSection.title} fill className="object-cover" />
            </div>
          </div>
        </section>
      )}

      <FaqSection />
    </main>
  );
}