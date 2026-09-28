"use client";

import React from "react";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Heart,
  Users,
} from "lucide-react";
import ScrollReveal from "@/common/ScrollReveal";

export default function AboutSection() {
  const highlights = [
    "Board Certified Behavior Analyst (BCBA) Supervision",
    "OAP Approved Center with Certified Programs",
    "Person-Centered & Modern ABA Methodologies",
    "Integrated Speech, Feeding & Occupational Therapy",
    "ASDAN Curriculum & AI Milestones Training",
    "Compassionate Parent Guidance & CEU Workshops",
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Soft Light Ambient Glows & Dot Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Real High Quality Center Photo Frame */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={100}>
              <div className="relative">
                {/* Photo Frame Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                  <div className="relative aspect-4/5 w-full overflow-hidden">
                    <img
                      src="/about_center_photo.jpg"
                      alt="Child and clinician during interactive ABA skill building"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-slate-100 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-xs font-extrabold text-slate-900">
                      OAP Approved Center
                    </span>
                  </div>
                </div>

                {/* Outer Floating Badge (Bottom Right) */}
                <div className="absolute -bottom-6 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 max-w-xs z-20">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-900">100% Person-Centered Care</h5>
                    <p className="text-[11px] text-slate-500">Child dignity & safety first</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: About Us Content */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="left" delay={200}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-blue text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  About Radiant Autism Center
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                  Compassionate, Modern & Person-Centered Care For Every Child
                </h2>

                <p className="text-slate-600 text-base leading-relaxed">
                  At Radiant Autism Center, we are more than just a therapy provider. We are a dedicated family of certified therapists, educators, and behavior analysts committed to providing gentle, high-quality, individual-focused interventions.
                </p>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Unlike traditional strict approaches, our modern ABA therapy is root-cause focused, play-infused, and compassionate. We collaborate closely with parents, speech pathologists, and occupational therapists to design a cohesive development journey.
                </p>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/60 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-bold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/about"
                    className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 group"
                  >
                    <span>Read Our Full Story</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-200 shadow-xs transition-all"
                  >
                    Schedule Facility Tour
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
