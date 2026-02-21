"use client";

import { useState } from "react";
import Link from "next/link";
import MockupNav from "@/components/MockupNav";
import Button from "@/components/variation-b/Button";
import Card from "@/components/variation-b/Card";

const featuredResearch = {
  category: "Clinical Trial",
  title: "Phase III Trial Shows Breakthrough Results in Combined Immunotherapy for Advanced NSCLC",
  excerpt: "A landmark study conducted at Cancer Institute (WIA) demonstrates a 40% improvement in survival rates using a novel combination of checkpoint inhibitors and targeted therapy in patients with advanced non-small cell lung cancer.",
  date: "February 1, 2026",
  readTime: "8 min read",
  authors: "Sharma P, Kumar R, Rajan A et al.",
};

const researchAreas = [
  { name: "Clinical Trials", count: 45, description: "Active studies evaluating new treatments", image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80" },
  { name: "Genomics", count: 28, description: "Precision medicine and genetic research", image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80" },
  { name: "Immunotherapy", count: 32, description: "Immune-based cancer treatments", image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&q=80" },
  { name: "Drug Discovery", count: 18, description: "Novel therapeutic compounds", image: "https://images.unsplash.com/photo-1581093804475-577d72e38aa0?w=800&q=80" },
  { name: "Epidemiology", count: 15, description: "Population-based cancer studies", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80" },
  { name: "Translational", count: 22, description: "Lab to bedside research", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80" },
];

const clinicalTrials = [
  {
    id: "CT-2026-001",
    title: "Novel Immunotherapy Combination in Advanced NSCLC",
    phase: "Phase III",
    status: "Recruiting",
    category: "Lung Cancer",
  },
  {
    id: "CT-2025-048",
    title: "Targeted Therapy for HER2-Positive Breast Cancer",
    phase: "Phase II",
    status: "Recruiting",
    category: "Breast Cancer",
  },
  {
    id: "CT-2025-035",
    title: "CAR-T Cell Therapy in Relapsed B-Cell Lymphoma",
    phase: "Phase II",
    status: "Active",
    category: "Hematology",
  },
];

const publications = [
  {
    title: "Efficacy of Combined Immunotherapy in Triple-Negative Breast Cancer: A Randomized Clinical Trial",
    authors: "Sharma P, Kumar R, et al.",
    journal: "Journal of Clinical Oncology",
    year: "2025",
    citations: 45,
  },
  {
    title: "Genomic Profiling Reveals Novel Therapeutic Targets in Indian Lung Cancer Patients",
    authors: "Rajan A, Menon S, et al.",
    journal: "Nature Medicine",
    year: "2025",
    citations: 78,
  },
  {
    title: "Long-term Outcomes of Minimally Invasive Surgery in Gastric Cancer",
    authors: "Krishnan A, Venkat L, et al.",
    journal: "Annals of Surgical Oncology",
    year: "2024",
    citations: 32,
  },
];

const researchers = [
  { name: "Dr. Priya Sharma", role: "Director of Research", publications: 50, image: "/sample_doc.png" },
  { name: "Dr. Venkat Subramanian", role: "Chief Scientist", publications: 85, image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80" },
  { name: "Dr. Rajesh Kumar", role: "Surgical Research Lead", publications: 42, image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80" },
  { name: "Dr. Anitha Rajan", role: "Radiation Research Lead", publications: 38, image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80" },
];

export default function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Lung Cancer", "Breast Cancer", "Hematology"];

  const filteredTrials = selectedCategory === "All"
    ? clinicalTrials
    : clinicalTrials.filter(trial => trial.category === selectedCategory);

  return (
    <>
      <MockupNav variationId="b" currentPage="research" />

      {/* Hero - Editorial Feature Story */}
      <section className="bg-[var(--color-primary)] relative overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-3">
            {/* Featured Research */}
            <div className="lg:col-span-2 p-8 lg:p-16 text-white">
              <span className="inline-block px-3 py-1 bg-[var(--color-secondary)] text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider mb-6">
                {featuredResearch.category}
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                {featuredResearch.title}
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                {featuredResearch.excerpt}
              </p>
              <p className="text-sm text-white/60 mb-2">
                {featuredResearch.authors}
              </p>
              <div className="flex items-center gap-4 text-sm text-white/60 mb-8">
                <span>{featuredResearch.date}</span>
                <span>•</span>
                <span>{featuredResearch.readTime}</span>
              </div>
              <Button variant="secondary" href="#">
                Read Full Paper
              </Button>
            </div>

            {/* Stats Sidebar */}
            <div className="bg-[var(--color-text-dark)] p-8 lg:p-12">
              <h2 className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm mb-8 pb-4 border-b border-white/20">
                Research Impact
              </h2>
              <div className="space-y-8">
                {[
                  { value: "160+", label: "Active Studies" },
                  { value: "85", label: "Publications (2024)" },
                  { value: "₹45 Cr", label: "Research Grants" },
                  { value: "25", label: "Global Partners" },
                ].map((stat, index) => (
                  <div key={index} className="border-b border-white/20 pb-6">
                    <div className="text-3xl font-bold text-[var(--color-secondary)]">
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-sm uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
            Our Focus
          </span>
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mt-2 mb-10">
            Research Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <Link key={index} href="#" className="group bg-white border-2 border-[var(--color-primary)]/10 hover:border-[var(--color-secondary)] transition-colors overflow-hidden">
                <div className="h-36 overflow-hidden">
                  <img
                    src={area.image}
                    alt={`${area.name} research`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-[var(--color-primary)]">
                        {area.name}
                      </h3>
                      <p className="text-[var(--color-text-light)] text-sm mt-1">
                        {area.description}
                      </p>
                    </div>
                    <span className="text-[var(--color-secondary)] font-bold text-2xl ml-4">
                      {area.count}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Trials */}
      <section className="py-16 md:py-24 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
                Join A Study
              </span>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mt-2">
                Active Clinical Trials
              </h2>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${
                  selectedCategory === category
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-white text-[var(--color-text-dark)] border-2 border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Trials List */}
          <div className="space-y-4">
            {filteredTrials.map((trial, index) => (
              <Card key={index} href="#" variant="default" padding="lg">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider">
                        {trial.id}
                      </span>
                      <span className="px-2 py-0.5 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] text-xs font-bold uppercase tracking-wider">
                        {trial.phase}
                      </span>
                      <span className={`px-2 py-0.5 text-xs font-bold uppercase tracking-wider ${
                        trial.status === "Recruiting"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {trial.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-[var(--color-text-dark)] text-lg">
                      {trial.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-light)] mt-1">
                      Category: {trial.category}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" href="#">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" href="#">
              View All Clinical Trials
            </Button>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
                Academic Contributions
              </span>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mt-2 mb-8">
                Recent Publications
              </h2>

              <div className="space-y-0">
                {publications.map((pub, index) => (
                  <Card key={index} href="#" variant="minimal" padding="md">
                    <h3 className="font-bold text-[var(--color-text-dark)] leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-light)] mt-2">
                      {pub.authors}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm text-[var(--color-text-light)]">
                        {pub.journal} • {pub.year}
                      </span>
                      <span className="text-[var(--color-secondary)] text-sm font-bold">
                        {pub.citations} citations
                      </span>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-6">
                <Button variant="outline" href="#">
                  Browse All Publications
                </Button>
              </div>
            </div>

            {/* Research Team */}
            <div>
              <h3 className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm mb-6 pb-4 border-b-4 border-[var(--color-primary)]">
                Research Leadership
              </h3>
              <div className="space-y-6">
                {researchers.map((researcher, index) => (
                  <Link key={index} href="/variation-b/doctor" className="flex items-center gap-4 group">
                    <div className="w-14 h-14 flex-shrink-0 overflow-hidden">
                      <img
                        src={researcher.image}
                        alt={researcher.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-text-dark)] group-hover:text-[var(--color-primary)] transition-colors">
                        {researcher.name}
                      </h4>
                      <p className="text-sm text-[var(--color-text-light)]">{researcher.role}</p>
                      <p className="text-xs text-[var(--color-secondary)] font-bold">{researcher.publications} publications</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="bg-[var(--color-text-dark)] text-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
            Partner With Us
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-6">
            Collaborate on Research
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            We welcome collaborations with academic institutions, pharmaceutical companies, and research organizations worldwide. Together, we can accelerate the pace of cancer research.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" href="#">
              Contact Research Office
            </Button>
            <Button variant="outline" href="#" className="border-white text-white hover:bg-white hover:text-[var(--color-text-dark)]">
              View Opportunities
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
