"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import ScrollReveal from "@/common/ScrollReveal";
import SectionHeading from "@/common/SectionHeading";
import { Camera, ArrowRight, Eye, ChevronLeft, ChevronRight, X } from "lucide-react";

export default function GalleryClient() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Play-Based ABA Therapy Session",
      category: "ABA Therapy",
      image: "/hero_child_therapy.jpg",
      tag: "1:1 Learning",
    },
    {
      id: 2,
      title: "Speech & Language Development",
      category: "Speech Therapy",
      image: "/hero_speech_therapy.jpg",
      tag: "Communication",
    },
    {
      id: 3,
      title: "Indoor Sensory Gym & Play Area",
      category: "Sensory Gym",
      image: "/gallery_sensory_gym.jpg",
      tag: "Sensory & Motor",
    },
    {
      id: 4,
      title: "Buddy Steps Group Art & Social Circle",
      category: "Group Activities",
      image: "/gallery_group_play.jpg",
      tag: "Peer Interaction",
    },
    {
      id: 5,
      title: "Clinical Assessment & Consultation Room",
      category: "ABA Therapy",
      image: "/about_center_photo.jpg",
      tag: "Clinical Care",
    },
    {
      id: 6,
      title: "Pediatric Physical Movement Session",
      category: "Physiotherapy",
      image: "/service_physio.jpg",
      tag: "Movement",
    },
    {
      id: 7,
      title: "Sensory & Cognitive Activity Station",
      category: "Sensory Gym",
      image: "/hero_bg_aba.jpg",
      tag: "Sensory Play",
    },
    {
      id: 8,
      title: "Oral Motor & Communication Practice",
      category: "Speech Therapy",
      image: "/hero_bg_speech.jpg",
      tag: "Speech Care",
    },
  ];

  const categories = ["All", "ABA Therapy", "Speech Therapy", "Sensory Gym", "Group Activities", "Physiotherapy"];

  const filteredItems =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev! - 1));
  }, [selectedIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev! + 1));
  }, [selectedIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  return (
    <div className="space-y-0 pb-16">
      {/* Premium Photo Hero Banner */}
      <section className="relative py-20 md:py-28 bg-slate-950 text-white overflow-hidden select-none">
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery_sensory_gym.jpg"
            alt="Sensory gym and play area facility"
            className="w-full h-full object-cover object-center transform animate-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/50 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md text-blue-300 border border-blue-500/30 text-xs font-extrabold uppercase tracking-wider shadow-lg">
            <Camera className="w-4 h-4 text-blue-400" />
            <span>Radiant Center Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
            Explore Our Center & Therapy Facilities
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Take a visual tour of our sensory gym, 1:1 learning rooms, group activity areas, and cheerful child development environment.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Clean Image Gallery Grid */}
      <section className="py-16 bg-slate-50 relative overflow-hidden">
        {/* Soft Light Ambient Glows & Dot Grid Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-sky-200/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] bg-indigo-100/50 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Heading */}
          <ScrollReveal direction="up">
            <SectionHeading
              badgeText="Center Moments & Facilities"
              badgeVariant="blue"
              title="A Glimpse Into Radiant Autism Center"
              subtitle="Click on any image to expand and slide through our high-resolution facility photos."
            />
          </ScrollReveal>

          {/* Category Filter Buttons */}
          <ScrollReveal direction="up" delay={100}>
            <div className="flex flex-wrap justify-center gap-2.5 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveTab(cat);
                    setSelectedIndex(null);
                  }}
                  type="button"
                  className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold transition-all duration-300 ${
                    activeTab === cat
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105"
                      : "bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200/90 shadow-2xs"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Pure Visual Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {filteredItems.map((item, idx) => (
              <ScrollReveal key={item.id} delay={(idx % 3) * 120} direction="up">
                <div
                  onClick={() => setSelectedIndex(idx)}
                  className="group relative aspect-4/3 rounded-3xl overflow-hidden border-2 border-slate-200/90 shadow-md hover:shadow-2xl hover:border-blue-500 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer bg-slate-950"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-5 py-2.5 rounded-full bg-blue-600 text-white font-extrabold text-xs flex items-center gap-2 shadow-2xl backdrop-blur-md border border-blue-400/40 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-4 h-4" />
                      <span>View Photo</span>
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA at Bottom of Gallery */}
          <ScrollReveal direction="up" delay={200}>
            <div className="mt-16 text-center bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl max-w-4xl mx-auto space-y-4 border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-2xl sm:text-3xl font-black leading-snug">
                Would You Like To Visit Our Center In Person?
              </h3>
              <p className="text-slate-300 text-sm max-w-xl mx-auto">
                Schedule a guided walkthrough of our sensory gym, therapy rooms, and meet our certified BCBA clinicians.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-lg shadow-blue-600/30 transition-all"
                >
                  <span>Schedule Facility Visit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Minimalist Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none animate-fadeIn"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            type="button"
            className="fixed top-5 right-5 sm:top-8 sm:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white backdrop-blur-md transition-all cursor-pointer shadow-lg"
            aria-label="Close Preview"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            type="button"
            className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3.5 sm:p-4 rounded-full bg-white/10 hover:bg-blue-600 text-white backdrop-blur-md transition-all shadow-xl hover:scale-110 cursor-pointer border border-white/15"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 stroke-[3]" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            type="button"
            className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3.5 sm:p-4 rounded-full bg-white/10 hover:bg-blue-600 text-white backdrop-blur-md transition-all shadow-xl hover:scale-110 cursor-pointer border border-white/15"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[3]" />
          </button>

          <div
            className="relative max-h-[80vh] max-w-[88vw] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[selectedIndex].image}
              alt={filteredItems[selectedIndex].title}
              className="max-h-[75vh] max-w-[88vw] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/10 transition-all duration-300"
            />

            <div className="mt-4 px-5 py-2.5 rounded-full bg-slate-900/90 border border-white/15 backdrop-blur-md text-white flex flex-wrap items-center justify-center gap-3 text-xs font-bold shadow-xl">
              <span className="px-3 py-0.5 rounded-full bg-blue-600 text-white font-extrabold text-[11px]">
                {filteredItems[selectedIndex].category}
              </span>
              <span className="text-slate-200 font-extrabold truncate max-w-xs sm:max-w-md">
                {filteredItems[selectedIndex].title}
              </span>
              <span className="text-slate-400 font-mono text-[11px] border-l border-white/20 pl-3">
                {selectedIndex + 1} of {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
