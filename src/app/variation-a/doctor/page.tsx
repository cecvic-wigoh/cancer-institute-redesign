"use client";

import { useState } from "react";
import Link from "next/link";
import MockupNav from "@/components/MockupNav";
import Button from "@/components/variation-a/Button";
import Card from "@/components/variation-a/Card";

const tabs = ["Overview", "Experience", "Publications", "Reviews"];

const education = [
  { year: "2020", degree: "M.D. (Microbiology)", institution: "Sri Ramachandra University (2016–2020)" },
  { year: "2019", degree: "Ph.D. (Dermato-Mycology)", institution: "Sri Ramachandra Medical College (2016–2019)" },
  { year: "2011", degree: "Ph.D. (Dermato-Mycology)", institution: "Madras Medical College (2009–2011)" },
  { year: "2007", degree: "M.B.B.S", institution: "The Tamil Nadu Dr. M.G.R. Medical University (2001–2007)" },
];

const experience = [
  { period: "Current", role: "Lab Director & Hospital Infection Control Officer", institution: "Parvathy Multispecialty Hospital, Chennai" },
  { period: "Previous", role: "Assistant Professor, Department of Microbiology", institution: "Vels Medical College, Chennai" },
  { period: "Previous", role: "Consultant Microbiologist, Molecular Biologist & Safety Officer", institution: "Medall Labs Pvt. Ltd., Chennai" },
  { period: "Previous", role: "Consultant Molecular Biologist & Microbiologist", institution: "Lal Path Labs Pvt. Ltd., Chennai" },
  { period: "Previous", role: "Chief of Laboratory & Infection Controller", institution: "Kedar Hospitals, Mugalivakkam, Chennai" },
  { period: "Previous", role: "Senior Resident (Microbiology & Molecular Mycology)", institution: "Sri Ramachandra Institute of Higher Education and Research, Porur" },
];

const certifications = [
  "ISO 15189 Certified Auditor",
  "CAHO Certified Infection Control (Basic and Advanced)",
  "Training in Antimicrobial Stewardship and ISO Audits",
  "Member – International Society for Human and Animal Mycology (ISHAM)",
  "Member – International Malassezia Working Group",
  "Research Ethics Programme – CITI, University of Miami, USA",
];

const publications = [
  {
    title: "Epidemiological Pattern of Malassezia, its Phenotypic Identification and Antifungal Susceptibility Profile to Azoles by Broth Microdilution Method",
    journal: "Indian Journal of Medical Microbiology",
    year: "2020",
    citations: 32,
  },
  {
    title: "Phylogenetic Analysis, Molecular Identification and Antifungal Susceptibility Profile of Malassezia from Skin Samples in a Tertiary Care Hospital in South India",
    journal: "Indian Journal of Medical Microbiology",
    year: "2021",
    citations: 18,
  },
  {
    title: "Anti-fungal Susceptibility of Malassezia to Azoles by Broth Micro-dilution Method and Phylogenetic Analysis by Multi-Locus Sequence Typing",
    journal: "Medical Mycology",
    year: "2022",
    citations: 14,
  },
  {
    title: "Rare Isolate of Stephanoascus ciferrii from the Aural Discharge of Post-mastoidectomy Patient – A Case Report",
    journal: "Journal of Clinical and Diagnostic Research",
    year: "2019",
    citations: 9,
  },
];

const reviews = [
  {
    name: "Patient A.",
    date: "January 2026",
    rating: 5,
    comment: "Dr. Nancy is incredibly knowledgeable and compassionate. She took the time to explain everything clearly and made me feel confident about my diagnosis and care plan.",
  },
  {
    name: "Patient B.",
    date: "December 2025",
    rating: 5,
    comment: "Exceptional care from start to finish. Dr. Nancy and her team are truly dedicated to their patients. I felt supported throughout my entire journey.",
  },
  {
    name: "Patient C.",
    date: "November 2025",
    rating: 5,
    comment: "Very professional and thorough. She answers all questions patiently and provides detailed explanations about test results. Highly recommend.",
  },
];

