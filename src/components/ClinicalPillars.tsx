"use client";

import React from "react";
import { HeartHandshake, Award, Users, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/common/ScrollReveal";

export default function ClinicalPillars() {
  const pillars = [
    {
      id: "01",
      title: "Person-Centered ABA",
      badge: "Empowerment",
      desc: "Every intervention honors the child's individual personality, dignity, strengths, and natural communication pace.",
      icon: HeartHandshake,
      points: ["Dignity-first approach", "Positive Reinforcement"],
    },
    {
      id: "02",
      title: "1:1 BCBA Supervision",
      badge: "BCBA Led",
      desc: "Certified Behavior Analysts directly design, continuously monitor, and adjust clinical progress for every child.",
      icon: Award,
      points: ["Certified Clinicians", "VB-MAPP & ABLLS-R"],
    },
    {
      id: "03",
      title: "Multidisciplinary Integration",
      badge: "360° Care",
      desc: "Seamlessly combining speech-language pathology, occupational sensory care, and pediatric physio for holistic development.",
      icon: Users,
      points: ["Speech + OT + ABA", "Unified Goal Roadmap"],
    },
    {
      id: "04",
      title: "OAP & CEU Approved",
      badge: "Accredited",
      desc: "Fully registered clinical center offering approved family support funding programs and professional clinical development.",
      icon: ShieldCheck,
      points: ["OAP Approved Center", "Parent CEU Training"],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-sky-50/40 to-slate-50 relative border-t border-slate-200/80 overflow-hidden">
      {/* Background Ambient Glow & Dot Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 text-blue-700 border border-blue-200/80 text-xs font-extrabold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>CLINICAL EXCELLENCE</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Our 4 Pillars of Clinical Excellence
            </h2>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              We hold ourselves to the highest global healthcare standards to ensure your child receives gentle, evidence-based, and compassionate therapy.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Luxury Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.id} delay={idx * 120} direction="up">
                <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-slate-200/90 shadow-md hover:shadow-2xl hover:shadow-blue-600/10 hover:border-blue-600 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden group">
                  {/* Subtle Corner Glow */}
                  <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-blue-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                  <div>
                    {/* Top Row: Number Badge & Category Pill */}
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-700 font-black text-xs flex items-center justify-center border border-blue-200/60 shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        {pillar.id}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-600 text-white shadow-xs">
                        {pillar.badge}
                      </span>
                    </div>

                    {/* Icon Box */}
                    <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 flex items-center justify-center my-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 stroke-[2]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2 font-medium">
                      {pillar.desc}
                    </p>

                    {/* Points Bullets */}
                    <div className="pt-4 space-y-2">
                      {pillar.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Accent Bar */}
                  <div className="w-8 h-1 bg-slate-200 rounded-full mt-6 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-300" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
