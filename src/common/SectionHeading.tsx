"use client";

import React from "react";
import Badge from "@/common/Badge";
import { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  badgeText?: string;
  badgeVariant?: "green" | "blue" | "yellow" | "pink" | "purple";
  badgeIcon?: LucideIcon;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  badgeText,
  badgeVariant = "blue",
  badgeIcon,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignmentClass = align === "center" ? "text-center max-w-3xl mx-auto" : "text-left max-w-3xl";

  return (
    <div className={`${alignmentClass} mb-12 sm:mb-16 space-y-4 ${className}`}>
      {badgeText && (
        <Badge text={badgeText} variant={badgeVariant} icon={badgeIcon} />
      )}
      <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
