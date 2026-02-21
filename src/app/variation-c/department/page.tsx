import Link from "next/link";
import MockupNav from "@/components/MockupNav";
import Button from "@/components/variation-c/Button";
import Card from "@/components/variation-c/Card";

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
  { name: "Chemotherapy", desc: "Conventional systemic drugs to destroy cancer cells", icon: "💉" },
  { name: "Targeted Therapy", desc: "Drugs targeting specific molecular changes in cancer cells", icon: "🎯" },
  { name: "Immunotherapy", desc: "Helping the immune system recognise and fight cancer", icon: "🛡️" },
  { name: "Hormonal Therapy", desc: "Blocking hormones that fuel certain cancers", icon: "💊" },
  { name: "Oral Anticancer Medications", desc: "Tablet-based cancer treatments for convenient care", icon: "🔵" },
  { name: "Stem Cell Transplantation", desc: "Replacing damaged marrow with healthy stem cells", icon: "🧬" },
  { name: "CAR-T Cell Therapy", desc: "Engineering patient's immune cells to attack cancer", icon: "🔬" },
  { name: "Precision Medicine", desc: "Treatment based on genetic profiling of the tumor", icon: "⚕️" },
  { name: "Palliative Care", desc: "Comprehensive symptom relief and quality of life support", icon: "🤝" },
  { name: "Supportive Care", desc: "Managing treatment side effects and improving comfort", icon: "💛" },
  { name: "Survivorship Care", desc: "Long-term follow-up and rehabilitation after treatment", icon: "🌱" },
  { name: "Clinical Trials", desc: "Access to cutting-edge experimental treatments", icon: "📋" },
];

