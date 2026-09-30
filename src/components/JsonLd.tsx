import React from "react";

export default function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radiant-autism.vercel.app";

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${baseUrl}/#clinic`,
        "name": "Radiant Autism Center",
        "alternateName": "Radiant Autism & Skill Development Center",
        "url": baseUrl,
        "logo": `${baseUrl}/hero_child_therapy.jpg`,
        "image": `${baseUrl}/hero_child_therapy.jpg`,
        "description": "OAP Approved & BCBA Supervised ABA Therapy, Speech Therapy, Occupational Therapy, Behavior Consultation, Psychoeducational Assessments, and Early Intervention Programs.",
        "telephone": "+1-800-555-7890",
        "email": "dhirajhzp62@gmail.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Main Healthcare Boulevard, Suite 400",
          "addressLocality": "Ontario",
          "addressRegion": "ON",
          "addressCountry": "CA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 43.6532,
          "longitude": -79.3832
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "09:00",
            "closes": "15:00"
          }
        ],
        "medicalSpecialty": [
          "Behavioral Therapy",
          "Speech Therapy",
          "Occupational Therapy",
          "Pediatric Rehabilitation"
        ],
        "availableService": [
          {
            "@type": "MedicalProcedure",
            "name": "ABA / IBI Therapy",
            "description": "Evidence-based Applied Behavior Analysis for autism skill development."
          },
          {
            "@type": "MedicalProcedure",
            "name": "Speech & Language Therapy",
            "description": "Strengthening communication, articulation, and oral motor skills."
          },
          {
            "@type": "MedicalProcedure",
            "name": "Occupational Therapy",
            "description": "Sensory integration, fine motor skills, and self-regulation."
          },
          {
            "@type": "MedicalProcedure",
            "name": "Buddy Steps Group Programs",
            "description": "Early intervention social groups and peer play readiness."
          },
          {
            "@type": "MedicalProcedure",
            "name": "Behaviour Consultation",
            "description": "Functional behavior assessments and parent coaching."
          },
          {
            "@type": "MedicalProcedure",
            "name": "Psychoeducational Assessments",
            "description": "Comprehensive cognitive and learning style diagnostic evaluations."
          }
        ],
        "sameAs": [
          "https://facebook.com/radiantautism",
          "https://instagram.com/radiantautism",
          "https://linkedin.com/company/radiantautism"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Radiant Autism Center",
        "description": "Empowering children with autism through BCBA supervised clinical therapy.",
        "publisher": {
          "@id": `${baseUrl}/#clinic`
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
