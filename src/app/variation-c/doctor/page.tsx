"use client";

import { useState } from "react";
import Link from "next/link";
import MockupNav from "@/components/MockupNav";
import Button from "@/components/variation-c/Button";
import Card from "@/components/variation-c/Card";

const tabs = ["About", "Experience", "Publications", "Reviews"];

const quickInfo = [
  { label: "Experience", value: "20+ Years" },
  { label: "Specialty", value: "Medical Mycology" },
  { label: "Languages", value: "English, Tamil" },
  { label: "GenBank", value: "21 Sequences" },
];

const education = [
  { year: "2020", degree: "M.D. (Microbiology)", school: "Sri Ramachandra University (2016–2020)" },
  { year: "2019", degree: "Ph.D. (Dermato-Mycology)", school: "Sri Ramachandra Medical College (2016–2019)" },
  { year: "2011", degree: "Ph.D. (Dermato-Mycology)", school: "Madras Medical College (2009–2011)" },
  { year: "2007", degree: "M.B.B.S", school: "The Tamil Nadu Dr. M.G.R. Medical University (2001–2007)" },
];

const experience = [
  { period: "Current", role: "Lab Director & Hospital Infection Control Officer", org: "Parvathy Multispecialty Hospital, Chennai" },
  { period: "Previous", role: "Assistant Professor, Dept. of Microbiology", org: "Vels Medical College, Chennai" },
  { period: "Previous", role: "Consultant Microbiologist & Molecular Biologist", org: "Medall Labs Pvt. Ltd., Chennai" },
  { period: "Previous", role: "Consultant Molecular Biologist & Microbiologist", org: "Lal Path Labs Pvt. Ltd., Chennai" },
  { period: "Previous", role: "Chief of Laboratory & Infection Controller", org: "Kedar Hospitals, Mugalivakkam, Chennai" },
  { period: "Previous", role: "Senior Resident (Microbiology & Molecular Mycology)", org: "Sri Ramachandra Institute of Higher Education and Research" },
];

const publications = [
  { title: "Epidemiological Pattern of Malassezia, its Phenotypic Identification and Antifungal Susceptibility Profile to Azoles by Broth Microdilution", journal: "Indian J Med Microbiol", year: "2020", citations: 32 },
  { title: "Phylogenetic Analysis, Molecular Identification and Antifungal Susceptibility Profile of Malassezia from Skin Samples in South India", journal: "Indian J Med Microbiol", year: "2021", citations: 18 },
  { title: "Anti-fungal Susceptibility of Malassezia to Azoles and Phylogenetic Analysis by Multi-Locus Sequence Typing", journal: "Med Mycology", year: "2022", citations: 14 },
  { title: "Rare Isolate of Stephanoascus ciferrii from Aural Discharge of Post-mastoidectomy Patient – A Case Report", journal: "J Clin Diagnostic Research", year: "2019", citations: 9 },
];

const reviews = [
  { initials: "RK", name: "Ramesh K.", rating: 5, date: "Jan 2026", text: "Dr. Nancy is an exceptional doctor. Her thorough approach and genuine care made my diagnosis journey much easier to navigate." },
  { initials: "SM", name: "Saritha M.", rating: 5, date: "Dec 2025", text: "Excellent care from start to finish. She explained every test result clearly and was always available for questions." },
  { initials: "PV", name: "Prakash V.", rating: 5, date: "Nov 2025", text: "Professional, knowledgeable, and compassionate. I highly recommend Dr. Nancy to anyone needing microbiology consultation." },
];

