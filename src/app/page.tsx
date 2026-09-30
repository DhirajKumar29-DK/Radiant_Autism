import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CareApproachSection from "@/components/CareApproachSection";
import OurApproachProcess from "@/components/OurApproachProcess";
import ServicesGrid from "@/components/ServicesGrid";
import HomeGalleryPreview from "@/components/HomeGalleryPreview";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Radiant Autism Center | ABA & Skill Therapy",
  description:
    "OAP approved & BCBA supervised Autism Center providing ABA therapy, speech therapy, occupational therapy & early intervention in Ontario.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <AboutSection />
      <CareApproachSection />
      <ServicesGrid limit={3} />
      <OurApproachProcess />
      <HomeGalleryPreview />
      <Testimonials />
    </div>
  );
}
