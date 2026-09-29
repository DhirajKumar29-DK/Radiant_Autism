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
  Users,
  FileText,
} from "lucide-react";
import ScrollReveal from "@/common/ScrollReveal";
import SectionHeading from "@/common/SectionHeading";

export default function ServicesGrid({ limit }: { limit?: number }) {
  const services = [
    {
      id: "aba-therapy",
      title: "ABA / IBI Therapy",
      badge: "OAP Covered",
      badgeBg: "bg-blue-600",
      iconBg: "bg-blue-600",
      bulletColor: "text-blue-600",
      icon: Brain,
      image: "/hero_child_therapy.jpg",
      imgAlt: "ABA IBI Therapy session",
      description:
        "Applied Behaviour Analysis (ABA) autism therapy using research-based methods to target verbal skills, self-help, play, social skills, and socially significant goals for ages 2 to 20.",
      features: ["Ages 2 to 20 Years", "Registered Behaviour Analyst", "Target Verbal & Life Skills"],
    },
    {
      id: "group-programs",
      title: "Group Programs",
      badge: "Social & Emotional",
      badgeBg: "bg-purple-600",
      iconBg: "bg-purple-600",
      bulletColor: "text-purple-600",
      icon: Users,
      image: "/gallery_group_play.jpg",
      imgAlt: "Peer group social skills program",
      description:
        "Structured group sessions (RoboSocials, PEERS®, Emotional ABCs®, Mood Masters, Study Buddies) for ages 4-24 to build social skills, emotional regulation, and lasting peer relationships.",
      features: ["Ages 4 to 24 Years", "PEERS® & Emotional ABCs®", "Social Skills & Peer Groups"],
    },
    {
      id: "speech-therapy",
      title: "Speech Therapy",
      badge: "Communication Care",
      badgeBg: "bg-teal-600",
      iconBg: "bg-teal-600",
      bulletColor: "text-teal-600",
      icon: MessageCircle,
      image: "/hero_speech_therapy.jpg",
      imgAlt: "Speech and language therapy session",
      description:
        "Trusted standardized assessments and individualized treatment combining Speech-Language Pathology (SLP) and ABA practices to make communication fun and effective.",
      features: ["Registered SLP Lead", "Language & Articulation", "Combined SLP + ABA Methods"],
    },
    {
      id: "occupational-therapy",
      title: "Occupational Therapy",
      badge: "Motor & Sensory",
      badgeBg: "bg-indigo-600",
      iconBg: "bg-indigo-600",
      bulletColor: "text-indigo-600",
      icon: Activity,
      image: "/gallery_sensory_gym.jpg",
      imgAlt: "Indoor sensory gym occupational therapy",
      description:
        "Tailored occupational therapy focusing on fine & gross motor skills, sensory regulation, core strength, handwriting, and building essential daily living independence.",
      features: ["Registered OT Lead", "Sensory Regulation", "Fine & Gross Motor Skills"],
    },
    {
      id: "behaviour-consultation",
      title: "Behaviour Consultation",
      badge: "Parent & Professional",
      badgeBg: "bg-amber-600",
      iconBg: "bg-amber-600",
      bulletColor: "text-amber-600",
      icon: ShieldCheck,
      image: "/about_center_photo.jpg",
      imgAlt: "Behaviour consultation and parent training",
      description:
        "Personalized behaviour consultations (in-person & online) and self-paced video training modules for parents and professionals to manage problem behaviors, toilet training, and feeding.",
      features: ["In-Person & Online", "Self-Paced Parent Courses", "Toilet Training & Behaviour"],
    },
    {
      id: "psychoeducational-assessments",
      title: "Psychoeducational Assessments",
      badge: "Academic & IQ",
      badgeBg: "bg-rose-600",
      iconBg: "bg-rose-600",
      bulletColor: "text-rose-600",
      icon: FileText,
      image: "/service_physio.jpg",
      imgAlt: "Psychoeducational testing session",
      description:
        "Comprehensive assessments in collaboration with The PsychoEd Clinic to identify learning disabilities, academic challenges, ADHD, IQ levels, and academic strengths for ages 7+.",
      features: ["Collaboration with PsychoEd Clinic", "Ages 7+", "Identifies ADHD & Learning Profiles"],
    },
    {
      id: "psychotherapy-services",
      title: "Psychotherapy Services",
      badge: "Mental Health",
      badgeBg: "bg-emerald-600",
      iconBg: "bg-emerald-600",
      bulletColor: "text-emerald-600",
      icon: Smile,
      image: "/hero_bg_speech.jpg",
      imgAlt: "Individual psychotherapy consultation",
      description:
        "Evidence-based CBT, DBT, and Emotion-Focused Therapy for pre-teens, adolescents, and young adults facing anxiety, OCD, depression, or ADHD, with active parent involvement.",
      features: ["Registered Psychotherapist", "CBT, DBT & EFT Techniques", "Anxiety & Mood Management"],
    },
    {
      id: "life-skills",
      title: "Life Skills",
      badge: "Independence",
      badgeBg: "bg-sky-600",
      iconBg: "bg-sky-600",
      bulletColor: "text-sky-600",
      icon: Sparkles,
      image: "/hero_bg_aba.jpg",
      imgAlt: "Community life skills training",
      description:
        "Empowering neurodivergent teens and young adults with real-world skills: public transit, grocery shopping, meal prep, cleaning, self-advocacy, resume building, and job/school applications.",
      features: ["Community Navigation", "Job & School Applications", "Self-Advocacy & Meal Prep"],
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
            title="Comprehensive Therapy Programs Designed For Every Developmental Need"
            subtitle="All programs are 100% personalized, evidence-based, and delivered by registered clinicians with compassion."
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
                    {/* Image Frame */}
                    <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                      <img
                        src={svc.image}
                        alt={svc.imgAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                      {/* Premium Category Badge */}
                      <span
                        className={`absolute top-4 left-4 text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md ${svc.badgeBg}`}
                      >
                        {svc.badge}
                      </span>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-4">
                      {/* Icon + Title */}
                      <div className="flex items-start gap-3.5">
                        <div
                          className={`w-11 h-11 rounded-2xl ${svc.iconBg} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-5.5 h-5.5 stroke-[2.5]" />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight pt-0.5">
                          {svc.title}
                        </h3>
                      </div>

                      {/* Short Description */}
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        {svc.description}
                      </p>

                      {/* Feature Bullet Points */}
                      <ul className="space-y-2 pt-2 border-t border-slate-100">
                        {svc.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 ${svc.bulletColor}`} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="px-6 pb-6 pt-2">
                    <Link
                      href={serviceUrl}
                      className="w-full py-3 px-4 rounded-2xl bg-slate-100 group-hover:bg-blue-600 text-slate-800 group-hover:text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-xs group-hover:shadow-md"
                    >
                      <span>Explore Program Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* View All Programs Button (if limit is active) */}
        {limit && (
          <div className="text-center pt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all group"
            >
              <span>View All 8 Clinical Programs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-sky-400" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
