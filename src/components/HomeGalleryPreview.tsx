"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Camera, ArrowRight, Eye, ChevronLeft, ChevronRight, X } from "lucide-react";
import ScrollReveal from "@/common/ScrollReveal";

export default function HomeGalleryPreview() {
  const galleryPhotos = [
    {
      id: 1,
      title: "Indoor Sensory Gym & Play Area",
      category: "Motor & Sensory Care",
      image: "/gallery_sensory_gym.jpg",
    },
    {
      id: 2,
      title: "Play-Based 1:1 ABA Learning Room",
      category: "ABA Therapy",
      image: "/hero_child_therapy.jpg",
    },
    {
      id: 3,
      title: "Speech & Communication Room",
      category: "Speech Therapy",
      image: "/hero_speech_therapy.jpg",
    },
    {
      id: 4,
      title: "Clinical Baseline Assessment Area",
      category: "Clinical Care",
      image: "/about_center_photo.jpg",
    },
    {
      id: 5,
      title: "Pediatric Physical Movement Room",
      category: "Physiotherapy",
      image: "/service_physio.jpg",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? galleryPhotos.length - 1 : prev! - 1));
  }, [selectedIndex, galleryPhotos.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === galleryPhotos.length - 1 ? 0 : prev! + 1));
  }, [selectedIndex, galleryPhotos.length]);

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
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md text-blue-300 border border-blue-500/30 text-xs font-extrabold uppercase tracking-wider shadow-lg">
              <Camera className="w-4 h-4 text-blue-400" />
              <span>FACILITY SHOWCASE</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
              Explore Our Modern Therapy Center
            </h2>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
              Take a visual glimpse into our sensory gyms, 1:1 learning rooms, group activity areas, and cheerful child development environment.
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetric 5-Photo Bento Grid: Left 1 Big Image + Right 4 Smaller Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
          {/* Left Side: 1 Big Featured Image (Matches exact height of right 2 rows) */}
          <div className="lg:col-span-6 flex flex-col">
            <ScrollReveal direction="up" delay={100} className="h-full">
              <div
                onClick={() => setSelectedIndex(0)}
                className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl hover:border-blue-400/90 hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-500 group cursor-pointer h-full min-h-[300px] relative"
              >
                <img
                  src={galleryPhotos[0].image}
                  alt={galleryPhotos[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0"
                />
                {/* Single Hover Overlay with View Photo Button (Visible ONLY on hover) */}
                <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-3 rounded-full bg-blue-600 text-white font-extrabold text-xs flex items-center gap-2 shadow-2xl backdrop-blur-md border border-blue-400/40 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-4.5 h-4.5 text-white" />
                    <span>View Featured Photo</span>
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: 4 Smaller Images in 2x2 Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {galleryPhotos.slice(1).map((photo, idx) => {
              const realIdx = idx + 1;
              return (
                <ScrollReveal key={photo.id} delay={(idx + 1) * 100} direction="up" className="h-full">
                  <div
                    onClick={() => setSelectedIndex(realIdx)}
                    className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl hover:border-blue-400/90 hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-500 group cursor-pointer aspect-4/3 relative"
                  >
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0"
                    />
                    {/* Single Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-5 py-2.5 rounded-full bg-blue-600 text-white font-extrabold text-xs flex items-center gap-2 shadow-2xl backdrop-blur-md border border-blue-400/40 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Eye className="w-4 h-4 text-white" />
                        <span>View Photo</span>
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Bottom View All Link -> Navigates to /gallery */}
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-xl shadow-blue-600/30 transition-all group transform hover:-translate-y-0.5"
            >
              <span>Explore Full Gallery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

      </div>

      {/* Interactive Lightbox Slider Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 select-none animate-fadeIn"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Bar */}
            <div className="p-4 sm:px-6 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-extrabold">
                  {galleryPhotos[selectedIndex].category}
                </span>
                <span className="text-xs font-bold text-slate-400">
                  Photo {selectedIndex + 1} of {galleryPhotos.length}
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold"
                aria-label="Close Preview"
              >
                <span>Close</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Central Image Showcase with Side Arrows */}
            <div className="relative aspect-16/10 sm:aspect-16/9 w-full bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src={galleryPhotos[selectedIndex].image}
                alt={galleryPhotos[selectedIndex].title}
                className="w-full h-full object-contain transition-all duration-300"
              />

              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                type="button"
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white border border-white/20 shadow-2xl transition-all hover:scale-110"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6 stroke-[3]" />
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white border border-white/20 shadow-2xl transition-all hover:scale-110"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6 stroke-[3]" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="p-4 sm:px-6 bg-slate-900 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
              <div className="space-y-0.5 text-center sm:text-left">
                <h4 className="text-base sm:text-lg font-black text-white">
                  {galleryPhotos[selectedIndex].title}
                </h4>
                <p className="text-xs text-slate-400 font-medium">
                  Use Left (←) and Right (→) arrow keys to switch photos
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Prev</span>
                </button>
                <span className="text-xs text-slate-500 font-mono px-1">
                  {selectedIndex + 1}/{galleryPhotos.length}
                </span>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-extrabold shadow-md transition-colors flex items-center gap-1"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
