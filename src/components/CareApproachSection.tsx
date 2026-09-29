"use client";

import React from "react";
import Link from "next/link";
import {
  Heart,
  Users,
  Award,
  Brain,
  ShieldCheck,
  Building2,
  FileCheck2,
  HandHeart,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "@/common/ScrollReveal";

export default function CareApproachSection() {
  const pillars = [
    {
      icon: Heart,
      title: "Personalized & Holistic Care",
      desc: "Individualized therapy plans tailored specifically to your child's unique strengths and needs.",
      color: "from-sky-500 to-blue-600",
      shadow: "shadow-blue-500/20",
    },
    {
      icon: Users,
      title: "Lifelong Family Support",
      desc: "Long-lasting clinical guidance and parent support that grows alongside your family.",
      color: "from-blue-600 to-indigo-600",
      shadow: "shadow-indigo-500/20",
    },
    {
      icon: Award,
      title: "Registered Clinical Teams",
      desc: "High-quality therapy delivered by certified behavioral technicians and clinical specialists.",
      color: "from-indigo-600 to-purple-600",
      shadow: "shadow-purple-500/20",
    },
    {
      icon: Brain,
      title: "In-House BCBA Supervision",
      desc: "Direct supervision by Board Certified Behavior Analysts (BCBA) for every program.",
      color: "from-purple-600 to-pink-600",
      shadow: "shadow-pink-500/20",
    },
    {
      icon: ShieldCheck,
      title: "OAP Approved & Transparent",
      desc: "100% OAP funding eligible services with transparent rates and accessible care.",
      color: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/20",
    },
    {
      icon: Building2,
      title: "Community-Focused Center",
      desc: "Dedicated clinical environment fostering peer collaboration and positive growth.",
      color: "from-teal-600 to-sky-600",
      shadow: "shadow-teal-500/20",
    },
    {
      icon: FileCheck2,
      title: "Evidence-Based Programming",
      desc: "Methodologies backed by international research and data-driven progress benchmarks.",
      color: "from-sky-600 to-blue-600",
      shadow: "shadow-sky-500/20",
    },
    {
      icon: HandHeart,
      title: "Free Caregiver Coaching",
      desc: "Complimentary consultations, workshops, and training for parents of autistic children.",
      color: "from-amber-500 to-orange-600",
      shadow: "shadow-amber-500/20",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#faf8f2] via-slate-50 to-[#faf8f2] text-slate-900 relative border-y border-slate-200/80 overflow-hidden">
      {/* Ambient Glows & Subtle Radial Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-amber-100/60 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] bg-sky-100/70 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 text-blue-700 border border-blue-200/80 text-xs font-black uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Our Care Philosophy</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif text-[#2b4c7e] font-medium tracking-tight">
              The RADIANT Approach To Care
            </h3>
            
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 bg-clip-text text-transparent">
              Going Above & Beyond For Every Child
            </h2>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
              High-quality, individualized, multidisciplinary, and evidence-based clinical support designed to empower your child's developmental journey.
            </p>
          </div>
        </ScrollReveal>

        {/* 8 Feature Glass Cards Grid (4 Columns x 2 Rows with Staggered Scroll Reveal) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={idx} delay={(idx % 4) * 120} direction="up">
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border-2 border-slate-200/80 shadow-md hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-sky-50/50 rounded-full blur-xl pointer-events-none group-hover:bg-blue-100/50 transition-colors" />
                  
                  <div className="space-y-4 relative z-10">
                    {/* Icon Pod */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${pillar.color} text-white flex items-center justify-center shadow-lg ${pillar.shadow} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 stroke-[2]" />
                    </div>

                    {/* Title */}
                    <h4 className="text-slate-900 font-black text-lg leading-snug group-hover:text-blue-600 transition-colors">
                      {pillar.title}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-black text-blue-600 group-hover:text-blue-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Radiant Care Standard</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Action Button */}
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/40 transition-all transform hover:-translate-y-0.5 group"
            >
              <span>Get Started With Radiant Today</span>
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
