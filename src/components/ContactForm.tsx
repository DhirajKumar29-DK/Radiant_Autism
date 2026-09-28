"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Loader2,
  Sparkles,
  RotateCcw,
  FileText
} from "lucide-react";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams?.get("service") || "";

  const [formData, setFormData] = useState({
    parentFirstName: "",
    parentLastName: "",
    childFirstName: "",
    childLastName: "",
    childAge: "",
    email: "",
    phone: "",
    postalCode: "",
    service: preselectedService || "",
    referralSource: "",
    message: "",
  });

  const [isServiceFocused, setIsServiceFocused] = useState(false);
  const [isReferralFocused, setIsReferralFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentFirstName || !formData.phone || !formData.email) {
      alert("Please fill in all required fields marked with *.");
      return;
    }

    setIsSubmitting(true);

    // Simulate smooth animated submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setTicketId(`RAD-${Math.floor(10000 + Math.random() * 90000)}`);
      setSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      parentFirstName: "",
      parentLastName: "",
      childFirstName: "",
      childLastName: "",
      childAge: "",
      email: "",
      phone: "",
      postalCode: "",
      service: "",
      referralSource: "",
      message: "",
    });
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden select-none border-t border-slate-200/80" id="inquiry-form">
      {/* Soft Light Ambient Glows & Dot Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-sky-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] bg-indigo-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-amber-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-extrabold uppercase tracking-wider shadow-2xs">
              <MessageSquare className="w-4 h-4 text-blue-600" />
              <span>Get In Touch With Our Care Team</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              We Are Here To Guide Your Child’s Journey
            </h2>

            <p className="text-slate-600 text-base leading-relaxed font-medium">
              Have questions about our OAP approved services, BCBA supervision, or assessment scheduling? Reach out to us today.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900">Call Line</h4>
                  <a href="tel:+18005557890" className="text-xs text-blue-600 font-bold hover:underline">
                    +1 (800) 555-RADIANT
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Instant phone consultation</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900">Email Inquiry</h4>
                  <a href="mailto:care@radiantautism.com" className="text-xs text-blue-600 font-bold hover:underline">
                    care@radiantautism.com
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">24-hour response time</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 transition-all">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900">Center Location</h4>
                  <p className="text-xs text-slate-700 font-medium">
                    Radiant Autism & Skill Center, Main Healthcare Boulevard, Suite 400
                  </p>
                </div>
              </div>

              {/* Compact Sleek Left Map Box */}
              <div className="rounded-2xl overflow-hidden border-2 border-slate-200/90 shadow-md relative bg-slate-900 group">
                <iframe
                  title="Radiant Autism Center Compact Map"
                  src="https://maps.google.com/maps?q=Autism%20Therapy%20Center&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-[180px] border-0 filter contrast-[1.05]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="p-3 bg-slate-900 text-white flex items-center justify-between text-xs border-t border-slate-800">
                  <div className="flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="font-bold truncate text-[11px] text-slate-200">Main Healthcare Blvd, Suite 400</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Autism+Therapy+Center"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-extrabold text-[11px] shrink-0 ml-2"
                  >
                    Directions ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Comprehensive Clinical Intake Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-slate-200/90 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/50 rounded-full blur-2xl pointer-events-none" />

              {submitted ? (
                /* Animated Success Ticket Screen */
                <div className="text-center py-8 px-4 space-y-6 animate-fadeIn select-none">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xl ring-8 ring-emerald-50 animate-bounce">
                      <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
                    </div>
                    <Sparkles className="w-6 h-6 text-amber-400 absolute -top-1 -right-1 animate-pulse" />
                  </div>

                  <div className="space-y-2">
                    <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                      Request Received Successfully
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                      Thank You, {formData.parentFirstName}!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto font-medium">
                      Please complete the following information and our staff will contact you in 2 business days.
                    </p>
                  </div>

                  {/* Summary Ticket Card */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left max-w-md mx-auto space-y-3 shadow-2xs">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2 text-xs">
                      <span className="font-extrabold text-slate-600 uppercase tracking-wider flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5 text-blue-600" />
                        Inquiry Reference
                      </span>
                      <span className="font-black text-blue-600 font-mono bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/60">
                        #{ticketId}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-slate-600 block text-[11px]">Parent Name</span>
                        <span className="font-bold text-slate-900 truncate block">{formData.parentFirstName} {formData.parentLastName}</span>
                      </div>
                      <div>
                        <span className="text-slate-600 block text-[11px]">Child's Name</span>
                        <span className="font-bold text-slate-900 truncate block">{formData.childFirstName || "N/A"}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-slate-200/60">
                      <div>
                        <span className="text-slate-600 block text-[11px]">Phone Number</span>
                        <span className="font-bold text-slate-900 truncate block">{formData.phone}</span>
                      </div>
                      <div>
                        <span className="text-slate-600 block text-[11px]">Postal Code</span>
                        <span className="font-bold text-slate-900 truncate block">{formData.postalCode || "N/A"}</span>
                      </div>
                    </div>

                    {formData.service && (
                      <div className="pt-1 text-xs border-t border-slate-200/60">
                        <span className="text-slate-600 block text-[11px]">Service Requested</span>
                        <span className="font-extrabold text-blue-700 block">{formData.service}</span>
                      </div>
                    )}

                    {formData.message && (
                      <div className="pt-1 text-xs border-t border-slate-200/60">
                        <span className="text-slate-600 block text-[11px]">Additional Message</span>
                        <span className="font-semibold text-slate-800 block italic">"{formData.message}"</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-2 flex justify-center">
                    <button
                      onClick={handleResetForm}
                      type="button"
                      className="px-7 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md transition-all flex items-center gap-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Submit Another Consultation Request</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Clinical Intake Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                      Book a Free Consultation
                    </h3>
                    <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                      Please complete the following information and our staff will contact you in 2 business days.
                    </p>
                  </div>

                  {/* 1. Parent Name (First Name + Last Name) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="relative pt-2">
                      <input
                        type="text"
                        id="parentFirstName"
                        required
                        placeholder=" "
                        value={formData.parentFirstName}
                        onChange={(e) => setFormData({ ...formData, parentFirstName: e.target.value })}
                        className="peer w-full px-4 py-3.5 rounded-2xl border border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15 bg-white text-sm font-bold text-slate-800 outline-none transition-all placeholder-transparent"
                      />
                      <label
                        htmlFor="parentFirstName"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xs font-semibold transition-all duration-200 pointer-events-none peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-extrabold peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1.5 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-extrabold peer-[:not(:placeholder-shown)]:text-blue-700 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1.5"
                      >
                        Your First Name <span className="text-red-500">*</span>
                      </label>
                    </div>

                    <div className="relative pt-2">
                      <input
                        type="text"
                        id="parentLastName"
                        placeholder=" "
                        value={formData.parentLastName}
                        onChange={(e) => setFormData({ ...formData, parentLastName: e.target.value })}
                        className="peer w-full px-4 py-3.5 rounded-2xl border border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15 bg-white text-sm font-bold text-slate-800 outline-none transition-all placeholder-transparent"
                      />
                      <label
                        htmlFor="parentLastName"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xs font-semibold transition-all duration-200 pointer-events-none peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-extrabold peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1.5 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-extrabold peer-[:not(:placeholder-shown)]:text-blue-700 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1.5"
                      >
                        Your Last Name
                      </label>
                    </div>
                  </div>

                  {/* 2. Child's Name (First Name + Last Name) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="relative pt-2">
                      <input
                        type="text"
                        id="childFirstName"
                        placeholder=" "
                        value={formData.childFirstName}
                        onChange={(e) => setFormData({ ...formData, childFirstName: e.target.value })}
                        className="peer w-full px-4 py-3.5 rounded-2xl border border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15 bg-white text-sm font-bold text-slate-800 outline-none transition-all placeholder-transparent"
                      />
                      <label
                        htmlFor="childFirstName"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xs font-semibold transition-all duration-200 pointer-events-none peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-extrabold peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1.5 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-extrabold peer-[:not(:placeholder-shown)]:text-blue-700 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1.5"
                      >
                        Child's First Name
                      </label>
                    </div>

                    <div className="relative pt-2">
                      <input
                        type="text"
                        id="childLastName"
                        placeholder=" "
                        value={formData.childLastName}
                        onChange={(e) => setFormData({ ...formData, childLastName: e.target.value })}
                        className="peer w-full px-4 py-3.5 rounded-2xl border border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15 bg-white text-sm font-bold text-slate-800 outline-none transition-all placeholder-transparent"
                      />
                      <label
                        htmlFor="childLastName"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xs font-semibold transition-all duration-200 pointer-events-none peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-extrabold peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1.5 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-extrabold peer-[:not(:placeholder-shown)]:text-blue-700 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1.5"
                      >
                        Child's Last Name
                      </label>
                    </div>
                  </div>

                  {/* 3. Child Age & Postal Code */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="relative pt-2">
                      <input
                        type="text"
                        id="childAge"
                        placeholder=" "
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                        className="peer w-full px-4 py-3.5 rounded-2xl border border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15 bg-white text-sm font-bold text-slate-800 outline-none transition-all placeholder-transparent"
                      />
                      <label
                        htmlFor="childAge"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xs font-semibold transition-all duration-200 pointer-events-none peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-extrabold peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1.5 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-extrabold peer-[:not(:placeholder-shown)]:text-blue-700 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1.5"
                      >
                        Child's Age (e.g. 4 Years)
                      </label>
                    </div>

                    <div className="relative pt-2">
                      <input
                        type="text"
                        id="postalCode"
                        placeholder=" "
                        value={formData.postalCode}
                        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                        className="peer w-full px-4 py-3.5 rounded-2xl border border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15 bg-white text-sm font-bold text-slate-800 outline-none transition-all placeholder-transparent"
                      />
                      <label
                        htmlFor="postalCode"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xs font-semibold transition-all duration-200 pointer-events-none peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-extrabold peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1.5 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-extrabold peer-[:not(:placeholder-shown)]:text-blue-700 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1.5"
                      >
                        Postal Code / Zip Code
                      </label>
                    </div>
                  </div>

                  {/* 4. Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="relative pt-2">
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder=" "
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="peer w-full px-4 py-3.5 rounded-2xl border border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15 bg-white text-sm font-bold text-slate-800 outline-none transition-all placeholder-transparent"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xs font-semibold transition-all duration-200 pointer-events-none peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-extrabold peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1.5 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-extrabold peer-[:not(:placeholder-shown)]:text-blue-700 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1.5"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                    </div>

                    <div className="relative pt-2">
                      <input
                        type="tel"
                        id="phone"
                        required
                        placeholder=" "
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="peer w-full px-4 py-3.5 rounded-2xl border border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15 bg-white text-sm font-bold text-slate-800 outline-none transition-all placeholder-transparent"
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xs font-semibold transition-all duration-200 pointer-events-none peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-extrabold peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1.5 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-extrabold peer-[:not(:placeholder-shown)]:text-blue-700 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1.5"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                    </div>
                  </div>

                  {/* 5. Service Interested In (Dropdown) */}
                  <div className="relative pt-2">
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onFocus={() => setIsServiceFocused(true)}
                      onBlur={() => setIsServiceFocused(false)}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-2xl border transition-all outline-none bg-white text-sm font-bold cursor-pointer ${
                        isServiceFocused || formData.service !== ""
                          ? "text-slate-800 border-blue-600 ring-4 ring-blue-600/15"
                          : "text-transparent border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15"
                      }`}
                    >
                      <option value="" disabled hidden></option>
                      <option value="IBI Therapy (ABA)">IBI Therapy (Applied Behavior Analysis)</option>
                      <option value="Social Programs">Social Programs & Peer Groups</option>
                      <option value="Occupational Therapy">Occupational Therapy & Sensory Care</option>
                      <option value="Speech Therapy">Speech & Language Therapy</option>
                      <option value="Private School">Private School / Transition Prep</option>
                      <option value="Respite Care">Respite Care</option>
                      <option value="Vocational Training">Vocational Training Program</option>
                      <option value="Focused ABA">Focused ABA (Sleeping, Eating, Behaviour, Tutoring)</option>
                      <option value="Other Service">Other Service</option>
                    </select>
                    <label
                      htmlFor="service"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        isServiceFocused || formData.service !== ""
                          ? "top-0 translate-y-0 text-[11px] font-extrabold text-blue-600 bg-white px-1.5"
                          : "top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500"
                      }`}
                    >
                      Service you are interested in <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* 6. How Did You Hear About Us? (Dropdown) */}
                  <div className="relative pt-2">
                    <select
                      id="referralSource"
                      value={formData.referralSource}
                      onFocus={() => setIsReferralFocused(true)}
                      onBlur={() => setIsReferralFocused(false)}
                      onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-2xl border transition-all outline-none bg-white text-sm font-bold cursor-pointer ${
                        isReferralFocused || formData.referralSource !== ""
                          ? "text-slate-800 border-blue-600 ring-4 ring-blue-600/15"
                          : "text-transparent border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15"
                      }`}
                    >
                      <option value="" disabled hidden></option>
                      <option value="Search Engine">Search Engine (Google / Bing)</option>
                      <option value="Referred by friends & family">Referred by friends & family</option>
                      <option value="Ministry Website">Ministry / OAP Website</option>
                      <option value="Other agency">Other agency / Doctor Referral</option>
                      <option value="Social Media">Social Media (Instagram / Facebook)</option>
                      <option value="Other">Other</option>
                    </select>
                    <label
                      htmlFor="referralSource"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        isReferralFocused || formData.referralSource !== ""
                          ? "top-0 translate-y-0 text-[11px] font-extrabold text-blue-600 bg-white px-1.5"
                          : "top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500"
                      }`}
                    >
                      How did you hear about Radiant?
                    </label>
                  </div>

                  {/* 7. Additional Notes / Message (Optional) */}
                  <div className="relative pt-2">
                    <textarea
                      id="message"
                      rows={3}
                      placeholder=" "
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="peer w-full px-4 py-3 rounded-2xl border border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15 bg-white text-sm font-bold text-slate-800 outline-none transition-all placeholder-transparent resize-none"
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 top-5 text-slate-500 text-xs font-semibold transition-all duration-200 pointer-events-none peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-extrabold peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1.5 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-extrabold peer-[:not(:placeholder-shown)]:text-blue-700 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1.5"
                    >
                      Additional Message / Details (Optional)
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Processing Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                          <span>Submit Request</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
