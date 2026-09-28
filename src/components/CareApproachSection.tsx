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
} from "lucide-react";
import ScrollReveal from "@/common/ScrollReveal";

export default function CareApproachSection() {
  const pillars = [
    {
      icon: Heart,
      title: "Personalized and holistic care plans for your child",
    },
    {
      icon: Users,
      title: "Long-lasting support that grows with your family",
    },
    {
      icon: Award,
      title: "High-quality clinical services led by Registered Technicians",
    },
    {
      icon: Brain,
      title: "In-house Board Certified Behavior Analysts (BCBA) to supervise",
    },
    {
      icon: ShieldCheck,
      title: "Transparent rates and OAP approved services for increased access",
    },
    {
      icon: Building2,
      title: "Community-focused center dedicated to making a difference",
    },
    {
      icon: FileCheck2,
      title: "Evidence-based programming and services",
    },
    {
      icon: HandHeart,
      title: "Free support, consultation and training for caregivers of children with autism",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#faf8f2] text-slate-900 relative border-y border-slate-200/70 overflow-hidden">
      {/* Soft Light Ambient Glows & Dot Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-amber-100/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-sky-100/60 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-4xl font-serif text-[#2b4c7e] font-normal tracking-tight">
              The RADIANT approach to care.
            </h3>
            
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 tracking-tight">
              Going above and beyond.
            </h2>
            
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2 font-medium">
              The high-quality support we provide for children with learning disabilities is individualized, multidisciplinary, and evidence-based.
            </p>
          </div>
        </ScrollReveal>

        {/* 8 Feature Items Grid (Exact Screenshot Layout: 4 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mt-16 max-w-6xl mx-auto">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={idx} delay={(idx % 4) * 100} direction="up">
                <div className="flex flex-col items-center text-center group cursor-pointer">
                  {/* Clean Large Blue Line-Art Icon */}
                  <div className="w-16 h-16 text-[#2b4c7e] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-12 h-12 stroke-[1.5]" />
                  </div>

                  {/* Title */}
                  <p className="text-slate-900 font-extrabold text-sm sm:text-base leading-snug max-w-[230px] mx-auto">
                    {pillar.title}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1e293b] hover:bg-slate-800 text-white font-extrabold text-sm shadow-md transition-all group"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}


