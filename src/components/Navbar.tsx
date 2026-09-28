"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeartHandshake, Menu, X, PhoneCall, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  // Exactly 5 pages as requested by user
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-50/95 backdrop-blur-md border-b-2 border-slate-200/90 shadow-sm relative overflow-hidden">
      {/* Contact Section Style Soft Light Ambient Glows & Dot Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-12 left-1/4 w-72 h-72 bg-sky-200/35 rounded-full blur-2xl" />
        <div className="absolute -bottom-12 right-1/4 w-72 h-72 bg-indigo-100/40 rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-600/25 group-hover:scale-105 transition-transform duration-300">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight bg-gradient-to-r from-blue-900 via-sky-700 to-indigo-800 bg-clip-text text-transparent">
                RADIANT
              </span>
              <span className="block text-[10px] font-black tracking-widest text-slate-500 uppercase">
                Autism & Skill Center
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all duration-200 ${
                    isActive
                      ? "bg-white text-blue-700 shadow-sm border border-slate-200/90"
                      : "text-slate-700 hover:text-blue-600 hover:bg-white/80"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Get Support</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:text-blue-600 hover:bg-slate-200 focus:outline-none transition-colors border border-slate-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive
                    ? "bg-sky-50 text-sky-700 font-bold border border-sky-200/60"
                    : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            );
          })}
          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-bold text-center shadow-md shadow-blue-600/20"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Get Support</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
