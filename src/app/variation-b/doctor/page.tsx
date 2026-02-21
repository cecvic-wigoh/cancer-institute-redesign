"use client";

import { useState } from "react";
import Link from "next/link";
import MockupNav from "@/components/MockupNav";
import Button from "@/components/variation-b/Button";
import Card from "@/components/variation-b/Card";

const tabs = ["Profile", "Credentials", "Publications", "Reviews"];

const education = [
  { year: "2020", degree: "M.D. (Microbiology)", institution: "Sri Ramachandra University (2016–2020)" },
  { year: "2019", degree: "Ph.D. (Dermato-Mycology)", institution: "Sri Ramachandra Medical College (2016–2019)" },
  { year: "2011", degree: "Ph.D. (Dermato-Mycology)", institution: "Madras Medical College (2009–2011)" },
  { year: "2007", degree: "M.B.B.S", institution: "The Tamil Nadu Dr. M.G.R. Medical University (2001–2007)" },
];

const awards = [
  "Dr. Kamalam Glaxo Award (2023)",
  "Best Oral Presentation (2020) – Indian Association of Medical Microbiologists (IAMM), E-MICROCON",
  "Best Outgoing Student – Gold Medalist, M.D. Microbiology – Sri Ramachandra University",
  "Best Poster Presentation (2018) – Indian Society of Human and Animal Mycology (SIHAMS)",
];

const publications = [
  {
    title: "Epidemiological Pattern of Malassezia, its Phenotypic Identification and Antifungal Susceptibility Profile to Azoles by Broth Microdilution Method",
    journal: "Indian Journal of Medical Microbiology",
    year: "2020",
    impact: "SCOPUS Indexed",
  },
  {
    title: "Phylogenetic Analysis, Molecular Identification and Antifungal Susceptibility Profile of Malassezia from Skin Samples in a Tertiary Care Hospital",
    journal: "Indian Journal of Medical Microbiology",
    year: "2021",
    impact: "SCOPUS Indexed",
  },
  {
    title: "Anti-fungal Susceptibility of Malassezia to Azoles by Broth Micro-dilution and Phylogenetic Analysis by Multi-Locus Sequence Typing",
    journal: "Medical Mycology",
    year: "2022",
    impact: "IF: 4.5",
  },
];

const reviews = [
  {
    initials: "R.K.",
    date: "January 2026",
    rating: 5,
    text: "Dr. Nancy is an exceptional physician. Her thorough approach and genuine care made a difficult journey more bearable. Highly recommended.",
  },
  {
    initials: "S.M.",
    date: "December 2025",
    rating: 5,
    text: "Excellent doctor who takes time to explain every test result clearly. Professional and very knowledgeable about microbiology.",
  },
  {
    initials: "P.V.",
    date: "November 2025",
    rating: 5,
    text: "Dr. Nancy and her team provided outstanding care. Professional, knowledgeable, and compassionate throughout the consultation.",
  },
];

