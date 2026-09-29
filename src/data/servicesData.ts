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
    title: "ABA / IBI Therapy",
    tagline: "Evidence-based Applied Behavior Analysis for autism & developmental goals.",
    badge: "OAP Covered",
    badgeBg: "bg-blue-600",
    iconBg: "bg-blue-600",
    bulletColor: "text-blue-600",
    iconName: "Brain",
    image: "/hero_child_therapy.jpg",
    heroImage: "/hero_child_therapy.jpg",
    shortDescription:
      "Applied Behaviour Analysis (ABA) autism therapy using research-based methods to target verbal skills, self-help, play, social skills, and socially significant goals for ages 2 to 20.",
    overviewParagraphs: [
      "Applied Behaviour Analysis (ABA) is a scientific approach to understanding and improving behaviour using data and research-based methods. At Radiant Autism Center, our ABA therapy targets each child's socially significant goals, such as verbal skills, academics, self-help, play skills, social skills, and life skills.",
      "We utilize the principles of reinforcement, using play and motivation to increase desired behaviours safely and ethically. All ABA services are supervised by our Registered Behaviour Analyst, Jesenia Duran, ensuring the happiness, trust, and success of each individual.",
      "We work with neurodivergent individuals (autism, ADHD, ADD, ID) as young as 2 years old and up to 20 years old. This program is fully covered under Ontario Autism Program (OAP) funding."
    ],
    ageGroup: "2 to 20 Years",
    sessionFormat: "1:1 & Small Group Individualized Clinical Sessions",
    duration: "Customized per Individualized Care Plan",
    clinicalLead: "Jesenia Duran (Registered Behaviour Analyst & BCBA Supervision)",
    features: ["Ages 2 to 20 Years", "Registered Behaviour Analyst", "Target Verbal & Life Skills"],
    whoNeedsThis: {
      subtitle: "ABA/IBI Therapy is recommended if your child demonstrates:",
      signs: [
        "Delays in speech, verbal communication, or expressing wants/needs",
        "Difficulty with self-help skills like dressing, feeding, and toilet training",
        "Challenging behaviors at home or school needing structured reinforcement",
        "Challenges in turn-taking, interactive play, or social interaction",
        "Need for data-driven, individualized skill acquisition goals"
      ]
    },
    keyBenefits: [
      {
        title: "Verbal & Communication Growth",
        description: "Building functional language, speech, and alternative communication tools."
      },
      {
        title: "Positive Behavior Reinforcement",
        description: "Using motivation and play to build constructive, positive behavioral habits."
      },
      {
        title: "Self-Help & Academic Skills",
        description: "Empowering children with daily self-care, focus, and classroom readiness."
      },
      {
        title: "OAP Funding Approved",
        description: "100% eligible for Ontario Autism Program (OAP) funding support."
      }
    ],
    clinicalProcess: [
      {
        stepNumber: "01",
        title: "Initial Intake & Assessment",
        description: "Evaluating current skill levels, motivation factors, and communication baseline."
      },
      {
        stepNumber: "02",
        title: "Individualized Goal Setting",
        description: "Formulating targeted, socially significant goals across play, verbal, and life skills."
      },
      {
        stepNumber: "03",
        title: "Active Clinical Sessions",
        description: "Engaging 1:1 sessions utilizing natural environment teaching and play-based reinforcement."
      },
      {
        stepNumber: "04",
        title: "Progress Tracking & Parent Review",
        description: "Continuous data collection and regular BCBA supervisory parent progress meetings."
      }
    ],
    faqs: [
      {
        question: "What age group is eligible for ABA/IBI therapy?",
        answer: "We support neurodivergent individuals (Autism, ADHD, ADD, ID) from 2 years old up to 20 years old."
      },
      {
        question: "Is ABA Therapy covered by OAP funding?",
        answer: "Yes, all our ABA/IBI therapy services are covered under Ontario Autism Program (OAP) funding."
      }
    ]
  },

  "group-programs": {
    id: "group-programs",
    title: "Group Programs",
    tagline: "Peer socialization, emotional regulation, and group learning for ages 4 to 24.",
    badge: "Social & Emotional",
    badgeBg: "bg-purple-600",
    iconBg: "bg-purple-600",
    bulletColor: "text-purple-600",
    iconName: "Sparkles",
    image: "/gallery_group_play.jpg",
    heroImage: "/gallery_group_play.jpg",
    shortDescription:
      "Structured group sessions (RoboSocials, PEERS®, Emotional ABCs®, Mood Masters, Study Buddies) for ages 4-24 to build social skills, emotional regulation, and lasting peer relationships.",
    overviewParagraphs: [
      "Our group programs offer children, teens, and young adults ages 4-24 with autism and related disorders an opportunity to develop meaningful social and emotional skills in a supportive, engaging environment.",
      "Through evidence-based therapeutic practices, we help participants improve emotional regulation, use coping strategies, and build lasting friendships. Our structured sessions incorporate role-play, guided discussions, and real-world practice to enhance communication, problem-solving, and conflict resolution.",
      "Group offerings include RoboSocials (7-17), PEERS® for Teens (12-17), PEERS® for Young Adults (18-24), Emotional ABCs® for Preteens (8-11), Mood Masters for Teens (12-17), Summer Group Camp (4-12), and Study Buddies (7-12). All covered with OAP funding."
    ],
    ageGroup: "4 to 24 Years",
    sessionFormat: "Small Peer Groups & Guided Workshops",
    duration: "Weekly Group Modules & Seasonal Camps",
    clinicalLead: "Certified Group Facilitators & BCBA Supervisory Team",
    features: ["Ages 4 to 24 Years", "PEERS® & Emotional ABCs®", "Social Skills & Peer Groups"],
    whoNeedsThis: {
      subtitle: "Group Programs are ideal if your child or teen:",
      signs: [
        "Struggles to make or maintain age-appropriate peer friendships",
        "Experiences difficulty regulating emotions during stress or conflict",
        "Needs structured practice with conversational turn-taking and social cues",
        "Wants to participate in evidence-based peer groups like PEERS® or RoboSocials",
        "Benefits from guided group study and cooperative learning environments"
      ]
    },
    keyBenefits: [
      {
        title: "Peer Connection & Friendships",
        description: "Building authentic, lasting relationships in a safe and supportive group setting."
      },
      {
        title: "Evidence-Based Curricula",
        description: "Utilizing proven frameworks like PEERS®, Emotional ABCs®, and Mood Masters."
      },
      {
        title: "Conflict & Emotion Regulation",
        description: "Learning real-world coping mechanisms for managing frustration and social stress."
      },
      {
        title: "OAP Funding Approved",
        description: "Fully eligible for Ontario Autism Program (OAP) funding support."
      }
    ],
    clinicalProcess: [
      {
        stepNumber: "01",
        title: "Group Matching Screening",
        description: "Assessing developmental stage and interests to place your child in the ideal peer group."
      },
      {
        stepNumber: "02",
        title: "Structured Session Modules",
        description: "Participating in guided role-play, social discussions, and interactive group challenges."
      },
      {
        stepNumber: "03",
        title: "Real-World Homework Practice",
        description: "Encouraging participants to apply social strategies at school, home, and community."
      },
      {
        stepNumber: "04",
        title: "Outcome Review & Graduation",
        description: "Evaluating social milestone achievements and recommending ongoing peer groups."
      }
    ],
    faqs: [
      {
        question: "What group programs do you offer?",
        answer: "We offer RoboSocials (7-17), PEERS® for Teens (12-17), PEERS® for Young Adults (18-24), Emotional ABCs® (8-11), Mood Masters (12-17), Summer Group Camp (4-12), and Study Buddies (7-12)."
      },
      {
        question: "Are group programs covered by OAP funding?",
        answer: "Yes, all our group programs are covered under OAP funding."
      }
    ]
  },

  "speech-therapy": {
    id: "speech-therapy",
    title: "Speech Therapy",
    tagline: "Fun, effective speech & language therapy combining SLP expertise with ABA practices.",
    badge: "Communication Care",
    badgeBg: "bg-teal-600",
    iconBg: "bg-teal-600",
    bulletColor: "text-teal-600",
    iconName: "MessageCircle",
    image: "/hero_speech_therapy.jpg",
    heroImage: "/hero_speech_therapy.jpg",
    shortDescription:
      "Trusted standardized assessments and individualized treatment combining Speech-Language Pathology (SLP) and ABA practices to make communication fun and effective.",
    overviewParagraphs: [
      "Our Registered Speech and Language Pathologist (SLP), April Adebayo, provides trusted standardized assessments and individualized treatment in combination with ABA practices to target each child's communication goals.",
      "At Radiant Autism Center, our speech services are all about making communication fun and effective. Using evidence-based methods and standardized assessments, we create engaging activities that help children improve their speech, articulation, fluency, and expressive language.",
      "By combining SLP practices with ABA methods, our goal is to build confidence and communication abilities in a supportive environment. Every child's progress is closely monitored. (Covered with OAP funding)."
    ],
    ageGroup: "Toddler to Youth",
    sessionFormat: "1:1 Clinical Speech & AAC Therapy",
    duration: "45 to 60 Min Sessions",
    clinicalLead: "April Adebayo (Registered Speech & Language Pathologist - SLP)",
    features: ["Registered SLP Lead", "Language & Articulation", "Combined SLP + ABA Methods"],
    whoNeedsThis: {
      subtitle: "Speech Therapy is recommended if your child demonstrates:",
      signs: [
        "Speech delays or difficulty pronouncing words clearly (articulation)",
        "Challenges understanding language instructions or expressing thoughts",
        "Need for Alternative and Augmentative Communication (AAC) device training",
        "Stuttering, fluency challenges, or oral-motor coordination difficulties",
        "Social pragmatics and conversational communication barriers"
      ]
    },
    keyBenefits: [
      {
        title: "Clear Articulation & Speech",
        description: "Enhancing pronunciation, sound clarity, and verbal confidence."
      },
      {
        title: "Expressive & Receptive Language",
        description: "Expanding vocabulary, sentence building, and comprehension skills."
      },
      {
        title: "Combined SLP + ABA Synergy",
        description: "Leveraging behavioral reinforcement to accelerate communication milestones."
      },
      {
        title: "OAP Funding Approved",
        description: "Covered under Ontario Autism Program (OAP) funding."
      }
    ],
    clinicalProcess: [
      {
        stepNumber: "01",
        title: "Standardized SLP Assessment",
        description: "Conducting clinical evaluation to identify specific speech, language, or articulation needs."
      },
      {
        stepNumber: "02",
        title: "Customized Therapy Plan",
        description: "Designing play-infused speech exercises tailored to your child's communication level."
      },
      {
        stepNumber: "03",
        title: "Interactive Therapy Sessions",
        description: "Engaging in 1:1 sessions using toys, games, and speech tools for natural learning."
      },
      {
        stepNumber: "04",
        title: "Home Carryover Guidance",
        description: "Providing parents with practical speech exercises to practice at home every day."
      }
    ],
    faqs: [
      {
        question: "Who leads the Speech Therapy sessions?",
        answer: "Sessions are led by our Registered Speech and Language Pathologist (SLP), April Adebayo."
      },
      {
        question: "Is Speech Therapy covered by OAP funding?",
        answer: "Yes, our Speech Therapy services are fully covered under OAP funding."
      }
    ]
  },

  "occupational-therapy": {
    id: "occupational-therapy",
    title: "Occupational Therapy",
    tagline: "Building fine motor, gross motor, sensory regulation, and daily living skills.",
    badge: "Motor & Sensory",
    badgeBg: "bg-indigo-600",
    iconBg: "bg-indigo-600",
    bulletColor: "text-indigo-600",
    iconName: "Activity",
    image: "/gallery_sensory_gym.jpg",
    heroImage: "/gallery_sensory_gym.jpg",
    shortDescription:
      "Tailored occupational therapy focusing on fine & gross motor skills, sensory regulation, core strength, handwriting, and building essential daily living independence.",
    overviewParagraphs: [
      "After a comprehensive assessment, our Registered Occupational Therapist, Saghar Baqizada, tailors services to help your child build essential life skills.",
      "We focus on developing fine motor and gross motor skills, enhancing sensory regulation, strengthening core muscles, and fostering independence in daily activities. Through play-based and evidence-based strategies, we create a supportive environment where your child can thrive.",
      "Whether it's improving handwriting, coordination, or self-care routines, we are here to support every step of their journey. Our goal is to empower children with the tools they need to navigate their world with confidence. (Covered with OAP funding)."
    ],
    ageGroup: "Children & Youth",
    sessionFormat: "1:1 Sensory Gym & OT Clinical Sessions",
    duration: "45 to 60 Min Sessions",
    clinicalLead: "Saghar Baqizada (Registered Occupational Therapist)",
    features: ["Registered OT Lead", "Sensory Regulation", "Fine & Gross Motor Skills"],
    whoNeedsThis: {
      subtitle: "Occupational Therapy is recommended if your child demonstrates:",
      signs: [
        "Sensory processing sensitivities (overwhelmed by noise, textures, lights)",
        "Difficulty with fine motor skills like holding a pencil, cutting, or buttoning",
        "Gross motor challenges with balance, jumping, catching, or core strength",
        "Trouble staying calm and self-regulating during emotional meltdowns",
        "Delays in mastering independent self-care routines (eating, dressing)"
      ]
    },
    keyBenefits: [
      {
        title: "Sensory Gym Training",
        description: "Utilizing specialized equipment to help children process sensory inputs comfortably."
      },
      {
        title: "Fine & Gross Motor Mastery",
        description: "Building hand strength, writing precision, balance, and physical coordination."
      },
      {
        title: "Independent Daily Routines",
        description: "Fostering confidence in self-dressing, hygiene, and daily task management."
      },
      {
        title: "OAP Funding Approved",
        description: "Covered under Ontario Autism Program (OAP) funding."
      }
    ],
    clinicalProcess: [
      {
        stepNumber: "01",
        title: "Comprehensive OT Assessment",
        description: "Evaluating motor coordination, sensory processing profile, and daily living skills."
      },
      {
        stepNumber: "02",
        title: "Sensory & Motor Roadmap",
        description: "Crafting an individualized plan incorporating sensory integration and motor goals."
      },
      {
        stepNumber: "03",
        title: "Sensory Gym & Play Sessions",
        description: "Executing fun, movement-filled sessions in our state-of-the-art indoor sensory gym."
      },
      {
        stepNumber: "04",
        title: "Home & School Integration",
        description: "Equipping parents and teachers with sensory strategies for home and classroom success."
      }
    ],
    faqs: [
      {
        question: "Who leads the Occupational Therapy program?",
        answer: "Our Occupational Therapy program is led by Registered Occupational Therapist Saghar Baqizada."
      },
      {
        question: "Is Occupational Therapy covered by OAP?",
        answer: "Yes, all Occupational Therapy services are covered with OAP funding."
      }
    ]
  },

  "behaviour-consultation": {
    id: "behaviour-consultation",
    title: "Behaviour Consultation",
    tagline: "In-person & online consultation + parent video modules for home behavior management.",
    badge: "Parent & Professional",
    badgeBg: "bg-amber-600",
    iconBg: "bg-amber-600",
    bulletColor: "text-amber-600",
    iconName: "ShieldCheck",
    image: "/about_center_photo.jpg",
    heroImage: "/about_center_photo.jpg",
    shortDescription:
      "Personalized behaviour consultations (in-person & online) and self-paced video training modules for parents and professionals to manage problem behaviors, toilet training, and feeding.",
    overviewParagraphs: [
      "Whether you are a parent facing challenges at home or a professional seeking assistance, Radiant Autism Center offers personalized behaviour consultation. We equip you with the tools and strategies needed to effectively support those who matter most to you.",
      "Our consultation services help families address challenging behaviors and develop independence in the home environment. We also support individual professionals and organizations in developing behaviour treatment goals. Consultations can be provided in person or online.",
      "Additionally, we offer online training programs consisting of short video modules that can be completed at your own pace. Topics include managing problem behaviors at home, toilet training, feeding, parent self-care, and more. (Covered with OAP funding)."
    ],
    ageGroup: "Parents, Families & Organizations",
    sessionFormat: "In-Person, Online Consultation & Video Modules",
    duration: "1:1 Consultations & Self-Paced Courses",
    clinicalLead: "Clinical Behaviour Consultants & BCBA Team",
    features: ["In-Person & Online", "Self-Paced Parent Courses", "Toilet Training & Behaviour"],
    whoNeedsThis: {
      subtitle: "Behaviour Consultation is recommended if you need:",
      signs: [
        "Strategies for managing challenging behaviors at home or in public",
        "Step-by-step guidance for successful toilet training or mealtime feeding routines",
        "Professional support for designing behavioral treatment plans in school/care settings",
        "Self-paced online video modules to learn ABA techniques at home",
        "Expert guidance on parent self-care and reducing caregiver stress"
      ]
    },
    keyBenefits: [
      {
        title: "Targeted Home Strategies",
        description: "Actionable, evidence-based tools to replace frustration with positive home routines."
      },
      {
        title: "Toilet & Feeding Solutions",
        description: "Specialized protocols for toilet training, selective eating, and bedtime routines."
      },
      {
        title: "Flexible Formats",
        description: "Available in-person, via telehealth, or through self-paced video training modules."
      },
      {
        title: "OAP Funding Approved",
        description: "Covered under Ontario Autism Program (OAP) funding."
      }
    ],
    clinicalProcess: [
      {
        stepNumber: "01",
        title: "Behavior Consultation Intake",
        description: "Discussing specific home or organizational behavioral challenges and priorities."
      },
      {
        stepNumber: "02",
        title: "Actionable Strategy Design",
        description: "Creating step-by-step behavioral protocols for parents or caregivers."
      },
      {
        stepNumber: "03",
        title: "Coaching & Video Learning",
        description: "Providing 1:1 coaching sessions alongside access to self-paced online video modules."
      },
      {
        stepNumber: "04",
        title: "Follow-up & Routine Review",
        description: "Monitoring progress and refining strategies to ensure long-term home independence."
      }
    ],
    faqs: [
      {
        question: "Are consultations available online?",
        answer: "Yes, consultations are offered both in-person and online via telehealth, along with self-paced video modules."
      },
      {
        question: "Is Behaviour Consultation covered by OAP?",
        answer: "Yes, Behaviour Consultation services are covered with OAP funding."
      }
    ]
  },

  "psychoeducational-assessments": {
    id: "psychoeducational-assessments",
    title: "Psychoeducational Assessments",
    tagline: "Comprehensive academic, ADHD, and learning disability evaluations for ages 7+.",
    badge: "Academic & IQ",
    badgeBg: "bg-rose-600",
    iconBg: "bg-rose-600",
    bulletColor: "text-rose-600",
    iconName: "ShieldCheck",
    image: "/service_physio.jpg",
    heroImage: "/service_physio.jpg",
    shortDescription:
      "Comprehensive assessments in collaboration with The PsychoEd Clinic to identify learning disabilities, academic challenges, ADHD, IQ levels, and academic strengths for ages 7+.",
    overviewParagraphs: [
      "In collaboration with The PsychoEd Clinic, these comprehensive assessments help identify academic challenges, learning disabilities, and/or ADHD, providing valuable insight into learning profiles, IQ levels, and academic strengths and challenges.",
      "Psychoeducational assessments are helpful for children struggling with school and lacking support or accommodations, and to identify potential mental diagnoses. A minimum age of 7 years is required for eligibility.",
      "The process includes an intake meeting, administered questionnaires, an in-person assessment, a written report, and a final feedback meeting. Please note: Psychoeducational assessments are provided in collaboration with a clinical psychologist through The PsychoEd Clinic. They are covered by extended health benefits."
    ],
    ageGroup: "7 Years and Up",
    sessionFormat: "Standardized Clinical Evaluation & Report Review",
    duration: "Comprehensive 4-Stage Assessment Process",
    clinicalLead: "Clinical Psychologist (In collaboration with The PsychoEd Clinic)",
    features: ["Collaboration with PsychoEd Clinic", "Ages 7+", "Identifies ADHD & Learning Profiles"],
    whoNeedsThis: {
      subtitle: "A Psychoeducational Assessment is recommended if your child:",
      signs: [
        "Struggles academically despite effort and needs school accommodations (IEP / 504)",
        "Shows signs of ADHD, attention difficulties, or executive functioning challenges",
        "Needs formal IQ testing or comprehensive learning disability identification",
        "Requires a diagnostic evaluation for potential learning or mental health profiles",
        "Wants clarity on specific cognitive strengths and academic growth areas"
      ]
    },
    keyBenefits: [
      {
        title: "Comprehensive Learning Profile",
        description: "Mapping cognitive IQ, processing speed, memory, and academic achievement."
      },
      {
        title: "School Accommodation Support",
        description: "Providing formal documentation for Individual Education Plans (IEP) and accommodations."
      },
      {
        title: "ADHD & Learning Diagnosis",
        description: "Identifying underlying learning disabilities or attention deficit disorders."
      },
      {
        title: "Insurance Coverage Eligible",
        description: "Covered under extended health insurance & benefit plans."
      }
    ],
    clinicalProcess: [
      {
        stepNumber: "01",
        title: "Initial Intake Consultation",
        description: "Reviewing academic history, teacher observations, and developmental background."
      },
      {
        stepNumber: "02",
        title: "In-Person Psychological Testing",
        description: "Administering standardized cognitive, academic, and psychological test batteries."
      },
      {
        stepNumber: "03",
        title: "Comprehensive Written Report",
        description: "Compiling detailed diagnosis, test scores, and tailored educational recommendations."
      },
      {
        stepNumber: "04",
        title: "Feedback Meeting",
        description: "Meeting with parents to explain findings clearly and guide next steps for school support."
      }
    ],
    faqs: [
      {
        question: "What is the minimum age for a Psychoeducational Assessment?",
        answer: "A minimum age of 7 years is required for eligibility."
      },
      {
        question: "Is this assessment covered by OAP or extended benefits?",
        answer: "Psychoeducational assessments are provided in collaboration with a clinical psychologist through The PsychoEd Clinic and can be covered with extended health insurance benefits."
      }
    ]
  },

  "psychotherapy-services": {
    id: "psychotherapy-services",
    title: "Psychotherapy Services",
    tagline: "Therapeutic mental health care for anxiety, depression, OCD, and ADHD.",
    badge: "Mental Health",
    badgeBg: "bg-emerald-600",
    iconBg: "bg-emerald-600",
    bulletColor: "text-emerald-600",
    iconName: "Smile",
    image: "/hero_bg_speech.jpg",
    heroImage: "/hero_bg_speech.jpg",
    shortDescription:
      "Evidence-based CBT, DBT, and Emotion-Focused Therapy for pre-teens, adolescents, and young adults facing anxiety, OCD, depression, or ADHD, with active parent involvement.",
    overviewParagraphs: [
      "We are pleased to offer psychotherapy services from our Registered Psychotherapist, Charlotte Dirken. Our psychotherapy services cater to pre-teens, adolescents, and young adults with autism, ADHD, anxiety, OCD, depression, and more.",
      "We provide a safe and supportive environment where individuals can explore their thoughts and emotions. Charlotte Dirken is skilled in using techniques of Cognitive Behavioural Therapy (CBT), Dialectical Behaviour Therapy (DBT), and Emotion-Focused Therapy (EFT) to manage symptoms, develop coping strategies, and improve overall well-being.",
      "This program also includes parent involvement, guiding parents on how to integrate psychotherapy practices into the home environment. (Covered with OAP funding)."
    ],
    ageGroup: "Pre-Teens, Teens & Young Adults",
    sessionFormat: "1:1 Individual Psychotherapy & Parent Coaching",
    duration: "50 Min Therapeutic Sessions",
    clinicalLead: "Charlotte Dirken (Registered Psychotherapist)",
    features: ["Registered Psychotherapist", "CBT, DBT & EFT Techniques", "Anxiety & Mood Management"],
    whoNeedsThis: {
      subtitle: "Psychotherapy Services are recommended if your pre-teen or teen experiences:",
      signs: [
        "Anxiety, panic, social stress, or persistent worries",
        "Symptoms of depression, low self-esteem, or mood fluctuations",
        "Obsessive-compulsive tendencies (OCD) or emotional regulation challenges",
        "Navigating life transitions, peer conflicts, or identity exploration",
        "Need for evidence-based CBT, DBT, or Emotion-Focused therapeutic tools"
      ]
    },
    keyBenefits: [
      {
        title: "Evidence-Based Modalities",
        description: "Utilizing Cognitive Behavioural Therapy (CBT), DBT, and Emotion-Focused Therapy."
      },
      {
        title: "Emotional Self-Regulation",
        description: "Developing lifelong coping strategies for stress, anxiety, and depression."
      },
      {
        title: "Integrated Parent Guidance",
        description: "Empowering parents to support mental health practices effectively at home."
      },
      {
        title: "OAP Funding Approved",
        description: "Covered under Ontario Autism Program (OAP) funding."
      }
    ],
    clinicalProcess: [
      {
        stepNumber: "01",
        title: "Therapeutic Intake",
        description: "Building trust, understanding emotional concerns, and identifying therapy goals."
      },
      {
        stepNumber: "02",
        title: "CBT/DBT Session Work",
        description: "Practicing cognitive reframing, mindfulness, and emotion regulation techniques."
      },
      {
        stepNumber: "03",
        title: "Parent Integration",
        description: "Guiding parents on how to reinforce positive emotional coping strategies at home."
      },
      {
        stepNumber: "04",
        title: "Ongoing Wellness Review",
        description: "Tracking mental health milestones and fostering long-term resilience."
      }
    ],
    faqs: [
      {
        question: "Who conducts Psychotherapy sessions?",
        answer: "Psychotherapy is conducted by Registered Psychotherapist Charlotte Dirken."
      },
      {
        question: "Is Psychotherapy covered by OAP?",
        answer: "Yes, Psychotherapy Services are covered with OAP funding."
      }
    ]
  },

  "life-skills": {
    id: "life-skills",
    title: "Life Skills",
    tagline: "Building independent living, transit, meal prep, self-advocacy, and career skills.",
    badge: "Independence",
    badgeBg: "bg-sky-600",
    iconBg: "bg-sky-600",
    bulletColor: "text-sky-600",
    iconName: "Sparkles",
    image: "/hero_bg_aba.jpg",
    heroImage: "/hero_bg_aba.jpg",
    shortDescription:
      "Empowering neurodivergent teens and young adults with real-world skills: public transit, grocery shopping, meal prep, cleaning, self-advocacy, resume building, and job/school applications.",
    overviewParagraphs: [
      "At Radiant Autism Center, we empower neurodivergent teens and young adults to build the skills they need to thrive independently in their communities.",
      "Our programs focus on real-world skills like navigating public transportation, grocery shopping, meal preparation, cleaning, dressing, grooming, and managing daily schedules. We also support self-advocacy, resume building, and the school or job application process to help individuals reach their goals.",
      "Through hands-on learning and personalized guidance, we create opportunities for growth, confidence, and self-reliance. Whether preparing for higher education, entering the workforce, or gaining life skills, we support their journey every step of the way. (Covered with OAP funding)."
    ],
    ageGroup: "Teens & Young Adults",
    sessionFormat: "Community Hands-on Training & 1:1 Coaching",
    duration: "Flexible Life Skill Workshops & Community Outings",
    clinicalLead: "Life Skills Specialists & BCBA Supervisory Team",
    features: ["Community Navigation", "Job & School Applications", "Self-Advocacy & Meal Prep"],
    whoNeedsThis: {
      subtitle: "Life Skills training is ideal for teens and young adults preparing to:",
      signs: [
        "Learn independent community navigation and public transportation routing",
        "Master self-care, meal preparation, grocery shopping, and budgeting",
        "Build self-advocacy skills for college, university, or workplace environments",
        "Create resumes, practice interview skills, and complete job/school applications",
        "Develop structured daily schedules and routines for independent living"
      ]
    },
    keyBenefits: [
      {
        title: "Real-World Community Practice",
        description: "Hands-on training in grocery stores, transit routes, and daily community settings."
      },
      {
        title: "Career & Education Prep",
        description: "Resume building, job application assistance, and college/workplace readiness."
      },
      {
        title: "Self-Advocacy & Confidence",
        description: "Empowering individuals to communicate their needs and rights confidently."
      },
      {
        title: "OAP Funding Approved",
        description: "Covered under Ontario Autism Program (OAP) funding."
      }
    ],
    clinicalProcess: [
      {
        stepNumber: "01",
        title: "Independence Assessment",
        description: "Evaluating current self-help, community, and career-readiness skill levels."
      },
      {
        stepNumber: "02",
        title: "Personalized Life Roadmap",
        description: "Setting tangible goals across transit, meal prep, budgeting, and self-advocacy."
      },
      {
        stepNumber: "03",
        title: "Hands-on Community Practice",
        description: "Practicing real-world skills directly in community environments and workshop settings."
      },
      {
        stepNumber: "04",
        title: "Transition & Goal Mastery",
        description: "Reviewing independence milestones as participants transition to school, work, or living."
      }
    ],
    faqs: [
      {
        question: "What topics are covered in the Life Skills program?",
        answer: "We cover public transit navigation, grocery shopping, meal prep, cleaning, grooming, budgeting, self-advocacy, resume building, and job/school applications."
      },
      {
        question: "Is Life Skills covered by OAP funding?",
        answer: "Yes, the Life Skills program is covered under OAP funding."
      }
    ]
  }
};
