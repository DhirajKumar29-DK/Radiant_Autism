"use client";

import React from "react";
import Link from "next/link";
import AboutCentreDetail from "@/components/AboutCentreDetail";
import OurTeamSection from "@/components/OurTeamSection";
import ClinicalPillars from "@/components/ClinicalPillars";
import { Award, ShieldCheck, HeartHandshake, Sparkles, Users, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-0 pb-16">
      {/* Premium Photo Hero Banner */}
      <section className="relative py-20 md:py-28 bg-slate-950 text-white overflow-hidden select-none">
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/about_center_photo.jpg"
            alt="Radiant Autism Center facility and therapy session"
            className="w-full h-full object-cover object-center transform animate-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/50 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md text-blue-300 border border-blue-500/30 text-xs font-extrabold uppercase tracking-wider shadow-lg">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>About Radiant Autism Center</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
            Dedicated To Empowering Exceptional Children
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Learn about our clinical standards, certified BCBA leadership, and compassionate approach to child skill development.
          </p>
        </div>
      </section>

      {/* About Centre & Purpose Built Spaces (Screenshot Section) */}
      <AboutCentreDetail />

      {/* Clinical Leadership & Our Team (Replacing Testimonials) */}
      <OurTeamSection />

      {/* Luxury 4 Clinical Pillars Section */}
      <ClinicalPillars />

      {/* Schedule Visit CTA */}
      <div className="text-center pt-8">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-9 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-xl shadow-blue-600/25 transition-all group"
        >
          <span>Schedule A Visit To Our Center</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

