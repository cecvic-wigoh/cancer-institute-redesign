import Link from "next/link";
import MockupNav from "@/components/MockupNav";
import Button from "@/components/variation-b/Button";
import Card from "@/components/variation-b/Card";

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
  { name: "Targeted Therapy", desc: "Drugs targeting specific molecular changes in cancer cells" },
  { name: "Immunotherapy", desc: "Helping the immune system recognise and fight cancer" },
  { name: "Hormonal Therapy", desc: "Blocking hormones that fuel certain cancers" },
  { name: "Oral Anticancer Medications", desc: "Tablet-based cancer treatments" },
  { name: "Stem Cell Transplantation", desc: "Replacing damaged marrow with healthy stem cells" },
  { name: "CAR-T Cell Therapy", desc: "Engineering patient's immune cells to attack cancer" },
  { name: "Precision Medicine", desc: "Treatment based on genetic profiling of the tumor" },
  { name: "Palliative Care", desc: "Symptom relief and quality of life support" },
  { name: "Supportive Care", desc: "Managing treatment side effects and recovery" },
  { name: "Survivorship Care", desc: "Long-term follow-up and rehabilitation" },
  { name: "Clinical Trials", desc: "Access to cutting-edge experimental treatments" },
];

const diagnosticTechniques = [
  { label: "Imaging Studies", detail: "X-ray, CT, MRI, PET-CT, and ultrasound" },
  { label: "Histopathology & Biopsy", detail: "Tissue diagnosis and staging" },
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

const achievements = [
  { value: "15,000+", label: "Patients Treated Annually" },
  { value: "95%", label: "Patient Satisfaction Rate" },
  { value: "40+", label: "Active Clinical Trials" },
  { value: "150+", label: "Research Publications" },
];

const teamMembers = [
  { name: "Dr. Priya Sharma", title: "Head of Department", experience: "25 years", specialty: "Breast Cancer", image: "/sample_doc.png" },
  { name: "Dr. Arun Krishnan", title: "Senior Consultant", experience: "18 years", specialty: "Lung Cancer", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80" },
  { name: "Dr. Lakshmi Venkat", title: "Consultant", experience: "12 years", specialty: "GI Oncology", image: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=400&q=80" },
  { name: "Dr. Mohan Reddy", title: "Consultant", experience: "10 years", specialty: "Pediatric Oncology", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80" },
];

/* ───── COMPONENT ───── */

export default function DepartmentPage() {
  return (
    <>
      <MockupNav variationId="b" currentPage="department" />

      {/* Breadcrumb */}
      <nav className="bg-[var(--color-accent)] border-b border-[var(--color-primary)]/10">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <ol className="flex items-center text-sm">
            <li><Link href="/variation-b/home" className="text-[var(--color-text-light)] hover:text-[var(--color-primary)]">Home</Link></li>
            <li className="mx-2 text-[var(--color-text-light)]">/</li>
            <li><Link href="#" className="text-[var(--color-text-light)] hover:text-[var(--color-primary)]">Departments</Link></li>
            <li className="mx-2 text-[var(--color-text-light)]">/</li>
            <li className="text-[var(--color-primary)] font-bold">Medical Oncology &amp; Pediatric Oncology</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-[var(--color-primary)] text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2">
            {/* Left — Copy */}
            <div className="p-8 lg:p-16">
              <span className="inline-block px-3 py-1 bg-[var(--color-secondary)] text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider mb-6">
                Department
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Medical Oncology and Pediatric Oncology
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                Treating cancer in adults, children, and adolescents using chemotherapy, immunotherapy, targeted therapies, hematopoietic stem cell transplant, and cellular therapy.
              </p>
              <div className="flex gap-4">
                <Button variant="secondary" href="#">Book Consultation</Button>
                <Button variant="outline" href="#" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
                  Contact Us
                </Button>
              </div>
            </div>
            {/* Right — Stats */}
            <div className="bg-[var(--color-text-dark)] p-8 lg:p-16">
              <h2 className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm mb-8 pb-4 border-b border-white/20">
                Department Achievements
              </h2>
              <div className="grid grid-cols-2 gap-8">
                {achievements.map((s, i) => (
                  <div key={i}>
                    <div className="text-3xl lg:text-4xl font-bold text-[var(--color-secondary)]">{s.value}</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider mt-2">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">About The Department</span>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mt-2 mb-6">
                What is Medical and Pediatric Oncology?
              </h2>
              <div className="prose prose-lg max-w-none text-[var(--color-text-light)]">
                <p>
                  Medical and Pediatric Oncology is a specialised branch of medicine that focuses on the diagnosis, treatment, and management of cancer in adults, children, and adolescents. It deals with both solid tumors and blood-related cancers using advanced systemic therapies such as chemotherapy, targeted therapy, immunotherapy, hormonal therapy, hematopoietic stem cell transplantation, and cellular therapies.
                </p>
                <p>
                  Oncologists work closely with surgeons, radiation specialists, pathologists, radiologists, and supportive care teams to provide comprehensive, patient-centered cancer care. The department aims to achieve cure, disease control, symptom relief, and improved quality of life through evidence-based and personalised treatment approaches.
                </p>
              </div>

              {/* Who is an Oncologist */}
              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-[var(--color-accent)] border-l-4 border-[var(--color-secondary)]">
                  <h3 className="font-bold text-[var(--color-text-dark)] mb-2">Medical Oncologist</h3>
                  <p className="text-sm text-[var(--color-text-light)]">
                    A physician trained in diagnosing and treating cancer using systemic therapies. They understand the biological behavior of cancers, assess treatment responses, and manage side effects.
                  </p>
                </div>
                <div className="p-6 bg-[var(--color-accent)] border-l-4 border-[var(--color-primary)]">
                  <h3 className="font-bold text-[var(--color-text-dark)] mb-2">Pediatric Oncologist</h3>
                  <p className="text-sm text-[var(--color-text-light)]">
                    Specialises in managing cancers in children and adolescents using age-specific treatment protocols, dedicated supportive care, and child-focused rehabilitation.
                  </p>
                </div>
              </div>

              {/* What Oncologists Do */}
              <div className="mt-10 p-8 bg-[var(--color-accent)] border-l-4 border-[var(--color-secondary)]">
                <h3 className="font-bold text-[var(--color-text-dark)] mb-4">What Our Oncologists Do</h3>
                <div className="grid sm:grid-cols-2 gap-2 text-sm text-[var(--color-text-light)]">
                  {oncologistRoles.map((role, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[var(--color-secondary)] mt-0.5">★</span>
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card variant="featured" padding="lg">
                <h3 className="font-bold text-[var(--color-text-dark)] mb-4">Contact Information</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-[var(--color-text-light)] block">Phone</span>
                    <span className="font-bold">+91 44 2220 9150</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text-light)] block">Email</span>
                    <span className="font-bold">medicaloncology@ciwia.org</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text-light)] block">OPD Hours</span>
                    <span className="font-bold">Mon-Sat: 8AM - 4PM</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text-light)] block">Emergency</span>
                    <span className="font-bold">24/7</span>
                  </div>
                </div>
                <Button href="#" className="w-full mt-6">Book Appointment</Button>
              </Card>

              <Card variant="bordered" padding="lg">
                <h3 className="font-bold text-[var(--color-text-dark)] mb-4">Location</h3>
                <p className="text-sm text-[var(--color-text-light)]">
                  Main Building, 2nd Floor<br />
                  Cancer Institute (WIA)<br />
                  38, Sardar Patel Road, Adyar<br />
                  Chennai - 600020
                </p>
              </Card>

              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80"
                  alt="Doctor consulting with patient"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONDITIONS TREATED ── */}
      <section className="py-16 md:py-24 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">Scope of Care</span>
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mt-2 mb-10">Common Conditions Treated</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {conditionGroups.map((group, gi) => (
              <div key={gi}>
                <h3 className="font-bold text-[var(--color-primary)] mb-4 pb-2 border-b-2 border-[var(--color-secondary)]">
                  {group.heading}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="bg-white p-3 border-l-4 border-[var(--color-secondary)] text-sm text-[var(--color-text-dark)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TREATMENT OPTIONS ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">What We Offer</span>
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mt-2 mb-4">Treatment Options</h2>
          <p className="text-[var(--color-text-light)] mb-10 max-w-2xl">
            Treatment is tailored to the type, stage, and biology of cancer, as well as the patient&apos;s age and overall health.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {treatmentOptions.map((t, i) => (
              <div key={i} className="p-5 bg-[var(--color-accent)] border-l-4 border-[var(--color-secondary)] hover:shadow-md transition-shadow">
                <h3 className="font-bold text-[var(--color-primary)]">{t.name}</h3>
                <p className="text-sm text-[var(--color-text-light)] mt-1">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIAGNOSTIC TECHNIQUES ── */}
      <section className="py-16 md:py-24 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">Diagnosis</span>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mt-2 mb-6">Diagnostic Techniques</h2>
              <p className="text-[var(--color-text-light)] mb-8">
                Oncologists use a combination of clinical, laboratory, and imaging-based methods to diagnose and stage cancer accurately.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {diagnosticTechniques.map((d, i) => (
                  <Card key={i} variant="default" padding="md">
                    <h4 className="font-bold text-[var(--color-text-dark)] text-sm">{d.label}</h4>
                    <p className="text-xs text-[var(--color-text-light)] mt-1">{d.detail}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80"
                alt="Medical laboratory"
                className="w-full h-60 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80"
                alt="CT scan imaging equipment"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHEN TO VISIT ── */}
      <section className="py-16 md:py-24 bg-[var(--color-primary)] text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">Warning Signs</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">When Should You Visit?</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Early consultation helps in timely diagnosis and significantly improves treatment outcomes. Consult an oncologist if you experience any of these symptoms.
              </p>
              <Button variant="secondary" href="#">Book Consultation Now</Button>
            </div>
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
              {whenToVisit.map((s, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/10 p-3">
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
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                alt="Healthy lifestyle and cancer prevention"
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">Prevention</span>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mt-2 mb-4">
                Preventive Measures &amp; Patient Care
              </h2>
              <p className="text-[var(--color-text-light)] mb-6">
                Preventing cancer and treatment-related complications involves lifestyle modification, early detection, and ongoing care.
              </p>
              <ul className="space-y-3">
                {preventiveMeasures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[var(--color-secondary)] mt-0.5">★</span>
                    <span className="text-[var(--color-text-dark)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR TEAM ── */}
      <section className="py-16 md:py-24 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm">Our Experts</span>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mt-2">Department Team</h2>
            </div>
            <Button variant="text" href="/variation-b/doctor">View All Doctors →</Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((m, i) => (
              <Link key={i} href="/variation-b/doctor" className="group">
                <Card variant="default" padding="md">
                  <div className="aspect-square mb-4 overflow-hidden">
                    <img src={m.image} alt={`${m.name} - ${m.title}`} className="w-full h-full object-cover object-top" />
                  </div>
                  <h3 className="font-bold text-[var(--color-text-dark)] group-hover:text-[var(--color-primary)] transition-colors">{m.name}</h3>
                  <p className="text-sm text-[var(--color-text-light)]">{m.title}</p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-[var(--color-primary)]/10">
                    <span className="text-xs text-[var(--color-secondary)] font-bold">{m.specialty}</span>
                    <span className="text-xs text-[var(--color-text-light)]">{m.experience}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[var(--color-secondary)] py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-[var(--color-primary)]/70 mt-2 mb-6">
            Our specialists are here to provide personalized cancer care for adults and children.
          </p>
          <Button href="#">Book an Appointment</Button>
        </div>
      </section>
    </>
  );
}
