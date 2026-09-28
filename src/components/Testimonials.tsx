"use client";

import React from "react";
import { Star, Quote, Sparkles, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/common/ScrollReveal";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Priya & Rahul M.",
      role: "Parents of 5-year-old Aarav",
      service: "Speech & ABA Therapy",
      image: "/hero_child_therapy.jpg",
      text: "Radiant Autism Center changed our lives. The BCBA therapists are so patient and caring. Aarav started speaking two-word phrases within 3 months of speech and ABA therapy!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah & Michael K.",
      role: "Parents of 4-year-old Liam",
      service: "Buddy Steps Early Intervention",
      image: "/gallery_group_play.jpg",
      text: "The Buddy Steps early intervention group gave Liam the confidence to interact with other children. He went from avoiding eye contact to actively playing with peers in class.",
      rating: 5,
    },
    {
      id: 3,
      name: "David & Anita S.",
      role: "Parents of 7-year-old Ananya",
      service: "Occupational & Sensory Integration",
      image: "/gallery_sensory_gym.jpg",
      text: "Their occupational therapy team is phenomenal. The sensory gym sessions helped Ananya regulate her emotions and focus much better during school activities.",
      rating: 5,
    },
    {
      id: 4,
      name: "Dr. Sunita & Vikram R.",
      role: "Parents of 6-year-old Kabir",
      service: "Comprehensive ABA & Clinical Diagnostics",
      image: "/hero_speech_therapy.jpg",
      text: "As healthcare professionals ourselves, we evaluated multiple therapy centers. Radiant’s evidence-based ABA methodology, BCBA supervision, and compassionate staff exceeded all our expectations.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-28 bg-slate-50 relative overflow-clip">
      {/* Soft Light Ambient Glows & Dot Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -right-32 w-[550px] h-[550px] bg-sky-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[550px] h-[550px] bg-indigo-100/50 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* Left Column: Sticky Header & Rating Summary Box */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 self-start">
            <ScrollReveal direction="right">
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-700 border border-blue-200/80 text-xs font-extrabold uppercase tracking-wider shadow-xs">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>PARENT REFLECTIONS</span>
                </div>

                {/* Title */}
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
                  Hear From Families <br />
                  <span className="text-blue-600">Whose Lives Have Been Transformed</span>
                </h2>

                {/* Subtitle */}
                <p className="text-slate-600 text-base leading-relaxed max-w-lg">
                  Read authentic perspectives from families celebrating their child&apos;s developmental milestones, communication breakthroughs, and social progress at Radiant Autism Center.
                </p>

                {/* Overall Rating Summary Box */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-2xl font-black text-slate-900">4.9 / 5.0</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-normal">
                    Based on <strong className="text-slate-800">150+ verified parent reviews</strong> & clinical progress milestones across ABA, Speech, and Occupational therapy.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Sticky Stacking Testimonial Cards */}
          <div className="lg:col-span-7 relative pb-12">
            {reviews.map((rev, idx) => {
              // Calculate sticky top offset for clean deck stacking effect
              const topOffset = 100 + idx * 24; // 100px, 124px, 148px, 172px
              return (
                <div
                  key={rev.id}
                  style={{ top: `${topOffset}px`, zIndex: idx + 10 }}
                  className="sticky bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 group text-slate-900 mb-8"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                    
                    {/* Left: Photo */}
                    <div className="sm:col-span-5 aspect-4/3 w-full rounded-2xl overflow-hidden shadow-md bg-slate-100 relative group/img shrink-0">
                      <img
                        src={rev.image}
                        alt={rev.name}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                    </div>

                    {/* Right: Content */}
                    <div className="sm:col-span-7 space-y-4">
                      {/* Top Row: Rating Stars + Quote Icon */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <Quote className="w-8 h-8 text-blue-200 group-hover:text-blue-500 transition-colors" />
                      </div>

                      {/* Review Quote Text */}
                      <p className="text-slate-700 text-sm leading-relaxed italic font-medium">
                        &quot;{rev.text}&quot;
                      </p>

                      {/* Parent Info & Verified Badge */}
                      <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <h3 className="font-black text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                            {rev.name}
                          </h3>
                          <p className="text-xs text-slate-500 font-semibold">{rev.service}</p>
                        </div>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          VERIFIED PARENT
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}


