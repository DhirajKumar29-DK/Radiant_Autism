"use client";

import React, { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { Sparkles, MapPin, Clock, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="space-y-0 pb-16">
      {/* Premium Photo Hero Banner */}
      <section className="relative py-20 md:py-28 bg-slate-950 text-white overflow-hidden select-none">
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_bg_speech.jpg"
            alt="Radiant Care Team consultation and support"
            className="w-full h-full object-cover object-center transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md text-blue-300 border border-blue-500/30 text-xs font-extrabold uppercase tracking-wider shadow-lg">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Contact Radiant Care Team</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
            Reach Out For Support & Assessment
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            We are ready to answer your questions and welcome your family to our center.
          </p>
        </div>
      </section>

      {/* 4-Field Inquiry Form Component (Includes Compact Left Map) */}
      <Suspense fallback={<div className="py-10 text-center text-slate-500">Loading form...</div>}>
        <ContactForm />
      </Suspense>

      {/* Interactive Location & Hours Card */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-lg">Visit Center</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Radiant Autism & Skill Center<br />
                Main Healthcare Boulevard, Suite 400<br />
                Accessible facility with parking.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-lg">Operating Hours</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 4:00 PM<br />
                Sunday: Closed (Emergency on call)
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-lg">Instant Connect</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Connect directly with our care intake officer on WhatsApp.
              </p>
              <a
                href="https://wa.me/18005557890?text=Hi%20Radiant%20Autism%20Center%2C%20I%20want%20to%20inquire%20about%20therapy%20services."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
