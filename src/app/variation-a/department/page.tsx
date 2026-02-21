import Link from "next/link";
import MockupNav from "@/components/MockupNav";
import Button from "@/components/variation-a/Button";
import Card from "@/components/variation-a/Card";

const services = [
  "Chemotherapy",
  "Targeted Therapy",
  "Immunotherapy",
  "Hormonal Therapy",
  "Oral Anticancer Medications",
  "Hematopoietic Stem Cell Transplantation",
  "Cellular Therapies (CAR-T)",
  "Precision Medicine",
  "Palliative Care",
  "Supportive & Symptom Management",
  "Clinical Trials Access",
  "Survivorship & Long-term Follow-up",
];

const conditions = [
  "Breast Cancer",
  "Lung Cancer",
  "Colorectal & Gastrointestinal Cancers",
  "Head and Neck Cancers",
  "Gynecological & Genitourinary Cancers",
  "Sarcomas & Central Nervous System Tumors",
  "Neuroendocrine Tumors",
  "Multiple Myeloma & Plasma Cell Disorders",
  "Acute & Chronic Leukemias",
  "Hodgkin & Non-Hodgkin Lymphoma",
  "Myelodysplastic Syndromes",
  "Pediatric Solid Tumors, Leukemias & Lymphomas",
  "Relapsed & Refractory Cancers",
  "Patients Undergoing Stem Cell Transplantation & Cellular Therapy",
  "Supportive, Survivorship & Palliative Care Patients",
];

const diagnostics = [
  "Detailed medical history and physical examination",
  "Imaging: X-ray, CT, MRI, PET-CT, and ultrasound",
  "Histopathological examination and biopsy",
  "Tumor marker testing",
  "Bone marrow examination",
  "Flow cytometry",
  "Molecular and genetic testing",
  "Cytogenetic and genomic analysis",
];

const whenToVisit = [
  "Unexplained weight loss or persistent loss of appetite",
  "Persistent fever without clear cause",
  "New or growing lumps or swellings",
  "Unusual bleeding or bruising",
  "Chronic fatigue or weakness",
  "Changes in bowel or bladder habits",
  "Persistent cough or breathlessness",
  "Non-healing sores or ulcers",
  "Difficulty swallowing or hoarseness",
  "Bone pain or unexplained fractures",
  "Neurological symptoms such as headaches or seizures",
  "Persistent pallor, bruising, or fever in children",
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
            <li className="text-[var(--color-primary)] font-medium">Medical Oncology & Pediatric Oncology</li>
          </ol>
        </div>
      </nav>

      {/* Department Hero */}
      <section className="bg-[var(--color-primary)] text-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Department of Medical Oncology and Pediatric Oncology
              </h1>
              <p className="mt-4 text-lg text-white/80 leading-relaxed">
                Medical Oncology and Pediatric Oncology focuses on treating cancer using chemotherapy, immunotherapy, targeted therapies, hematopoietic stem cell transplant, and cellular therapy.
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
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm space-y-3">
                <p className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-xs">Key Therapies</p>
                {["Chemotherapy", "Immunotherapy", "Targeted Therapy", "Stem Cell Transplant", "CAR-T Cell Therapy", "Precision Medicine"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-white/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About This Department */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)]">
                What is Medical and Pediatric Oncology?
              </h2>
              <div className="mt-6 space-y-4 text-[var(--color-text-light)] leading-relaxed">
                <p>
                  Medical and Pediatric Oncology is a specialised branch of medicine that focuses on the diagnosis, treatment, and management of cancer in adults, children, and adolescents. It deals with both solid tumors and blood-related cancers using advanced systemic therapies such as chemotherapy, targeted therapy, immunotherapy, hormonal therapy, hematopoietic stem cell transplantation, and cellular therapies.
                </p>
                <p>
                  Oncologists work closely with surgeons, radiation specialists, pathologists, radiologists, and supportive care teams to provide comprehensive, patient-centered cancer care. The department aims to achieve cure, disease control, symptom relief, and improved quality of life through evidence-based and personalised treatment approaches.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">Diagnostic Techniques</h3>
              <ul className="space-y-3">
                {diagnostics.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-text-light)] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-4">
            Common Conditions Treated
          </h2>
          <p className="text-[var(--color-text-light)] mb-10 max-w-2xl">
            The Department of Medical and Pediatric Oncology manages a wide range of cancers and related conditions, including:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white p-4 rounded-lg border border-[var(--color-primary)]/10"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center">
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

      {/* Treatment Options */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-4">
            Treatment Options
          </h2>
          <p className="text-[var(--color-text-light)] mb-10 max-w-2xl">
            Treatment is tailored to the type, stage, and biology of cancer, as well as the patient&apos;s age and overall health.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-[var(--color-accent)] p-4 rounded-lg border border-[var(--color-primary)]/10"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[var(--color-text-dark)] font-medium text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
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
                    <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden">
                      <img src="/sample_doc.png" alt={member.name} className="w-full h-full object-cover object-top" />
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
      <section className="py-16 md:py-20">
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
        </div>
      </section>

      {/* When to Visit */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-4">
                When Should You Visit?
              </h2>
              <p className="text-[var(--color-text-light)] leading-relaxed mb-8">
                You should consider consulting an oncologist if you experience any of the following symptoms. Early consultation helps in timely diagnosis and improves treatment outcomes.
              </p>
              <Button href="#">Book an Appointment</Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {whenToVisit.map((symptom, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-[var(--color-primary)]/10">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] flex-shrink-0 mt-1.5" />
                  <span className="text-sm text-[var(--color-text-dark)]">{symptom}</span>
                </div>
              ))}
            </div>
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
                  Schedule a consultation with our medical and pediatric oncology specialists. We&apos;re here to provide the best care for you.
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
