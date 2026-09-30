import React from "react";
import type { Metadata } from "next";
import GalleryClient from "@/components/GalleryClient";

export const metadata: Metadata = {
  title: "Facility Photo Gallery | Sensory Gym & Therapy Rooms",
  description:
    "View photos of Radiant Autism Center's sensory gym, 1:1 learning rooms, group activity areas, and clinical therapy spaces.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Facility Photo Gallery | Radiant Autism Center",
    description:
      "Take a visual tour of Radiant Autism Center's sensory gym, 1:1 learning rooms, and activity spaces.",
    images: ["/gallery_sensory_gym.jpg"],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
