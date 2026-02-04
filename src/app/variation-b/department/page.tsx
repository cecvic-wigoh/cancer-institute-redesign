import Link from "next/link";
import MockupNav from "@/components/MockupNav";
import Button from "@/components/variation-b/Button";
import Card from "@/components/variation-b/Card";

const treatments = [
  "Chemotherapy",
  "Targeted Therapy",
  "Immunotherapy",
  "Hormone Therapy",
  "Palliative Care",
  "Clinical Trials",
  "Second Opinions",
  "Genetic Counseling",
];

const teamMembers = [
  { name: "Dr. Priya Sharma", title: "Head of Department", experience: "25 years", specialty: "Breast Cancer" },
  { name: "Dr. Arun Krishnan", title: "Senior Consultant", experience: "18 years", specialty: "Lung Cancer" },
  { name: "Dr. Lakshmi Venkat", title: "Consultant", experience: "12 years", specialty: "GI Oncology" },
  { name: "Dr. Mohan Reddy", title: "Consultant", experience: "10 years", specialty: "Hematology" },
];

const achievements = [
  { value: "15,000+", label: "Patients Treated Annually" },
  { value: "95%", label: "Patient Satisfaction Rate" },
  { value: "40+", label: "Clinical Trials" },
  { value: "150+", label: "Publications" },
];

const relatedArticles = [
  {
    category: "Research",
    title: "Breakthrough in Targeted Therapy for HER2+ Breast Cancer",
    date: "January 2026",
  },
  {
    category: "Patient Story",
    title: "A Journey of Hope: Surviving Stage IV Lung Cancer",
    date: "December 2025",
  },
  {
    category: "Innovation",
    title: "AI-Powered Diagnostic Tools Transform Cancer Detection",
    date: "November 2025",
  },
];

export default function DepartmentPage() {
  return (
    <>
      <MockupNav variationId="b" currentPage="department" />

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
                Departments
              </Link>
            </li>
            <li className="mx-2 text-[var(--color-text-light)]">/</li>
            <li className="text-[var(--color-primary)] font-bold">Medical Oncology</li>
          </ol>
        </div>
      </nav>

      {/* Hero - Magazine Cover Style */}
      <section className="bg-[var(--color-primary)] text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-16">
              <span className="inline-block px-3 py-1 bg-[var(--color-secondary)] text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider mb-6">
                Department
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Medical Oncology
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Our Medical Oncology department is at the forefront of cancer treatment, offering cutting-edge therapies including immunotherapy, targeted therapy, and personalized medicine. With over 50 years of experience, we provide comprehensive care tailored to each patient.
              </p>
              <div className="flex gap-4">
                <Button variant="secondary" href="#">
                  Book Consultation
                </Button>
                <Button variant="outline" href="#" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="bg-[var(--color-text-dark)] p-8 lg:p-16">
              <h2 className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm mb-8 pb-4 border-b border-white/20">
                Department Achievements
              </h2>
              <div className="grid grid-cols-2 gap-8">
                {achievements.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl lg:text-4xl font-bold text-[var(--color-secondary)]">
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-sm uppercase tracking-wider mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Editorial Layout */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
                About The Department
              </span>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mt-2 mb-6">
                Pioneering Cancer Treatment Since 1970
              </h2>

              <div className="prose prose-lg max-w-none text-[var(--color-text-light)]">
                <p>
                  The Department of Medical Oncology at Cancer Institute (WIA) has been a leader in cancer treatment for over five decades. We were among the first in India to introduce chemotherapy protocols and have since evolved to embrace the latest advances in targeted therapy and immunotherapy.
                </p>
                <p>
                  Our multidisciplinary approach ensures that each patient receives personalized care, with treatment plans developed collaboratively by oncologists, surgeons, radiation specialists, and support staff. We believe in treating the whole person, not just the disease.
                </p>
                <p>
                  As a teaching hospital, we are committed to training the next generation of oncologists while conducting groundbreaking research that improves outcomes for patients worldwide.
                </p>
              </div>

              {/* Department Head Quote */}
              <blockquote className="mt-10 p-8 bg-[var(--color-accent)] border-l-4 border-[var(--color-secondary)]">
                <p className="text-xl italic text-[var(--color-text-dark)] leading-relaxed">
                  &ldquo;Our mission is to provide hope and healing through innovation, compassion, and excellence in cancer care.&rdquo;
                </p>
                <footer className="mt-4">
                  <cite className="not-italic font-bold text-[var(--color-primary)]">
                    Dr. Priya Sharma
                  </cite>
                  <span className="text-[var(--color-text-light)] text-sm block">
                    Head of Medical Oncology
                  </span>
                </footer>
              </blockquote>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Card */}
              <Card variant="featured" padding="lg">
                <h3 className="font-bold text-[var(--color-text-dark)] mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-[var(--color-text-light)] block">Phone</span>
                    <span className="font-bold">+91 44 2220 9150 (Ext. 245)</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text-light)] block">Email</span>
                    <span className="font-bold">medicaloncology@ciwia.org</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text-light)] block">Hours</span>
                    <span className="font-bold">Mon-Sat: 8AM - 4PM</span>
                  </div>
                </div>
                <Button href="#" className="w-full mt-6">
                  Book Appointment
                </Button>
              </Card>

              {/* Location Card */}
              <Card variant="bordered" padding="lg">
                <h3 className="font-bold text-[var(--color-text-dark)] mb-4">
                  Location
                </h3>
                <p className="text-sm text-[var(--color-text-light)]">
                  Main Building, 2nd Floor<br />
                  Cancer Institute (WIA)<br />
                  38, Sardar Patel Road, Adyar<br />
                  Chennai - 600020
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16 md:py-24 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
            What We Offer
          </span>
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mt-2 mb-10">
            Treatments & Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="bg-white p-6 border-l-4 border-[var(--color-secondary)] hover:shadow-md transition-shadow"
              >
                <span className="text-[var(--color-primary)] font-bold">
                  {treatment}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Editorial Cards */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
                Our Experts
              </span>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mt-2">
                Department Team
              </h2>
            </div>
            <Button variant="text" href="/variation-b/doctor">
              View All Doctors →
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Link key={index} href="/variation-b/doctor" className="group">
                <Card variant="default" padding="md">
                  {/* Photo placeholder */}
                  <div className="aspect-square bg-[var(--color-accent)] mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-[var(--color-text-dark)] group-hover:text-[var(--color-primary)] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-light)]">{member.title}</p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-[var(--color-primary)]/10">
                    <span className="text-xs text-[var(--color-secondary)] font-bold">{member.specialty}</span>
                    <span className="text-xs text-[var(--color-text-light)]">{member.experience}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 md:py-24 bg-[var(--color-text-dark)] text-white">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
            Related Reading
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-10">
            Articles & News
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((article, index) => (
              <article key={index} className="group cursor-pointer">
                {/* Image placeholder */}
                <div className="aspect-video bg-white/10 mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <span className="text-[var(--color-secondary)] text-xs font-bold uppercase tracking-wider">
                  {article.category}
                </span>
                <h3 className="font-bold text-white group-hover:text-[var(--color-secondary)] transition-colors mt-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-white/50 text-sm mt-2">{article.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-secondary)] py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-[var(--color-primary)]/70 mt-2 mb-6">
            Our specialists are here to provide personalized cancer care.
          </p>
          <Button href="#">
            Book an Appointment
          </Button>
        </div>
      </section>
    </>
  );
}
