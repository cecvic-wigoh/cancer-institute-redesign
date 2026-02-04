import Link from "next/link";
import MockupNav from "@/components/MockupNav";
import Button from "@/components/variation-c/Button";
import Card from "@/components/variation-c/Card";

const services = [
  { name: "Chemotherapy", icon: "💉" },
  { name: "Targeted Therapy", icon: "🎯" },
  { name: "Immunotherapy", icon: "🛡️" },
  { name: "Hormone Therapy", icon: "💊" },
  { name: "Palliative Care", icon: "🤝" },
  { name: "Clinical Trials", icon: "🔬" },
  { name: "Genetic Counseling", icon: "🧬" },
  { name: "Second Opinions", icon: "📋" },
];

const team = [
  { name: "Dr. Priya Sharma", title: "Head of Department", years: "25 years", specialty: "Breast Cancer" },
  { name: "Dr. Arun Krishnan", title: "Senior Consultant", years: "18 years", specialty: "Lung Cancer" },
  { name: "Dr. Lakshmi Venkat", title: "Consultant", years: "12 years", specialty: "GI Oncology" },
  { name: "Dr. Mohan Reddy", title: "Consultant", years: "10 years", specialty: "Hematology" },
];

const stats = [
  { value: "15,000+", label: "Patients Treated Annually" },
  { value: "95%", label: "Patient Satisfaction" },
  { value: "40+", label: "Clinical Trials" },
  { value: "50+", label: "Publications" },
];

const facilities = [
  { name: "Day Care Chemotherapy", beds: "40 beds", desc: "Outpatient treatment facility" },
  { name: "Infusion Suite", beds: "20 stations", desc: "State-of-the-art infusion rooms" },
  { name: "Consultation Rooms", beds: "12 rooms", desc: "Private consultation spaces" },
  { name: "Diagnostic Lab", beds: "24/7", desc: "On-site laboratory services" },
];

export default function DepartmentPage() {
  return (
    <>
      <MockupNav variationId="c" currentPage="department" />

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
                Departments
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-[var(--color-primary)] font-medium">Medical Oncology</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary)]/95 to-[var(--color-primary)]/90 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-secondary)] rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2 text-white">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm">
                💊 Department
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                Medical Oncology
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">
                Our Medical Oncology department offers cutting-edge cancer treatment including chemotherapy, immunotherapy, targeted therapy, and personalized medicine protocols. With over 50 years of experience, we provide comprehensive care tailored to each patient.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="secondary" size="lg" href="#">
                  Book Consultation
                </Button>
                <Button variant="outline" size="lg" href="#" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
                  Contact Department
                </Button>
              </div>
            </div>

            {/* Stats Card */}
            <Card variant="glass" padding="lg" rounded="2xl" className="bg-white/10 backdrop-blur-sm border border-white/20">
              <h3 className="text-white font-bold mb-6">Department Highlights</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-[var(--color-secondary)]">{stat.value}</div>
                    <div className="text-xs text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--color-secondary)] font-semibold">About Us</span>
              <h2 className="mt-2 text-3xl font-bold text-[var(--color-text-dark)]">
                Pioneering Cancer Treatment Since 1970
              </h2>
              <div className="mt-6 space-y-4 text-[var(--color-text-light)] leading-relaxed">
                <p>
                  The Department of Medical Oncology at Cancer Institute (WIA) is one of the largest and most experienced centers for cancer treatment in India. Our team of highly qualified oncologists work collaboratively to provide comprehensive, multidisciplinary care.
                </p>
                <p>
                  We specialize in treating all types of solid tumors and hematological malignancies using the latest advances in targeted therapy and immunotherapy. The department is actively involved in clinical research, offering patients access to cutting-edge therapies through clinical trials.
                </p>
              </div>
              <Button variant="ghost" href="#" className="mt-6">
                Learn More About Our Approach →
              </Button>
            </div>

            {/* Image Placeholder */}
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-gray-400">Department Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-14">
            <span className="text-[var(--color-secondary)] font-semibold">What We Offer</span>
            <h2 className="mt-2 text-3xl font-bold text-[var(--color-text-dark)]">
              Our Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <Card key={index} variant="outlined" padding="md" rounded="xl" className="bg-white text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-[var(--color-text-dark)]">{service.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <span className="text-[var(--color-secondary)] font-semibold">Our Team</span>
              <h2 className="mt-2 text-3xl font-bold text-[var(--color-text-dark)]">
                Meet Our Specialists
              </h2>
            </div>
            <Button variant="ghost" href="/variation-c/doctor" className="mt-4 md:mt-0">
              View All Doctors →
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Link key={index} href="/variation-c/doctor" className="group">
                <Card variant="outlined" padding="md" rounded="2xl">
                  {/* Photo */}
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-bold text-[var(--color-text-dark)] group-hover:text-[var(--color-primary)] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-light)]">{member.title}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs px-2 py-1 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-full">
                      {member.specialty}
                    </span>
                    <span className="text-xs text-[var(--color-text-light)]">{member.years}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-14">
            <span className="text-[var(--color-secondary)] font-semibold">Infrastructure</span>
            <h2 className="mt-2 text-3xl font-bold text-[var(--color-text-dark)]">
              Our Facilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} variant="elevated" padding="lg" rounded="2xl">
                <h3 className="font-bold text-[var(--color-text-dark)]">{facility.name}</h3>
                <p className="text-[var(--color-secondary)] font-bold text-lg mt-2">{facility.beds}</p>
                <p className="text-sm text-[var(--color-text-light)] mt-1">{facility.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <Card variant="elevated" padding="lg" rounded="2xl" className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/90 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold">
              Schedule Your Consultation
            </h2>
            <p className="mt-4 text-white/80 max-w-lg mx-auto">
              Our team of medical oncologists is ready to provide personalized care for your cancer treatment journey.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" href="#">
                Book Appointment
              </Button>
              <Button variant="outline" size="lg" href="#" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
                Call +91 44 2220 9150
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
