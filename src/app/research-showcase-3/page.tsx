"use client";

import { useState } from "react";
import Image from "next/image";
import ResearchShowcaseNav from "@/components/ResearchShowcaseNav";

// ============================================================================
// RESEARCH SHOWCASE VARIATION 3: PATIENT IMPACT
// A storytelling-focused design that humanizes research by connecting it to
// patient outcomes, survival stories, and real-world impact with emotional,
// compelling narratives
// ============================================================================

// Patient success stories with emotional depth
const patientStories = [
  {
    id: 1,
    name: "Lakshmi Venkataraman",
    age: 45,
    diagnosis: "Triple-Negative Breast Cancer",
    yearsPostTreatment: 5,
    quote: "The clinical trial at Cancer Institute gave me hope when I had none. Today, I watch my daughter graduate — a moment I thought I'd never see.",
    story: "Diagnosed at stage III, Lakshmi enrolled in a groundbreaking immunotherapy trial. After 18 months of treatment, her scans showed complete remission. Now, five years cancer-free, she advocates for cancer research funding.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop",
    researchConnection: "Phase III Immunotherapy Trial",
    location: "Chennai",
    featured: true,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    age: 52,
    diagnosis: "Non-Small Cell Lung Cancer",
    yearsPostTreatment: 3,
    quote: "Thanks to the precision medicine program, doctors found the exact mutation causing my cancer. The targeted therapy changed everything.",
    story: "Rajesh's tumor harbored a rare genetic mutation. Through genomic profiling at CI(WIA), his treatment was personalized to target this specific mutation, avoiding unnecessary chemotherapy.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
    researchConnection: "Genomic Profiling Study",
    location: "Coimbatore",
    featured: true,
  },
  {
    id: 3,
    name: "Priya Sharma",
    age: 38,
    diagnosis: "Colorectal Cancer",
    yearsPostTreatment: 2,
    quote: "Early detection through the screening program literally saved my life. I had no symptoms — I could have easily waited until it was too late.",
    story: "Priya was diagnosed through a routine screening in our community outreach program. Caught at Stage I, her cancer was completely removed with surgery alone.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop",
    researchConnection: "Community Screening Initiative",
    location: "Madurai",
    featured: false,
  },
  {
    id: 4,
    name: "Mohammed Ibrahim",
    age: 67,
    diagnosis: "Prostate Cancer",
    yearsPostTreatment: 4,
    quote: "The new radiation technique they developed meant I could complete treatment in just 5 sessions instead of 40. I barely missed any time with my grandchildren.",
    story: "Mohammed benefited from our stereotactic body radiation therapy (SBRT) research, which delivers precise, high-dose radiation in fewer treatments with better outcomes.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop",
    researchConnection: "Hypofractionated Radiation Study",
    location: "Trichy",
    featured: false,
  },
];

// Research impact statistics with human context
const impactStats = {
  livesTransformed: "24,500+",
  fiveYearSurvival: "68%",
  patientsInTrials: "3,200+",
  familiesSupported: "45,000+",
  countriesReached: 12,
  yearsOfResearch: 72,
};

// Research-to-patient journey stages
const researchJourney = [
  {
    stage: 1,
    title: "Discovery",
    description: "Scientists identify a potential breakthrough in the laboratory",
    icon: "🔬",
    duration: "3-5 years",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop",
  },
  {
    stage: 2,
    title: "Testing",
    description: "Rigorous safety and efficacy trials to ensure the treatment works",
    icon: "🧪",
    duration: "5-7 years",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop",
  },
  {
    stage: 3,
    title: "Clinical Trials",
    description: "Patients volunteer to test new treatments, advancing science for all",
    icon: "🏥",
    duration: "3-5 years",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=300&fit=crop",
  },
  {
    stage: 4,
    title: "Patient Access",
    description: "Proven treatments become available to patients everywhere",
    icon: "💊",
    duration: "Ongoing",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
  },
];