export default function DoctorProfilePage() {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <>
      <MockupNav variationId="b" currentPage="doctor" />

      {/* Breadcrumb */}
      <nav className="bg-[var(--color-accent)] border-b border-[var(--color-primary)]/10">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <ol className="flex items-center text-sm">
            <li>
              <Link href="/variation-b/home" className="text-[var(--color-text-light)] hover:text-[var(--color-primary)]">
                Home
              </Link>
            </li>
            <li className="mx-2 text-[var(--color-text-light)]">/</li>
            <li>
              <Link href="#" className="text-[var(--color-text-light)] hover:text-[var(--color-primary)]">
                Our Doctors
              </Link>
            </li>
            <li className="mx-2 text-[var(--color-text-light)]">/</li>
            <li className="text-[var(--color-primary)] font-bold">Dr. R. Packia Nancy</li>
          </ol>
        </div>
      </nav>

      {/* Doctor Hero - Editorial Profile */}
      <section className="bg-white border-b-4 border-[var(--color-primary)]">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Photo */}
            <div>
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src="/sample_doc.png"
                  alt="Dr. R. Packia Nancy"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[var(--color-secondary)] p-3 text-center">
                  <span className="text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider">
                    Accepting New Patients
                  </span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-3">
              <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
                Consultant Microbiologist & Medical Mycologist
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-dark)] mt-2">
                Dr. R. Packia Nancy
              </h1>
              <p className="text-[var(--color-text-light)] mt-2">
                M.B.B.S, D.L.O, M.D. (Microbiology), Ph.D. (Dermato-Mycology)
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mt-8 py-6 border-y border-[var(--color-primary)]/10">
                <div>
                  <span className="text-[var(--color-text-light)] text-sm block">Experience</span>
                  <span className="font-bold text-lg">20+ Years</span>
                </div>
                <div>
                  <span className="text-[var(--color-text-light)] text-sm block">Specialty</span>
                  <span className="font-bold text-lg">Mycology & Diagnostics</span>
                </div>
                <div>
                  <span className="text-[var(--color-text-light)] text-sm block">GenBank Sequences</span>
                  <span className="font-bold text-lg">21 Submissions</span>
                </div>
              </div>

              <p className="mt-6 text-[var(--color-text-light)] leading-relaxed">
                Dr. R. Packia Nancy is an experienced medical microbiologist specializing in medical mycology, molecular diagnostics, and infection control. She completed her postgraduate training at Sri Ramachandra University with further specialization in dermato-mycology from Madras Medical College. She has published several research papers, contributed 21 gene sequences to GenBank, and received multiple national awards for academic and research excellence.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="#">
                  Book Appointment
                </Button>
                <Button variant="outline" href="#">
                  Download CV
                </Button>
                <Button variant="text" href="#">
                  Share Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-[var(--color-primary)] sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? "bg-[var(--color-secondary)] text-[var(--color-primary)]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {activeTab === "Profile" && (
                <div>
                  <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-6">
                    About Dr. Nancy
                  </h2>
                  <div className="prose prose-lg max-w-none text-[var(--color-text-light)]">
                    <p>
                      Dr. R. Packia Nancy has dedicated her career to advancing diagnostic microbiology through clinical excellence and research. After completing her M.D. in Microbiology from Sri Ramachandra University, she has worked across leading hospitals and diagnostic labs in Chennai, establishing expertise in medical mycology, molecular diagnostics, and infection control.
                    </p>
                    <p>
                      Her research is centred on Malassezia biology — covering phylogenetic analysis, antifungal susceptibility testing, and multi-locus sequence typing. She has submitted 21 gene sequences to GenBank and presented her work at multiple national and international scientific congresses.
                    </p>
                    <p>
                      As an ISO 15189 Certified Auditor and CAHO Certified Infection Control professional, she has served as Lab Director and Hospital Infection Control Officer, implementing quality management systems and antimicrobial stewardship programmes across multiple institutions.
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mt-10 mb-4">
                    Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Medical Mycology", "Molecular Diagnostics", "Infection Control", "Dermato-Mycology", "Antimicrobial Stewardship", "Bacteriology"].map((area) => (
                      <span key={area} className="px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "Credentials" && (
                <div>
                  <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-6">
                    Education & Training
                  </h2>
                  <div className="space-y-6">
                    {education.map((item, index) => (
                      <Card key={index} variant="featured" padding="md">
                        <div className="flex items-start gap-4">
                          <span className="text-[var(--color-secondary)] font-bold text-sm">{item.year}</span>
                          <div>
                            <h3 className="font-bold text-[var(--color-text-dark)]">{item.degree}</h3>
                            <p className="text-[var(--color-text-light)] text-sm">{item.institution}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mt-10 mb-4">
                    Awards & Recognitions
                  </h3>
                  <ul className="space-y-3">
                    {awards.map((award, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="text-[var(--color-secondary)]">★</span>
                        <span className="text-[var(--color-text-dark)]">{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "Publications" && (
                <div>
                  <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-6">
                    Selected Publications
                  </h2>
                  <div className="space-y-0">
                    {publications.map((pub, index) => (
                      <Card key={index} href="#" variant="minimal" padding="md">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-[var(--color-text-dark)] leading-snug">
                              {pub.title}
                            </h3>
                            <p className="text-sm text-[var(--color-text-light)] mt-2">
                              {pub.journal} • {pub.year}
                            </p>
                          </div>
                          <span className="text-[var(--color-secondary)] text-xs font-bold ml-4 whitespace-nowrap">
                            {pub.impact}
                          </span>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" href="#">
                      View All Publications (7+)
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === "Reviews" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[var(--color-text-dark)]">
                      Patient Reviews
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className="flex text-[var(--color-secondary)]">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star}>★</span>
                        ))}
                      </div>
                      <span className="font-bold">5.0</span>
                      <span className="text-[var(--color-text-light)] text-sm">({reviews.length} reviews)</span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {reviews.map((review, index) => (
                      <Card key={index} variant="bordered" padding="md">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-[var(--color-primary)] text-white font-bold flex items-center justify-center flex-shrink-0">
                            {review.initials}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div className="flex text-[var(--color-secondary)] text-sm">
                                {[...Array(review.rating)].map((_, i) => (
                                  <span key={i}>★</span>
                                ))}
                              </div>
                              <span className="text-xs text-[var(--color-text-light)]">{review.date}</span>
                            </div>
                            <p className="text-[var(--color-text-dark)] mt-3 leading-relaxed">
                              {review.text}
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card variant="featured" padding="lg" className="bg-[var(--color-primary)] text-white">
                <h3 className="font-bold text-lg mb-4">Schedule a Consultation</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-white/70 block">Available Days</span>
                    <span className="font-bold">Monday - Saturday</span>
                  </div>
                  <div>
                    <span className="text-white/70 block">Consultation Hours</span>
                    <span className="font-bold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div>
                    <span className="text-white/70 block">Department</span>
                    <span className="font-bold">Microbiology</span>
                  </div>
                </div>
                <Button variant="secondary" href="#" className="w-full mt-6">
                  Book Now
                </Button>
              </Card>

              <Card variant="bordered" padding="lg">
                <h3 className="font-bold text-[var(--color-text-dark)] mb-4">Contact</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+91 44 2220 9150</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>dr.nancy@ciwia.org</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
