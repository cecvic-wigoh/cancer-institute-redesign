import Image from "next/image";
import Link from "next/link";
import MockupNav from "@/components/MockupNav";
import Button from "@/components/variation-a/Button";
import Card from "@/components/variation-a/Card";

const quickAccessCards = [
  {
    title: "Find a Doctor",
    description: "Search our expert oncologists by specialty or name",
    href: "/variation-a/doctor",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Book Appointment",
    description: "Schedule a consultation with our specialists",
    href: "#",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Departments",
    description: "Explore our specialized cancer care units",
    href: "/variation-a/department",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Clinical Trials",
    description: "Access breakthrough treatments through research",
    href: "/variation-a/research",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Patient Portal",
    description: "Access your medical records and reports",
    href: "#",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Locations",
    description: "Find our hospital and outreach centers",
    href: "#",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "70+", label: "Years of Excellence" },
  { value: "500+", label: "Beds" },
  { value: "50,000+", label: "Patients Annually" },
  { value: "200+", label: "Expert Doctors" },
];

const departments = [
  {
    name: "Medical Oncology",
    description: "Comprehensive chemotherapy and targeted therapy for all cancer types.",
    href: "/variation-a/department",
  },
  {
    name: "Surgical Oncology",
    description: "Advanced surgical procedures with minimally invasive techniques.",
    href: "/variation-a/department",
  },
  {
    name: "Radiation Oncology",
    description: "State-of-the-art radiation therapy including IMRT and brachytherapy.",
    href: "/variation-a/department",
  },
  {
    name: "Pediatric Oncology",
    description: "Specialized care for children with cancer in a supportive environment.",
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
  { name: "Dr. Priya Sharma", title: "Head, Medical Oncology", specialty: "Breast Cancer", image: "/sample_doc.png" },
  { name: "Dr. Rajesh Kumar", title: "Senior Surgical Oncologist", specialty: "GI Cancers", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80" },
  { name: "Dr. Anitha Rajan", title: "Radiation Oncologist", specialty: "Head & Neck", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80" },
  { name: "Dr. Suresh Menon", title: "Pediatric Oncologist", specialty: "Leukemia", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80" },
];

const researchHighlights = [
  {
    title: "Immunotherapy Breakthrough in Triple-Negative Breast Cancer",
    date: "January 2026",
    category: "Clinical Research",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80",
  },
  {
    title: "New Biomarker Discovery for Early Lung Cancer Detection",
    date: "December 2025",
    category: "Genomics",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80",
  },
  {
    title: "AI-Powered Diagnostic Tool Improves Accuracy by 30%",
    date: "November 2025",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
  },
];

const testimonials = [
  {
    quote: "The care I received at Cancer Institute was exceptional. The doctors took time to explain everything and made me feel confident in my treatment.",
    name: "Patient A.",
    condition: "Breast Cancer Survivor",
  },
  {
    quote: "From diagnosis to recovery, the entire team supported my family. The multidisciplinary approach made all the difference.",
    name: "Patient B.",
    condition: "Lung Cancer Survivor",
  },
];

export default function HomePage() {
  return (
    <>
      <MockupNav variationId="a" currentPage="home" />

      {/* Hero Section */}
      <section className="relative bg-[var(--color-primary)] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/80">
          <div className="absolute inset-0 bg-[url('https://www.vaidam.com/sites/default/files/cancer_institute_wia_adyar_chennai-home.jpg')] bg-cover bg-center opacity-20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            {/* Credibility Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">India&apos;s First Dedicated Cancer Hospital</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Compassionate Cancer Care Since 1954
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
              World-class treatment, cutting-edge research, and holistic care for over 70 years. Your journey to recovery starts here.
            </p>

            {/* Phone Number - Prominently Displayed */}
            <div className="mt-6 flex items-center gap-3 text-white/90">
              <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)] flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <Button variant="outline" size="lg" href="/variation-a/doctor" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
                Find a Doctor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards - Dana-Farber Pattern */}
      <section className="relative -mt-8 z-10 pb-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickAccessCards.map((card, index) => (
              <Link
                key={index}
                href={card.href}
                className="group bg-white rounded-xl p-5 shadow-lg hover:shadow-xl border border-[var(--color-primary)]/5 hover:border-[var(--color-secondary)] transition-all text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[var(--color-accent)] flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-secondary)] group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <h3 className="mt-3 font-bold text-[var(--color-text-dark)] text-sm">
                  {card.title}
                </h3>
                <p className="mt-1 text-xs text-[var(--color-text-light)] line-clamp-2">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Bar with Credibility */}
      <section className="bg-[var(--color-accent)] border-y border-[var(--color-primary)]/10 py-12">
        <div className="mx-auto max-w-7xl px-4">
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
              Specialized Cancer Care
            </h2>
            <p className="mt-4 text-lg text-[var(--color-text-light)] max-w-2xl mx-auto">
              Our specialized departments work together to provide comprehensive, multidisciplinary cancer treatment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} href={dept.href} padding="lg" hover>
                <div className="w-12 h-12 rounded-lg bg-[var(--color-secondary)]/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
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
              <span className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
                India&apos;s Pioneer in Cancer Care
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
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://www.vaidam.com/sites/default/files/hospitals/cancer_institute_wia_adyar_chennai-min.jpg"
                  alt="Cancer Institute (WIA) Adyar Campus"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-6 max-w-[200px]">
                <div className="text-3xl font-bold text-[var(--color-primary)]">70+</div>
                <div className="text-sm text-[var(--color-text-light)]">Years of Excellence in Cancer Care</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Doctors Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider">
              Our Experts
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
              Meet Our Doctors
            </h2>
            <p className="mt-4 text-lg text-[var(--color-text-light)] max-w-2xl mx-auto">
              Our team of experienced oncologists is dedicated to providing personalized care for every patient
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDoctors.map((doctor, index) => (
              <Link key={index} href="/variation-a/doctor" className="group">
                <Card hover padding="sm">
                  <div className="aspect-square bg-[var(--color-accent)] rounded-lg mb-4 overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="font-bold text-[var(--color-text-dark)] group-hover:text-[var(--color-primary)] transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-light)]">{doctor.title}</p>
                  <p className="text-xs text-[var(--color-secondary)] mt-1">{doctor.specialty}</p>
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

      {/* Patient Testimonials */}
      <section className="py-16 md:py-24 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider">
              Patient Stories
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
              Voices of Hope
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <svg className="w-10 h-10 text-[var(--color-secondary)]/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-[var(--color-text-dark)] text-lg leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="mt-6 pt-6 border-t border-[var(--color-primary)]/10">
                  <p className="font-bold text-[var(--color-primary)]">{testimonial.name}</p>
                  <p className="text-sm text-[var(--color-text-light)]">{testimonial.condition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Highlights Section */}
      <section className="py-16 md:py-24 bg-[var(--color-primary)] text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider">
                Latest Updates
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">
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
              <div key={index} className="bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm hover:bg-white/15 transition-colors">
                <div className="h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold leading-snug">{item.title}</h3>
                  <p className="mt-3 text-sm text-white/60">{item.date}</p>
                </div>
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
          <div className="mt-6 flex items-center justify-center gap-3 text-[var(--color-text-dark)]">
            <svg className="w-6 h-6 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:+914422209150" className="text-xl font-bold hover:text-[var(--color-primary)] transition-colors">
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
        </div>
      </section>
    </>
  );
}