// Community programs making a difference
const communityPrograms = [
  {
    name: "Rural Cancer Screening Initiative",
    description: "Free cancer screening camps in underserved villages across Tamil Nadu",
    impact: "45,000 people screened",
    earlyDetections: 234,
    livesProjectedSaved: 180,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
  },
  {
    name: "Cancer Survivor Support Network",
    description: "Peer support groups connecting survivors to share hope and healing",
    impact: "2,500 members",
    meetingsHeld: 450,
    livesProjectedSaved: null,
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop",
  },
  {
    name: "Financial Assistance Program",
    description: "Ensuring no patient foregoes treatment due to financial constraints",
    impact: "₹8.5 Cr distributed",
    patientsHelped: 1200,
    livesProjectedSaved: null,
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop",
  },
];

// Ongoing clinical trials seeking participants
const patientTrials = [
  {
    id: "HOPE-001",
    name: "HOPE Trial",
    fullTitle: "Helping Overcome Personalized Efficacy Study",
    cancerType: "Breast Cancer",
    description: "Testing a new combination of immunotherapy drugs for triple-negative breast cancer that has stopped responding to standard treatments.",
    seeking: "Women with TNBC who have had at least 2 prior treatments",
    benefits: ["Access to cutting-edge treatment", "Close monitoring by specialists", "Comprehensive care at no cost"],
    status: "Actively Recruiting",
    contact: "hope.trial@cancerinstitute.org",
  },
  {
    id: "BREATH-002",
    name: "BREATH Trial",
    fullTitle: "Biomarker-Responsive Enhanced Approach To Healing",
    cancerType: "Lung Cancer",
    description: "Evaluating a targeted therapy for patients with specific genetic mutations in their lung cancer tumors.",
    seeking: "Adults with non-small cell lung cancer and EGFR mutations",
    benefits: ["Personalized treatment approach", "Regular genetic monitoring", "Travel assistance available"],
    status: "Actively Recruiting",
    contact: "breath.trial@cancerinstitute.org",
  },
  {
    id: "SHIELD-003",
    name: "SHIELD Trial",
    fullTitle: "Strategic High-Dose Immunological Enhanced Lymphoma Defense",
    cancerType: "Lymphoma",
    description: "Testing an innovative CAR-T cell therapy for lymphoma patients who have not responded to other treatments.",
    seeking: "Patients with relapsed/refractory B-cell lymphoma",
    benefits: ["Revolutionary cell therapy", "Dedicated care team", "Long-term follow-up care"],
    status: "Limited Spots",
    contact: "shield.trial@cancerinstitute.org",
  },
];

// Researcher profiles with human touch
const researcherSpotlights = [
  {
    name: "Dr. Priya Sharma",
    title: "Director, Clinical Research",
    yearsServing: 25,
    motivation: "Every patient I meet reminds me why I chose this path. Their courage inspires our science.",
    achievement: "Led 47 clinical trials that have helped over 3,000 patients",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop",
  },
  {
    name: "Dr. Venkataraman S.",
    title: "Chief Scientist, Genomics",
    yearsServing: 18,
    motivation: "Behind every cancer cell we study is a person waiting for answers. That's what drives me.",
    achievement: "Discovered 3 novel therapeutic targets now in clinical trials",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop",
  },
  {
    name: "Dr. Anitha Rajan",
    title: "Head, Radiation Oncology Research",
    yearsServing: 20,
    motivation: "Every treatment we refine means less suffering for someone's mother, father, or child.",
    achievement: "Pioneered hypofractionated protocols adopted by 50+ centers",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop",
  },
];

