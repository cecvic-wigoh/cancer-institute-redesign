import Link from "next/link";
import MockupNav from "@/components/MockupNav";
import Button from "@/components/variation-c/Button";
import Card from "@/components/variation-c/Card";

const services = [
  { name: "Chemotherapy", icon: "💉" },
  { name: "Immunotherapy", icon: "🛡️" },
  { name: "Targeted Therapy", icon: "🎯" },
  { name: "Hormonal Therapy", icon: "💊" },
  { name: "Stem Cell Transplant", icon: "🧬" },
  { name: "CAR-T Cell Therapy", icon: "🔬" },
  { name: "Precision Medicine", icon: "⚕️" },
  { name: "Palliative & Survivorship Care", icon: "🤝" },
];

const conditions = [
  "Breast Cancer",
  "Lung Cancer",
  "Colorectal & Gastrointestinal Cancers",
  "Head and Neck Cancers",
  "Gynecological & Genitourinary Cancers",
  "Sarcomas & CNS Tumors",
  "Neuroendocrine Tumors",
  "Multiple Myeloma & Plasma Cell Disorders",
  "Acute & Chronic Leukemias",
  "Hodgkin & Non-Hodgkin Lymphoma",
  "Myelodysplastic Syndromes",
  "Pediatric Cancers (Solid Tumors, Leukemias, Brain Tumors)",
  "Relapsed & Refractory Cancers",
  "Stem Cell Transplant & Cellular Therapy Patients",
  "Survivorship & Palliative Care Patients",
];

const diagnostics = [
  { label: "Imaging Studies", detail: "X-ray, CT, MRI, PET-CT, Ultrasound" },
  { label: "Histopathology & Biopsy", detail: "Tissue diagnosis and staging" },
  { label: "Tumor Marker Testing", detail: "Serum and tissue markers" },
  { label: "Bone Marrow Examination", detail: "Aspiration and trephine biopsy" },
  { label: "Flow Cytometry", detail: "Immunophenotyping" },
  { label: "Molecular & Genetic Testing", detail: "NGS, PCR, FISH" },
  { label: "Cytogenetics", detail: "Chromosomal and genomic analysis" },
  { label: "Risk Stratification", detail: "Protocol-based assessment" },
];

const team = [
  { name: "Dr. Priya Sharma", title: "Head of Department", years: "25 years", specialty: "Breast Cancer" },
  { name: "Dr. Arun Krishnan", title: "Senior Consultant", years: "18 years", specialty: "Lung Cancer" },
  { name: "Dr. Lakshmi Venkat", title: "Consultant", years: "12 years", specialty: "GI Oncology" },
  { name: "Dr. Mohan Reddy", title: "Consultant", years: "10 years", specialty: "Pediatric Oncology" },
];

const stats = [
  { value: "15,000+", label: "Patients Treated Annually" },
  { value: "95%", label: "Patient Satisfaction" },
  { value: "40+", label: "Clinical Trials" },
  { value: "50+", label: "Publications" },
];

const whenToVisit = [
  "Unexplained weight loss or persistent loss of appetite",
  "Persistent fever without clear cause",
  "New or growing lumps or swellings",
  "Unusual bleeding or bruising",
  "Chronic fatigue or weakness",
  "Persistent cough or breathlessness",
  "Non-healing sores or ulcers",
  "Bone pain or unexplained fractures",
  "Neurological symptoms such as headaches or seizures",
  "Persistent pallor, bruising, or fever in children",
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
            <li className="text-[var(--color-primary)] font-medium">Medical & Pediatric Oncology</li>
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
                Department of Medical Oncology and Pediatric Oncology
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">
                Medical Oncology and Pediatric Oncology focuses on treating cancer using chemotherapy, immunotherapy, targeted therapies, hematopoietic stem cell transplant, and cellular therapy — for adults, children, and adolescents.
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
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[var(--color-secondary)] font-semibold">About the Department</span>
              <h2 className="mt-2 text-3xl font-bold text-[var(--color-text-dark)]">
                What is Medical and Pediatric Oncology?
              </h2>
              <div className="mt-6 space-y-4 text-[var(--color-text-light)] leading-relaxed">
                <p>
                  Medical and Pediatric Oncology is a specialised branch of medicine focused on the diagnosis, treatment, and management of cancer in adults, children, and adolescents. It covers both solid tumors and blood-related cancers using advanced systemic therapies.
                </p>
                <p>
                  Our oncologists work closely with surgeons, radiation specialists, pathologists, radiologists, and supportive care teams to provide comprehensive, patient-centered cancer care — aiming to achieve cure, disease control, symptom relief, and improved quality of life.
                </p>
                <p>
                  A pediatric oncologist specialises in managing cancers in children and adolescents, which require age-specific treatment protocols and dedicated supportive care — distinct from adult oncology.
                </p>
              </div>
              <Button variant="ghost" href="#" className="mt-6">
                Learn More About Our Approach →
              </Button>
            </div>

            {/* Diagnostics */}
            <div>
              <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-6">Diagnostic Techniques</h3>
              <div className="space-y-3">
                {diagnostics.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-[var(--color-accent)] rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] flex-shrink-0 mt-2" />
                    <div>
                      <p className="font-bold text-[var(--color-text-dark)] text-sm">{item.label}</p>
                      <p className="text-xs text-[var(--color-text-light)]">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-14">
            <span className="text-[var(--color-secondary)] font-semibold">Scope of Care</span>
            <h2 className="mt-2 text-3xl font-bold text-[var(--color-text-dark)]">
              Common Conditions Treated
            </h2>
            <p className="mt-4 text-[var(--color-text-light)] max-w-2xl mx-auto">
              The Department manages a wide range of cancers and related conditions in both adults and children.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-[var(--color-primary)]/10">
                <div className="w-7 h-7 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[var(--color-text-dark)] text-sm font-medium">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-14">
            <span className="text-[var(--color-secondary)] font-semibold">Treatment Options</span>
            <h2 className="mt-2 text-3xl font-bold text-[var(--color-text-dark)]">
              Our Services
            </h2>
            <p className="mt-4 text-[var(--color-text-light)] max-w-xl mx-auto">
              Treatment is tailored to the type, stage, and biology of cancer, as well as the patient&apos;s age and overall health.
            </p>
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

      {/* When to Visit */}
      <section className="py-20 bg-[var(--color-primary)] text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[var(--color-secondary)] font-semibold">Know the Warning Signs</span>
              <h2 className="mt-2 text-3xl font-bold">
                When Should You Visit the Oncology Department?
              </h2>
              <p className="mt-6 text-white/80 leading-relaxed">
                Early consultation helps in timely diagnosis and significantly improves treatment outcomes. Consult an oncologist if you or your child experience any of these symptoms.
              </p>
              <Button variant="secondary" size="lg" href="#" className="mt-8">
                Book an Appointment
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {whenToVisit.map((symptom, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] flex-shrink-0 mt-1.5" />
                  <span className="text-sm text-white/90">{symptom}</span>
                </div>
              ))}
            </div>
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
                  <div className="aspect-square rounded-xl mb-4 overflow-hidden">
                    <img src="/sample_doc.png" alt={member.name} className="w-full h-full object-cover object-top" />
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
              Our team of medical and pediatric oncologists is ready to provide personalised care for your cancer treatment journey.
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
