"use client";

import React from "react";
import Link from "next/link";
import {
  HeartHandshake,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  ShieldCheck,
  Code2,
} from "lucide-react";

export default function Footer() {
  const serviceLinks = [
    { name: "ABA / IBI Therapy", path: "/services/aba-therapy" },
    { name: "Group Programs", path: "/services/group-programs" },
    { name: "Speech Therapy", path: "/services/speech-therapy" },
    { name: "Occupational Therapy", path: "/services/occupational-therapy" },
    { name: "Behaviour Consultation", path: "/services/behaviour-consultation" },
    { name: "Psychoeducational Assessments", path: "/services/psychoeducational-assessments" },
    { name: "Psychotherapy Services", path: "/services/psychotherapy-services" },
    { name: "Life Skills Program", path: "/services/life-skills" },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 mt-auto overflow-hidden select-none">
      {/* Background Therapy Photo Image - Balanced Contrast */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/hero_child_therapy.jpg"
          alt="Therapy center facility background"
          className="w-full h-full object-cover object-center opacity-75"
        />
        {/* Balanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/75 to-slate-950/85 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Logo & Overview */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                RADIANT <span className="text-sky-400 font-light">AUTISM</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering children with autism and determination through compassionate, evidence-based ABA, speech, and occupational therapy supervised by certified BCBA professionals.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                OAP Approved Center
              </span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 tracking-wide uppercase text-xs">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="hover:text-sky-400 flex items-center gap-1.5 transition-colors text-slate-400 hover:translate-x-1 duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-sky-500" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Specialized Therapy Services (Direct Navigation Links) */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 tracking-wide uppercase text-xs">
              Our Therapy Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((svc) => (
                <li key={svc.path}>
                  <Link
                    href={svc.path}
                    className="hover:text-sky-400 flex items-center gap-1.5 transition-colors text-slate-400 hover:translate-x-1 duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                    <span>{svc.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3.5 text-sm text-slate-400">
            <h3 className="text-white text-base font-bold mb-4 tracking-wide uppercase text-xs">
              Get In Touch
            </h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
              <span>Radiant Autism & Skill Center, Main Healthcare Boulevard, Suite 400</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <a href="tel:+18005557890" className="hover:text-blue-300 transition-colors">
                +1 (800) 555-RADIANT
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <a href="mailto:care@radiantautism.com" className="hover:text-blue-300 transition-colors">
                care@radiantautism.com
              </a>
            </div>
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Mon-Sat: 8 AM - 6 PM | Sunday Closed</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Developer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Radiant Autism Center. All Rights Reserved.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <Code2 className="w-3.5 h-3.5 text-sky-400" />
            <span>Designed & Developed by</span>
            <a
              href="https://nighwantech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-sky-400 hover:text-sky-300 underline underline-offset-4 decoration-sky-400/50 hover:decoration-sky-300 transition-colors"
            >
              Nighwan Technology
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
