"use client";

import { useState } from "react";
import Image from "next/image";
import ResearchShowcaseNav from "@/components/ResearchShowcaseNav";

// ============================================================================
// RESEARCH SHOWCASE VARIATION 2: INNOVATION HUB
// A modern, dynamic design showcasing cutting-edge research with interactive
// elements, breakthrough discoveries, and a tech-forward aesthetic
// ============================================================================

// Breakthrough discoveries with visual impact
const breakthroughs = [
  {
    id: 1,
    year: 2025,
    title: "First CAR-T Cell Therapy Program in South India",
    description: "Pioneering personalized cancer immunotherapy, our CAR-T program has achieved 87% complete remission in refractory B-cell cancers.",
    impact: "234 Lives Saved",
    category: "Immunotherapy",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: 2,
    year: 2024,
    title: "AI-Powered Early Detection Algorithm",
    description: "Our machine learning model detects lung cancer nodules with 96% accuracy, enabling treatment 18 months earlier than conventional screening.",
    impact: "96% Accuracy",
    category: "AI & Diagnostics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: 3,
    year: 2024,
    title: "Novel Oral Chemotherapy Compound",
    description: "CI-2847, our proprietary compound, shows 40% better efficacy with significantly reduced side effects in colorectal cancer.",
    impact: "Phase III Trial",
    category: "Drug Discovery",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: 4,
    year: 2023,
    title: "Liquid Biopsy for Real-Time Monitoring",
    description: "Non-invasive cancer monitoring through circulating tumor DNA, replacing painful repeated biopsies.",
    impact: "Zero Invasive Tests",
    category: "Diagnostics",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=600&fit=crop",
    featured: false,
  },
];

// Innovation areas with futuristic presentation
const innovationAreas = [
  {
    icon: "🧬",
    title: "Precision Medicine",
    subtitle: "Personalized Treatment",
    description: "Tailoring cancer treatment based on individual genetic profiles for maximum efficacy.",
    stats: { projects: 28, breakthroughs: 7 },
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    subtitle: "Smart Diagnostics",
    description: "Leveraging artificial intelligence for early detection and treatment optimization.",
    stats: { projects: 15, breakthroughs: 4 },
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: "💉",
    title: "Immunotherapy",
    subtitle: "Immune Engineering",
    description: "Training the body's immune system to recognize and destroy cancer cells.",
    stats: { projects: 32, breakthroughs: 9 },
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    icon: "🔬",
    title: "Nanotechnology",
    subtitle: "Targeted Delivery",
    description: "Ultra-precise drug delivery systems that target cancer cells while sparing healthy tissue.",
    stats: { projects: 12, breakthroughs: 3 },
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: "🧪",
    title: "Biomarker Discovery",
    subtitle: "Early Detection",
    description: "Identifying molecular signatures that predict cancer years before symptoms appear.",
    stats: { projects: 19, breakthroughs: 6 },
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: "🌐",
    title: "Digital Health",
    subtitle: "Connected Care",
    description: "Remote monitoring, telemedicine, and digital tools enhancing patient outcomes.",
    stats: { projects: 8, breakthroughs: 2 },
    gradient: "from-violet-500 to-purple-600",
  },
];

// Innovation metrics with dynamic visualization data
const innovationMetrics = [
  { label: "Patents Filed", value: 47, growth: "+23%", icon: "📜" },
  { label: "Tech Transfers", value: 12, growth: "+67%", icon: "🔄" },
  { label: "Startup Spinoffs", value: 5, growth: "+150%", icon: "🚀" },
  { label: "Industry Partners", value: 34, growth: "+42%", icon: "🤝" },
];

// Research labs with cutting-edge facilities
const researchLabs = [
  {
    name: "Advanced Genomics Lab",
    equipment: ["Illumina NovaSeq X", "10X Genomics Chromium", "Oxford Nanopore"],
    focus: "Single-cell sequencing, spatial transcriptomics",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3250a8e0?w=600&h=400&fit=crop",
  },
  {
    name: "Cell Therapy Manufacturing",
    equipment: ["CliniMACS Prodigy", "Cytiva Wave Bioreactor", "CAR-T Incubators"],
    focus: "GMP-grade cell therapy production",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
  },
  {
    name: "Computational Biology Center",
    equipment: ["GPU Cluster (500+ TFLOPS)", "High-Memory Servers", "Custom ML Pipeline"],
    focus: "AI model training, bioinformatics analysis",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    name: "Drug Discovery Hub",
    equipment: ["High-Throughput Screening", "Mass Spectrometry", "NMR Facility"],
    focus: "Compound identification and optimization",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop",
  },
];

