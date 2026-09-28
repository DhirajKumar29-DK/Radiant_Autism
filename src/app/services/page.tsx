"use client";

import React from "react";
import ServicesGrid from "@/components/ServicesGrid";
import { Sparkles } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="space-y-0 pb-16">
      {/* Premium Photo Hero Banner */}
      <section className="relative py-20 md:py-28 bg-slate-950 text-white overflow-hidden select-none">
        {/* Background Image with Zoom & Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_child_therapy.jpg"
            alt="Clinical therapy session background"
            className="w-full h-full object-cover object-center transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md text-blue-300 border border-blue-500/30 text-xs font-extrabold uppercase tracking-wider shadow-lg">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Radiant Clinical Services</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
            Evidence-Based Therapy & Skill Development
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Explore our comprehensive range of 1:1 individualized therapy and group services supervised by certified BCBA clinicians.
          </p>
        </div>
      </section>

      {/* Services Grid (All Services) */}
      <ServicesGrid />
    </div>
  );
}
