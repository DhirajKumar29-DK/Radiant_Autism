"use client";

import React from "react";
import { MessageSquareText, FileBadge, ClipboardCheck, Brain } from "lucide-react";
import ScrollReveal from "@/common/ScrollReveal";

export default function OurApproachProcess() {
  const steps = [
    {
      id: 1,
      stepNum: "01",
      icon: MessageSquareText,
      title: "INITIAL CONSULTATION",
      description:
        "A brief, caring consultation to identify strengths, needs, and suitable Radiant Autism services.",
    },
    {
      id: 2,
      stepNum: "02",
      icon: FileBadge,
      title: "CLINICAL ASSESSMENT",
      description:
        "A structured assessment to gain clarity on current abilities and support requirements.",
    },
    {
      id: 3,
      stepNum: "03",
      icon: ClipboardCheck,
      title: "PERSONALIZED PLANNING",
      description:
        "A personalized planning session to create a supportive, goal-focused roadmap for your child.",
    },
    {
      id: 4,
      stepNum: "04",
      icon: Brain,
      title: "ACTIVE TREATMENT",
      description:
        "Individualized autism therapy focused on supporting your child's growth and daily functioning.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#faf8f2] text-slate-900 relative border-y border-slate-200/80 overflow-hidden">
      {/* Soft Light Ambient Glows & Radial Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-amber-100/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] bg-sky-100/60 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-widest uppercase">
              OUR APPROACH
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mt-3" />
            <p className="text-slate-600 text-sm sm:text-base mt-4 font-medium leading-relaxed">
              A transparent, 4-step clinical roadmap designed to ensure clarity and steady developmental progress.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Process Steps Layout (Clean Non-Boxy Design) */}
        <div className="relative">
          
          {/* Desktop Wavy Dashed Connecting Line SVG */}
          <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-12 pointer-events-none z-0">
            <svg
              className="w-full h-full text-blue-300/60"
              viewBox="0 0 1000 60"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 30 Q 166 60, 333 30 T 666 30 T 1000 30"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="8 8"
              />
            </svg>
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10 max-w-6xl mx-auto">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.id} delay={idx * 150} direction="up">
                  <div className="flex flex-col items-center text-center group cursor-pointer">
                    
                    {/* Deep Blue Circular Icon Box with Floating Step Badge */}
                    <div className="relative">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-slate-900 via-blue-900 to-indigo-900 text-white flex items-center justify-center shadow-xl shadow-blue-900/20 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 shrink-0 border-4 border-white">
                        <Icon className="w-12 h-12 sm:w-14 sm:h-14 stroke-[1.5]" />
                      </div>
                      
                      {/* Floating Step Number Pill */}
                      <span className="absolute -top-1 -right-1 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-black font-mono shadow-md border-2 border-white">
                        {step.stepNum}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="mt-6 mb-2 font-black text-slate-900 text-sm sm:text-base tracking-wider uppercase group-hover:text-blue-600 transition-colors">
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