// Timeline of milestone achievements
const milestones = [
  { year: 1954, event: "Cancer Institute (WIA) founded", impact: "First cancer hospital in India" },
  { year: 1975, event: "Radiation therapy research begins", impact: "Regional treatment protocols developed" },
  { year: 1995, event: "First clinical trial program launched", impact: "Access to cutting-edge treatments" },
  { year: 2010, event: "Genomics laboratory established", impact: "Precision medicine era begins" },
  { year: 2020, event: "CAR-T cell therapy program", impact: "Revolutionary immunotherapy access" },
  { year: 2025, event: "AI-integrated care pathways", impact: "Personalized treatment for every patient" },
];

export default function ResearchShowcase3() {
  const [selectedStory, setSelectedStory] = useState(patientStories[0]);
  const [expandedTrial, setExpandedTrial] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <ResearchShowcaseNav currentVariation="3" />

      {/* Hero: Emotional Patient-Centered Opening */}
      <header className="relative">
        {/* Background with warm gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary)]/90 to-blue-900" />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="hearts" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M10,6 Q10,2 6,2 Q2,2 2,6 Q2,10 10,18 Q18,10 18,6 Q18,2 14,2 Q10,2 10,6" fill="none" stroke="white" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#hearts)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-secondary)]/20 rounded-full mb-6">
                <span className="text-[var(--color-secondary)]">❤️</span>
                <span className="text-white/90 text-sm font-medium">Research That Changes Lives</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Behind Every Study,<br />
                <span className="text-[var(--color-secondary)]">A Life Transformed</span>
              </h1>

              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">
                Our research isn&apos;t just about scientific papers and statistics.
                It&apos;s about the mother who gets to see her child&apos;s wedding,
                the father who watches his daughter graduate, the grandmother
                who holds her grandchild for the first time.
              </p>

              {/* Impact numbers */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[var(--color-secondary)]">
                    {impactStats.livesTransformed}
                  </div>
                  <div className="text-white/60 text-sm mt-1">Lives Transformed</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[var(--color-secondary)]">
                    {impactStats.fiveYearSurvival}
                  </div>
                  <div className="text-white/60 text-sm mt-1">5-Year Survival Rate</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[var(--color-secondary)]">
                    {impactStats.yearsOfResearch}
                  </div>
                  <div className="text-white/60 text-sm mt-1">Years of Impact</div>
                </div>
              </div>
            </div>

            {/* Featured patient image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=700&fit=crop"
                  alt="Hope and healing"
                  width={600}
                  height={700}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg italic mb-2">
                    &ldquo;Every breakthrough starts with believing tomorrow can be better.&rdquo;
                  </p>
                  <p className="text-white/70 text-sm">— Dr. V. Shanta, Founder</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-[var(--color-secondary)] text-[var(--color-primary)] p-4 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">{impactStats.patientsInTrials}</div>
                <div className="text-xs font-medium">Patients in Active Trials</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Patient Stories Section */}
      <section className="py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
              Real Stories, Real Hope
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mt-2">
              Voices of Survival
            </h2>
            <p className="text-[var(--color-text-light)] mt-4 max-w-2xl mx-auto">
              Meet the patients whose lives have been transformed by research
            </p>
          </div>

          {/* Featured Story */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-10">
            <div className="grid lg:grid-cols-2">
              {/* Patient image */}
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={selectedStory.image}
                  alt={selectedStory.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent lg:from-white/20 to-transparent" />
              </div>

              {/* Story content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] text-xs font-bold rounded-full">
                    {selectedStory.yearsPostTreatment} Years Cancer-Free
                  </span>
                  <span className="px-3 py-1 bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-bold rounded-full">
                    {selectedStory.diagnosis}
                  </span>
                </div>

                <blockquote className="text-xl md:text-2xl font-bold text-[var(--color-primary)] leading-relaxed mb-6">
                  &ldquo;{selectedStory.quote}&rdquo;
                </blockquote>

                <p className="text-[var(--color-text-dark)] leading-relaxed mb-6">
                  {selectedStory.story}
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-[var(--color-primary)]/10">
                  <div>
                    <div className="font-bold text-[var(--color-text-dark)]">{selectedStory.name}</div>
                    <div className="text-sm text-[var(--color-text-light)]">
                      Age {selectedStory.age} • {selectedStory.location}
                    </div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-xs text-[var(--color-text-light)]">Research that helped</div>
                    <div className="text-sm font-bold text-[var(--color-secondary)]">
                      {selectedStory.researchConnection}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {patientStories.map((story) => (
              <button
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className={`relative rounded-xl overflow-hidden aspect-square group transition-all ${
                  selectedStory.id === story.id
                    ? "ring-4 ring-[var(--color-secondary)] scale-105"
                    : "hover:scale-102"
                }`}
              >
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-left">
                  <div className="font-bold text-sm">{story.name}</div>
                  <div className="text-xs text-white/70">{story.diagnosis}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Research to Patient Journey */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
              The Path to Hope
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mt-2">
              From Lab to Life
            </h2>
            <p className="text-[var(--color-text-light)] mt-4 max-w-2xl mx-auto">
              Every life-saving treatment begins with years of dedicated research
            </p>
          </div>

          {/* Journey timeline */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-primary)] to-[var(--color-secondary)]" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {researchJourney.map((step, index) => (
                <div key={step.stage} className="relative">
                  {/* Connector dot */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--color-secondary)] border-4 border-white shadow-lg z-10" />

                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    {/* Image */}
                    <div className="relative h-40">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 text-5xl">
                        {step.icon}
                      </div>
                      <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 rounded-full">
                        <span className="text-[var(--color-primary)] font-bold text-sm">
                          Stage {step.stage}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[var(--color-text-light)] text-sm mb-4">
                        {step.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-[var(--color-text-light)]">Duration:</span>
                        <span className="font-bold text-[var(--color-secondary)]">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join a Clinical Trial - Patient-Friendly */}
      <section className="py-20 bg-[var(--color-primary)] text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-secondary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-secondary)]"></span>
              </span>
              <span className="text-sm">Actively Seeking Participants</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Be Part of the Cure
            </h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              Clinical trials give you access to tomorrow&apos;s treatments today —
              and help us find better options for everyone
            </p>
          </div>

          <div className="space-y-6">
            {patientTrials.map((trial) => (
              <div
                key={trial.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
              >
                {/* Trial header */}
                <div
                  className="p-6 cursor-pointer hover:bg-white/5 transition-colors"
                  onClick={() => setExpandedTrial(expandedTrial === trial.id ? null : trial.id)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-[var(--color-secondary)]">
                          {trial.name}
                        </span>
                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                          trial.status === "Actively Recruiting"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}>
                          {trial.status}
                        </span>
                      </div>
                      <p className="text-white/70 text-sm">{trial.fullTitle}</p>
                      <p className="text-white font-medium mt-1">
                        For: {trial.cancerType}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="px-6 py-3 bg-[var(--color-secondary)] text-[var(--color-primary)] font-bold rounded-full hover:bg-[var(--color-secondary)]/90 transition-colors">
                        Learn More
                      </button>
                      <svg
                        className={`w-6 h-6 text-white/50 transition-transform ${
                          expandedTrial === trial.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Expanded content */}
                {expandedTrial === trial.id && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/10">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-white mb-3">About This Trial</h4>
                        <p className="text-white/70 text-sm leading-relaxed mb-4">
                          {trial.description}
                        </p>
                        <h4 className="font-bold text-white mb-2">Who Can Join?</h4>
                        <p className="text-white/70 text-sm">{trial.seeking}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-3">Benefits of Participating</h4>
                        <ul className="space-y-2">
                          {trial.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-white/70 text-sm">
                              <span className="text-[var(--color-secondary)]">✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 p-4 bg-white/5 rounded-xl">
                          <p className="text-white/50 text-xs mb-1">Contact for more information:</p>
                          <p className="text-[var(--color-secondary)] font-medium">{trial.contact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact Programs */}
      <section className="py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
              Beyond the Hospital
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mt-2">
              Research That Reaches Everyone
            </h2>
            <p className="text-[var(--color-text-light)] mt-4 max-w-2xl mx-auto">
              Our commitment extends to communities across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {communityPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Program image */}
                <div className="relative h-48">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/60 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">
                    {program.name}
                  </h3>
                  <p className="text-[var(--color-text-light)] text-sm mb-4">
                    {program.description}
                  </p>

                  {/* Impact stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--color-primary)]/10">
                    <div>
                      <div className="text-xl font-bold text-[var(--color-secondary)]">
                        {program.impact}
                      </div>
                      <div className="text-xs text-[var(--color-text-light)]">Total Impact</div>
                    </div>
                    {program.earlyDetections && (
                      <div className="text-right">
                        <div className="text-xl font-bold text-[var(--color-primary)]">
                          {program.earlyDetections}
                        </div>
                        <div className="text-xs text-[var(--color-text-light)]">Cancers Found Early</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Researcher Spotlights */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
              The People Behind the Science
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mt-2">
              Meet Our Researchers
            </h2>
            <p className="text-[var(--color-text-light)] mt-4 max-w-2xl mx-auto">
              Dedicated scientists driven by a personal mission to defeat cancer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {researcherSpotlights.map((researcher, index) => (
              <div key={index} className="bg-[var(--color-accent)] rounded-2xl overflow-hidden">
                {/* Researcher image */}
                <div className="relative h-64">
                  <Image
                    src={researcher.image}
                    alt={researcher.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-[var(--color-primary)]">
                      {researcher.name}
                    </h3>
                    <p className="text-[var(--color-secondary)] text-sm font-medium">
                      {researcher.title}
                    </p>
                    <p className="text-[var(--color-text-light)] text-xs">
                      {researcher.yearsServing} years serving patients
                    </p>
                  </div>

                  <blockquote className="text-[var(--color-text-dark)] text-sm italic border-l-4 border-[var(--color-secondary)] pl-4 mb-4">
                    &ldquo;{researcher.motivation}&rdquo;
                  </blockquote>

                  <div className="pt-4 border-t border-[var(--color-primary)]/10">
                    <p className="text-xs text-[var(--color-text-light)]">Key Achievement</p>
                    <p className="text-sm font-medium text-[var(--color-primary)]">
                      {researcher.achievement}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline of Hope */}
      <section className="py-20 bg-[var(--color-primary)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              72 Years of Hope
            </h2>
            <p className="text-white/70 mt-4">
              Milestones in our journey to cure cancer
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <div className="text-[var(--color-secondary)] font-bold text-2xl mb-1">
                      {milestone.year}
                    </div>
                    <div className="text-white font-bold mb-1">
                      {milestone.event}
                    </div>
                    <div className="text-white/60 text-sm">
                      {milestone.impact}
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--color-secondary)] border-4 border-[var(--color-primary)]" />

                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Support Research */}
      <section className="py-20 bg-gradient-to-b from-[var(--color-accent)] to-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="text-6xl mb-6">💜</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
            Help Us Write More Stories of Hope
          </h2>
          <p className="text-[var(--color-text-light)] text-lg mb-8 max-w-2xl mx-auto">
            Every contribution — whether you volunteer, donate, or simply share our mission —
            brings us closer to a world without cancer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-[var(--color-primary)] text-white font-bold rounded-full hover:bg-[var(--color-primary)]/90 transition-colors">
              Support Our Research
            </button>
            <button className="px-8 py-4 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-colors">
              Join a Clinical Trial
            </button>
            <button className="px-8 py-4 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-colors">
              Share a Story
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-primary)] text-white py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Cancer Institute (WIA). All rights reserved. | With Humanity and In Wisdom
          </p>
          <p className="text-[var(--color-secondary)] text-xs mt-2">
            Research Showcase - Variation 3: Patient Impact
          </p>
        </div>
      </footer>
    </div>
  );
}