const relatedDoctors = [
  { name: "Dr. Arun Krishnan", title: "Senior Consultant", dept: "Clinical Pathology" },
  { name: "Dr. Rajesh Kumar", title: "Consultant Microbiologist", dept: "Microbiology" },
  { name: "Dr. Anitha Rajan", title: "Infection Control Specialist", dept: "Hospital Infection Control" },
];

export default function DoctorProfilePage() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <>
      <MockupNav variationId="a" currentPage="doctor" />

      {/* Breadcrumb */}
      <nav className="bg-[var(--color-accent)] border-b border-[var(--color-primary)]/10">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <ol className="flex items-center text-sm">
            <li>
              <Link href="/variation-a/home" className="text-[var(--color-text-light)] hover:text-[var(--color-primary)]">
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
            <li className="text-[var(--color-primary)] font-medium">Dr. R. Packia Nancy</li>
          </ol>
        </div>
      </nav>

      {/* Doctor Header */}
      <section className="bg-white border-b border-[var(--color-primary)]/10">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Photo and Quick Info */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center gap-6">
              {/* Doctor photo */}
              <div className="flex-shrink-0 w-48 h-48 rounded-xl overflow-hidden">
                <img
                  src="/sample_doc.png"
                  alt="Dr. R. Packia Nancy"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="text-center sm:text-left lg:text-center">
                <div className="flex flex-wrap justify-center sm:justify-start lg:justify-center gap-2 mt-4">
                  <span className="px-3 py-1 bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-semibold rounded-full">
                    20+ Years Experience
                  </span>
                  <span className="px-3 py-1 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] text-xs font-semibold rounded-full">
                    Accepting New Patients
                  </span>
                </div>
              </div>
            </div>

            {/* Main Info */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
                Dr. R. Packia Nancy
              </h1>
              <p className="mt-2 text-lg text-[var(--color-secondary)] font-medium">
                Consultant Microbiologist & Medical Mycologist
              </p>
              <p className="mt-1 text-[var(--color-text-light)]">
                M.B.B.S, M.D. (Microbiology), Ph.D. (Dermato-Mycology)
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--color-accent)] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-light)]">Department</p>
                    <p className="text-sm font-medium text-[var(--color-text-dark)]">Microbiology</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--color-accent)] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-light)]">Languages</p>
                    <p className="text-sm font-medium text-[var(--color-text-dark)]">English, Tamil</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--color-accent)] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-light)]">Consultation</p>
                    <p className="text-sm font-medium text-[var(--color-text-dark)]">Mon-Sat: 9AM - 4PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--color-accent)] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-light)]">Location</p>
                    <p className="text-sm font-medium text-[var(--color-text-dark)]">Microbiology Department</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#">Book Appointment</Button>
                <Button variant="outline" href="#">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share Profile
                </Button>
                <Button variant="outline" href="#">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-[var(--color-primary)]/10 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-[var(--color-secondary)] text-[var(--color-primary)]"
                    : "border-transparent text-[var(--color-text-light)] hover:text-[var(--color-text-dark)]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {activeTab === "Overview" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-4">Biography</h2>
                    <div className="prose prose-gray max-w-none text-[var(--color-text-light)]">
                      <p>
                        Dr. R. Packia Nancy is an experienced medical microbiologist specializing in medical mycology, molecular diagnostics, and infection control. She completed her medical education at The Tamil Nadu Dr. M.G.R. Medical University and her postgraduate training at Sri Ramachandra University, with further specialization in dermato-mycology from Madras Medical College.
                      </p>
                      <p>
                        She has published several research papers, contributed 21 gene sequences to GenBank with official accession numbers, and received multiple national awards for academic and research excellence. Dr. Nancy is an active member of leading international mycology organizations and continues to contribute to advancing standards in diagnostic microbiology.
                      </p>
                      <p>
                        Her expertise spans bacteriology, mycology, virology, molecular microbiology, and infection control — with hands-on proficiency in advanced automation systems including BACTEC, BacT/ALERT, VITEK 2, MALDI-TOF, and BioFire.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-4">Areas of Expertise</h2>
                    <div className="flex flex-wrap gap-2">
                      {["Medical Mycology", "Molecular Diagnostics", "Infection Control", "Dermato-Mycology", "Antimicrobial Stewardship", "Bacteriology", "Molecular Biology", "Clinical Microbiology"].map((area) => (
                        <span key={area} className="px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] text-sm font-medium rounded-full">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Experience" && (
                <div className="space-y-10">
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-6">Education</h2>
                    <div className="space-y-6">
                      {education.map((item, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0 w-16 text-center">
                            <span className="text-sm font-bold text-[var(--color-secondary)]">{item.year}</span>
                          </div>
                          <div className="flex-1 pb-6 border-l-2 border-[var(--color-accent)] pl-6 relative">
                            <div className="absolute w-3 h-3 bg-[var(--color-secondary)] rounded-full -left-[7px] top-1" />
                            <h3 className="font-bold text-[var(--color-text-dark)]">{item.degree}</h3>
                            <p className="text-sm text-[var(--color-text-light)]">{item.institution}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-6">Career History</h2>
                    <div className="space-y-6">
                      {experience.map((item, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0 w-28 text-right">
                            <span className="text-sm text-[var(--color-text-light)]">{item.period}</span>
                          </div>
                          <div className="flex-1 pb-6 border-l-2 border-[var(--color-accent)] pl-6 relative">
                            <div className="absolute w-3 h-3 bg-[var(--color-primary)] rounded-full -left-[7px] top-1" />
                            <h3 className="font-bold text-[var(--color-text-dark)]">{item.role}</h3>
                            <p className="text-sm text-[var(--color-text-light)]">{item.institution}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-4">Certifications & Memberships</h2>
                    <ul className="space-y-3">
                      {certifications.map((cert, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-[var(--color-text-dark)]">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "Publications" && (
                <div>
                  <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-6">Selected Publications</h2>
                  <div className="space-y-4">
                    {publications.map((pub, index) => (
                      <Card key={index} padding="md" hover>
                        <h3 className="font-bold text-[var(--color-text-dark)] leading-snug">{pub.title}</h3>
                        <p className="mt-2 text-sm text-[var(--color-text-light)]">
                          <span className="font-medium">{pub.journal}</span> &bull; {pub.year}
                        </p>
                        <div className="mt-3 flex items-center gap-4 text-xs text-[var(--color-text-light)]">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            {pub.citations} citations
                          </span>
                          <a href="#" className="text-[var(--color-secondary)] hover:underline">View Paper</a>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Button variant="outline" href="#">View All Publications (7+)</Button>
                  </div>
                </div>
              )}

              {activeTab === "Reviews" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[var(--color-text-dark)]">Patient Reviews</h2>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="font-bold text-[var(--color-text-dark)]">5.0</span>
                      <span className="text-sm text-[var(--color-text-light)]">({reviews.length} reviews)</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {reviews.map((review, index) => (
                      <Card key={index} padding="md" hover={false}>
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-bold text-[var(--color-text-dark)]">{review.name}</p>
                            <p className="text-xs text-[var(--color-text-light)]">{review.date}</p>
                          </div>
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="mt-3 text-[var(--color-text-light)]">{review.comment}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                {/* Book Appointment Card */}
                <Card padding="lg" hover={false} className="bg-[var(--color-primary)] text-white">
                  <h3 className="font-bold text-lg mb-4">Book an Appointment</h3>
                  <p className="text-white/80 text-sm mb-6">
                    Schedule a consultation with Dr. R. Packia Nancy
                  </p>
                  <Button variant="secondary" href="#" className="w-full">
                    Book Now
                  </Button>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-xs text-white/60 text-center">
                      Or call: +91 44 2220 9150
                    </p>
                  </div>
                </Card>

                {/* Related Doctors */}
                <Card padding="lg" hover={false}>
                  <h3 className="font-bold text-[var(--color-text-dark)] mb-4">Related Doctors</h3>
                  <div className="space-y-4">
                    {relatedDoctors.map((doc, index) => (
                      <Link key={index} href="/variation-a/doctor" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-[var(--color-text-dark)] group-hover:text-[var(--color-primary)] transition-colors">{doc.name}</p>
                          <p className="text-xs text-[var(--color-text-light)]">{doc.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