const diagnosticTechniques = [
  { label: "Imaging Studies", detail: "X-ray, CT, MRI, PET-CT, and ultrasound" },
  { label: "Histopathology & Biopsy", detail: "Tissue diagnosis and accurate staging" },
  { label: "Tumor Marker Testing", detail: "Blood-based cancer biomarkers" },
  { label: "Bone Marrow Examination", detail: "Aspiration and trephine biopsy" },
  { label: "Flow Cytometry", detail: "Cell immunophenotyping" },
  { label: "Molecular & Genetic Testing", detail: "NGS, PCR, FISH and genomic panels" },
  { label: "Cytogenetic Analysis", detail: "Chromosomal and genomic profiling" },
  { label: "Risk Stratification", detail: "Protocol-based assessment and staging" },
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

const stats = [
  { value: "15,000+", label: "Patients Treated Annually" },
  { value: "95%", label: "Patient Satisfaction" },
  { value: "40+", label: "Active Clinical Trials" },
  { value: "50+", label: "Research Publications" },
];

const team = [
  { name: "Dr. Priya Sharma", title: "Head of Department", years: "25 years", specialty: "Breast Cancer" },
  { name: "Dr. Arun Krishnan", title: "Senior Consultant", years: "18 years", specialty: "Lung Cancer" },
  { name: "Dr. Lakshmi Venkat", title: "Consultant", years: "12 years", specialty: "GI Oncology" },
  { name: "Dr. Mohan Reddy", title: "Consultant", years: "10 years", specialty: "Pediatric Oncology" },
];

/* ───── COMPONENT ───── */

export default function DepartmentPage() {
  return (
    <>
      <MockupNav variationId="c" currentPage="department" />

      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <ol className="flex items-center text-sm gap-2">
            <li><Link href="/variation-c/home" className="text-[var(--color-text-light)] hover:text-[var(--color-primary)]">Home</Link></li>
            <li className="text-gray-300">/</li>
            <li><Link href="#" className="text-[var(--color-text-light)] hover:text-[var(--color-primary)]">Departments</Link></li>
            <li className="text-gray-300">/</li>
            <li className="text-[var(--color-primary)] font-medium">Medical &amp; Pediatric Oncology</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary)]/95 to-[var(--color-primary)]/90 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2 text-white">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm">
                Department
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                Department of Medical Oncology and Pediatric Oncology
              </h1>
              <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-2xl">
                Treating cancer in adults, children, and adolescents using chemotherapy, immunotherapy, targeted therapies, hematopoietic stem cell transplant, and cellular therapy.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="secondary" size="lg" href="#">Book Consultation</Button>
                <Button variant="outline" size="lg" href="#" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
                  Contact Department
                </Button>
              </div>
            </div>
            {/* Stats */}
            <Card variant="glass" padding="lg" rounded="2xl" className="bg-white/10 backdrop-blur-sm border border-white/20">
              <h3 className="text-white font-bold mb-6">Department Highlights</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((s, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-[var(--color-secondary)]">{s.value}</div>
                    <div className="text-xs text-white/70">{s.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
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
                  Medical and Pediatric Oncology is a specialised branch of medicine that focuses on the diagnosis, treatment, and management of cancer in adults, children, and adolescents. It deals with both solid tumors and blood-related cancers using advanced systemic therapies such as chemotherapy, targeted therapy, immunotherapy, hormonal therapy, hematopoietic stem cell transplantation, and cellular therapies.
                </p>
                <p>
                  Oncologists work closely with surgeons, radiation specialists, pathologists, radiologists, and supportive care teams to provide comprehensive, patient-centered cancer care. The department aims to achieve cure, disease control, symptom relief, and improved quality of life through evidence-based and personalised treatment approaches.
                </p>
              </div>

              {/* Who is an Oncologist */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <Card variant="outlined" padding="md" rounded="xl">
                  <h3 className="font-bold text-[var(--color-text-dark)] mb-2">Medical Oncologist</h3>
                  <p className="text-sm text-[var(--color-text-light)]">
                    A physician trained in diagnosing and treating cancer using systemic therapies, assessing treatment responses, and managing side effects.
                  </p>
                </Card>
                <Card variant="outlined" padding="md" rounded="xl">
                  <h3 className="font-bold text-[var(--color-text-dark)] mb-2">Pediatric Oncologist</h3>
                  <p className="text-sm text-[var(--color-text-light)]">
                    Specialises in managing cancers in children and adolescents using age-specific protocols and child-focused supportive care.
                  </p>
                </Card>
              </div>
            </div>

            {/* What Oncologists Do + Image */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80"
                  alt="Doctor consulting with patient"
                  className="w-full h-56 object-cover"
                />
              </div>
              <Card variant="elevated" padding="lg" rounded="2xl">
                <h3 className="font-bold text-[var(--color-text-dark)] mb-4">What Our Oncologists Do</h3>
                <ul className="space-y-2">
                  {oncologistRoles.map((role, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <svg className="w-4 h-4 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[var(--color-text-dark)]">{role}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONDITIONS TREATED ── */}
      <section className="py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-14">
            <span className="text-[var(--color-secondary)] font-semibold">Scope of Care</span>
            <h2 className="mt-2 text-3xl font-bold text-[var(--color-text-dark)]">Common Conditions Treated</h2>
            <p className="mt-4 text-[var(--color-text-light)] max-w-2xl mx-auto">
              The Department manages a wide range of cancers and related conditions in both adults and children.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {conditionGroups.map((group, gi) => (
              <Card key={gi} variant="elevated" padding="lg" rounded="2xl">
                <h3 className="font-bold text-[var(--color-primary)] mb-4">{group.heading}</h3>
                <ul className="space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] flex-shrink-0 mt-2" />
                      <span className="text-sm text-[var(--color-text-dark)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── TREATMENT OPTIONS ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-14">
            <span className="text-[var(--color-secondary)] font-semibold">Treatment Options</span>
            <h2 className="mt-2 text-3xl font-bold text-[var(--color-text-dark)]">Our Services</h2>
            <p className="mt-4 text-[var(--color-text-light)] max-w-xl mx-auto">
              Treatment is tailored to the type, stage, and biology of cancer, as well as the patient&apos;s age and overall health.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {treatmentOptions.map((t, i) => (
              <Card key={i} variant="outlined" padding="md" rounded="xl" className="hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{t.icon}</div>
                <h3 className="font-bold text-[var(--color-text-dark)]">{t.name}</h3>
                <p className="text-xs text-[var(--color-text-light)] mt-1">{t.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIAGNOSTIC TECHNIQUES ── */}
      <section className="py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-[var(--color-secondary)] font-semibold">Diagnosis</span>
              <h2 className="mt-2 text-3xl font-bold text-[var(--color-text-dark)]">Diagnostic Techniques</h2>
              <p className="mt-4 text-[var(--color-text-light)] mb-8">
                Oncologists use a combination of clinical, laboratory, and imaging-based methods to diagnose and stage cancer.
              </p>
              <div className="space-y-3">
                {diagnosticTechniques.map((d, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] flex-shrink-0 mt-2" />
                    <div>
                      <p className="font-bold text-[var(--color-text-dark)] text-sm">{d.label}</p>
                      <p className="text-xs text-[var(--color-text-light)]">{d.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80"
                  alt="Medical laboratory and diagnostic equipment"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
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
      <section className="py-20 bg-[var(--color-primary)] text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <span className="text-[var(--color-secondary)] font-semibold">Know the Warning Signs</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">When Should You Visit?</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Early consultation helps in timely diagnosis and significantly improves treatment outcomes. Consult an oncologist if you or your child experience any of these symptoms.
              </p>
              <Button variant="secondary" size="lg" href="#">Book an Appointment</Button>
            </div>
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
              {whenToVisit.map((s, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-xl">
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
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                alt="Healthy lifestyle and cancer prevention"
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <span className="text-[var(--color-secondary)] font-semibold">Prevention &amp; Wellness</span>
              <h2 className="mt-2 text-3xl font-bold text-[var(--color-text-dark)]">
                Preventive Measures &amp; Patient Care
              </h2>
              <p className="mt-4 text-[var(--color-text-light)] mb-6">
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
      <section className="py-20 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <span className="text-[var(--color-secondary)] font-semibold">Our Team</span>
              <h2 className="mt-2 text-3xl font-bold text-[var(--color-text-dark)]">Meet Our Specialists</h2>
            </div>
            <Button variant="ghost" href="/variation-c/doctor" className="mt-4 md:mt-0">View All Doctors →</Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <Link key={i} href="/variation-c/doctor" className="group">
                <Card variant="outlined" padding="md" rounded="2xl">
                  <div className="aspect-square rounded-xl mb-4 overflow-hidden">
                    <img src="/sample_doc.png" alt={m.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <h3 className="font-bold text-[var(--color-text-dark)] group-hover:text-[var(--color-primary)] transition-colors">{m.name}</h3>
                  <p className="text-sm text-[var(--color-text-light)]">{m.title}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs px-2 py-1 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-full">{m.specialty}</span>
                    <span className="text-xs text-[var(--color-text-light)]">{m.years}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <Card variant="elevated" padding="lg" rounded="2xl" className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/90 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Schedule Your Consultation</h2>
            <p className="mt-4 text-white/80 max-w-lg mx-auto">
              Our team of medical and pediatric oncologists is ready to provide personalised care for your cancer treatment journey.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" href="#">Book Appointment</Button>
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
