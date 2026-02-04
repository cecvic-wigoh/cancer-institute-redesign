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
];

// Research Showcase - World-Class Research Page Variations
const researchShowcaseVariations = [
  {
    id: "1",
    name: "Academic Excellence",
    title: "Scholarly & Data-Driven",
    description:
      "A prestigious, journal-style layout emphasizing credibility, peer-reviewed publications, and academic rigor. Features data visualizations, citation metrics, and a scholarly aesthetic that conveys institutional excellence.",
    href: "/research-showcase-1",
    highlight: "Impact factors, h-index metrics, publication trends",
    color: "from-blue-600 to-indigo-700",
  },
  {
    id: "2",
    name: "Innovation Hub",
    title: "Modern & Cutting-Edge",
    description:
      "A futuristic, tech-forward design showcasing breakthrough discoveries and cutting-edge research. Features dynamic visualizations, innovation metrics, and a modern aesthetic that positions the institute as a leader in cancer research innovation.",
    href: "/research-showcase-2",
    highlight: "Breakthroughs, patents, technology partnerships",
    color: "from-slate-800 to-slate-900",
  },
  {
    id: "3",
    name: "Patient Impact",
    title: "Story-Driven & Humanized",
    description:
      "A storytelling-focused design that humanizes research by connecting it to patient outcomes. Features survivor stories, clinical trial journeys, and community impact — emotionally compelling narratives that resonate with patients and families.",
    href: "/research-showcase-3",
    highlight: "Patient stories, lives saved, community programs",
    color: "from-[var(--color-primary)] to-blue-800",
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
            Explore three distinct design approaches for the Cancer Institute
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

        {/* Research Showcase Section */}
        <div className="mt-20 mb-12">
          {/* Section Header with Special Styling */}
          <div className="relative mb-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-[var(--color-secondary)]/30"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[var(--color-accent)] px-6 py-2 text-sm font-bold text-[var(--color-secondary)] uppercase tracking-widest">
                ✨ Featured Showcase
              </span>
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
              Research Page Showcase
            </h2>
            <p className="text-lg text-[var(--color-text-light)] max-w-3xl mx-auto">
              Three world-class research page designs, each crafted to impress and
              communicate the institute&apos;s research excellence. These variations
              showcase different approaches to presenting research impact, from
              academic rigor to patient-centered storytelling.
            </p>
          </div>

          {/* Research Showcase Cards */}
          <div className="grid gap-6 lg:gap-8">
            {researchShowcaseVariations.map((variation) => (
              <Link
                key={variation.id}
                href={variation.href}
                className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-[var(--color-secondary)]"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Left: Gradient Banner */}
                  <div className={`lg:w-1/3 bg-gradient-to-br ${variation.color} p-8 lg:p-10 flex flex-col justify-center`}>
                    <span className="text-white/70 text-sm font-bold uppercase tracking-wider mb-2">
                      Research Showcase {variation.id}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                      {variation.name}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                      {variation.title}
                    </span>
                  </div>

                  {/* Right: Content */}
                  <div className="lg:w-2/3 p-8 lg:p-10">
                    <p className="text-[var(--color-text-dark)] leading-relaxed mb-4">
                      {variation.description}
                    </p>

                    {/* Highlight */}
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-[var(--color-secondary)]">✓</span>
                      <span className="text-sm font-medium text-[var(--color-text-light)]">
                        Key features: {variation.highlight}
                      </span>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-[var(--color-primary)] font-bold group-hover:text-[var(--color-secondary)] transition-colors">
                      <span className="text-lg">Explore This Design</span>
                      <svg
                        className="ml-2 w-6 h-6 transform group-hover:translate-x-2 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Note about Research Showcase */}
          <div className="mt-8 p-6 bg-[var(--color-secondary)]/10 rounded-xl border border-[var(--color-secondary)]/30">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💡</span>
              <div>
                <h4 className="font-bold text-[var(--color-primary)] mb-1">
                  About These Research Page Designs
                </h4>
                <p className="text-sm text-[var(--color-text-light)]">
                  Each research showcase is a complete, standalone design that can be presented
                  independently. They feature professional stock imagery, compelling data visualizations,
                  and carefully crafted layouts designed to impress research directors and stakeholders.
                  All three variations maintain brand consistency while offering distinct visual approaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