// Active clinical trials with innovative approaches
const innovativeTrials = [
  {
    id: "INNOV-001",
    title: "AI-Guided Adaptive Radiation Therapy",
    innovation: "Real-time AI adjusts radiation beam based on tumor movement",
    phase: "Phase II",
    status: "Recruiting",
    enrollment: 45,
  },
  {
    id: "INNOV-002",
    title: "Personalized Neoantigen Cancer Vaccine",
    innovation: "Custom vaccine created from patient's tumor mutations",
    phase: "Phase I/II",
    status: "Active",
    enrollment: 28,
  },
  {
    id: "INNOV-003",
    title: "Bispecific Antibody for Solid Tumors",
    innovation: "Novel dual-targeting immunotherapy approach",
    phase: "Phase I",
    status: "Recruiting",
    enrollment: 15,
  },
  {
    id: "INNOV-004",
    title: "Nano-Drug Delivery for Brain Metastases",
    innovation: "Nanoparticles that cross blood-brain barrier",
    phase: "Phase II",
    status: "Recruiting",
    enrollment: 32,
  },
];

// Partner ecosystem
const techPartners = [
  { name: "Google Health", type: "AI Partner" },
  { name: "Illumina", type: "Genomics" },
  { name: "Novartis", type: "Pharma" },
  { name: "Microsoft Research", type: "Computing" },
  { name: "NVIDIA", type: "AI Hardware" },
  { name: "10X Genomics", type: "Single-Cell" },
  { name: "Roche", type: "Diagnostics" },
  { name: "Bristol-Myers Squibb", type: "Immunotherapy" },
];

