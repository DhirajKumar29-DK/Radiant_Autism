import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Radiant Autism Center",
    short_name: "Radiant Autism",
    description:
      "OAP Approved & BCBA Supervised ABA Therapy, Speech Therapy, Occupational Therapy, and Early Intervention Programs.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
