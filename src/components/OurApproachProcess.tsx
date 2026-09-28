"use client";

import React from "react";
import { MessageSquareText, FileBadge, ClipboardCheck, Brain } from "lucide-react";
import ScrollReveal from "@/common/ScrollReveal";

export default function OurApproachProcess() {
  const steps = [
    {
      id: 1,
      icon: MessageSquareText,
      title: "INITIAL CONSULTATION",
      description:
        "A brief, caring consultation to identify strengths, needs, and suitable Radiant Autism services.",
    },
    {
      id: 2,
      icon: FileBadge,
      title: "ASSESSMENT",
      description:
        "A structured assessment to gain clarity on current abilities and support requirements.",
    },
    {
      id: 3,
      icon: ClipboardCheck,
      title: "PLANNING",
      description:
        "A personalized planning session to create a supportive, goal-focused roadmap for your child.",
    },
    {
      id: 4,
      icon: Brain,
      title: "TREATMENT",
      description:
        "Individualized autism therapy focused on supporting your child's growth and daily functioning.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#fff7f2] text-slate-900 relative border-t border-slate-200/60 overflow-hidden">
      {/* Soft Light Ambient Glows & Dot Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-amber-100/50 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-widest uppercase">
              OUR APPROACH
            </h2>
            <div className="w-12 h-1 bg-[#034479] rounded-full mx-auto mt-3" />
          </div>
        </ScrollReveal>

        {/* 4 Process Steps Layout */}
        <div className="relative">
          
          {/* Desktop Wavy Dashed Connecting Line SVG */}
          <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-12 pointer-events-none z-0">
            <svg
              className="w-full h-full text-slate-400/80"
              viewBox="0 0 1000 60"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 30 Q 166 60, 333 30 T 666 30 T 1000 30"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.id} delay={idx * 150} direction="up">
                  <div className="flex flex-col items-center text-center group">
                    {/* Deep Blue Circular Icon Box */}
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#034479] text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#02335c] transition-all duration-300 shrink-0">
                      <Icon className="w-12 h-12 sm:w-14 sm:h-14 stroke-[1.5]" />
                    </div>

                    {/* Step Title */}
                    <h3 className="mt-6 mb-2 font-black text-slate-900 text-sm sm:text-base tracking-wider uppercase group-hover:text-[#034479] transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-[240px] mx-auto font-medium">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
