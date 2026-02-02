"use client";

import { useState } from "react";
import Link from "next/link";
import MockupNav from "@/components/MockupNav";
import Button from "@/components/variation-a/Button";
import Card from "@/components/variation-a/Card";

const researchAreas = [
  {
    name: "Clinical Trials",
    description: "Evaluating new treatments and therapies for cancer patients",
    icon: "🔬",
    studies: 45,
  },
  {
    name: "Genomics & Precision Medicine",
    description: "Understanding genetic factors that influence cancer development",
    icon: "🧬",
    studies: 28,
  },
  {
    name: "Immunotherapy Research",
    description: "Developing immune-based approaches to fight cancer",
    icon: "🛡️",
    studies: 32,
  },
  {
    name: "Drug Discovery",
    description: "Identifying and developing new anti-cancer compounds",
    icon: "💊",
    studies: 18,
  },
  {
    name: "Epidemiology",
    description: "Studying cancer patterns and risk factors in populations",
    icon: "📊",
    studies: 15,
  },
  {
    name: "Translational Research",
    description: "Bridging laboratory discoveries to clinical applications",
    icon: "🔄",
    studies: 22,
  },
];

const clinicalTrials = [
  {
    id: "CT-2026-001",
    title: "Phase III Trial of Novel Immunotherapy Combination in Advanced NSCLC",
    status: "Recruiting",
    phase: "Phase III",
    category: "Lung Cancer",
  },
  {
    id: "CT-2025-048",
    title: "Targeted Therapy for HER2-Positive Breast Cancer: A Multi-Center Study",
    status: "Recruiting",
    phase: "Phase II",
    category: "Breast Cancer",
  },
  {
    id: "CT-2025-035",
    title: "CAR-T Cell Therapy in Relapsed/Refractory B-Cell Lymphoma",
    status: "Active",
    phase: "Phase II",
    category: "Hematology",
  },
  {
    id: "CT-2025-022",
    title: "Biomarker-Driven Treatment Selection in Colorectal Cancer",
    status: "Recruiting",
    phase: "Phase III",
    category: "GI Oncology",
  },
];

const publications = [
  {
    title: "Efficacy of Combined Immunotherapy in Triple-Negative Breast Cancer: A Randomized Clinical Trial",
    authors: "Sharma P, Kumar R, et al.",
    journal: "Journal of Clinical Oncology",
    year: 2025,
    impact: "High Impact",
  },
  {
    title: "Genomic Profiling Reveals Novel Therapeutic Targets in Indian Lung Cancer Patients",
    authors: "Rajan A, Menon S, et al.",
    journal: "Nature Medicine",
    year: 2025,
    impact: "High Impact",
  },
  {
    title: "Long-term Outcomes of Minimally Invasive Surgery in Gastric Cancer",
    authors: "Krishnan A, Venkat L, et al.",
    journal: "Annals of Surgical Oncology",
    year: 2024,
    impact: "Medium Impact",
  },
  {
    title: "Real-World Evidence of Biosimilar Efficacy in Cancer Treatment",
    authors: "Patel S, Reddy M, et al.",
    journal: "Indian Journal of Cancer",
    year: 2024,
    impact: "Medium Impact",
  },
];

const researchers = [
  { name: "Dr. Priya Sharma", role: "Director of Clinical Research", area: "Medical Oncology" },
  { name: "Dr. Rajesh Kumar", role: "Head, Surgical Research", area: "Surgical Oncology" },
  { name: "Dr. Anitha Rajan", role: "Lead, Radiation Research", area: "Radiation Oncology" },
  { name: "Dr. Venkat Subramanian", role: "Chief Scientist", area: "Genomics Lab" },
];

const partners = [
  "ICMR", "DST", "DBT", "AIIMS", "CMC Vellore", "Tata Memorial", "WHO", "NIH"
];

const impactMetrics = [
  { label: "Active Studies", value: "160+" },
  { label: "Publications (2024)", value: "85" },
  { label: "Research Grants (Cr)", value: "₹45" },
  { label: "International Collaborations", value: "25" },
];

