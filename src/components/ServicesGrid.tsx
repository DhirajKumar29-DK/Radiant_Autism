"use client";

import React from "react";
import Link from "next/link";
import {
  Brain,
  MessageCircle,
  Activity,
  Smile,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "@/common/ScrollReveal";
import SectionHeading from "@/common/SectionHeading";

export default function ServicesGrid({ limit }: { limit?: number }) {
  const services = [
    {
      id: "aba-therapy",
      title: "ABA (Applied Behavior Analysis) Therapy",
      badge: "BCBA Supervised",
      badgeBg: "bg-blue-600",
      iconBg: "bg-blue-600",
      bulletColor: "text-blue-600",
      icon: Brain,
      image: "/hero_child_therapy.jpg",
      imgAlt: "Play-based ABA Therapy session",
      description:
        "Evidence-based, person-centered ABA therapy tailored to build essential communication, social skills, and positive behavioral patterns while replacing challenging behaviors gently.",
      features: ["1:1 Individualized Plans", "Positive Reinforcement", "Natural Environment Teaching"],
    },
    {
      id: "speech-therapy",
      title: "Speech & Language Therapy",
      badge: "Communication Care",
      badgeBg: "bg-teal-600",
      iconBg: "bg-teal-600",
      bulletColor: "text-teal-600",
      icon: MessageCircle,
      image: "/hero_speech_therapy.jpg",
      imgAlt: "Speech and language development session",
      description:
        "Specialized articulation, language fluency, expressive communication, and feeding therapy for oral-motor coordination and self-feeding confidence.",
      features: ["Language Delays", "Articulation & AAC", "Oral Motor & Feeding"],
    },
    {
      id: "occupational-therapy",
      title: "Occupational & Sensory Integration",
      badge: "Motor & Sensory",
      badgeBg: "bg-indigo-600",
      iconBg: "bg-indigo-600",
      bulletColor: "text-indigo-600",
      icon: Activity,
      image: "/gallery_sensory_gym.jpg",
      imgAlt: "Indoor sensory gym equipment",
      description:
        "Enhancing fine and gross motor skills, sensory processing, emotional regulation, and independent daily living activities through fun, interactive exercises.",
      features: ["Fine & Gross Motor", "Sensory Gym Training", "Self-Care Routines"],
    },
    {
      id: "pediatric-physiotherapy",
      title: "Pediatric Physiotherapy",
      badge: "Physical Health",
      badgeBg: "bg-emerald-600",
      iconBg: "bg-emerald-600",
      bulletColor: "text-emerald-600",
      icon: Smile,
      image: "/service_physio.jpg",
      imgAlt: "Pediatric physical movement therapy",
      description:
        "Building muscle strength, posture, balance, and physical independence through play-infused physical movement therapy.",
      features: ["Posture & Gait Support", "Balance & Coordination", "Movement Through Play"],
    },
    {
      id: "buddy-steps",
      title: "Buddy Steps Early Intervention",
      badge: "Group Service",
      badgeBg: "bg-rose-600",
      iconBg: "bg-rose-600",
      bulletColor: "text-rose-600",
      icon: Sparkles,
      image: "/gallery_group_play.jpg",
      imgAlt: "Toddler group peer interaction activity",
      description:
        "Small-group socialization service for toddlers and young children to develop peer interaction, classroom bridge readiness, and cooperative play.",
      features: ["Classroom Bridge", "Social Peer Groups", "Early Communication"],
    },
    {
      id: "behavioral-assessments",
      title: "Comprehensive Assessments & Diagnosis",
      badge: "Clinical Diagnostic",
      badgeBg: "bg-purple-600",
      iconBg: "bg-purple-600",
      bulletColor: "text-purple-600",
      icon: ShieldCheck,
      image: "/about_center_photo.jpg",
      imgAlt: "Clinical milestone evaluation session",
      description:
        "Standardized developmental milestones evaluation (VB-MAPP, ABLLS-R, Vineland) conducted by certified BCBA clinicians to benchmark progress.",
      features: ["VB-MAPP & ABLLS-R", "Individualized Goals", "Progress Reports"],
    },
  ];

  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-16 md:py-24 bg-slate-50/70 relative overflow-hidden">
      {/* Soft Light Ambient Glows & Dot Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -right-32 w-[550px] h-[550px] bg-sky-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[550px] h-[550px] bg-indigo-100/50 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <SectionHeading
            badgeText="Our Specialized Care Services"
            badgeVariant="blue"
            title="Comprehensive Therapy Services Designed For Every Developmental Need"
            subtitle="All services are 100% personalized, evidence-based, and delivered by certified clinicians with compassion."
          />
        </ScrollReveal>

        {/* Uniform Card Container & Link Button Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((svc, idx) => {
            const Icon = svc.icon;
            const serviceUrl = `/services/${svc.id}`;

            return (
              <ScrollReveal key={svc.id} delay={(idx % 3) * 150} direction="up">
                <div className="bg-white rounded-3xl overflow-hidden border-2 border-slate-200/90 shadow-md hover:shadow-2xl hover:shadow-blue-600/10 hover:border-blue-600 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    {/* Top Image Showcase Box */}
                    <Link href={serviceUrl} className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 block">
                      <img
                        src={svc.image}
                        alt={svc.imgAlt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />

                      {/* Premium Glassmorphic Category Badge */}
                      <span className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-xl">
                        {svc.badge}
                      </span>
                    </Link>

                    {/* Compact Sleek Icon Box on Left */}
                    <div className="px-6 -mt-5 relative z-10 flex items-center justify-between pointer-events-none">
                      <div className={`w-11 h-11 rounded-xl ${svc.iconBg} text-white shadow-md border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 pt-3 space-y-3">
                      <Link href={serviceUrl} className="block">
                        <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                          {svc.title}
                        </h3>
                      </Link>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {svc.description}
                      </p>

                      {/* Features Bullets */}
                      <div className="pt-2 space-y-2">
                        {svc.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 ${svc.bulletColor}`} />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Uniform Action Link: Know More */}
                  <div className="p-6 pt-0 mt-auto">
                    <Link
                      href={serviceUrl}
                      className="w-full py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs text-center shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Know More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* View All Button */}
        {limit && (
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-lg shadow-blue-600/25 transition-all group"
              >
                <span>View More Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
