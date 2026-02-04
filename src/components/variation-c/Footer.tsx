import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { name: "Find a Doctor", href: "/variation-c/doctor" },
  { name: "Book Appointment", href: "#" },
  { name: "Patient Portal", href: "#" },
  { name: "Health Records", href: "#" },
  { name: "Second Opinion", href: "#" },
];

const departments = [
  { name: "Medical Oncology", href: "/variation-c/department" },
  { name: "Surgical Oncology", href: "#" },
  { name: "Radiation Oncology", href: "#" },
  { name: "Pediatric Oncology", href: "#" },
  { name: "Palliative Care", href: "#" },
];

const resources = [
  { name: "Research", href: "/variation-c/research" },
  { name: "Clinical Trials", href: "#" },
  { name: "Publications", href: "#" },
  { name: "Patient Education", href: "#" },
  { name: "News & Events", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/logos/logo-horizontal-blue.png"
              alt="Cancer Institute (WIA)"
              width={180}
              height={50}
              className="h-11 w-auto mb-6"
            />
            <p className="text-[var(--color-text-light)] leading-relaxed mb-6 max-w-sm">
              India&apos;s first dedicated cancer hospital, providing compassionate care, cutting-edge treatment, and pioneering research since 1954.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {["facebook", "twitter", "instagram", "linkedin", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
                  aria-label={social}
                >
                  <SocialIcon name={social} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[var(--color-text-dark)] mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-bold text-[var(--color-text-dark)] mb-4">Departments</h4>
            <ul className="space-y-3">
              {departments.map((dept) => (
                <li key={dept.name}>
                  <Link href={dept.href} className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors">
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-[var(--color-text-dark)] mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link href={resource.href} className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors">
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h5 className="font-semibold text-[var(--color-text-dark)]">Address</h5>
              <p className="text-sm text-[var(--color-text-light)] mt-1">
                38, Sardar Patel Road, Adyar<br />
                Chennai - 600020
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h5 className="font-semibold text-[var(--color-text-dark)]">Phone</h5>
              <p className="text-sm text-[var(--color-text-light)] mt-1">
                General: +91 44 2220 9150<br />
                Emergency: +91 44 2220 9151
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h5 className="font-semibold text-[var(--color-text-dark)]">Hours</h5>
              <p className="text-sm text-[var(--color-text-light)] mt-1">
                OPD: Mon-Sat, 8AM - 4PM<br />
                Emergency: 24/7
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-light)]">
            <p>&copy; {new Date().getFullYear()} Cancer Institute (WIA). All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Terms of Use</Link>
              <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Accessibility</Link>
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
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
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
