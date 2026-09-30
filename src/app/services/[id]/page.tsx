import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Brain,
  MessageCircle,
  Activity,
  Smile,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Users,
  Clock,
  Award,
  ChevronRight,
  MessageSquare,
  HelpCircle,
  ArrowLeft,
  LucideIcon
} from "lucide-react";
import { SERVICES_DATA, ServiceDetail } from "@/data/servicesData";
import ScrollReveal from "@/common/ScrollReveal";
import SectionHeading from "@/common/SectionHeading";

interface ServicePageProps {
  params: Promise<{ id: string }> | { id: string } | any;
}

const iconMap: Record<string, LucideIcon> = {
  Brain,
  MessageCircle,
  Activity,
  Smile,
  Sparkles,
  ShieldCheck,
};

export async function generateMetadata({ params }: ServicePageProps) {
  const resolvedParams = await Promise.resolve(params);
  const id = resolvedParams?.id || "";
  const service = SERVICES_DATA[id];
  if (!service) return { title: "Service Not Found - Radiant Autism Center" };

  return {
    title: `${service.title} | Radiant Autism Center`,
    description: service.shortDescription,
    alternates: {
      canonical: `/services/${service.id}`,
    },
    openGraph: {
      title: `${service.title} | Radiant Autism Center`,
      description: service.shortDescription,
      url: `/services/${service.id}`,
      images: [
        {
          url: service.heroImage || service.image,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Radiant Autism Center`,
      description: service.shortDescription,
      images: [service.heroImage || service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const resolvedParams = await Promise.resolve(params);
  const id = resolvedParams?.id || "";
  const service: ServiceDetail | undefined = SERVICES_DATA[id];

  if (!service) {
    notFound();
  }

  const IconComponent: LucideIcon = iconMap[service.iconName] || Brain;

  const whatsappMessage = encodeURIComponent(
    `Hi Radiant Autism Center, I would like to inquire about details for: ${service.title}. Please share more information.`
  );
  const whatsappUrl = `https://wa.me/18005557890?text=${whatsappMessage}`;

  // Get other services for bottom recommendation grid
  const otherServices = Object.values(SERVICES_DATA).filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      {/* 1. Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200/80 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm text-slate-600 font-medium">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-bold text-slate-900 truncate">{service.title}</span>
          </div>

          <Link
            href="/services"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>
        </div>
      </div>

      {/* 2. Hero Header Section */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200/80 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal direction="up">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-extrabold uppercase tracking-wider">
                  <IconComponent className="w-4 h-4" />
                  <span>{service.badge}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={100}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  {service.title}
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={150}>
                <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                  {service.tagline}
                </p>
              </ScrollReveal>

              {/* Quick Info Grid */}
              <ScrollReveal direction="up" delay={200}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase text-slate-600 tracking-wider block">Target Age Group</span>
                      <span className="text-sm font-black text-slate-900">{service.ageGroup}</span>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-teal-50 text-teal-600 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase text-slate-600 tracking-wider block">Session Format</span>
                      <span className="text-sm font-black text-slate-900">{service.sessionFormat}</span>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase text-slate-600 tracking-wider block">Clinical Supervision</span>
                      <span className="text-sm font-black text-slate-900">{service.clinicalLead}</span>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase text-slate-600 tracking-wider block">Recommended Frequency</span>
                      <span className="text-sm font-black text-slate-900">{service.duration}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal direction="up" delay={250}>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-lg shadow-blue-600/25 transition-all group"
                  >
                    <span>Book Assessment Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Ask on WhatsApp</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="up" delay={150}>
                <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-900 aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 group">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 animate-kenburns group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-xs font-black uppercase tracking-wider text-blue-300">Radiant Clinical Center</span>
                    <p className="text-sm font-bold text-slate-100">Certified 1:1 Clinical Excellence & Compassionate Care</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Overview & Who Needs This */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Multi-paragraph clinical overview */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal direction="up">
                <SectionHeading
                  badgeText="Clinical Overview"
                  badgeVariant="blue"
                  title="Understanding Our Approach to This Therapy"
                  align="left"
                />
              </ScrollReveal>

              <ScrollReveal direction="up" delay={100}>
                <div className="space-y-5 text-slate-700 text-base leading-relaxed">
                  {service.overviewParagraphs.map((para, idx) => (
                    <p key={idx} className="first-of-type:text-lg first-of-type:font-semibold first-of-type:text-slate-900">
                      {para}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Core Features Bullets */}
              <ScrollReveal direction="up" delay={200}>
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-sm font-extrabold uppercase text-slate-600 tracking-wider mb-4">Core Program Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                        <span className="text-xs font-black text-slate-900 block">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Who Needs This Checklist Box */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="up" delay={150}>
                <div className="bg-[#faf8f2] rounded-3xl p-7 sm:p-8 border-2 border-amber-200/80 shadow-md space-y-6 sticky top-28">
                  <div className="space-y-2">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-200/80 text-amber-900 uppercase tracking-wider">
                      Parent Checklist
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                      Is This Therapy Right For Your Child?
                    </h3>
                    <p className="text-xs text-slate-600 font-medium">
                      {service.whoNeedsThis.subtitle}
                    </p>
                  </div>

                  <div className="space-y-3.5">
                    {service.whoNeedsThis.signs.map((sign, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-amber-200/60 shadow-2xs">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">{sign}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="w-full py-3.5 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs text-center shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <span>Schedule Free Screening Call</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Key Clinical Outcomes & Benefits Grid */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeading
              badgeText="Target Outcomes"
              badgeVariant="green"
              title="Key Clinical Benefits & Developmental Outcomes"
              subtitle="Every goal is systematically tracked using data-backed metrics to ensure clear, visible progress."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {service.keyBenefits.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} direction="up">
                <div className="bg-white rounded-3xl p-7 border-2 border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-lg flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    0{idx + 1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 4-Step Clinical Process */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeading
              badgeText="Our Process"
              badgeVariant="blue"
              title="How We Deliver This Therapy Service Step-By-Step"
              subtitle="A structured, transparent clinical roadmap from initial diagnostic intake to independent milestone mastery."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {service.clinicalProcess.map((proc, idx) => (
              <ScrollReveal key={idx} delay={idx * 120} direction="up">
                <div className="bg-slate-50 rounded-3xl p-7 border-2 border-slate-200/80 shadow-xs flex flex-col justify-between h-full relative group hover:border-blue-500 transition-all">
                  <div className="space-y-4">
                    <span className="text-3xl font-black text-blue-600/40 group-hover:text-blue-600 transition-colors block">
                      {proc.stepNumber}
                    </span>
                    <h3 className="text-base font-black text-slate-900 leading-snug">
                      {proc.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {proc.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions (FAQs) */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeading
              badgeText="Parents FAQ"
              badgeVariant="purple"
              title="Frequently Asked Questions About This Therapy"
              subtitle="Clear answers to common questions asked by parents before starting therapy."
            />
          </ScrollReveal>

          <div className="space-y-4 mt-12">
            {service.faqs.map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} direction="up">
                <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
                    <h3 className="text-base font-black text-slate-900">{faq.question}</h3>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom Call-To-Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <ScrollReveal direction="up">
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-blue-600 text-white uppercase tracking-wider">
                Start Your Child's Journey
              </span>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight">
                Ready to Give Your Child the Support They Deserve?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Contact our clinical team today to schedule an initial baseline assessment or speak directly with certified specialists at Radiant Autism Center.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
                >
                  <span>Book Consultation Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm backdrop-blur-md transition-all flex items-center gap-2 border border-white/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with Clinical Expert</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 8. Other Related Services */}
      <section className="py-12 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-slate-900">Explore Other Therapy Services</h3>
            <Link href="/services" className="text-xs font-extrabold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1">
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((other) => (
              <Link
                key={other.id}
                href={`/services/${other.id}`}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-blue-500 hover:bg-white transition-all group shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold uppercase bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">
                    {other.badge}
                  </span>
                  <h4 className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors pt-1">
                    {other.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {other.shortDescription}
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-1 text-xs font-bold text-blue-600">
                  <span>Explore Detail</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
