import Link from "next/link";
import MockupNav from "@/components/MockupNav";
import Button from "@/components/variation-a/Button";
import Card from "@/components/variation-a/Card";

const services = [
  "Chemotherapy (Conventional and Targeted)",
  "Immunotherapy",
  "Hormone Therapy",
  "Palliative Care",
  "Clinical Trials Access",
  "Second Opinion Services",
  "Genetic Counseling",
  "Supportive Care Programs",
];

const teamMembers = [
  { name: "Dr. Priya Sharma", title: "Head of Department", experience: "25 years" },
  { name: "Dr. Arun Krishnan", title: "Senior Consultant", experience: "18 years" },
  { name: "Dr. Lakshmi Venkat", title: "Consultant", experience: "12 years" },
  { name: "Dr. Mohan Reddy", title: "Consultant", experience: "10 years" },
  { name: "Dr. Sita Patel", title: "Associate Consultant", experience: "8 years" },
  { name: "Dr. Vijay Kumar", title: "Associate Consultant", experience: "6 years" },
];

const facilities = [
  { name: "Day Care Chemotherapy Center", description: "40-bed facility for outpatient treatment" },
  { name: "Infusion Therapy Suite", description: "State-of-the-art infusion rooms with monitoring" },
  { name: "Consultation Chambers", description: "Private consultation rooms for patient comfort" },
  { name: "Laboratory Services", description: "24/7 diagnostic and pathology services" },
];

const relatedDepartments = [
  { name: "Surgical Oncology", href: "#" },
  { name: "Radiation Oncology", href: "#" },
  { name: "Hematology", href: "#" },
  { name: "Palliative Care", href: "#" },
];

export default function DepartmentPage() {
  return (
    <>
      <MockupNav variationId="a" currentPage="department" />

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
                Departments
              </Link>
            </li>
            <li className="mx-2 text-[var(--color-text-light)]">/</li>
            <li className="text-[var(--color-primary)] font-medium">Medical Oncology</li>
          </ol>
        </div>
      </nav>

      {/* Department Hero */}
      <section className="bg-[var(--color-primary)] text-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Medical Oncology
              </h1>
              <p className="mt-4 text-lg text-white/80 leading-relaxed">
                Our Medical Oncology department offers comprehensive cancer treatment using the latest advances in chemotherapy, immunotherapy, targeted therapy, and personalized medicine. We provide compassionate care tailored to each patient&apos;s unique needs.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="secondary" href="#">
                  Book Appointment
                </Button>
                <Button variant="outline" href="#" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
                  Contact Department
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              {/* Department head photo placeholder */}
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg">Dr. Priya Sharma</h3>
                  <p className="text-white/70 text-sm">Head of Department</p>
                  <p className="text-[var(--color-secondary)] text-sm mt-1">MBBS, MD, DM (Oncology)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About This Department */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)]">
                About This Department
              </h2>
              <div className="mt-6 space-y-4 text-[var(--color-text-light)] leading-relaxed">
                <p>
                  The Department of Medical Oncology at Cancer Institute (WIA) is one of the largest and most experienced centers for cancer treatment in India. Established in 1970, the department has been at the forefront of medical oncology, treating thousands of patients annually.
                </p>
                <p>
                  Our team of highly qualified oncologists work collaboratively with surgical, radiation oncology, and other specialists to provide comprehensive, multidisciplinary care. We specialize in treating all types of solid tumors and hematological malignancies.
                </p>
                <p>
                  The department is actively involved in clinical research and offers access to cutting-edge therapies through clinical trials. Our patient-centric approach ensures that each treatment plan is personalized to achieve the best possible outcomes.
                </p>
              </div>
            </div>
            <div>
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-[var(--color-accent)] rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-[var(--color-text-light)]">Department Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-10">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white p-4 rounded-lg border border-[var(--color-primary)]/10"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[var(--color-text-dark)] font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)]">Our Team</h2>
              <p className="mt-2 text-[var(--color-text-light)]">Meet our experienced oncologists dedicated to your care</p>
            </div>
            <Button variant="outline" href="/variation-a/doctor" className="mt-4 md:mt-0">
              View All Doctors
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Link key={index} href="/variation-a/doctor">
                <Card padding="md">
                  <div className="flex items-center gap-4">
                    {/* Photo placeholder */}
                    <div className="flex-shrink-0 w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--color-text-dark)]">{member.name}</h3>
                      <p className="text-sm text-[var(--color-text-light)]">{member.title}</p>
                      <p className="text-xs text-[var(--color-secondary)] mt-1">{member.experience} experience</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Equipment */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-10">
            Facilities & Equipment
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} padding="lg" hover={false}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-text-dark)]">{facility.name}</h3>
                    <p className="text-sm text-[var(--color-text-light)] mt-1">{facility.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Image gallery placeholder */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Information */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-6">
                Patient Information
              </h2>
              <div className="space-y-6">
                <Card padding="lg" hover={false}>
                  <h3 className="font-bold text-[var(--color-text-dark)] mb-3">Consultation Hours</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-[var(--color-text-dark)]">Outpatient Department</p>
                      <p className="text-[var(--color-text-light)]">Monday - Saturday: 8:00 AM - 4:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-text-dark)]">Emergency Services</p>
                      <p className="text-[var(--color-text-light)]">24 hours, 7 days a week</p>
                    </div>
                  </div>
                </Card>

                <Card padding="lg" hover={false}>
                  <h3 className="font-bold text-[var(--color-text-dark)] mb-3">Contact Information</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-[var(--color-text-dark)]">Department Phone</p>
                      <p className="text-[var(--color-text-light)]">+91 44 2220 9150 (Ext. 245)</p>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-text-dark)]">Email</p>
                      <p className="text-[var(--color-text-light)]">medicaloncology@cancerinstitutewia.org</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Appointment CTA */}
            <div>
              <Card padding="lg" hover={false} className="bg-[var(--color-primary)] text-white">
                <h3 className="font-bold text-xl mb-4">Book an Appointment</h3>
                <p className="text-white/80 text-sm mb-6">
                  Schedule a consultation with our medical oncology specialists. We&apos;re here to provide the best care for you.
                </p>
                <Button variant="secondary" href="#" className="w-full">
                  Book Now
                </Button>
                <p className="text-xs text-white/60 text-center mt-4">
                  Or call us at +91 44 2220 9150
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Departments */}
      <section className="py-12 bg-[var(--color-accent)] border-t border-[var(--color-primary)]/10">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-4">Related Departments</h3>
          <div className="flex flex-wrap gap-3">
            {relatedDepartments.map((dept, index) => (
              <Link
                key={index}
                href={dept.href}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[var(--color-text-dark)] border border-[var(--color-primary)]/10 hover:border-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                {dept.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
