import Link from "next/link";
import Image from "next/image";

const sections = [
  {
    title: "Patient Services",
    links: [
      { name: "Find a Doctor", href: "/variation-b/doctor" },
      { name: "Book Appointment", href: "#" },
      { name: "Patient Portal", href: "#" },
      { name: "Medical Records", href: "#" },
      { name: "Insurance & Billing", href: "#" },
    ],
  },
  {
    title: "Departments",
    links: [
      { name: "Medical Oncology", href: "/variation-b/department" },
      { name: "Surgical Oncology", href: "#" },
      { name: "Radiation Oncology", href: "#" },
      { name: "Pediatric Oncology", href: "#" },
      { name: "All Departments", href: "#" },
    ],
  },
  {
    title: "Research & Education",
    links: [
      { name: "Clinical Trials", href: "/variation-b/research" },
      { name: "Publications", href: "#" },
      { name: "Training Programs", href: "#" },
      { name: "Collaborations", href: "#" },
      { name: "Grant Information", href: "#" },
    ],
  },
  {
    title: "About Us",
    links: [
      { name: "Our History", href: "#" },
      { name: "Leadership", href: "#" },
      { name: "Careers", href: "#" },
      { name: "News & Events", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-text-dark)] text-white">
      {/* Main Footer - Magazine Style Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Image
              src="/logos/logo-stacked-white.png"
              alt="Cancer Institute (WIA)"
              width={150}
              height={120}
              className="h-24 w-auto mb-6"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Pioneering cancer care and research since 1954.
            </p>
          </div>

          {/* Links Columns */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-xs mb-4 pb-2 border-b border-white/20">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-[var(--color-secondary)] text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h5 className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-xs mb-2">
                Location
              </h5>
              <p className="text-white/70 text-sm">
                38, Sardar Patel Road, Adyar<br />
                Chennai - 600020, India
              </p>
            </div>
            <div>
              <h5 className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-xs mb-2">
                Contact
              </h5>
              <p className="text-white/70 text-sm">
                Phone: +91 44 2220 9150<br />
                Email: info@cancerinstitutewia.org
              </p>
            </div>
            <div>
              <h5 className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-xs mb-2">
                Follow Us
              </h5>
              <div className="flex justify-center md:justify-start gap-4">
                {["facebook", "twitter", "linkedin", "youtube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-white/70 hover:text-[var(--color-secondary)] transition-colors"
                    aria-label={social}
                  >
                    <SocialIcon name={social} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <p>&copy; {new Date().getFullYear()} Cancer Institute (WIA). All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    youtube: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  };

  return icons[name] || null;
}
