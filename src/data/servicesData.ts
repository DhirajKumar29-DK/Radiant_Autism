export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  badgeBg: string;
  iconBg: string;
  bulletColor: string;
  iconName: "Brain" | "MessageCircle" | "Activity" | "Smile" | "Sparkles" | "ShieldCheck";
  image: string;
  heroImage: string;
  shortDescription: string;
  overviewParagraphs: string[];
  ageGroup: string;
  sessionFormat: string;
  duration: string;
  clinicalLead: string;
  features: string[];
  whoNeedsThis: {
    subtitle: string;
    signs: string[];
  };
  keyBenefits: {
    title: string;
    description: string;
  }[];
  clinicalProcess: {
    stepNumber: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  "aba-therapy": {
    id: "aba-therapy",
    title: "ABA (Applied Behavior Analysis) Therapy",
    tagline: "Gold-standard 1:1 evidence-based intervention for autism spectrum & developmental milestones.",
    badge: "BCBA Supervised",
    badgeBg: "bg-blue-600",
    iconBg: "bg-blue-600",
    bulletColor: "text-blue-600",
    iconName: "Brain",
    image: "/hero_child_therapy.jpg",
    heroImage: "/hero_child_therapy.jpg",
    shortDescription:
      "Evidence-based, person-centered ABA therapy tailored to build essential communication, social skills, and positive behavioral patterns while replacing challenging behaviors gently.",
    overviewParagraphs: [
      "Applied Behavior Analysis (ABA) is widely recognized as the gold standard in autism spectrum intervention. At Radiant Autism Center, our ABA therapy is 100% individualized, compassionate, and child-centered. We focus on understanding why behaviors occur and using positive reinforcement to teach meaningful, real-world skills.",
      "Under the direct supervision of Board Certified Behavior Analysts (BCBAs), our registered therapists craft tailored intervention programs that address communication delays, social interaction, self-regulation, and daily self-care skills. Every session is designed to feel engaging, structured, and joyful for your child.",
      "We believe that parents are integral partners in therapy. Along with 1:1 clinical sessions, we provide regular parent training and transparent progress reports using internationally benchmarked assessments like VB-MAPP and ABLLS-R."
    ],
    ageGroup: "18 Months – 14 Years",
    sessionFormat: "1:1 Individualized Clinical Sessions",
    duration: "15 to 30 Hours / Week (Customized per IEP)",
    clinicalLead: "Certified BCBA Supervisors & Registered Behavioral Technicians",
    features: ["1:1 Individualized Plans", "Positive Reinforcement", "Natural Environment Teaching"],
    whoNeedsThis: {
      subtitle: "ABA Therapy is recommended if your child demonstrates:",
      signs: [
        "Difficulty expressing wants and needs through words or gestures",
        "Challenging behaviors such as meltdowns, aggression, or self-injury",
        "Challenges with turn-taking, eye contact, or playing with peers",
        "Need for structure during transitions between daily activities",
        "Delays in mastering self-care routines like toilet training and dressing"
      ]
    },
    keyBenefits: [
      {
        title: "Functional Communication",
        description: "Teaching non-verbal or minimally verbal children to express their wants, feelings, and choices confidently."
      },
      {
        title: "Gentle Behavior Modification",
        description: "Replacing frustration-driven meltdowns with functional coping mechanisms and emotional self-regulation."
      },
      {
        title: "Independence in Daily Skills",
        description: "Building confidence in feeding, handwashing, dressing, and routine follow-through."
      },
      {
        title: "Social Connection & Play",
        description: "Developing interactive play skills, sharing, eye contact, and cooperative engagement with family & peers."
      }
    ],
    clinicalProcess: [
      {
        stepNumber: "01",
        title: "Comprehensive Baseline Assessment",
        description: "BCBA clinicians conduct standardized testing (VB-MAPP / ABLLS-R) and observational evaluations to map your child's strengths and areas for growth."
      },
      {
        stepNumber: "02",
        title: "Individualized Education Plan (IEP)",
        description: "We set measurable short-term and long-term milestones tailored to your family's daily priorities and goals."
      },
      {
        stepNumber: "03",
        title: "1:1 Intensive Therapy Sessions",
        description: "Dedicated Registered Behavior Technicians implement positive reinforcement activities in a safe, play-filled sensory environment."
      },
      {
        stepNumber: "04",
        title: "Parent Training & Milestone Reviews",
        description: "Monthly parent coaching sessions ensure consistent strategy implementation at home, alongside data-backed progress updates."
      }
    ],
    faqs: [
      {
        question: "How many hours of ABA therapy does my child need?",
        answer: "Therapy hours depend on your child's assessment results and goals. Early intensive programs range from 15 to 30 hours per week, while focused programs may require 10 to 15 hours weekly."
      },
      {
        question: "Can parents observe ABA therapy sessions?",
        answer: "Yes! We encourage parental involvement. We have observation windows and dedicated parent coaching sessions so you can learn techniques used by therapists."
      },
      {
        question: "Is ABA therapy play-based at Radiant Autism Center?",
        answer: "Absolutely. We utilize Natural Environment Teaching (NET), blending structured learning into fun play activities so children stay motivated and excited."
      }
    ]
  },

  "speech-therapy": {
    id: "speech-therapy",
    title: "Speech & Language Therapy",
    tagline: "Empowering children to find their voice, articulate words, and connect confidently with the world.",
    badge: "Communication Care",
    badgeBg: "bg-teal-600",
    iconBg: "bg-teal-600",
    bulletColor: "text-teal-600",
    iconName: "MessageCircle",
    image: "/hero_speech_therapy.jpg",
    heroImage: "/hero_speech_therapy.jpg",
    shortDescription:
      "Specialized articulation, language fluency, expressive communication, and feeding therapy for oral-motor coordination and self-feeding confidence.",
    overviewParagraphs: [
      "Communication is the cornerstone of human connection. For children on the autism spectrum or with speech delays, expressing thoughts and feelings can often feel overwhelming. Our Speech & Language Therapy program helps children overcome communication hurdles gently and systematically.",
      "Our licensed Speech-Language Pathologists (SLPs) work one-on-one with children to improve articulation, vocabulary, phrase structure, receptive understanding, and conversational pragmatics. We also utilize Augmentative and Alternative Communication (AAC) devices for non-verbal learners.",
      "In addition to speech development, our SLPs specialize in pediatric feeding therapy—helping children with oral-motor weakness, food selectivity, or swallowing challenges gain confidence during mealtime."
    ],
    ageGroup: "2 Years – 16 Years",
    sessionFormat: "1:1 Specialist Sessions with SLP Clinicians",
    duration: "2 to 4 Sessions / Week (45 Mins per Session)",
    clinicalLead: "Licensed Speech-Language Pathologists (SLP)",
    features: ["Language Delays", "Articulation & AAC", "Oral Motor & Feeding"],
    whoNeedsThis: {
      subtitle: "Speech & Language Therapy is essential if your child has:",
      signs: [
        "Limited vocabulary or delays in combining words into sentences",
        "Difficulty pronouncing speech sounds or unclear speech clarity",
        "Challenges understanding simple instructions or questions",
        "Lack of gestures, pointing, or eye contact when communicating",
        "Pickyness with food textures, choking, or oral-motor weakness"
      ]
    },
    keyBenefits: [
      {
        title: "Speech Articulation & Clarity",
        description: "Correcting speech sound errors so family, teachers, and peers can easily understand your child."
      },
      {
        title: "Expressive & Receptive Vocabulary",
        description: "Expanding single-word use into functional phrases and improving instruction-following skills."
      },
      {
        title: "AAC & Alternative Communication",
        description: "Implementing picture exchange (PECS) or digital AAC speech generation apps for non-verbal children."
      },
      {
        title: "Oral-Motor & Feeding Training",
        description: "Strengthening jaw and tongue muscles to improve chewing, swallowing, and texture tolerance during meals."
      }
    ],
    clinicalProcess: [
      {
        stepNumber: "01",
        title: "Oral-Motor & Speech Evaluation",
        description: "SLP clinicians evaluate speech mechanics, receptive vocabulary, expressiveness, and feeding responses."
      },
      {
        stepNumber: "02",
        title: "Customized Communication Goals",
        description: "We set target sound goals, phrase structures, or AAC system configurations suited to your child's level."
      },
      {
        stepNumber: "03",
        title: "Engaging 1:1 Speech Sessions",
        description: "Interactive games, mirror work, picture cards, and oral exercises make speech practice fun and rewarding."
      },
      {
        stepNumber: "04",
        title: "Home Practice Strategy Guide",
        description: "Parents receive weekly home exercises to encourage speech practice in everyday home routines."
      }
    ],
    faqs: [
      {
        question: "My child is non-verbal. Will speech therapy help?",
        answer: "Yes! Speech therapy is not only for vocal speech. We introduce AAC tools, PECS picture cards, and gestures while working on vocalization readiness."
      },
      {
        question: "How long does it take to see progress in speech therapy?",
        answer: "Every child progresses at their own pace. Most parents notice improvements in eye contact, imitation, and sound attempts within 8 to 12 weeks of consistent therapy."
      }
    ]
  },

  "occupational-therapy": {
    id: "occupational-therapy",
    title: "Occupational & Sensory Integration",
    tagline: "Unlocking physical independence, sensory regulation, and self-care confidence through play.",
    badge: "Motor & Sensory",
    badgeBg: "bg-indigo-600",
    iconBg: "bg-indigo-600",
    bulletColor: "text-indigo-600",
    iconName: "Activity",
    image: "/gallery_sensory_gym.jpg",
    heroImage: "/gallery_sensory_gym.jpg",
    shortDescription:
      "Enhancing fine and gross motor skills, sensory processing, emotional regulation, and independent daily living activities through fun, interactive exercises.",
    overviewParagraphs: [
      "Children explore and understand their environment through their senses and physical movements. When sensory processing is uncoordinated or motor skills are delayed, simple daily tasks like buttoning a shirt or holding a pencil can feel overwhelming.",
      "Radiant's Occupational Therapy & Sensory Integration program takes place in our state-of-the-art sensory gym. Equipped with sensory swings, crash pads, climbing walls, and tactile stations, our licensed OTs help children regulate sensory overload and build physical strength.",
      "We focus on both fine motor dexterity (handwriting, scissor skills, utensil use) and gross motor coordination (balance, body awareness, hopping), giving your child the tools to thrive at home, school, and play."
    ],
    ageGroup: "2 Years – 16 Years",
    sessionFormat: "Sensory Gym & 1:1 Fine Motor Sessions",
    duration: "2 to 3 Sessions / Week (60 Mins per Session)",
    clinicalLead: "Licensed Occupational Therapists & Sensory Specialists",
    features: ["Fine & Gross Motor", "Sensory Gym Training", "Self-Care Routines"],
    whoNeedsThis: {
      subtitle: "Occupational Therapy is recommended if your child struggles with:",
      signs: [
        "Hypersensitivity or hyposensitivity to sounds, lights, or clothing textures",
        "Frequent meltdowns caused by sensory overload or crowded environments",
        "Clumsiness, frequent tripping, or poor balance and body awareness",
        "Difficulty holding pencils, using scissors, or tying shoelaces",
        "Challenges with self-feeding, dressing, or hygiene routines independently"
      ]
    },
    keyBenefits: [
      {
        title: "Sensory Self-Regulation",
        description: "Helping children process sensory inputs calmly so they can focus in school and home environments."
      },
      {
        title: "Fine Motor Mastery",
        description: "Strengthening hand muscles for handwriting, scissor cuts, zipper use, and utensil grip."
      },
      {
        title: "Gross Motor Coordination",
        description: "Building core strength, balance, climbing skills, and spatial body awareness."
      },
      {
        title: "Independent Daily Living (ADLs)",
        description: "Mastering self-care routines like dressing, handwashing, feeding, and grooming with confidence."
      }
    ],
    clinicalProcess: [
      {
        stepNumber: "01",
        title: "Sensory Profile & Motor Assessment",
        description: "OT clinicians evaluate sensory processing tendencies, muscle tone, grip strength, and coordination."
      },
      {
        stepNumber: "02",
        title: "Sensory Diet & IEP Formulation",
        description: "Designing a sensory routine tailored to calm hyperactive responses or stimulate under-responsive senses."
      },
      {
        stepNumber: "03",
        title: "Sensory Gym Therapy",
        description: "Swinging, climbing, heavy work activities, and tactile play in our specialized sensory gym environment."
      },
      {
        stepNumber: "04",
        title: "Environmental Adaptations",
        description: "Recommending sensory tools (weighted blankets, chewies, adaptive seating) for home and classroom use."
      }
    ],
    faqs: [
      {
        question: "What is a Sensory Gym?",
        answer: "A sensory gym is a specialized clinic space equipped with suspended swings, foam pits, trampolines, and balance beams designed to stimulate vestibular, proprioceptive, and tactile senses safely."
      },
      {
        question: "Can OT help with my child's handwriting?",
        answer: "Yes! Pre-writing strokes, pencil grip development, and hand-eye coordination exercises are core components of our OT fine motor program."
      }
    ]
  },

  "pediatric-physiotherapy": {
    id: "pediatric-physiotherapy",
    title: "Pediatric Physiotherapy",
    tagline: "Promoting physical mobility, posture, muscle strength, and joyful movement through play.",
    badge: "Physical Health",
    badgeBg: "bg-emerald-600",
    iconBg: "bg-emerald-600",
    bulletColor: "text-emerald-600",
    iconName: "Smile",
    image: "/service_physio.jpg",
    heroImage: "/service_physio.jpg",
    shortDescription:
      "Building muscle strength, posture, balance, and physical independence through play-infused physical movement therapy.",
    overviewParagraphs: [
      "Physical mobility and gross motor confidence allow children to explore their world freely. Pediatric Physiotherapy focuses on evaluating and enhancing physical movement, muscle tone, flexibility, and gross motor milestones.",
      "At Radiant Autism Center, our physical movement specialists blend targeted exercise routines with fun play activities. Whether a child has low muscle tone (hypotonia), gait abnormalities, or motor planning delays, our sessions make physical therapy an enjoyable adventure.",
      "We work closely with parents to provide safe home movement routines that encourage healthy physical development and active participation in playground activities."
    ],
    ageGroup: "12 Months – 14 Years",
    sessionFormat: "1:1 Play-Infused Movement Sessions",
    duration: "2 Sessions / Week (45 Mins per Session)",
    clinicalLead: "Pediatric Physiotherapy Specialists",
    features: ["Posture & Gait Support", "Balance & Coordination", "Movement Through Play"],
    whoNeedsThis: {
      subtitle: "Pediatric Physiotherapy is ideal if your child exhibits:",
      signs: [
        "Delayed gross motor milestones (crawling, walking, jumping, running)",
        "Low muscle tone (appearing floppy) or joint tightness",
        "Toe-walking or irregular walking gait patterns",
        "Frequent falls, poor balance, or difficulty negotiating stairs",
        "Fatigue during physical play or reluctance to participate in sports"
      ]
    },
    keyBenefits: [
      {
        title: "Gait & Posture Correction",
        description: "Developing proper walking alignment, foot positioning, and spinal posture alignment."
      },
      {
        title: "Muscle Strength & Flexibility",
        description: "Targeted core and leg exercises to overcome low muscle tone and joint stiffness."
      },
      {
        title: "Balance & Agility",
        description: "Enhancing dynamic balance, hopping, kicking, and playground physical skills."
      },
      {
        title: "Confidence in Physical Play",
        description: "Empowering your child to keep up with peers during sports and playground activities."
      }
    ],
    clinicalProcess: [
      {
        stepNumber: "01",
        title: "Gross Motor Milestone Evaluation",
        description: "Assessing muscle strength, joint flexibility, walking gait, and balance dynamics."
      },
      {
        stepNumber: "02",
        title: "Play-Based Exercise Plan",
        description: "Creating custom movement obstacles, ball play routines, and balance track exercises."
      },
      {
        stepNumber: "03",
        title: "Guided Movement Therapy",
        description: "1:1 physical exercise sessions utilizing balance boards, ramps, and therapy balls."
      },
      {
        stepNumber: "04",
        title: "Home Movement Guide",
        description: "Simple home stretching and active games to maintain physical momentum."
      }
    ],
    faqs: [
      {
        question: "Is physical therapy painful for young children?",
        answer: "Not at all! Our pediatric physical therapy is entirely play-infused. Exercises are designed as fun obstacle courses, ball games, and playful challenges."
      },
      {
        question: "Can physiotherapy help with toe-walking?",
        answer: "Yes, toe-walking is a common area we address through calf stretching, heel-strike gait retraining, and ankle strengthening exercises."
      }
    ]
  },

  "buddy-steps": {
    id: "buddy-steps",
    title: "Buddy Steps Early Intervention & Group Play",
    tagline: "Bridging individual therapy and classroom readiness through guided peer socialization.",
    badge: "Group Service",
    badgeBg: "bg-rose-600",
    iconBg: "bg-rose-600",
    bulletColor: "text-rose-600",
    iconName: "Sparkles",
    image: "/gallery_group_play.jpg",
    heroImage: "/gallery_group_play.jpg",
    shortDescription:
      "Small-group socialization service for toddlers and young children to develop peer interaction, classroom bridge readiness, and cooperative play.",
    overviewParagraphs: [
      "Transitioning from 1:1 individual therapy to a busy school classroom can be a big leap for young children. Our 'Buddy Steps' program acts as a nurturing bridge, teaching children how to interact with peers in a small, structured group setting.",
      "With a high therapist-to-child ratio (1:3), children participate in simulated classroom routines—including circle time, story reading, group art projects, turn-taking games, and shared snack times.",
      "Buddy Steps fosters essential social-emotional skills like sharing toys, managing waiting turns, making eye contact, and expressing needs appropriately in a group setting."
    ],
    ageGroup: "2.5 Years – 6 Years",
    sessionFormat: "Small Peer Groups (1:3 Therapist Ratio)",
    duration: "3 Half-Day Sessions / Week (2.5 Hours per Session)",
    clinicalLead: "Early Childhood Interventionists & Behavior Therapists",
    features: ["Classroom Bridge", "Social Peer Groups", "Early Communication"],
    whoNeedsThis: {
      subtitle: "Buddy Steps is perfect if your child needs help with:",
      signs: [
        "Preparing to enter playschool, kindergarten, or mainstream school",
        "Sharing toys, taking turns, or playing alongside other children",
        "Following group instructions given by a teacher or session leader",
        "Staying seated during circle time or storytime activities",
        "Managing social frustration when a peer plays with a desired item"
      ]
    },
    keyBenefits: [
      {
        title: "Classroom Routine Readiness",
        description: "Simulating school routines (circle time, line-up, snack time) to remove fear of school entry."
      },
      {
        title: "Peer Socialization & Sharing",
        description: "Teaching cooperative play, sharing toys, and making first peer friendships."
      },
      {
        title: "Group Instruction Following",
        description: "Helping children follow multi-step instructions spoken to the group as a whole."
      },
      {
        title: "Emotional Regulation in Groups",
        description: "Guiding children through waiting turns and resolving minor peer conflicts calmly."
      }
    ],
    clinicalProcess: [
      {
        stepNumber: "01",
        title: "Group Readiness Screening",
        description: "Ensuring your child has basic 1:1 regulation skills to benefit from a 1:3 group setting."
      },
      {
        stepNumber: "02",
        title: "Structured Small Group Placement",
        description: "Pairing children with peers of similar age and communication levels for optimal synergy."
      },
      {
        stepNumber: "03",
        title: "Interactive Group Sessions",
        description: "Engaging in morning circles, sensory crafts, music movement, and snack time routines."
      },
      {
        stepNumber: "04",
        title: "School Transition Progress Reports",
        description: "Providing detailed feedback to parents and future teachers regarding group readiness."
      }
    ],
    faqs: [
      {
        question: "What is the group size in Buddy Steps?",
        answer: "We keep group sizes small—typically 4 to 6 children—with 2 dedicated therapists present at all times to give personalized guidance."
      },
      {
        question: "Can my child do Buddy Steps along with 1:1 ABA therapy?",
        answer: "Yes! Combining 1:1 ABA or Speech therapy with Buddy Steps group sessions is highly recommended for holistic development."
      }
    ]
  },

  "behavioral-assessments": {
    id: "behavioral-assessments",
    title: "Comprehensive Assessments & Clinical Diagnosis",
    tagline: "Standardized developmental evaluations providing absolute clarity and personalized roadmaps.",
    badge: "Clinical Diagnostic",
    badgeBg: "bg-purple-600",
    iconBg: "bg-purple-600",
    bulletColor: "text-purple-600",
    iconName: "ShieldCheck",
    image: "/about_center_photo.jpg",
    heroImage: "/about_center_photo.jpg",
    shortDescription:
      "Standardized developmental milestones evaluation (VB-MAPP, ABLLS-R, Vineland) conducted by certified BCBA clinicians to benchmark progress.",
    overviewParagraphs: [
      "Every successful developmental intervention begins with a precise, science-backed baseline assessment. Without a clear diagnostic picture, therapy can miss vital developmental milestones.",
      "Radiant Autism Center offers comprehensive developmental and behavioral assessments conducted by certified BCBA analysts and developmental clinicians. We utilize world-renowned assessment tools including VB-MAPP, ABLLS-R, and Vineland-3 Adaptive Behavior Scales.",
      "Following testing, parents receive a clear, actionable report detailing their child's current developmental age, specific strengths, areas requiring intervention, and an individualized roadmap for therapy."
    ],
    ageGroup: "All Ages (Toddlers to Teens)",
    sessionFormat: "Comprehensive Diagnostic Evaluation",
    duration: "2 to 3 Evaluation Sessions + Parent Feedback",
    clinicalLead: "Senior BCBA Analysts & Clinical Assessment Team",
    features: ["VB-MAPP & ABLLS-R", "Individualized Goals", "Progress Reports"],
    whoNeedsThis: {
      subtitle: "A Comprehensive Assessment is recommended if you:",
      signs: [
        "Suspect developmental delays, autism spectrum, or communication gaps",
        "Need a formal clinical evaluation report for school accommodations or therapy funding",
        "Want to benchmark your child's current developmental age across all domains",
        "Desire a clear, structured IEP roadmap tailored to your child's specific needs",
        "Are seeking a second opinion or progress re-evaluation after previous therapy"
      ]
    },
    keyBenefits: [
      {
        title: "Standardized Milestones Testing",
        description: "Evaluations using international gold-standard tools (VB-MAPP, ABLLS-R, Vineland-3)."
      },
      {
        title: "Detailed Clinical Report",
        description: "A comprehensive 15-20 page report outlining baseline levels, strengths, and goals."
      },
      {
        title: "OAP & Funding Support",
        description: "Official documentation assistance for Ontario Autism Program (OAP) funding and insurance."
      },
      {
        title: "Actionable IEP Goals",
        description: "Clear 6-month and 12-month goals prioritized for your child's immediate success."
      }
    ],
    clinicalProcess: [
      {
        stepNumber: "01",
        title: "Initial Parent Intake & History Review",
        description: "Detailed interview discussing your child's medical history, birth milestones, and family goals."
      },
      {
        stepNumber: "02",
        title: "Direct Observation & Diagnostic Testing",
        description: "BCBA clinicians conduct structured play sessions to score developmental skills."
      },
      {
        stepNumber: "03",
        title: "Comprehensive Report Formulation",
        description: "Compiling test scores into a transparent diagnostic profile with clear recommendations."
      },
      {
        stepNumber: "04",
        title: "Parent Consultation & Roadmap Presentation",
        description: "A 1-on-1 meeting to explain every finding and map out the next steps for therapy."
      }
    ],
    faqs: [
      {
        question: "How long does a diagnostic assessment take?",
        answer: "The evaluation typically spans 2 to 3 sessions of 60-90 minutes each, followed by a detailed report review meeting with parents."
      },
      {
        question: "Will this assessment help with school IEP placement?",
        answer: "Yes, our diagnostic assessment reports are recognized by schools, clinical boards, and funding bodies to formulate school IEP accommodations."
      }
    ]
  }
};