export default function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Lung Cancer", "Breast Cancer", "Hematology", "GI Oncology"];

  const filteredTrials = selectedCategory === "All"
    ? clinicalTrials
    : clinicalTrials.filter(trial => trial.category === selectedCategory);

  return (
    <>
      <MockupNav variationId="a" currentPage="research" />

      {/* Hero Section */}
      <section className="bg-[var(--color-primary)] text-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <div className="h-1 w-16 bg-[var(--color-secondary)] mb-6" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Pioneering Cancer Research
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              At Cancer Institute (WIA), research is at the heart of our mission. Our scientists and clinicians work together to discover new treatments, improve existing therapies, and ultimately find a cure for cancer.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="secondary" href="#">
                View Clinical Trials
              </Button>
              <Button variant="outline" href="#" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
                Collaborate With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="bg-[var(--color-accent)] border-y border-[var(--color-primary)]/10">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
                  {metric.value}
                </div>
                <div className="mt-1 text-sm md:text-base text-[var(--color-text-light)]">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text-dark)]">Research Areas</h2>
            <p className="mt-4 text-lg text-[var(--color-text-light)] max-w-2xl mx-auto">
              Our research spans multiple disciplines, all focused on improving cancer outcomes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <Card key={index} href="#" padding="lg">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-lg font-bold text-[var(--color-primary)]">{area.name}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-light)]">{area.description}</p>
                <p className="mt-4 text-xs font-semibold text-[var(--color-secondary)]">
                  {area.studies} Active Studies
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Trials */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)]">Current Clinical Trials</h2>
              <p className="mt-2 text-[var(--color-text-light)]">
                Explore our ongoing research studies seeking participants
              </p>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-white text-[var(--color-text-dark)] border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Trials List */}
          <div className="space-y-4">
            {filteredTrials.map((trial, index) => (
              <Card key={index} href="#" padding="lg">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-semibold rounded">
                        {trial.id}
                      </span>
                      <span className="px-2 py-0.5 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] text-xs font-semibold rounded">
                        {trial.phase}
                      </span>
                      <span className={`px-2 py-0.5 text-xs font-semibold rounded ${
                        trial.status === "Recruiting"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {trial.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-[var(--color-text-dark)]">{trial.title}</h3>
                    <p className="text-sm text-[var(--color-text-light)] mt-1">Category: {trial.category}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button variant="outline" size="sm" href="#">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" href="#">View All Clinical Trials</Button>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)]">Recent Publications</h2>
              <p className="mt-2 text-[var(--color-text-light)]">
                Our research contributions to the scientific community
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              {/* Search placeholder */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search publications..."
                  className="w-full md:w-64 px-4 py-2 pl-10 border border-[var(--color-primary)]/20 rounded-lg text-sm focus:outline-none focus:border-[var(--color-secondary)]"
                />
                <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-light)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {publications.map((pub, index) => (
              <Card key={index} href="#" padding="md">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded mb-2 ${
                      pub.impact === "High Impact"
                        ? "bg-[var(--color-secondary)]/20 text-[var(--color-secondary)]"
                        : "bg-[var(--color-accent)] text-[var(--color-primary)]"
                    }`}>
                      {pub.impact}
                    </span>
                    <h3 className="font-bold text-[var(--color-text-dark)] leading-snug">{pub.title}</h3>
                    <p className="text-sm text-[var(--color-text-light)] mt-2">{pub.authors}</p>
                    <p className="text-sm text-[var(--color-text-light)]">
                      <span className="font-medium">{pub.journal}</span> &bull; {pub.year}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-[var(--color-secondary)] text-sm font-medium hover:underline">View Paper →</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" href="#">Browse All Publications</Button>
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[var(--color-text-dark)]">Research Leadership</h2>
            <p className="mt-2 text-[var(--color-text-light)]">Meet the scientists driving our research programs</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchers.map((researcher, index) => (
              <Link key={index} href="/variation-a/doctor">
                <Card padding="lg">
                  {/* Photo placeholder */}
                  <div className="w-20 h-20 mx-auto bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-[var(--color-text-dark)]">{researcher.name}</h3>
                    <p className="text-sm text-[var(--color-secondary)]">{researcher.role}</p>
                    <p className="text-xs text-[var(--color-text-light)] mt-1">{researcher.area}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborate With Us */}
      <section className="py-16 md:py-20 bg-[var(--color-primary)] text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">Collaborate With Us</h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                We welcome collaborations with academic institutions, pharmaceutical companies, and research organizations worldwide. Together, we can accelerate the pace of cancer research and bring new treatments to patients faster.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to diverse patient populations</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>State-of-the-art research facilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Experienced research team</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>IRB-approved protocols</span>
                </div>
              </div>
              <div className="mt-8">
                <Button variant="secondary" href="#">
                  Contact Research Office
                </Button>
              </div>
            </div>
            <div>
              {/* Data visualization placeholder */}
              <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-6">Research Impact 2020-2025</h3>
                <div className="space-y-4">
                  {[
                    { label: "Publications", value: 85, max: 100 },
                    { label: "Clinical Trials", value: 72, max: 100 },
                    { label: "Patents Filed", value: 45, max: 100 },
                    { label: "Collaborations", value: 60, max: 100 },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{item.label}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[var(--color-secondary)] rounded-full"
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding & Partners */}
      <section className="py-12 border-t border-[var(--color-primary)]/10">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="text-center text-sm font-semibold text-[var(--color-text-light)] uppercase tracking-wider mb-8">
            Research Partners & Funding Bodies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-[var(--color-accent)] rounded-lg text-[var(--color-primary)] font-bold text-sm"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
