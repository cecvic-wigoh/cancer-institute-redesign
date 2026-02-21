import Link from "next/link";
import MockupNav from "@/components/MockupNav";
import Button from "@/components/variation-a/Button";
import Card from "@/components/variation-a/Card";

/* ───── DATA ───── */

const conditionGroups = [
  {
    heading: "Solid Tumors",
    items: [
      "Breast cancer",
      "Lung cancer",
      "Colorectal and gastrointestinal cancers",
      "Head and neck cancers",
      "Gynecological and genitourinary cancers",
      "Sarcomas and central nervous system tumors",
      "Neuroendocrine tumors",
    ],
  },
  {
    heading: "Blood Cancers & Disorders",
    items: [
      "Multiple myeloma and plasma cell disorders",
      "Acute and chronic leukemias",
      "Hodgkin and Non-Hodgkin lymphoma",
      "Myelodysplastic syndromes and myeloproliferative neoplasms",
    ],
  },
  {
    heading: "Pediatric & Special Categories",
    items: [
      "Pediatric solid tumors, leukemias, lymphomas, and brain tumors",
      "Relapsed and refractory cancers",
      "Patients undergoing stem cell transplantation and cellular therapy",
      "Supportive, survivorship, and palliative care patients",
    ],
  },
];

const treatmentOptions = [
  { name: "Chemotherapy", desc: "Conventional systemic drugs to destroy cancer cells" },
  { name: "Targeted Therapy", desc: "Drugs that target specific molecular changes in cancer cells" },
  { name: "Immunotherapy", desc: "Treatments that help the immune system fight cancer" },
  { name: "Hormonal Therapy", desc: "Blocking hormones that fuel certain cancers" },
  { name: "Oral Anticancer Medications", desc: "Tablet-based cancer treatments for convenient care" },
  { name: "Hematopoietic Stem Cell Transplantation", desc: "Replacing damaged bone marrow with healthy stem cells" },
  { name: "CAR-T Cell Therapy", desc: "Engineering patient's own immune cells to attack cancer" },
  { name: "Precision Medicine", desc: "Treatment plans based on genetic profiling of the tumor" },
  { name: "Supportive & Symptom Management", desc: "Managing treatment side effects and improving comfort" },
  { name: "Palliative Care", desc: "Comprehensive symptom relief and quality of life support" },
  { name: "Survivorship Care", desc: "Long-term follow-up and rehabilitation after treatment" },
  { name: "Clinical Trials Access", desc: "Access to cutting-edge experimental treatments" },
];

const diagnosticTechniques = [
  "Detailed medical history and physical examination",
  "Imaging studies — X-ray, CT, MRI, PET-CT, and ultrasound",
  "Histopathological examination and biopsy",
  "Tumor marker testing",
  "Bone marrow examination",
  "Flow cytometry",
  "Molecular and genetic testing",
  "Cytogenetic and genomic analysis",
  "Risk stratification and protocol-based assessment",
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
  "Recurrent infections",
  "Bone pain or unexplained fractures",
  "Neurological symptoms such as headaches or seizures",
  "Persistent pallor, bruising, or fever in children",
];

const preventiveMeasures = [
  "Maintaining a healthy diet and regular physical activity",
  "Avoiding tobacco and limiting alcohol consumption",
  "Participating in cancer screening programs",
  "Seeking early medical attention for warning signs",
  "Practicing infection prevention during treatment",
  "Adhering to prescribed medications and follow-up schedules",
  "Maintaining emotional, nutritional, and psychological well-being",
  "Engaging family and caregiver support",
];

const oncologistRoles = [
  "Evaluating and diagnosing cancer",
  "Planning personalised treatment protocols",
  "Administering chemotherapy, immunotherapy, and targeted therapies",
  "Monitoring treatment response and managing side effects",
  "Performing and interpreting bone marrow and molecular studies",
  "Coordinating stem cell transplantation and cellular therapy",
  "Providing supportive and palliative care",
  "Guiding patients through survivorship and rehabilitation",
  "Participating in research and clinical trials",
];

