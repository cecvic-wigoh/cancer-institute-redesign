"use client";

import { useState } from "react";
import Link from "next/link";
import MockupNav from "@/components/MockupNav";
import Button from "@/components/variation-b/Button";
import Card from "@/components/variation-b/Card";

const tabs = ["Profile", "Credentials", "Publications", "Reviews"];

const education = [
  { year: "2010", degree: "DM (Medical Oncology)", institution: "AIIMS, New Delhi" },
  { year: "2007", degree: "MD (Internal Medicine)", institution: "CMC, Vellore" },
  { year: "2003", degree: "MBBS", institution: "Stanley Medical College, Chennai" },
];

const awards = [
  "Best Researcher Award, Indian Cancer Society (2024)",
  "Excellence in Patient Care, CI(WIA) (2023)",
  "Distinguished Service Award, ESMO (2022)",
  "Young Investigator Award, ASCO (2015)",
];

const publications = [
  {
    title: "Efficacy of Combined Immunotherapy in Triple-Negative Breast Cancer",
    journal: "Journal of Clinical Oncology",
    year: "2025",
    impact: "IF: 50.7",
  },
  {
    title: "Targeted Therapy Outcomes in EGFR-Mutant Lung Adenocarcinoma",
    journal: "The Lancet Oncology",
    year: "2024",
    impact: "IF: 51.1",
  },
  {
    title: "Quality of Life Improvements with Novel Chemotherapy Regimens",
    journal: "Annals of Oncology",
    year: "2024",
    impact: "IF: 32.9",
  },
];

const reviews = [
  {
    initials: "R.K.",
    date: "January 2026",
    rating: 5,
    text: "Dr. Sharma is an exceptional physician. Her thorough approach and genuine care made a difficult journey more bearable. Highly recommended.",
  },
  {
    initials: "S.M.",
    date: "December 2025",
    rating: 5,
    text: "Excellent doctor who takes time to explain everything. The treatment plan was clear and the results speak for themselves.",
  },
  {
    initials: "P.V.",
    date: "November 2025",
    rating: 5,
    text: "Dr. Sharma and her team provided outstanding care. Professional, knowledgeable, and compassionate throughout the treatment.",
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
            <li className="text-[var(--color-primary)] font-bold">Dr. Priya Sharma</li>
          </ol>
        </div>
      </nav>

      {/* Doctor Hero - Editorial Profile */}
      <section className="bg-white border-b-4 border-[var(--color-primary)]">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Photo */}
            <div>
              <div className="aspect-[3/4] bg-[var(--color-accent)] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
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
                Head of Medical Oncology
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-dark)] mt-2">
                Dr. Priya Sharma
              </h1>
              <p className="text-[var(--color-text-light)] mt-2">
                MBBS, MD (Internal Medicine), DM (Medical Oncology)
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mt-8 py-6 border-y border-[var(--color-primary)]/10">
                <div>
                  <span className="text-[var(--color-text-light)] text-sm block">Experience</span>
                  <span className="font-bold text-lg">25+ Years</span>
                </div>
                <div>
                  <span className="text-[var(--color-text-light)] text-sm block">Specialty</span>
                  <span className="font-bold text-lg">Breast & Lung Cancer</span>
                </div>
                <div>
                  <span className="text-[var(--color-text-light)] text-sm block">Languages</span>
                  <span className="font-bold text-lg">English, Tamil, Hindi</span>
                </div>
              </div>

              <p className="mt-6 text-[var(--color-text-light)] leading-relaxed">
                Dr. Priya Sharma is a distinguished medical oncologist with over 25 years of experience in treating cancer patients. As the Head of Medical Oncology at Cancer Institute (WIA), she leads a team of specialists dedicated to providing cutting-edge cancer care. Her research has been published in leading international journals and she is recognized globally for her contributions to breast and lung cancer treatment.
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
                    About Dr. Sharma
                  </h2>
                  <div className="prose prose-lg max-w-none text-[var(--color-text-light)]">
                    <p>
                      Dr. Priya Sharma has dedicated her career to improving cancer treatment outcomes through clinical excellence and research. After completing her DM in Medical Oncology from AIIMS, New Delhi, she joined Cancer Institute (WIA) where she has been instrumental in establishing protocols for immunotherapy and targeted therapy.
                    </p>
                    <p>
                      Her patient-centered approach combines the latest medical advances with compassionate care. Dr. Sharma is known for taking time to explain treatment options thoroughly, ensuring patients and families understand every aspect of their care journey.
                    </p>
                    <p>
                      As a researcher, she has published over 50 papers in peer-reviewed journals and is actively involved in multiple clinical trials. Her work has contributed to significant advances in treating triple-negative breast cancer and EGFR-mutant lung cancer.
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mt-10 mb-4">
                    Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Breast Cancer", "Lung Cancer", "Immunotherapy", "Targeted Therapy", "Palliative Care", "Clinical Trials"].map((area) => (
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
                      View All Publications (50+)
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
                    <span className="text-white/70 block">Location</span>
                    <span className="font-bold">Main Building, Room 204</span>
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
                    <span>dr.sharma@ciwia.org</span>
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
