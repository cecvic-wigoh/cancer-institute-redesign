"use client";

import { useState } from "react";
import Link from "next/link";
import MockupNav from "@/components/MockupNav";
import Button from "@/components/variation-c/Button";
import Card from "@/components/variation-c/Card";

const tabs = ["About", "Experience", "Publications", "Reviews"];

const quickInfo = [
  { label: "Experience", value: "25+ Years" },
  { label: "Specialty", value: "Breast & Lung Cancer" },
  { label: "Languages", value: "English, Tamil, Hindi" },
  { label: "Rating", value: "4.9/5" },
];

const education = [
  { year: "2010", degree: "DM (Medical Oncology)", school: "AIIMS, New Delhi" },
  { year: "2007", degree: "MD (Internal Medicine)", school: "CMC, Vellore" },
  { year: "2003", degree: "MBBS", school: "Stanley Medical College" },
];

const experience = [
  { period: "2015 - Present", role: "Head of Department", org: "Cancer Institute (WIA)" },
  { period: "2012 - 2015", role: "Senior Consultant", org: "Cancer Institute (WIA)" },
  { period: "2010 - 2012", role: "Consultant", org: "Tata Memorial Hospital" },
];

const publications = [
  { title: "Immunotherapy in Triple-Negative Breast Cancer", journal: "J Clin Oncol", year: "2025", citations: 45 },
  { title: "Targeted Therapy in EGFR-Mutant Lung Cancer", journal: "Lancet Oncol", year: "2024", citations: 78 },
  { title: "Novel Chemotherapy Regimens and QoL", journal: "Ann Oncol", year: "2024", citations: 32 },
];

const reviews = [
  { initials: "RK", name: "Ramesh K.", rating: 5, date: "Jan 2026", text: "Dr. Sharma is an exceptional doctor. Her thorough approach and genuine care made my treatment journey bearable." },
  { initials: "SM", name: "Saritha M.", rating: 5, date: "Dec 2025", text: "Excellent care from start to finish. She explained everything clearly and was always available for questions." },
  { initials: "PV", name: "Prakash V.", rating: 5, date: "Nov 2025", text: "Professional, knowledgeable, and compassionate. I highly recommend Dr. Sharma to anyone seeking cancer care." },
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
            <li className="text-[var(--color-primary)] font-medium">Dr. Priya Sharma</li>
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
                <div className="w-48 h-48 mx-auto lg:mx-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
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
                  Head of Department
                </span>
                <span className="px-3 py-1 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] text-xs font-semibold rounded-full">
                  Medical Oncology
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
                Dr. Priya Sharma
              </h1>
              <p className="mt-2 text-[var(--color-text-light)]">
                MBBS, MD (Internal Medicine), DM (Medical Oncology)
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
                Dr. Priya Sharma is a distinguished medical oncologist with over 25 years of experience. As Head of Medical Oncology at Cancer Institute (WIA), she leads a team dedicated to providing cutting-edge cancer care. Her research has been published in leading international journals and she is recognized globally for her contributions to breast and lung cancer treatment.
              </p>

              {/* Expertise Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Breast Cancer", "Lung Cancer", "Immunotherapy", "Targeted Therapy", "Clinical Trials"].map((tag) => (
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
                    About Dr. Sharma
                  </h2>
                  <div className="prose max-w-none text-[var(--color-text-light)]">
                    <p>
                      Dr. Priya Sharma has dedicated her career to improving cancer treatment outcomes through clinical excellence and research. After completing her DM in Medical Oncology from AIIMS, she joined Cancer Institute (WIA) where she has been instrumental in establishing protocols for immunotherapy and targeted therapy.
                    </p>
                    <p>
                      Her patient-centered approach combines the latest medical advances with compassionate care. Dr. Sharma is known for taking time to explain treatment options thoroughly, ensuring patients and families understand every aspect of their care journey.
                    </p>
                    <p>
                      As a researcher, she has published over 50 papers in peer-reviewed journals and is actively involved in multiple clinical trials. Her work has contributed to significant advances in treating triple-negative breast cancer and EGFR-mutant lung cancer.
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
                      Fellow, European Society for Medical Oncology (ESMO)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Member, American Society of Clinical Oncology (ASCO)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Fellow, Indian College of Physicians
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
                    Recent Publications
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
                    View All 50+ Publications →
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
                      <span className="font-bold">4.9</span>
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
                    <span className="text-white/70">Location</span>
                    <p className="font-bold">Main Building, Room 204</p>
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
                    <span className="text-[var(--color-text-dark)]">dr.sharma@ciwia.org</span>
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
