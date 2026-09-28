"use client";

import React from "react";
import { Sparkles, LucideIcon } from "lucide-react";

interface BadgeProps {
  text: string;
  variant?: "green" | "blue" | "yellow" | "pink" | "purple";
  icon?: LucideIcon;
  className?: string;
}

export default function Badge({
  text,
  variant = "blue",
  icon: Icon = Sparkles,
  className = "",
}: BadgeProps) {
  const variantClasses = {
    green: "badge-green",
    blue: "badge-blue",
    yellow: "badge-yellow",
    pink: "badge-pink",
    purple: "badge-purple",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${variantClasses[variant]} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span>{text}</span>
    </div>
  );
}
