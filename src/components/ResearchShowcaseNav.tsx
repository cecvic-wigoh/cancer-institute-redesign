"use client";

import Link from "next/link";
import { useState } from "react";

// Research showcase variations
const researchVariations = [
  { id: "1", name: "Academic Excellence", subtitle: "Scholarly & Data-Driven", path: "/research-showcase-1" },
  { id: "2", name: "Innovation Hub", subtitle: "Modern & Cutting-Edge", path: "/research-showcase-2" },
  { id: "3", name: "Patient Impact", subtitle: "Story-Driven & Humanized", path: "/research-showcase-3" },
];

interface ResearchShowcaseNavProps {
  currentVariation: "1" | "2" | "3";
}

export default function ResearchShowcaseNav({ currentVariation }: ResearchShowcaseNavProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const current = researchVariations.find((v) => v.id === currentVariation);

  if (!current) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-primary)]/95 backdrop-blur-sm border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Back to Overview and Variation Info */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              <svg
                className="w-4 h-4 mr-1"
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
              <span className="hidden sm:inline">Overview</span>
            </Link>

            <div className="h-5 w-px bg-white/20" />

            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-[var(--color-secondary)] text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider rounded">
                Research Showcase
              </span>
              <span className="text-white/50 hidden sm:inline">|</span>
              <span className="text-white text-sm font-medium hidden sm:inline">
                {current.name}
              </span>
            </div>
          </div>

          {/* Center: Variation Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {researchVariations.map((variation) => {
              const isActive = variation.id === currentVariation;
              return (
                <Link
                  key={variation.id}
                  href={variation.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    isActive
                      ? "bg-[var(--color-secondary)] text-[var(--color-primary)]"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="block text-xs opacity-70">{variation.subtitle}</span>
                  <span className="block font-bold">{variation.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right: Quick-switch Dropdown (mobile/tablet) */}
          <div className="lg:hidden relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded transition-colors"
            >
              <span>Switch Layout</span>
              <svg
                className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsDropdownOpen(false)}
                />

                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-[var(--color-primary)]/10 z-20 overflow-hidden">
                  <div className="py-1">
                    {researchVariations.map((variation) => {
                      const isCurrentVariation = variation.id === currentVariation;
                      return (
                        <Link
                          key={variation.id}
                          href={variation.path}
                          onClick={() => setIsDropdownOpen(false)}
                          className={`block px-4 py-3 text-sm transition-colors ${
                            isCurrentVariation
                              ? "bg-[var(--color-accent)] text-[var(--color-primary)]"
                              : "text-[var(--color-text-dark)] hover:bg-[var(--color-accent)]"
                          }`}
                        >
                          <span className="font-bold block">{variation.name}</span>
                          <span className="text-[var(--color-text-light)] text-xs">
                            {variation.subtitle}
                          </span>
                          {isCurrentVariation && (
                            <span className="ml-2 text-[var(--color-secondary)] text-xs">
                              (current)
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
