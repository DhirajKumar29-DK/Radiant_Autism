"use client";

import React from "react";
import { CheckCircle2, Building, ShieldCheck, HeartHandshake } from "lucide-react";
import ScrollReveal from "@/common/ScrollReveal";

export default function AboutCentreDetail() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Soft Light Ambient Glows & Dot Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-sky-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-[550px] h-[550px] bg-indigo-100/50 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative z-10">
        
        {/* Row 1: Image Left + Text Right (About Radiant Autism Services & Our Centre) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <ScrollReveal direction="right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <div className="aspect-4/3 w-full overflow-hidden">
                  <img
                    src="/about_center_photo.jpg"
                    alt="Radiant Autism Center clinicians and children in play-based learning"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-full text-xs font-extrabold shadow-md flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>OAP Approved Facility</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 text-blue-700 border border-blue-200/80 text-xs font-extrabold uppercase tracking-wider">
                  <Building className="w-4 h-4 text-blue-600" />
                  <span>OUR CLINICAL CENTER</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  About Radiant Autism Services & Our Centre
                </h2>

                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  Radiant Autism Services is a leading, OAP-approved provider of autism and developmental therapies. For over many years, our clinical team has earned a strong reputation for delivering high-quality, family-centred ABA, Speech-Language Pathology (SLP), Occupational Therapy (OT), and Diagnostic Assessments.
                </p>

                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  We are proud to be recognized as a trusted, best-in-class centre where families feel supported, respected, and confident in the individualized care their child receives every single day.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-extrabold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>BCBA Supervised</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-extrabold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>OAP Approved Services</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Row 2: Text Left + Image Right (Our Purpose-Built Centre & Spaces) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <ScrollReveal direction="right">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 text-blue-700 border border-blue-200/80 text-xs font-extrabold uppercase tracking-wider">
                  <HeartHandshake className="w-4 h-4 text-blue-600" />
                  <span>DESIGNED FOR LEARNING & COMFORT</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Our Purpose-Built Facility & Spaces
                </h2>

                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  Our Radiant Autism Services centre offers purpose-built space thoughtfully designed to support learning, sensory comfort, dignity, and child safety. Our clinic features:
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "On-site large gymnasium area for gross motor skills, movement, and play.",
                    "A dedicated life skills area to practice real-world daily routines (self-care, dressing, structured tasks).",
                    "Sensory integration rooms equipped with swings, foam pits, and sensory regulation tools.",
                    "Quiet 1:1 learning suites designed for focused ABA and Speech-Language sessions.",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-slate-800 text-sm font-bold leading-normal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <ScrollReveal direction="left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <div className="aspect-4/3 w-full overflow-hidden">
                  <img
                    src="/gallery_sensory_gym.jpg"
                    alt="Sensory gym equipment and play facility"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-full text-xs font-extrabold shadow-md flex items-center gap-2">
                  <Building className="w-4 h-4 text-blue-400" />
                  <span>Sensory Gym & Play Space</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
}
