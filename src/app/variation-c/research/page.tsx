"use client";

import { useState } from "react";
import Link from "next/link";
import MockupNav from "@/components/MockupNav";
import Button from "@/components/variation-c/Button";
import Card from "@/components/variation-c/Card";

const stats = [
  {
    value: "160+",
    label: "Active Studies",
    icon: (
      <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    value: "85",
    label: "Publications 2024",
    icon: (
      <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    value: "₹45 Cr",
    label: "Research Funding",
    icon: (
      <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: "25+",
    label: "Global Partners",
    icon: (
      <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const researchAreas = [
  { name: "Clinical Trials", count: 45, image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80", color: "from-blue-500 to-blue-600" },
  { name: "Genomics", count: 28, image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80", color: "from-purple-500 to-purple-600" },
  { name: "Immunotherapy", count: 32, image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80", color: "from-teal-500 to-teal-600" },
  { name: "Drug Discovery", count: 18, image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80", color: "from-orange-500 to-orange-600" },
  { name: "Epidemiology", count: 15, image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80", color: "from-pink-500 to-pink-600" },
  { name: "Translational", count: 22, image: "https://images.unsplash.com/photo-1581093804475-577d72e38aa0?w=800&q=80", color: "from-indigo-500 to-indigo-600" },
];

const clinicalTrials = [
  { id: "CT-2026-001", title: "Novel Immunotherapy Combination in Advanced NSCLC", phase: "Phase III", status: "Recruiting", category: "Lung" },
  { id: "CT-2025-048", title: "Targeted Therapy for HER2-Positive Breast Cancer", phase: "Phase II", status: "Recruiting", category: "Breast" },
  { id: "CT-2025-035", title: "CAR-T Cell Therapy in Relapsed B-Cell Lymphoma", phase: "Phase II", status: "Active", category: "Hematology" },
  { id: "CT-2025-022", title: "Biomarker-Driven Treatment in Colorectal Cancer", phase: "Phase III", status: "Recruiting", category: "GI" },
];

const publications = [
  { title: "Efficacy of Combined Immunotherapy in Triple-Negative Breast Cancer", journal: "J Clin Oncol", year: "2025", impact: "High" },
  { title: "Genomic Profiling Reveals Novel Therapeutic Targets", journal: "Nature Med", year: "2025", impact: "High" },
  { title: "Long-term Outcomes of Minimally Invasive Surgery in Gastric Cancer", journal: "Ann Surg Oncol", year: "2024", impact: "Medium" },
];

const researchers = [
  { name: "Dr. Priya Sharma", role: "Director of Research", pubs: 50, image: "/sample_doc.png" },
  { name: "Dr. Venkat S.", role: "Chief Scientist", pubs: 85, image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80" },
  { name: "Dr. Rajesh Kumar", role: "Surgical Research Lead", pubs: 42, image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80" },
];

export default function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Lung", "Breast", "Hematology", "GI"];

  const filteredTrials = selectedCategory === "All"
    ? clinicalTrials
    : clinicalTrials.filter(t => t.category === selectedCategory);

  return (
    <>
      <MockupNav variationId="c" currentPage="research" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary)]/95 to-[var(--color-primary)]/90 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-secondary)] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm">
              <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              Research &amp; Innovation
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              Advancing Cancer Research,{" "}
              <span className="text-[var(--color-secondary)]">Saving Lives</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              At Cancer Institute (WIA), research is at the heart of our mission. Our scientists and clinicians work together to discover new treatments, improve existing therapies, and ultimately find a cure for cancer.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="secondary" size="lg" href="#">
                View Clinical Trials
              </Button>
              <Button variant="outline" size="lg" href="#" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
                Collaborate With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} variant="glass" padding="lg" rounded="2xl" className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[var(--color-primary)]">{stat.value}</div>
                <div className="text-sm text-[var(--color-text-light)]">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-14">
            <span className="text-[var(--color-secondary)] font-semibold">Our Focus</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
              Research Areas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <Card key={index} href="#" variant="elevated" padding="lg" rounded="2xl">
                <div className="w-14 h-14 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={area.image}
                    alt={area.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-text-dark)]">{area.name}</h3>
                    <p className="text-sm text-[var(--color-text-light)] mt-1">Active research programs</p>
                  </div>
                  <span className="text-2xl font-bold text-[var(--color-secondary)]">{area.count}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Trials */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <span className="text-[var(--color-secondary)] font-semibold">Join A Study</span>
              <h2 className="mt-2 text-3xl font-bold text-[var(--color-text-dark)]">
                Active Clinical Trials
              </h2>
            </div>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                  selectedCategory === cat
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-[var(--color-accent)] text-[var(--color-text-dark)] hover:bg-[var(--color-primary)]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Trials */}
          <div className="space-y-4">
            {filteredTrials.map((trial, index) => (
              <Card key={index} href="#" variant="outlined" padding="lg" rounded="2xl">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-bold rounded-full">
                        {trial.id}
                      </span>
                      <span className="px-3 py-1 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] text-xs font-bold rounded-full">
                        {trial.phase}
                      </span>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        trial.status === "Recruiting"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {trial.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-[var(--color-text-dark)] text-lg">{trial.title}</h3>
                  </div>
                  <Button variant="outline" size="sm" href="#">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="ghost" href="#">
              View All Clinical Trials →
            </Button>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="text-[var(--color-secondary)] font-semibold">Academic Contributions</span>
              <h2 className="mt-2 text-3xl font-bold text-[var(--color-text-dark)] mb-8">
                Recent Publications
              </h2>

              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <Card key={index} href="#" variant="elevated" padding="md" rounded="xl">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className={`inline-block px-2 py-1 text-xs font-bold rounded-full mb-2 ${
                          pub.impact === "High"
                            ? "bg-[var(--color-secondary)]/20 text-[var(--color-secondary)]"
                            : "bg-[var(--color-accent)] text-[var(--color-primary)]"
                        }`}>
                          {pub.impact} Impact
                        </span>
                        <h3 className="font-bold text-[var(--color-text-dark)]">{pub.title}</h3>
                        <p className="text-sm text-[var(--color-text-light)] mt-1">
                          {pub.journal} • {pub.year}
                        </p>
                      </div>
                      <svg className="w-5 h-5 text-[var(--color-text-light)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Card>
                ))}
              </div>

              <Button variant="ghost" href="#" className="mt-6">
                Browse All Publications →
              </Button>
            </div>

            {/* Research Leaders */}
            <div>
              <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-6">
                Research Leadership
              </h3>
              <div className="space-y-4">
                {researchers.map((r, index) => (
                  <Link key={index} href="/variation-c/doctor" className="flex items-center gap-4 group">
                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={r.image}
                        alt={r.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-text-dark)] group-hover:text-[var(--color-primary)] transition-colors">
                        {r.name}
                      </h4>
                      <p className="text-sm text-[var(--color-text-light)]">{r.role}</p>
                      <p className="text-xs text-[var(--color-secondary)] font-medium">{r.pubs} publications</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary)]/90 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="text-[var(--color-secondary)] font-semibold">Partner With Us</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            Collaborate on Research
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            We welcome collaborations with academic institutions, pharmaceutical companies, and research organizations worldwide. Together, we can accelerate the pace of cancer research.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" href="#">
              Contact Research Office
            </Button>
            <Button variant="outline" size="lg" href="#" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
              View Opportunities
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
