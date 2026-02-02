import Image from "next/image";
import Link from "next/link";
import MockupNav from "@/components/MockupNav";
import Button from "@/components/variation-a/Button";
import Card from "@/components/variation-a/Card";

const stats = [
  { value: "70+", label: "Years of Excellence" },
  { value: "500+", label: "Beds" },
  { value: "50,000+", label: "Patients Annually" },
  { value: "200+", label: "Doctors" },
];

const departments = [
  {
    name: "Medical Oncology",
    description: "Comprehensive chemotherapy and targeted therapy for all cancer types.",
    icon: "💊",
    href: "/variation-a/department",
  },
  {
    name: "Surgical Oncology",
    description: "Advanced surgical procedures with minimally invasive techniques.",
    icon: "🏥",
    href: "/variation-a/department",
  },
  {
    name: "Radiation Oncology",
    description: "State-of-the-art radiation therapy including IMRT and brachytherapy.",
    icon: "⚡",
    href: "/variation-a/department",
  },
  {
    name: "Pediatric Oncology",
    description: "Specialized care for children with cancer in a supportive environment.",
    icon: "👶",
    href: "/variation-a/department",
  },
];

const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Board-certified oncologists with international training and experience.",
  },
  {
    title: "Advanced Technology",
    description: "Latest diagnostic and treatment equipment for precision medicine.",
  },
  {
    title: "Comprehensive Care",
    description: "Multidisciplinary approach ensuring holistic patient treatment.",
  },
  {
    title: "Research Excellence",
    description: "Pioneering clinical trials and breakthrough cancer research.",
  },
];

const featuredDoctors = [
  { name: "Dr. Priya Sharma", title: "Head, Medical Oncology", image: null },
  { name: "Dr. Rajesh Kumar", title: "Senior Surgical Oncologist", image: null },
  { name: "Dr. Anitha Rajan", title: "Radiation Oncologist", image: null },
  { name: "Dr. Suresh Menon", title: "Pediatric Oncologist", image: null },
];

const researchHighlights = [
  {
    title: "Immunotherapy Breakthrough in Triple-Negative Breast Cancer",
    date: "January 2026",
    category: "Clinical Research",
  },
  {
    title: "New Biomarker Discovery for Early Lung Cancer Detection",
    date: "December 2025",
    category: "Genomics",
  },
  {
    title: "AI-Powered Diagnostic Tool Improves Accuracy by 30%",
    date: "November 2025",
    category: "Technology",
  },
];

export default function HomePage() {
  return (
    <>
      <MockupNav variationId="a" currentPage="home" />

      {/* Hero Section */}
      <section className="relative bg-[var(--color-primary)] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/80">
          {/* Hero image placeholder */}
          <div className="absolute inset-0 bg-[url('/placeholder-hero.jpg')] bg-cover bg-center opacity-20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="h-1 w-16 bg-[var(--color-secondary)] mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Compassionate Cancer Care Since 1954
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
              India&apos;s first dedicated cancer hospital, providing world-class treatment, cutting-edge research, and compassionate care for over 70 years.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="secondary" size="lg" href="#">
                Book Appointment
              </Button>
              <Button variant="outline" size="lg" href="#" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
                Find a Doctor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="bg-[var(--color-accent)] border-y border-[var(--color-primary)]/10">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm md:text-base text-[var(--color-text-light)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
              Our Expertise
            </h2>
            <p className="mt-4 text-lg text-[var(--color-text-light)] max-w-2xl mx-auto">
              Specialized departments working together to provide comprehensive cancer care
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} href={dept.href} padding="lg">
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-lg font-bold text-[var(--color-primary)]">
                  {dept.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-light)]">
                  {dept.description}
                </p>
                <div className="mt-4 text-[var(--color-secondary)] text-sm font-semibold flex items-center gap-1">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" href="/variation-a/department">
              View All Departments
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
                Why Choose Cancer Institute (WIA)
              </h2>
              <p className="mt-4 text-lg text-[var(--color-text-light)]">
                For over seven decades, we have been at the forefront of cancer care in India, combining clinical excellence with compassionate treatment.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-text-dark)]">{item.title}</h4>
                      <p className="text-sm text-[var(--color-text-light)] mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-[var(--color-text-light)]">Hospital/Facility Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Doctors Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
              Meet Our Doctors
            </h2>
            <p className="mt-4 text-lg text-[var(--color-text-light)] max-w-2xl mx-auto">
              Our team of experienced oncologists is dedicated to providing the best possible care
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDoctors.map((doctor, index) => (
              <Link key={index} href="/variation-a/doctor" className="group">
                <Card hover padding="sm">
                  {/* Photo placeholder */}
                  <div className="aspect-square bg-[var(--color-accent)] rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <div className="w-20 h-20 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-bold text-[var(--color-text-dark)] group-hover:text-[var(--color-primary)] transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-light)]">{doctor.title}</p>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" href="/variation-a/doctor">
              View All Doctors
            </Button>
          </div>
        </div>
      </section>

      {/* Research Highlights Section */}
      <section className="py-16 md:py-24 bg-[var(--color-primary)] text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Research & Innovation
              </h2>
              <p className="mt-4 text-lg text-white/70 max-w-xl">
                Pioneering research that translates into better treatments and outcomes for our patients
              </p>
            </div>
            <Button variant="secondary" href="/variation-a/research" className="mt-6 md:mt-0">
              View All Research
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {researchHighlights.map((item, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm hover:bg-white/15 transition-colors">
                <span className="text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="mt-2 text-lg font-bold leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm text-white/60">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-light)]">
            Our team is here to help you every step of the way. Schedule a consultation today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" href="#">
              Book Appointment
            </Button>
            <Button variant="outline" size="lg" href="#">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
