import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://radiant-autism.vercel.app");

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Radiant Autism Center | ABA & Skill Therapy",
    template: "%s | Radiant Autism Center",
  },
  description:
    "OAP approved & BCBA supervised Autism Center providing ABA therapy, speech therapy, occupational therapy & early intervention in Ontario.",
  keywords: [
    "Autism Center",
    "ABA Therapy",
    "IBI Therapy",
    "Speech Therapy",
    "Occupational Therapy",
    "OAP Approved Center",
    "BCBA Supervised",
    "Behavior Consultation",
    "Early Intervention Social Groups",
    "Autism Therapy Ontario",
  ],
  authors: [{ name: "Radiant Autism Center", url: siteUrl }],
  creator: "Radiant Autism Center",
  publisher: "Radiant Autism Center",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Radiant Autism Center | ABA & Skill Therapy",
    description:
      "OAP approved & BCBA supervised Autism Center providing ABA therapy, speech therapy, occupational therapy & early intervention in Ontario.",
    siteName: "Radiant Autism Center",
    images: [
      {
        url: "/hero_child_therapy.jpg",
        width: 1200,
        height: 630,
        alt: "Radiant Autism Center Child Therapy Session",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radiant Autism Center | ABA & Skill Therapy",
    description:
      "OAP approved & BCBA supervised Autism Center providing ABA therapy, speech therapy, occupational therapy & early intervention in Ontario.",
    images: ["/hero_child_therapy.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans bg-slate-50 text-slate-900 antialiased selection:bg-sky-500 selection:text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