export default function ResearchShowcase2() {
  const [selectedArea, setSelectedArea] = useState<number | null>(null);
  const [hoveredBreakthrough, setHoveredBreakthrough] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-950">
      <ResearchShowcaseNav currentVariation="2" />

      {/* Hero: Futuristic Innovation Banner */}
      <header className="relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[var(--color-primary)] to-slate-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-secondary)] rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-[100px] animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px]" />
          </div>
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-32">
          <div className="text-center">
            {/* Innovation badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-secondary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-secondary)]"></span>
              </span>
              <span className="text-white/90 text-sm font-medium">Innovation Hub • Research & Development</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Inventing the Future<br />
              <span className="bg-gradient-to-r from-[var(--color-secondary)] to-cyan-400 bg-clip-text text-transparent">
                of Cancer Treatment
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-10">
              Where breakthrough science meets cutting-edge technology. Our innovation ecosystem
              is transforming how cancer is detected, treated, and ultimately cured.
            </p>

            {/* Live stats ticker */}
            <div className="inline-flex items-center gap-6 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              {[
                { label: "Active Innovations", value: "47" },
                { label: "Patents Pending", value: "23" },
                { label: "Tech Transfers", value: "12" },
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-2xl md:text-3xl font-bold text-[var(--color-secondary)]">{stat.value}</span>
                  <span className="text-white/40 text-xs md:text-sm">{stat.label}</span>
                  {index < 2 && <span className="text-white/20 mx-4">|</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-[var(--color-secondary)] rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </header>

      {/* Breakthrough Discoveries - Showcase Grid */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <span className="text-[var(--color-secondary)] font-bold uppercase tracking-[0.2em] text-sm">
              Recent Breakthroughs
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
              Transforming Cancer Care
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto">
              Our latest innovations making a real-world impact on patient outcomes
            </p>
          </div>

          {/* Featured Breakthroughs Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {breakthroughs.filter(b => b.featured).map((breakthrough) => (
              <div
                key={breakthrough.id}
                className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[var(--color-secondary)]/50 transition-all duration-500"
                onMouseEnter={() => setHoveredBreakthrough(breakthrough.id)}
                onMouseLeave={() => setHoveredBreakthrough(null)}
              >
                {/* Image */}
                <div className="relative h-64 md:h-80">
                  <Image
                    src={breakthrough.image}
                    alt={breakthrough.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[var(--color-secondary)] text-slate-900 text-xs font-bold rounded-full">
                      {breakthrough.year}
                    </span>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {breakthrough.category}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[var(--color-secondary)] transition-colors">
                    {breakthrough.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {breakthrough.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--color-secondary)] font-bold text-lg">
                      {breakthrough.impact}
                    </span>
                    <button className="px-4 py-2 bg-white/10 hover:bg-[var(--color-secondary)] text-white hover:text-slate-900 text-sm font-medium rounded-full transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary breakthroughs */}
          <div className="grid md:grid-cols-2 gap-6">
            {breakthroughs.filter(b => !b.featured).map((breakthrough) => (
              <div
                key={breakthrough.id}
                className="group flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--color-secondary)]/50 hover:bg-white/10 transition-all"
              >
                <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={breakthrough.image}
                    alt={breakthrough.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] text-xs font-bold rounded">
                      {breakthrough.year}
                    </span>
                    <span className="text-white/40 text-xs">{breakthrough.category}</span>
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1 group-hover:text-[var(--color-secondary)] transition-colors">
                    {breakthrough.title}
                  </h4>
                  <p className="text-white/50 text-xs line-clamp-2">{breakthrough.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Areas - Interactive Cards */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <span className="text-[var(--color-secondary)] font-bold uppercase tracking-[0.2em] text-sm">
              Innovation Pillars
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
              Research Focus Areas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovationAreas.map((area, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer ${
                  selectedArea === index ? "ring-2 ring-[var(--color-secondary)]" : ""
                }`}
                onClick={() => setSelectedArea(selectedArea === index ? null : index)}
              >
                {/* Gradient icon background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {area.icon}
                </div>

                <div className="mb-4">
                  <span className="text-white/40 text-xs uppercase tracking-wider">{area.subtitle}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-secondary)] transition-colors">
                    {area.title}
                  </h3>
                </div>

                <p className="text-white/50 text-sm mb-4">
                  {area.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-xl font-bold text-[var(--color-secondary)]">{area.stats.projects}</div>
                    <div className="text-white/40 text-xs">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-[var(--color-secondary)]">{area.stats.breakthroughs}</div>
                    <div className="text-white/40 text-xs">Breakthroughs</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-secondary)] transition-colors">
                    <svg className="w-5 h-5 text-white/50 group-hover:text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Metrics - Dynamic Stats */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] via-blue-600 to-[var(--color-primary)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {innovationMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-3xl mb-4">
                  {metric.icon}
                </div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-4xl md:text-5xl font-bold text-white">{metric.value}</span>
                  <span className="px-2 py-0.5 bg-[var(--color-secondary)] text-slate-900 text-xs font-bold rounded">
                    {metric.growth}
                  </span>
                </div>
                <div className="text-white/60 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Labs - Tech Showcase */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <span className="text-[var(--color-secondary)] font-bold uppercase tracking-[0.2em] text-sm">
              State-of-the-Art Facilities
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
              Research Infrastructure
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto">
              World-class laboratories equipped with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {researchLabs.map((lab, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[var(--color-secondary)]/50 transition-all"
              >
                {/* Lab image */}
                <div className="relative h-48">
                  <Image
                    src={lab.image}
                    alt={lab.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-secondary)] transition-colors">
                    {lab.name}
                  </h3>
                  <p className="text-white/50 text-sm mb-4">{lab.focus}</p>

                  {/* Equipment tags */}
                  <div className="flex flex-wrap gap-2">
                    {lab.equipment.map((item, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/5 text-white/70 text-xs rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovative Clinical Trials */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-[var(--color-secondary)] font-bold uppercase tracking-[0.2em] text-sm">
                Clinical Innovation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Experimental Trials
              </h2>
              <p className="text-white/50 mt-2">Novel approaches being tested in clinical settings</p>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-3 bg-[var(--color-secondary)] text-slate-900 font-bold rounded-full hover:bg-[var(--color-secondary)]/90 transition-colors">
              View All Trials →
            </button>
          </div>

          <div className="space-y-4">
            {innovativeTrials.map((trial) => (
              <div
                key={trial.id}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--color-secondary)]/50 hover:bg-white/10 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] text-xs font-bold rounded-full font-mono">
                        {trial.id}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-bold rounded-full">
                        {trial.phase}
                      </span>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        trial.status === "Recruiting"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}>
                        {trial.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--color-secondary)] transition-colors">
                      {trial.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[var(--color-secondary)]">✨ Innovation:</span>
                      <span className="text-white/60">{trial.innovation}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[var(--color-secondary)]">{trial.enrollment}</div>
                      <div className="text-white/40 text-xs">Enrolled</div>
                    </div>
                    <button className="px-5 py-2 border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white hover:text-slate-900 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-[var(--color-secondary)] font-bold uppercase tracking-[0.2em] text-sm">
              Innovation Ecosystem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Technology Partners
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techPartners.map((partner, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--color-secondary)]/50 hover:bg-white/10 transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white/50">{partner.name[0]}</span>
                </div>
                <h4 className="font-bold text-white text-sm mb-1">{partner.name}</h4>
                <p className="text-[var(--color-secondary)] text-xs">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA: Join the Innovation */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-primary)] via-purple-900 to-slate-900">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-secondary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-secondary)]"></span>
            </span>
            <span className="text-white/80 text-sm">Now Recruiting Innovators</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Join Our Innovation Ecosystem
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Whether you're a researcher, entrepreneur, or technology company —
            let's collaborate to transform cancer treatment together.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-[var(--color-secondary)] text-slate-900 font-bold rounded-full hover:bg-[var(--color-secondary)]/90 transition-colors">
              Partner With Us
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-slate-900 transition-colors">
              Explore Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-white/40 text-sm">
            © 2025 Cancer Institute (WIA). All rights reserved. | Innovation Hub
          </p>
          <p className="text-[var(--color-secondary)] text-xs mt-2">
            Research Showcase - Variation 2: Innovation Hub
          </p>
        </div>
      </footer>
    </div>
  );
}
