import Image from "next/image";
import Link from "next/link";
import MockupNav from "@/components/MockupNav";
import Button from "@/components/variation-c/Button";
import Card from "@/components/variation-c/Card";

const quickAccessCards = [
  {
    title: "Find a Doctor",
    description: "Search specialists",
    href: "/variation-c/doctor",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Appointments",
    description: "Schedule a visit",
    href: "#",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Departments",
    description: "Explore services",
    href: "/variation-c/department",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Clinical Trials",
    description: "Research studies",
    href: "/variation-c/research",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "Patient Portal",
    description: "Access records",
    href: "#",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Locations",
    description: "Find us",
    href: "#",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "70+", label: "Years of Excellence" },
  { value: "500+", label: "Hospital Beds" },
  { value: "50,000+", label: "Patients Annually" },
  { value: "200+", label: "Expert Doctors" },
];

const services = [
  {
    name: "Medical Oncology",
    description: "Advanced chemotherapy, immunotherapy, and targeted treatments",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Surgical Oncology",
    description: "Minimally invasive and robotic surgical procedures",
    color: "from-teal-500 to-teal-600",
  },
  {
    name: "Radiation Oncology",
    description: "Precision radiation therapy with IMRT and brachytherapy",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Diagnostic Services",
    description: "Advanced imaging and laboratory diagnostics",
    color: "from-orange-500 to-orange-600",
  },
];

const doctors = [
  { name: "Dr. Priya Sharma", title: "Head, Medical Oncology", specialty: "Breast Cancer", rating: 4.9 },
  { name: "Dr. Rajesh Kumar", title: "Chief Surgeon", specialty: "GI Oncology", rating: 4.8 },
  { name: "Dr. Anitha Rajan", title: "Radiation Oncologist", specialty: "Brain Tumors", rating: 4.9 },
  { name: "Dr. Suresh Menon", title: "Pediatric Oncologist", specialty: "Leukemia", rating: 4.7 },
];

const testimonials = [
  {
    quote: "The care I received was exceptional. Dr. Sharma and her team treated me like family throughout my journey.",
    name: "Ramesh K.",
    condition: "Lung Cancer Survivor",
  },
  {
    quote: "From diagnosis to recovery, the entire team was supportive and professional. I'm grateful for their expertise.",
    name: "Meena S.",
    condition: "Breast Cancer Survivor",
  },
];

export default function HomePage() {
  return (
    <>
      <MockupNav variationId="c" currentPage="home" />

      {/* Hero Section - Modern Medical */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary)]/95 to-[var(--color-primary)]/90 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-secondary)] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              {/* Credibility Badge */}
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm">
                <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                India&apos;s First Dedicated Cancer Hospital • Est. 1954
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Compassionate Care,{" "}
                <span className="text-[var(--color-secondary)]">Advanced Treatment</span>
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-lg">
                For over 70 years, Cancer Institute (WIA) has been at the forefront of cancer care in India, combining clinical excellence with compassion.
              </p>

              {/* Phone Number - Prominent Display */}
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/60">Call for Appointments</p>
                  <a href="tel:+914422209150" className="text-xl font-bold hover:text-[var(--color-secondary)] transition-colors">
                    +91 44 2220 9150
                  </a>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="secondary" size="lg" href="#">
                  Book Appointment
                </Button>
                <Button variant="outline" size="lg" href="/variation-c/doctor" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
                  Find a Doctor
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 flex flex-wrap gap-8">
                {stats.slice(0, 3).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-[var(--color-secondary)]">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative hidden lg:block">
              <div className="aspect-square bg-white/10 rounded-3xl backdrop-blur-sm p-8">
                <div className="w-full h-full bg-white/5 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-16 h-16 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <p className="text-white/50">Hospital Image</p>
                  </div>
                </div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-sm">24/7 Emergency</p>
                    <p className="text-xs text-gray-500">Always Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards - Research-Informed Pattern */}
      <section className="relative -mt-8 z-10 pb-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickAccessCards.map((card, index) => (
              <Link
                key={index}
                href={card.href}
                className="group bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl border border-gray-100 hover:border-[var(--color-secondary)] transition-all text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-[var(--color-accent)] flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-secondary)] group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <h3 className="mt-3 font-bold text-[var(--color-text-dark)] text-sm">
                  {card.title}
                </h3>
                <p className="mt-1 text-xs text-[var(--color-text-light)]">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-14">
            <span className="text-[var(--color-secondary)] font-semibold">Our Services</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
              Comprehensive Cancer Care
            </h2>
            <p className="mt-4 text-[var(--color-text-light)] max-w-2xl mx-auto">
              State-of-the-art facilities and expert teams delivering personalized treatment for every patient
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} href="/variation-c/department" variant="elevated" padding="lg" rounded="2xl">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-dark)]">{service.name}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-light)]">{service.description}</p>
                <div className="mt-4 flex items-center text-[var(--color-primary)] font-medium text-sm">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--color-secondary)] font-semibold">Why Choose Us</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
                Trusted by Patients for Over 70 Years
              </h2>
              <p className="mt-4 text-[var(--color-text-light)] leading-relaxed">
                Our commitment to excellence in cancer care combines world-class expertise with compassionate treatment, ensuring the best outcomes for our patients.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  { title: "Expert Medical Team", description: "200+ specialized oncologists with international training" },
                  { title: "Advanced Technology", description: "Latest diagnostic and treatment equipment" },
                  { title: "Research Excellence", description: "160+ active clinical trials and studies" },
                  { title: "Patient-First Approach", description: "Personalized care plans for every patient" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-text-dark)]">{item.title}</h4>
                      <p className="text-sm text-[var(--color-text-light)]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} variant="glass" padding="lg" rounded="2xl">
                  <div className="text-3xl font-bold text-[var(--color-primary)]">{stat.value}</div>
                  <div className="text-sm text-[var(--color-text-light)] mt-1">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <span className="text-[var(--color-secondary)] font-semibold">Our Experts</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
                Meet Our Doctors
              </h2>
            </div>
            <Button variant="ghost" href="/variation-c/doctor" className="mt-4 md:mt-0">
              View All Doctors →
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor, index) => (
              <Link key={index} href="/variation-c/doctor" className="group">
                <Card variant="outlined" padding="md" rounded="2xl">
                  {/* Photo */}
                  <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                    {/* Rating Badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs font-bold">{doctor.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-[var(--color-text-dark)] group-hover:text-[var(--color-primary)] transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-light)]">{doctor.title}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-medium rounded-full">
                    {doctor.specialty}
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary)]/90 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-14">
            <span className="text-[var(--color-secondary)] font-semibold">Patient Stories</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
              Voices of Hope
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <svg className="w-10 h-10 text-[var(--color-secondary)] mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg leading-relaxed text-white/90 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-[var(--color-secondary)]">{testimonial.condition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <Card variant="elevated" padding="lg" rounded="2xl" className="text-center bg-gradient-to-r from-[var(--color-accent)] to-white">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-dark)]">
              Ready to Start Your Care Journey?
            </h2>
            <p className="mt-4 text-[var(--color-text-light)] max-w-lg mx-auto">
              Our team is here to support you every step of the way. Schedule your consultation today.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+914422209150" className="text-xl font-bold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors">
                +91 44 2220 9150
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" href="#">
                Book Appointment
              </Button>
              <Button variant="outline" size="lg" href="#">
                Contact Us
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