export default function DoctorProfilePage() {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <>
      <MockupNav variationId="c" currentPage="doctor" />

      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <ol className="flex items-center text-sm gap-2">
            <li>
              <Link href="/variation-c/home" className="text-[var(--color-text-light)] hover:text-[var(--color-primary)]">
                Home
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li>
              <Link href="#" className="text-[var(--color-text-light)] hover:text-[var(--color-primary)]">
                Doctors
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-[var(--color-primary)] font-medium">Dr. R. Packia Nancy</li>
          </ol>
        </div>
      </nav>

      {/* Profile Header */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Photo & Quick Actions */}
            <div className="text-center lg:text-left">
              <div className="inline-block relative">
                <div className="w-48 h-48 mx-auto lg:mx-0 rounded-2xl overflow-hidden">
                  <img
                    src="/sample_doc.png"
                    alt="Dr. R. Packia Nancy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Accepting Patients
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <Button href="#" className="w-full">
                  Book Appointment
                </Button>
                <Button variant="outline" href="#" className="w-full">
                  Contact Doctor
                </Button>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="lg:col-span-3">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold rounded-full">
                  Consultant Microbiologist
                </span>
                <span className="px-3 py-1 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] text-xs font-semibold rounded-full">
                  Microbiology
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
                Dr. R. Packia Nancy
              </h1>
              <p className="mt-2 text-[var(--color-text-light)]">
                M.B.B.S, D.L.O, M.D. (Microbiology), Ph.D. (Dermato-Mycology)
              </p>

              {/* Quick Info Grid */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickInfo.map((info, index) => (
                  <Card key={index} variant="outlined" padding="sm" rounded="xl">
                    <p className="text-xs text-[var(--color-text-light)]">{info.label}</p>
                    <p className="font-bold text-[var(--color-text-dark)]">{info.value}</p>
                  </Card>
                ))}
              </div>

              {/* Bio */}
              <p className="mt-8 text-[var(--color-text-light)] leading-relaxed">
                Dr. R. Packia Nancy is an experienced medical microbiologist specializing in medical mycology, molecular diagnostics, and infection control. She completed her postgraduate training at Sri Ramachandra University and her specialization in dermato-mycology from Madras Medical College. She has published several research papers, contributed 21 gene sequences to GenBank, and received multiple national awards for academic and research excellence.
              </p>

              {/* Expertise Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Medical Mycology", "Molecular Diagnostics", "Infection Control", "Dermato-Mycology", "Antimicrobial Stewardship"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] text-sm font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-[68px] z-40">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-all ${
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
      <section className="py-12 md:py-16 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {activeTab === "About" && (
                <Card variant="elevated" padding="lg" rounded="2xl">
                  <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-6">
                    About Dr. Nancy
                  </h2>
                  <div className="prose max-w-none text-[var(--color-text-light)]">
                    <p>
                      Dr. R. Packia Nancy has dedicated her career to advancing diagnostic microbiology through clinical excellence and research. After completing her M.D. in Microbiology from Sri Ramachandra University, she has served across leading hospitals and diagnostic laboratories in Chennai — from Lab Director at Parvathy Multispecialty Hospital to faculty at Vels Medical College.
                    </p>
                    <p>
                      Her research is centred on Malassezia biology — covering phylogenetic analysis, antifungal susceptibility testing by broth microdilution, and multi-locus sequence typing (MLST). She has submitted 21 gene sequences to GenBank with official accession numbers and presented her work at national and international scientific congresses including the International Malassezia Workshop in Utrecht.
                    </p>
                    <p>
                      As an ISO 15189 Certified Auditor and CAHO Certified Infection Control professional, Dr. Nancy brings deep expertise in quality management, antimicrobial stewardship, and laboratory governance to every institution she serves.
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mt-10 mb-4">
                    Memberships & Affiliations
                  </h3>
                  <ul className="space-y-2 text-[var(--color-text-light)]">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Member – International Society for Human and Animal Mycology (ISHAM)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Member – International Malassezia Working Group
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      ISO 15189 Certified Auditor
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      CAHO Certified Infection Control (Basic and Advanced)
                    </li>
                  </ul>
                </Card>
              )}

              {activeTab === "Experience" && (
                <div className="space-y-6">
                  <Card variant="elevated" padding="lg" rounded="2xl">
                    <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-6">
                      Education
                    </h2>
                    <div className="space-y-6">
                      {education.map((item, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="w-16 text-center flex-shrink-0">
                            <span className="text-[var(--color-secondary)] font-bold">{item.year}</span>
                          </div>
                          <div className="flex-1 border-l-2 border-[var(--color-accent)] pl-6 pb-6 relative">
                            <div className="absolute w-3 h-3 bg-[var(--color-secondary)] rounded-full -left-[7px] top-1" />
                            <h3 className="font-bold text-[var(--color-text-dark)]">{item.degree}</h3>
                            <p className="text-sm text-[var(--color-text-light)]">{item.school}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card variant="elevated" padding="lg" rounded="2xl">
                    <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-6">
                      Career History
                    </h2>
                    <div className="space-y-6">
                      {experience.map((item, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="w-28 text-right flex-shrink-0">
                            <span className="text-sm text-[var(--color-text-light)]">{item.period}</span>
                          </div>
                          <div className="flex-1 border-l-2 border-[var(--color-accent)] pl-6 pb-6 relative">
                            <div className="absolute w-3 h-3 bg-[var(--color-primary)] rounded-full -left-[7px] top-1" />
                            <h3 className="font-bold text-[var(--color-text-dark)]">{item.role}</h3>
                            <p className="text-sm text-[var(--color-text-light)]">{item.org}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              )}

              {activeTab === "Publications" && (
                <Card variant="elevated" padding="lg" rounded="2xl">
                  <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-6">
                    Selected Publications
                  </h2>
                  <div className="space-y-4">
                    {publications.map((pub, index) => (
                      <div key={index} className="p-4 bg-[var(--color-accent)] rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                        <h3 className="font-bold text-[var(--color-text-dark)]">{pub.title}</h3>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-sm text-[var(--color-text-light)]">
                            {pub.journal} • {pub.year}
                          </span>
                          <span className="text-sm text-[var(--color-secondary)] font-medium">
                            {pub.citations} citations
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" href="#" className="mt-6">
                    View All 7+ Publications →
                  </Button>
                </Card>
              )}

              {activeTab === "Reviews" && (
                <Card variant="elevated" padding="lg" rounded="2xl">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[var(--color-text-dark)]">
                      Patient Reviews
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="font-bold">5.0</span>
                      <span className="text-[var(--color-text-light)] text-sm">({reviews.length} reviews)</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {reviews.map((review, index) => (
                      <div key={index} className="p-4 bg-[var(--color-accent)] rounded-xl">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-[var(--color-primary)] text-white font-bold rounded-full flex items-center justify-center flex-shrink-0">
                            {review.initials}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-bold text-[var(--color-text-dark)]">{review.name}</p>
                                <div className="flex text-yellow-400 text-sm mt-1">
                                  {[...Array(review.rating)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
                                </div>
                              </div>
                              <span className="text-xs text-[var(--color-text-light)]">{review.date}</span>
                            </div>
                            <p className="mt-3 text-[var(--color-text-light)]">{review.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card variant="elevated" padding="lg" rounded="2xl" className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary)]/90 text-white">
                <h3 className="font-bold text-lg mb-4">Book Consultation</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-white/70">Available Days</span>
                    <p className="font-bold">Monday - Saturday</p>
                  </div>
                  <div>
                    <span className="text-white/70">Hours</span>
                    <p className="font-bold">9:00 AM - 4:00 PM</p>
                  </div>
                  <div>
                    <span className="text-white/70">Department</span>
                    <p className="font-bold">Microbiology</p>
                  </div>
                </div>
                <Button variant="secondary" href="#" className="w-full mt-6">
                  Book Now
                </Button>
              </Card>

              <Card variant="outlined" padding="lg" rounded="2xl">
                <h3 className="font-bold text-[var(--color-text-dark)] mb-4">Contact</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-[var(--color-text-dark)]">+91 44 2220 9150</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-[var(--color-text-dark)]">dr.nancy@ciwia.org</span>
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