const teamMembers = [
  { name: "Dr. Priya Sharma", title: "Head of Department", experience: "25 years", image: "/sample_doc.png" },
  { name: "Dr. Arun Krishnan", title: "Senior Consultant", experience: "18 years", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80" },
  { name: "Dr. Lakshmi Venkat", title: "Consultant", experience: "12 years", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80" },
  { name: "Dr. Mohan Reddy", title: "Consultant, Pediatric Oncology", experience: "10 years", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80" },
  { name: "Dr. Sita Patel", title: "Associate Consultant", experience: "8 years", image: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=400&q=80" },
  { name: "Dr. Vijay Kumar", title: "Associate Consultant", experience: "6 years", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80" },
];

const relatedDepartments = [
  { name: "Surgical Oncology", href: "#" },
  { name: "Radiation Oncology", href: "#" },
  { name: "Hematology", href: "#" },
  { name: "Palliative Care", href: "#" },
  { name: "Molecular Oncology", href: "#" },
  { name: "Pathology", href: "#" },
];

/* ───── COMPONENT ───── */

export default function DepartmentPage() {
  return (
    <>
      <MockupNav variationId="a" currentPage="department" />

      {/* Breadcrumb */}
      <nav className="bg-[var(--color-accent)] border-b border-[var(--color-primary)]/10">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <ol className="flex items-center text-sm">
            <li>
              <Link href="/variation-a/home" className="text-[var(--color-text-light)] hover:text-[var(--color-primary)]">Home</Link>
            </li>
            <li className="mx-2 text-[var(--color-text-light)]">/</li>
            <li>
              <Link href="#" className="text-[var(--color-text-light)] hover:text-[var(--color-primary)]">Departments</Link>
            </li>
            <li className="mx-2 text-[var(--color-text-light)]">/</li>
            <li className="text-[var(--color-primary)] font-medium">Medical Oncology &amp; Pediatric Oncology</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative bg-[var(--color-primary)] text-white overflow-hidden">
        {/* Decorative bg image overlay */}
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[var(--color-secondary)] text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider rounded mb-6">
              Department
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Department of Medical Oncology and Pediatric Oncology
            </h1>
            <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-2xl">
              Treating cancer in adults, children, and adolescents using chemotherapy, immunotherapy, targeted therapies, hematopoietic stem cell transplant, and cellular therapy.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="secondary" href="#">Book Appointment</Button>
              <Button variant="outline" href="#" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
                Contact Department
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK NAV (anchor links) ── */}
      <section className="bg-[var(--color-primary)] sticky top-0 z-40 shadow-md">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex gap-1 overflow-x-auto">
            {["Overview", "Conditions", "Treatments", "Diagnostics", "When to Visit", "Our Team"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/ /g, "-")}`}
                className="px-5 py-4 text-sm font-semibold whitespace-nowrap text-white/70 hover:text-white border-b-3 border-transparent hover:border-[var(--color-secondary)] hover:bg-white/10 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section id="overview" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-6">
                What is Medical and Pediatric Oncology?
              </h2>
              <div className="space-y-4 text-[var(--color-text-light)] leading-relaxed">
                <p>
                  Medical and Pediatric Oncology is a specialised branch of medicine that focuses on the diagnosis, treatment, and management of cancer in adults, children, and adolescents. It deals with both solid tumors and blood-related cancers using advanced systemic therapies such as chemotherapy, targeted therapy, immunotherapy, hormonal therapy, hematopoietic stem cell transplantation, and cellular therapies.
                </p>
                <p>
                  Oncologists work closely with surgeons, radiation specialists, pathologists, radiologists, and supportive care teams to provide comprehensive, patient-centered cancer care. The department aims to achieve cure, disease control, symptom relief, and improved quality of life through evidence-based and personalised treatment approaches.
                </p>
              </div>

              <h3 className="text-xl font-bold text-[var(--color-text-dark)] mt-10 mb-4">
                Who is a Medical Oncologist and Pediatric Oncologist?
              </h3>
              <div className="space-y-4 text-[var(--color-text-light)] leading-relaxed">
                <p>
                  A medical oncologist is a physician trained in diagnosing and treating cancer using systemic therapies. A pediatric oncologist specialises in managing cancers in children and adolescents, which require age-specific treatment protocols and supportive care.
                </p>
                <p>
                  These specialists are trained to understand the biological behavior of cancers, assess treatment responses, manage side effects, and coordinate multidisciplinary care to ensure the best possible outcomes.
                </p>
              </div>
            </div>

            {/* Sidebar – What Oncologists Do */}
            <div className="lg:col-span-2">
              <div className="bg-[var(--color-accent)] rounded-xl p-6 border border-[var(--color-primary)]/10">
                <h3 className="font-bold text-[var(--color-text-dark)] mb-4">What Our Oncologists Do</h3>
                <ul className="space-y-3">
                  {oncologistRoles.map((role, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-[var(--color-text-dark)]">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="mt-6 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80"
                  alt="Doctor consulting with a patient"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONDITIONS TREATED ── */}
      <section id="conditions" className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-2">
            Common Conditions Treated
          </h2>
          <p className="text-[var(--color-text-light)] mb-10 max-w-3xl">
            The Department of Medical and Pediatric Oncology manages a wide range of cancers and related conditions, including:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {conditionGroups.map((group, gi) => (
              <div key={gi}>
                <h3 className="font-bold text-[var(--color-primary)] uppercase tracking-wider text-xs mb-4 pb-2 border-b border-[var(--color-primary)]/20">
                  {group.heading}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] flex-shrink-0 mt-2" />
                      <span className="text-sm text-[var(--color-text-dark)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TREATMENT OPTIONS ── */}
      <section id="treatments" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)]">Treatment Options</h2>
              <p className="mt-2 text-[var(--color-text-light)] max-w-2xl">
                Treatment is tailored to the type, stage, and biology of cancer, as well as the patient&apos;s age and overall health.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {treatmentOptions.map((t, i) => (
              <Card key={i} padding="md" hover>
                <h3 className="font-bold text-[var(--color-text-dark)]">{t.name}</h3>
                <p className="text-sm text-[var(--color-text-light)] mt-1">{t.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIAGNOSTIC TECHNIQUES ── */}
      <section id="diagnostics" className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-4">
                Diagnostic Techniques
              </h2>
              <p className="text-[var(--color-text-light)] mb-8">
                Oncologists use a combination of clinical, laboratory, and imaging-based methods to diagnose and stage cancer.
              </p>
              <ul className="space-y-3">
                {diagnosticTechniques.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-[var(--color-primary)]/10">
                    <svg className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-[var(--color-text-dark)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80"
                  alt="Medical laboratory diagnostic equipment"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80"
                  alt="CT scan imaging"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHEN TO VISIT ── */}
      <section id="when-to-visit" className="py-16 md:py-20 bg-[var(--color-primary)] text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">
                When Should You Visit the Oncology Department?
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Early consultation helps in timely diagnosis and improves treatment outcomes. You should consider consulting an oncologist if you experience any of the following symptoms:
              </p>
              <Button variant="secondary" href="#">Book an Appointment</Button>
            </div>
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
              {whenToVisit.map((s, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <svg className="w-4 h-4 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.27 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span className="text-sm text-white/90">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PREVENTIVE MEASURES ── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                alt="Healthy lifestyle and cancer prevention"
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-4">
                Preventive Measures &amp; Patient Care
              </h2>
              <p className="text-[var(--color-text-light)] mb-6">
                Preventing cancer and treatment-related complications involves lifestyle modification, early detection, and ongoing care.
              </p>
              <ul className="space-y-3">
                {preventiveMeasures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[var(--color-text-dark)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR TEAM ── */}
      <section id="our-team" className="py-16 md:py-20 bg-[var(--color-accent)]">
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
            {teamMembers.map((m, i) => (
              <Link key={i} href="/variation-a/doctor">
                <Card padding="md">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden">
                      <img src={m.image} alt={m.name} className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--color-text-dark)]">{m.name}</h3>
                      <p className="text-sm text-[var(--color-text-light)]">{m.title}</p>
                      <p className="text-xs text-[var(--color-secondary)] mt-1">{m.experience} experience</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATIENT INFORMATION ── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-4">Patient Information</h2>
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
                    <p className="text-[var(--color-text-light)]">+91 44 2220 9150</p>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--color-text-dark)]">Email</p>
                    <p className="text-[var(--color-text-light)]">medicaloncology@cancerinstitutewia.org</p>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <Card padding="lg" hover={false} className="bg-[var(--color-primary)] text-white">
                <h3 className="font-bold text-xl mb-4">Book an Appointment</h3>
                <p className="text-white/80 text-sm mb-6">
                  Schedule a consultation with our medical and pediatric oncology specialists.
                </p>
                <Button variant="secondary" href="#" className="w-full">Book Now</Button>
                <p className="text-xs text-white/60 text-center mt-4">Or call us at +91 44 2220 9150</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED DEPARTMENTS ── */}
      <section className="py-12 bg-[var(--color-accent)] border-t border-[var(--color-primary)]/10">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-4">Related Departments</h3>
          <div className="flex flex-wrap gap-3">
            {relatedDepartments.map((d, i) => (
              <Link
                key={i}
                href={d.href}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[var(--color-text-dark)] border border-[var(--color-primary)]/10 hover:border-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                {d.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
