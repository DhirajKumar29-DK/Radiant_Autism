"use client";

import React from "react";
import { Award, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/common/ScrollReveal";

export default function OurTeamSection() {
  const teamMembers = [
    {
      name: "Shyni Gopal",
      role: "BCBA, QBA - Program Director & Founder",
      badge: "Board Certified Analyst",
      image: "/founder_portrait.jpg",
      bio: "Over 12+ years of clinical expertise specializing in person-centered ABA, VB-MAPP assessment, and compassionate family-focused therapy.",
    },
    {
      name: "Dr. Marcus Vance",
      role: "Lead Speech-Language Pathologist (SLP)",
      badge: "Speech & AAC Specialist",
      image: "/hero_speech_therapy.jpg",
      bio: "Specializing in pediatric articulation, early vocalization, AAC augmentative communication devices, and oral-motor feeding coordination.",
    },
    {
      name: "Elena Rostova",
      role: "Head of Occupational & Sensory Therapy",
      badge: "Sensory Integration Expert",
      image: "/hero_child_therapy.jpg",
      bio: "Expert in sensory processing gym training, fine motor dexterity, emotional self-regulation, and independent daily life skills.",
    },
    {
      name: "Sarah Jenkins",
      role: "Senior Registered Behavior Technician (RBT)",
      badge: "Early Intervention Lead",
      image: "/gallery_group_play.jpg",
      bio: "Dedicated to play-infused 1:1 ABA implementation, peer socialization circles, and toddler classroom bridge readiness.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800 select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md text-blue-300 border border-blue-500/30 text-xs font-extrabold uppercase tracking-wider shadow-lg">
              <Award className="w-4 h-4 text-blue-400" />
              <span>CLINICAL LEADERSHIP & STAFF</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Meet Our Dedicated Clinical Team
            </h2>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
              Supervised by certified Board Certified Behavior Analysts (BCBA) and delivered by compassionate speech, occupational, and behavior specialists.
            </p>
          </div>
        </ScrollReveal>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <ScrollReveal key={idx} delay={(idx % 4) * 120} direction="up">
              <div className="bg-slate-800/90 rounded-3xl overflow-hidden border-2 border-slate-700/80 shadow-2xl hover:border-blue-400 hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  {/* Photo Box */}
                  <div className="relative aspect-4/5 w-full overflow-hidden bg-slate-900">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <span className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-lg">
                      {member.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-black text-white group-hover:text-blue-300 transition-colors leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                      {member.role}
                    </p>
                    <p className="text-slate-300 text-xs leading-relaxed pt-2">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Footer badge */}
                <div className="p-6 pt-0 mt-auto">
                  <div className="pt-3 border-t border-slate-700/80 flex items-center gap-2 text-xs font-bold text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Certified Practitioner</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
