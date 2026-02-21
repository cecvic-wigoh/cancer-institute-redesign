import Image from "next/image";
import Link from "next/link";
import MockupNav from "@/components/MockupNav";
import Button from "@/components/variation-b/Button";
import Card from "@/components/variation-b/Card";

const featuredStory = {
  category: "Research Breakthrough",
  title: "New Immunotherapy Protocol Shows 40% Improvement in Survival Rates",
  excerpt: "Our researchers have developed a groundbreaking immunotherapy protocol that combines checkpoint inhibitors with targeted therapy, showing remarkable results in treating advanced lung cancer.",
  date: "February 2, 2026",
  readTime: "5 min read",
};

const topStories = [
  {
    category: "Clinical Trials",
    title: "Phase III Trial Opens for Novel CAR-T Cell Therapy",
    date: "January 28, 2026",
  },
  {
    category: "Awards",
    title: "CI(WIA) Receives National Excellence Award for Cancer Research",
    date: "January 25, 2026",
  },
  {
    category: "Technology",
    title: "State-of-the-Art PET-CT Scanner Now Operational",
    date: "January 20, 2026",
  },
];

const quickAccessItems = [
  {
    title: "Find a Doctor",
    href: "/variation-b/doctor",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Book Appointment",
    href: "#",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Departments",
    href: "/variation-b/department",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Clinical Trials",
    href: "/variation-b/research",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "Patient Portal",
    href: "#",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Locations",
    href: "#",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const departments = [
  {
    name: "Medical Oncology",
    description: "Comprehensive chemotherapy and targeted therapy programs",
    cases: "15,000+ annually",
  },
  {
    name: "Surgical Oncology",
    description: "Advanced surgical procedures including robotic surgery",
    cases: "8,000+ annually",
  },
  {
    name: "Radiation Oncology",
    description: "Precision radiation therapy with latest technology",
    cases: "10,000+ annually",
  },
  {
    name: "Pediatric Oncology",
    description: "Specialized care for children with cancer",
    cases: "1,500+ annually",
  },
];

const featuredDoctors = [
  { name: "Dr. Priya Sharma", title: "Head, Medical Oncology", specialty: "Breast & Lung Cancer", image: "/sample_doc.png" },
  { name: "Dr. Rajesh Kumar", title: "Chief of Surgery", specialty: "GI Oncology", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80" },
  { name: "Dr. Anitha Rajan", title: "Director, Radiation", specialty: "Brain Tumors", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80" },
];

const publications = [
  {
    title: "Efficacy of Combined Immunotherapy in TNBC",
    journal: "Journal of Clinical Oncology",
    year: "2025",
  },
  {
    title: "Genomic Profiling in Indian Lung Cancer Patients",
    journal: "Nature Medicine",
    year: "2025",
  },
  {
    title: "Long-term Outcomes of Minimally Invasive Surgery",
    journal: "Annals of Surgical Oncology",
    year: "2024",
  },
];

const testimonials = [
  {
    quote: "The comprehensive care I received at Cancer Institute changed my life. The doctors explained every step and made me feel hopeful throughout my treatment.",
    author: "Cancer Survivor, 2025",
    type: "Breast Cancer",
  },
  {
    quote: "From the first consultation to my final checkup, the team treated me like family. Their expertise and compassion are unmatched.",
    author: "Patient Family Member",
    type: "Lung Cancer Care",
  },
];

export default function HomePage() {
  return (
    <>
      <MockupNav variationId="b" currentPage="home" />

      {/* Hero - Editorial Lead Story */}
      <section className="bg-[var(--color-primary)] relative overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-3">
            {/* Featured Story */}
            <div className="lg:col-span-2 p-8 lg:p-12 text-white">
              {/* Credibility Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">India&apos;s First Dedicated Cancer Hospital • Est. 1954</span>
              </div>

              <span className="inline-block px-3 py-1 bg-[var(--color-secondary)] text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider mb-4">
                {featuredStory.category}
              </span>
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
                {featuredStory.title}
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
                {featuredStory.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-white/60 mb-8">
                <span>{featuredStory.date}</span>
                <span>•</span>
                <span>{featuredStory.readTime}</span>
              </div>

              {/* Phone Number - Prominent Display */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-3">
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
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" href="#">
                  Book Appointment
                </Button>
                <Button variant="outline" href="/variation-b/research" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
                  Read Full Story
                </Button>
              </div>
            </div>

            {/* Side Stories */}
            <div className="bg-[var(--color-text-dark)] p-6 lg:p-8">
              {/* Campus Image */}
              <div className="mb-6 -mx-6 -mt-6 lg:-mx-8 lg:-mt-8">
                <img
                  src="https://www.vaidam.com/sites/default/files/cancer_institute_wia_adyar_chennai-home.jpg"
                  alt="Cancer Institute (WIA) Adyar, Chennai - main building"
                  className="w-full h-40 object-cover"
                />
              </div>
              <h2 className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm mb-6 pb-2 border-b border-white/20">
                Top Stories
              </h2>
              <div className="space-y-6">
                {topStories.map((story, index) => (
                  <article key={index} className="group cursor-pointer">
                    <span className="text-[var(--color-secondary)] text-xs font-bold uppercase tracking-wider">
                      {story.category}
                    </span>
                    <h3 className="text-white font-bold mt-1 group-hover:text-[var(--color-secondary)] transition-colors leading-snug">
                      {story.title}
                    </h3>
                    <p className="text-white/50 text-xs mt-2">{story.date}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards - Research-Informed Pattern */}
      <section className="bg-[var(--color-accent)] border-y-4 border-[var(--color-secondary)] py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickAccessItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group flex flex-col items-center gap-3 p-4 bg-white rounded-lg border-2 border-transparent hover:border-[var(--color-secondary)] transition-all text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-secondary)] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <span className="text-sm font-bold text-[var(--color-text-dark)] uppercase tracking-wide">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section - Magazine Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
                Centers of Excellence
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mt-2">
                Our Departments
              </h2>
            </div>
            <Button variant="text" href="/variation-b/department">
              View All →
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border-2 border-[var(--color-primary)]/10">
            {departments.map((dept, index) => (
              <Card
                key={index}
                href="/variation-b/department"
                variant="minimal"
                padding="lg"
                className={`border-[var(--color-primary)]/10 ${index < 2 ? 'border-b-2' : ''} ${index % 2 === 0 ? 'md:border-r-2' : ''}`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-primary)]">
                      {dept.name}
                    </h3>
                    <p className="text-[var(--color-text-light)] mt-2">
                      {dept.description}
                    </p>
                  </div>
                  <span className="text-[var(--color-secondary)] font-bold text-sm whitespace-nowrap ml-4">
                    {dept.cases}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors - Editorial Cards */}
      <section className="py-16 md:py-24 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
                Expert Care
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mt-2">
                Meet Our Specialists
              </h2>
            </div>
            <Button variant="text" href="/variation-b/doctor">
              View All Doctors →
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredDoctors.map((doctor, index) => (
              <Link key={index} href="/variation-b/doctor" className="group">
                <Card variant="default" padding="lg">
                  {/* Doctor Photo */}
                  <div className="aspect-[3/4] mb-6 relative overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={`${doctor.name} - ${doctor.title}`}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-primary)] to-transparent p-4">
                      <span className="text-[var(--color-secondary)] text-xs font-bold uppercase tracking-wider">
                        {doctor.specialty}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text-dark)] group-hover:text-[var(--color-primary)] transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-[var(--color-text-light)] text-sm mt-1">
                    {doctor.title}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials - Editorial Quote Style */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
              Patient Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mt-2">
              Voices of Hope
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border-l-4 border-[var(--color-secondary)] p-8 shadow-sm">
                <svg className="w-12 h-12 text-[var(--color-secondary)]/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg text-[var(--color-text-dark)] leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-[var(--color-primary)]/10">
                  <p className="font-bold text-[var(--color-primary)]">{testimonial.author}</p>
                  <p className="text-sm text-[var(--color-text-light)]">{testimonial.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Publications - News Style */}
      <section className="py-16 md:py-24 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">
                    Academic Excellence
                  </span>
                  <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mt-2">
                    Recent Publications
                  </h2>
                </div>
              </div>

              <div className="space-y-0 bg-white">
                {publications.map((pub, index) => (
                  <Card key={index} href="/variation-b/research" variant="minimal" padding="md">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-[var(--color-text-dark)] hover:text-[var(--color-primary)] transition-colors">
                          {pub.title}
                        </h3>
                        <p className="text-sm text-[var(--color-text-light)] mt-1">
                          {pub.journal} • {pub.year}
                        </p>
                      </div>
                      <span className="text-[var(--color-secondary)] text-sm">→</span>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-6">
                <Button variant="outline" href="/variation-b/research">
                  Browse All Publications
                </Button>
              </div>
            </div>

            {/* Sidebar - Stats */}
            <div className="bg-[var(--color-primary)] p-8 text-white">
              <h3 className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm mb-8">
                By The Numbers
              </h3>
              <div className="space-y-8">
                {[
                  { value: "70+", label: "Years of Excellence" },
                  { value: "500+", label: "Hospital Beds" },
                  { value: "50,000+", label: "Patients Annually" },
                  { value: "200+", label: "Expert Physicians" },
                  { value: "160+", label: "Active Research Studies" },
                ].map((stat, index) => (
                  <div key={index} className="border-b border-white/20 pb-6">
                    <div className="text-4xl font-bold text-[var(--color-secondary)]">
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-sm uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner - Editorial Style */}
      <section className="bg-[var(--color-secondary)]">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
                Schedule Your Consultation Today
              </h2>
              <p className="text-[var(--color-primary)]/70 mt-2">
                Our team of specialists is ready to provide you with world-class cancer care.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+914422209150" className="text-lg font-bold text-[var(--color-primary)] hover:underline">
                  +91 44 2220 9150
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Button href="#">
                Book Appointment
              </Button>
              <Button variant="outline" href="#" className="border-[var(--color-primary)] text-[var(--color-primary)]">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
