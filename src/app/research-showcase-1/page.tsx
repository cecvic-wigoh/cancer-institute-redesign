"use client";

import { useState } from "react";
import Image from "next/image";
import ResearchShowcaseNav from "@/components/ResearchShowcaseNav";

// ============================================================================
// RESEARCH SHOWCASE VARIATION 1: ACADEMIC EXCELLENCE
// A prestigious, journal-style layout emphasizing credibility, peer-reviewed
// publications, and academic rigor with data visualizations and scholarly aesthetic
// ============================================================================

// Research metrics with academic focus
const institutionalMetrics = {
  hIndex: 87,
  totalCitations: "12,450+",
  publicationsPerYear: 156,
  internationalCollaborations: 47,
  researchGrants: "₹125 Cr",
  clinicalTrials: 164,
  patents: 23,
  phdScholars: 45,
};

// Research focus areas with detailed academic info
const researchDomains = [
  {
    id: 1,
    name: "Molecular & Cellular Oncology",
    description: "Investigating the fundamental mechanisms of cancer at molecular and cellular levels, including signal transduction pathways, epigenetic modifications, and tumor microenvironment interactions.",
    leadResearcher: "Dr. Venkataraman Subramanian",
    publications: 234,
    activeGrants: 8,
    keyFindings: ["Novel p53 regulatory pathway", "Tumor suppressor gene discovery", "Epigenetic biomarkers"],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Immunotherapy & Cancer Vaccines",
    description: "Developing next-generation immunotherapeutic approaches including CAR-T cell therapies, checkpoint inhibitors, and personalized cancer vaccines targeting tumor-specific neoantigens.",
    leadResearcher: "Dr. Priya Sharma",
    publications: 189,
    activeGrants: 12,
    keyFindings: ["CAR-T optimization protocol", "Novel checkpoint combinations", "Neoantigen prediction algorithm"],
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Genomics & Precision Medicine",
    description: "Utilizing advanced genomic technologies for comprehensive tumor profiling, enabling personalized treatment strategies based on individual genetic mutations and molecular signatures.",
    leadResearcher: "Dr. Rajesh Kumar",
    publications: 167,
    activeGrants: 6,
    keyFindings: ["Indian population genomic atlas", "Liquid biopsy protocols", "Pharmacogenomic markers"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Clinical Epidemiology",
    description: "Large-scale population studies examining cancer incidence, risk factors, and outcomes specific to South Asian populations, informing public health policy and prevention strategies.",
    leadResearcher: "Dr. Anitha Rajan",
    publications: 145,
    activeGrants: 5,
    keyFindings: ["Regional cancer registry insights", "Risk factor correlations", "Screening optimization models"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Radiation Biology",
    description: "Advancing radiation therapy through radiobiology research, including hypofractionation studies, radiosensitizers, and normal tissue protection strategies.",
    leadResearcher: "Dr. Krishnamurthy S",
    publications: 98,
    activeGrants: 4,
    keyFindings: ["FLASH radiation protocols", "Hypoxia-targeting agents", "Late toxicity prediction"],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Drug Discovery & Development",
    description: "Translating laboratory discoveries into clinical applications through systematic drug development pipelines, from target identification to clinical trials.",
    leadResearcher: "Dr. Meenakshi Venkat",
    publications: 112,
    activeGrants: 7,
    keyFindings: ["Novel kinase inhibitors", "Natural product anticancer agents", "Drug repurposing candidates"],
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
  },
];

// Featured publications with full academic detail
const featuredPublications = [
  {
    id: 1,
    title: "Comprehensive Genomic Profiling Reveals Distinct Molecular Subtypes in Indian Breast Cancer Patients: Implications for Targeted Therapy",
    authors: "Sharma P, Kumar R, Subramanian V, et al.",
    journal: "Nature Medicine",
    year: 2025,
    volume: "31",
    pages: "234-248",
    doi: "10.1038/s41591-025-02847-3",
    impactFactor: 82.9,
    citations: 127,
    type: "Original Research",
    abstract: "A landmark study characterizing the genomic landscape of breast cancer in the Indian population, identifying actionable mutations and informing precision medicine approaches.",
  },
  {
    id: 2,
    title: "Phase III Trial of Combined PD-1 and CTLA-4 Blockade in Advanced Non-Small Cell Lung Cancer: Final Overall Survival Analysis",
    authors: "Rajan A, Krishnamurthy S, Sharma P, et al.",
    journal: "Journal of Clinical Oncology",
    year: 2025,
    volume: "43",
    pages: "112-125",
    doi: "10.1200/JCO.24.02156",
    impactFactor: 45.3,
    citations: 89,
    type: "Clinical Trial",
    abstract: "Definitive results demonstrating significant survival benefit with dual checkpoint inhibitor therapy, establishing a new standard of care.",
  },
  {
    id: 3,
    title: "Single-Cell RNA Sequencing Reveals Tumor Microenvironment Heterogeneity in Triple-Negative Breast Cancer",
    authors: "Subramanian V, Kumar R, Menon S, et al.",
    journal: "Cell",
    year: 2024,
    volume: "187",
    pages: "4521-4538",
    doi: "10.1016/j.cell.2024.08.043",
    impactFactor: 64.5,
    citations: 156,
    type: "Original Research",
    abstract: "Groundbreaking analysis of immune cell populations within the tumor microenvironment, identifying novel therapeutic targets.",
  },
  {
    id: 4,
    title: "Long-term Outcomes of Intensity-Modulated Radiation Therapy in Head and Neck Squamous Cell Carcinoma: A 10-Year Follow-up Study",
    authors: "Krishnamurthy S, Rajan A, Venkat M, et al.",
    journal: "The Lancet Oncology",
    year: 2024,
    volume: "25",
    pages: "e567-e578",
    doi: "10.1016/S1470-2045(24)00432-8",
    impactFactor: 51.1,
    citations: 67,
    type: "Cohort Study",
    abstract: "Comprehensive long-term analysis establishing IMRT as the gold standard for head and neck cancer treatment in resource-constrained settings.",
  },
];

// Clinical trials data
const clinicalTrials = [
  {
    id: "NCT05892341",
    title: "A Phase III, Randomized Study of Novel Anti-HER2 ADC Versus Standard Therapy in Metastatic Breast Cancer",
    phase: "Phase III",
    status: "Recruiting",
    enrollment: { current: 234, target: 450 },
    startDate: "2024-03",
    principalInvestigator: "Dr. Priya Sharma",
    collaborators: ["AIIMS Delhi", "TMC Mumbai", "CMC Vellore"],
  },
  {
    id: "NCT05781256",
    title: "Biomarker-Directed Neoadjuvant Immunotherapy in Locally Advanced Rectal Cancer",
    phase: "Phase II",
    status: "Active",
    enrollment: { current: 78, target: 120 },
    startDate: "2023-09",
    principalInvestigator: "Dr. Rajesh Kumar",
    collaborators: ["PGIMER Chandigarh", "KMC Manipal"],
  },
  {
    id: "NCT05934782",
    title: "CAR-T Cell Therapy Targeting CD19/CD22 in Relapsed/Refractory B-Cell Acute Lymphoblastic Leukemia",
    phase: "Phase I/II",
    status: "Recruiting",
    enrollment: { current: 23, target: 60 },
    startDate: "2024-06",
    principalInvestigator: "Dr. Venkataraman Subramanian",
    collaborators: ["NIH USA", "Royal Marsden UK"],
  },
  {
    id: "NCT05678234",
    title: "Hypofractionated Radiation with Concurrent Immunotherapy in Unresectable Hepatocellular Carcinoma",
    phase: "Phase II",
    status: "Recruiting",
    enrollment: { current: 45, target: 90 },
    startDate: "2024-01",
    principalInvestigator: "Dr. Anitha Rajan",
    collaborators: ["ILBS Delhi", "Medanta Gurgaon"],
  },
];

// Research funding sources
const fundingSources = [
  { name: "ICMR", amount: "₹45 Cr", projects: 23, logo: "/icmr-logo.png" },
  { name: "DBT", amount: "₹28 Cr", projects: 15, logo: "/dbt-logo.png" },
  { name: "DST", amount: "₹18 Cr", projects: 12, logo: "/dst-logo.png" },
  { name: "NIH (USA)", amount: "$2.4M", projects: 4, logo: "/nih-logo.png" },
  { name: "Wellcome Trust", amount: "£1.8M", projects: 3, logo: "/wellcome-logo.png" },
  { name: "Industry Partners", amount: "₹34 Cr", projects: 18, logo: "/industry-logo.png" },
];

// International collaborations
const collaborations = [
  { institution: "MD Anderson Cancer Center", country: "USA", projects: 8 },
  { institution: "Royal Marsden Hospital", country: "UK", projects: 5 },
  { institution: "National Cancer Institute", country: "USA", projects: 6 },
  { institution: "Karolinska Institute", country: "Sweden", projects: 3 },
  { institution: "RIKEN Center", country: "Japan", projects: 4 },
  { institution: "University of Toronto", country: "Canada", projects: 3 },
];

export default function ResearchShowcase1() {
  const [selectedDomain, setSelectedDomain] = useState(researchDomains[0]);
  const [publicationFilter, setPublicationFilter] = useState("all");

  return (
    <div className="min-h-screen bg-white">
      <ResearchShowcaseNav currentVariation="1" />

      {/* Hero: Academic Journal Style Header */}
      <header className="relative bg-gradient-to-b from-[var(--color-primary)] to-[#0a2d5e] overflow-hidden">
        {/* Abstract academic pattern background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="text-center">
            {/* Journal-style header */}
            <div className="inline-flex items-center gap-4 border-b-2 border-[var(--color-secondary)] pb-4 mb-8">
              <span className="text-[var(--color-secondary)] text-sm font-bold tracking-[0.3em] uppercase">
                Cancer Institute (WIA)
              </span>
              <span className="text-white/40">|</span>
              <span className="text-white/80 text-sm tracking-wider">
                Research & Innovation Division
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Advancing Cancer Science<br />
              <span className="text-[var(--color-secondary)]">Through Academic Excellence</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
              For over seven decades, our research programs have contributed foundational knowledge
              to oncology science, published in the world&apos;s most prestigious journals, and
              translated discoveries into life-saving treatments.
            </p>

            {/* Quick stats row - academic metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { value: institutionalMetrics.hIndex, label: "h-Index", sublabel: "Institutional" },
                { value: institutionalMetrics.totalCitations, label: "Total Citations", sublabel: "2015-2025" },
                { value: institutionalMetrics.publicationsPerYear, label: "Publications/Year", sublabel: "Average" },
                { value: institutionalMetrics.internationalCollaborations, label: "Global Partners", sublabel: "Active" },
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--color-secondary)]">
                    {stat.value}
                  </div>
                  <div className="text-white text-sm font-medium">{stat.label}</div>
                  <div className="text-white/50 text-xs">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-secondary)] to-transparent" />
      </header>

      {/* Research Impact Dashboard */}
      <section className="py-16 bg-[var(--color-accent)] border-b border-[var(--color-primary)]/10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
              Research Impact Dashboard
            </h2>
            <p className="text-[var(--color-text-light)] mt-2">
              Quantitative metrics demonstrating our contribution to oncology research
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { value: institutionalMetrics.clinicalTrials, label: "Active Clinical Trials", icon: "🔬" },
              { value: institutionalMetrics.patents, label: "Patents Filed", icon: "📜" },
              { value: institutionalMetrics.phdScholars, label: "PhD Scholars", icon: "🎓" },
              { value: institutionalMetrics.researchGrants, label: "Grant Funding", icon: "💰" },
              { value: "85%", label: "Industry-Sponsored Trials", icon: "🏢" },
              { value: "23", label: "Research Labs", icon: "🧪" },
              { value: "4.2", label: "Avg Impact Factor", icon: "📊" },
              { value: "98%", label: "Protocol Compliance", icon: "✓" },
            ].map((metric, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-[var(--color-primary)]/5 text-center">
                <div className="text-2xl mb-2">{metric.icon}</div>
                <div className="text-xl md:text-2xl font-bold text-[var(--color-primary)]">
                  {metric.value}
                </div>
                <div className="text-xs text-[var(--color-text-light)] leading-tight mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Domains - Deep Dive */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
              Research Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mt-2">
              Areas of Scientific Investigation
            </h2>
            <p className="text-[var(--color-text-light)] mt-4 max-w-2xl mx-auto">
              Our research spans fundamental science to clinical translation,
              addressing critical questions in cancer biology and treatment
            </p>
          </div>

          {/* Domain selector tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {researchDomains.map((domain) => (
              <button
                key={domain.id}
                onClick={() => setSelectedDomain(domain)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  selectedDomain.id === domain.id
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-white border border-[var(--color-primary)]/20 text-[var(--color-text-dark)] hover:border-[var(--color-primary)]"
                }`}
              >
                {domain.name}
              </button>
            ))}
          </div>

          {/* Selected domain detail */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Domain info */}
            <div className="bg-white rounded-2xl shadow-lg border border-[var(--color-primary)]/10 overflow-hidden">
              {/* Domain image */}
              <div className="relative h-64 bg-[var(--color-primary)]/5">
                <Image
                  src={selectedDomain.image}
                  alt={selectedDomain.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">{selectedDomain.name}</h3>
                  <p className="text-white/80 text-sm mt-1">Lead: {selectedDomain.leadResearcher}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-[var(--color-text-dark)] leading-relaxed mb-6">
                  {selectedDomain.description}
                </p>

                {/* Domain metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[var(--color-accent)] rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-[var(--color-primary)]">
                      {selectedDomain.publications}
                    </div>
                    <div className="text-xs text-[var(--color-text-light)]">Publications</div>
                  </div>
                  <div className="bg-[var(--color-accent)] rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-[var(--color-primary)]">
                      {selectedDomain.activeGrants}
                    </div>
                    <div className="text-xs text-[var(--color-text-light)]">Active Grants</div>
                  </div>
                </div>

                {/* Key findings */}
                <div>
                  <h4 className="font-bold text-[var(--color-primary)] mb-3">Key Discoveries</h4>
                  <ul className="space-y-2">
                    {selectedDomain.keyFindings.map((finding, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[var(--color-text-dark)]">
                        <svg className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {finding}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Publication visualization */}
            <div className="space-y-6">
              <div className="bg-[var(--color-primary)] rounded-2xl p-6 text-white">
                <h4 className="font-bold text-lg mb-4">Publication Trend (2020-2025)</h4>
                <div className="space-y-3">
                  {[
                    { year: "2025", count: 156, percentage: 100 },
                    { year: "2024", count: 142, percentage: 91 },
                    { year: "2023", count: 128, percentage: 82 },
                    { year: "2022", count: 115, percentage: 74 },
                    { year: "2021", count: 98, percentage: 63 },
                    { year: "2020", count: 87, percentage: 56 },
                  ].map((item) => (
                    <div key={item.year} className="flex items-center gap-3">
                      <span className="w-12 text-sm text-white/70">{item.year}</span>
                      <div className="flex-1 h-6 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[var(--color-secondary)] rounded-full transition-all duration-500"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <span className="w-10 text-sm font-bold text-right">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Citation metrics */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[var(--color-primary)]/10">
                <h4 className="font-bold text-[var(--color-primary)] mb-4">Citation Analysis</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[var(--color-secondary)]">4.2</div>
                    <div className="text-xs text-[var(--color-text-light)]">Avg Impact Factor</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[var(--color-secondary)]">18.3</div>
                    <div className="text-xs text-[var(--color-text-light)]">Avg Citations/Paper</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[var(--color-secondary)]">87</div>
                    <div className="text-xs text-[var(--color-text-light)]">h-Index</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Publications - Academic Style */}
      <section className="py-20 bg-gradient-to-b from-[var(--color-accent)] to-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
                Academic Contributions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mt-2">
                Featured Publications
              </h2>
              <p className="text-[var(--color-text-light)] mt-2">
                High-impact research published in leading peer-reviewed journals
              </p>
            </div>

            {/* Filter */}
            <div className="flex gap-2 mt-4 md:mt-0">
              {["all", "Original Research", "Clinical Trial", "Cohort Study"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setPublicationFilter(filter)}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                    publicationFilter === filter
                      ? "bg-[var(--color-primary)] text-white"
                      : "bg-white text-[var(--color-text-dark)] border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]"
                  }`}
                >
                  {filter === "all" ? "All Types" : filter}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {featuredPublications
              .filter(pub => publicationFilter === "all" || pub.type === publicationFilter)
              .map((pub) => (
              <article
                key={pub.id}
                className="bg-white rounded-xl shadow-md border border-[var(--color-primary)]/10 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6 md:p-8">
                  {/* Publication header */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-2 py-1 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] text-xs font-bold rounded">
                      IF: {pub.impactFactor}
                    </span>
                    <span className="px-2 py-1 bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-bold rounded">
                      {pub.type}
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                      {pub.citations} Citations
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-primary)] leading-snug mb-3 hover:text-[var(--color-secondary)] transition-colors cursor-pointer">
                    {pub.title}
                  </h3>

                  {/* Authors */}
                  <p className="text-[var(--color-text-dark)] text-sm mb-3">
                    {pub.authors}
                  </p>

                  {/* Journal info */}
                  <p className="text-[var(--color-text-light)] text-sm mb-4">
                    <span className="font-semibold">{pub.journal}</span>
                    {" "}| {pub.year}; {pub.volume}: {pub.pages}
                    {" "}| DOI: <span className="text-[var(--color-secondary)]">{pub.doi}</span>
                  </p>

                  {/* Abstract */}
                  <p className="text-[var(--color-text-dark)] text-sm leading-relaxed border-l-4 border-[var(--color-secondary)] pl-4 bg-[var(--color-accent)]/50 py-3 rounded-r">
                    {pub.abstract}
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    <button className="px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-medium rounded hover:bg-[var(--color-primary)]/90 transition-colors">
                      View Full Text
                    </button>
                    <button className="px-4 py-2 border border-[var(--color-primary)]/20 text-[var(--color-primary)] text-sm font-medium rounded hover:bg-[var(--color-accent)] transition-colors">
                      Download PDF
                    </button>
                    <button className="px-4 py-2 border border-[var(--color-primary)]/20 text-[var(--color-primary)] text-sm font-medium rounded hover:bg-[var(--color-accent)] transition-colors">
                      Cite
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:bg-[var(--color-primary)]/90 transition-colors">
              Browse All Publications →
            </button>
          </div>
        </div>
      </section>

      {/* Clinical Trials Registry */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
              Clinical Research
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mt-2">
              Clinical Trials Registry
            </h2>
            <p className="text-[var(--color-text-light)] mt-4 max-w-2xl mx-auto">
              Actively recruiting studies and ongoing clinical investigations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {clinicalTrials.map((trial) => (
              <div
                key={trial.id}
                className="bg-white rounded-xl shadow-md border border-[var(--color-primary)]/10 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  {/* Trial badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-bold rounded font-mono">
                      {trial.id}
                    </span>
                    <span className="px-2 py-1 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] text-xs font-bold rounded">
                      {trial.phase}
                    </span>
                    <span className={`px-2 py-1 text-xs font-bold rounded ${
                      trial.status === "Recruiting"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      {trial.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-3 leading-snug">
                    {trial.title}
                  </h3>

                  {/* Enrollment progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[var(--color-text-light)]">Enrollment Progress</span>
                      <span className="font-bold text-[var(--color-primary)]">
                        {trial.enrollment.current}/{trial.enrollment.target}
                      </span>
                    </div>
                    <div className="h-2 bg-[var(--color-accent)] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--color-secondary)] rounded-full"
                        style={{ width: `${(trial.enrollment.current / trial.enrollment.target) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--color-text-light)]">Principal Investigator:</span>
                      <span className="font-medium text-[var(--color-text-dark)]">{trial.principalInvestigator}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--color-text-light)]">Collaborators:</span>
                      <span className="font-medium text-[var(--color-text-dark)]">{trial.collaborators.join(", ")}</span>
                    </div>
                  </div>

                  {/* Action */}
                  <button className="w-full mt-4 px-4 py-2 border border-[var(--color-primary)] text-[var(--color-primary)] text-sm font-medium rounded hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                    View Study Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="px-6 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-medium rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-colors">
              View All Clinical Trials →
            </button>
          </div>
        </div>
      </section>

      {/* Funding & Collaborations */}
      <section className="py-20 bg-[var(--color-primary)] text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Funding Sources */}
            <div>
              <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
                Research Support
              </span>
              <h2 className="text-3xl font-bold mt-2 mb-8">
                Funding Sources
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {fundingSources.map((source, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4"
                  >
                    <div className="text-lg font-bold text-[var(--color-secondary)]">{source.name}</div>
                    <div className="text-2xl font-bold text-white mt-1">{source.amount}</div>
                    <div className="text-white/60 text-sm">{source.projects} Active Projects</div>
                  </div>
                ))}
              </div>
            </div>

            {/* International Collaborations */}
            <div>
              <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
                Global Network
              </span>
              <h2 className="text-3xl font-bold mt-2 mb-8">
                International Collaborations
              </h2>

              <div className="space-y-4">
                {collaborations.map((collab, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4"
                  >
                    <div>
                      <div className="font-bold text-white">{collab.institution}</div>
                      <div className="text-white/60 text-sm">{collab.country}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[var(--color-secondary)]">{collab.projects}</div>
                      <div className="text-white/60 text-xs">Projects</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Collaborate */}
      <section className="py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
            Collaborate With Us
          </h2>
          <p className="text-[var(--color-text-light)] text-lg mb-8 max-w-2xl mx-auto">
            Join our research network. We welcome collaborations with academic institutions,
            pharmaceutical companies, and research organizations worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-[var(--color-primary)] text-white font-bold rounded-lg hover:bg-[var(--color-primary)]/90 transition-colors">
              Contact Research Office
            </button>
            <button className="px-8 py-4 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-colors">
              Download Research Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-primary)] text-white py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Cancer Institute (WIA). All rights reserved. | Research Division
          </p>
          <p className="text-[var(--color-secondary)] text-xs mt-2">
            Research Showcase - Variation 1: Academic Excellence
          </p>
        </div>
      </footer>
    </div>
  );
}
