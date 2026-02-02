import Link from "next/link";

const pages = [
  { name: "Home", href: "/variation-b/home", description: "Landing page with hero section and key information" },
  { name: "Department", href: "/variation-b/department", description: "Department overview and services" },
  { name: "Doctor Profile", href: "/variation-b/doctor-profile", description: "Individual physician profile page" },
  { name: "Research", href: "/variation-b/research", description: "Research initiatives and publications" },
];

export default function VariationBPage() {
  return (
    <div className="min-h-screen bg-[var(--color-accent)]">
      {/* Header */}
      <header className="bg-[var(--color-primary)] py-6 px-6">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium transition-colors mb-4"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to All Variations
          </Link>
          <div>
            <span className="text-[var(--color-secondary)] text-sm font-bold uppercase tracking-wider">
              Variation B
            </span>
            <h1 className="text-2xl font-bold text-white mt-1">
              Editorial & Content-Rich
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[var(--color-text-dark)] mb-2">
            Design Approach
          </h2>
          <p className="text-[var(--color-text-light)]">
            A magazine-style layout with rich typography and content hierarchy.
            Ideal for showcasing research, news, and in-depth medical information.
          </p>
        </div>

        <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-4">
          Available Pages
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          {pages.map((page) => (
            <Link
              key={page.name}
              href={page.href}
              className="group block bg-white rounded-lg p-5 shadow-sm hover:shadow-md border border-[var(--color-primary)]/10 hover:border-[var(--color-secondary)] transition-all"
            >
              <h4 className="font-bold text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors">
                {page.name}
              </h4>
              <p className="text-sm text-[var(--color-text-light)] mt-1">
                {page.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-8 p-4 bg-white rounded-lg border border-[var(--color-primary)]/10">
          <p className="text-sm text-[var(--color-text-light)]">
            <strong className="text-[var(--color-text-dark)]">Note:</strong> Page mockups are coming soon.
            This is a placeholder for the Variation B navigation structure.
          </p>
        </div>
      </main>
    </div>
  );
}
