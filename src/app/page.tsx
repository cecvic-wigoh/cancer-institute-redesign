import Image from "next/image";
import Link from "next/link";

const designVariations = [
  {
    id: "a",
    name: "Variation A",
    title: "Minimal & Clean",
    description:
      "A streamlined, whitespace-focused design emphasizing clarity and ease of navigation. Perfect for users who value simplicity and quick access to information.",
    href: "/variation-a",
  },
  {
    id: "b",
    name: "Variation B",
    title: "Editorial & Content-Rich",
    description:
      "A magazine-style layout with rich typography and content hierarchy. Ideal for showcasing research, news, and in-depth medical information.",
    href: "/variation-b",
  },
  {
    id: "c",
    name: "Variation C",
    title: "Modern Medical",
    description:
      "A contemporary healthcare aesthetic with clean lines and professional imagery. Balances warmth with clinical precision.",
    href: "/variation-c",
  },
  {
    id: "d",
    name: "Variation D",
    title: "Bold & Dynamic",
    description:
      "An energetic design with strong visual elements and engaging interactions. Creates a memorable, forward-thinking impression.",
    href: "/variation-d",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-accent)]">
      {/* Header */}
      <header className="bg-[var(--color-primary)] py-8 px-6">
        <div className="mx-auto max-w-6xl flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <Image
            src="/logos/logo-horizontal-white.png"
            alt="Cancer Institute (WIA) Logo"
            width={200}
            height={60}
            className="h-12 w-auto"
            priority
          />
          <h1 className="text-xl font-bold text-white tracking-wide sm:text-2xl">
            Website Redesign Mockups
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Introduction */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-4">
            Choose a Design Variation
          </h2>
          <p className="text-lg text-[var(--color-text-light)] max-w-2xl mx-auto">
            Explore four distinct design approaches for the Cancer Institute
            (WIA) website. Each variation offers a unique visual style while
            maintaining brand consistency.
          </p>
        </div>

        {/* Variation Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {designVariations.map((variation) => (
            <Link
              key={variation.id}
              href={variation.href}
              className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[var(--color-primary)]/10 hover:border-[var(--color-secondary)]"
            >
              {/* Card Header */}
              <div className="bg-[var(--color-primary)] px-6 py-4">
                <span className="text-[var(--color-secondary)] text-sm font-bold uppercase tracking-wider">
                  {variation.name}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {variation.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="px-6 py-5">
                <p className="text-[var(--color-text-light)] leading-relaxed">
                  {variation.description}
                </p>

                {/* CTA */}
                <div className="mt-4 flex items-center text-[var(--color-primary)] font-bold group-hover:text-[var(--color-secondary)] transition-colors">
                  <span>View Mockups</span>
                  <svg
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-[var(--color-text-light)]">
          <p>
            Each variation includes mockups for: Home, Department, Doctor
            Profile, and Research pages.
          </p>
        </div>
      </main>
    </div>
  );
}
