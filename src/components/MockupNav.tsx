"use client";

import Link from "next/link";
import { useState } from "react";

// Design variation metadata
const variations = [
  { id: "a", name: "Variation A", title: "Minimal & Clean", path: "/variation-a" },
  { id: "b", name: "Variation B", title: "Editorial & Content-Rich", path: "/variation-b" },
  { id: "c", name: "Variation C", title: "Modern Medical", path: "/variation-c" },
];

// Page types available in each variation
const pageTypes = [
  { id: "home", name: "Home", path: "/home" },
  { id: "department", name: "Department", path: "/department" },
  { id: "doctor", name: "Doctor Profile", path: "/doctor" },
  { id: "research", name: "Research", path: "/research" },
];

interface MockupNavProps {
  variationId: "a" | "b" | "c";
  currentPage: "home" | "department" | "doctor" | "research";
}

export default function MockupNav({ variationId, currentPage }: MockupNavProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentVariation = variations.find((v) => v.id === variationId);
  const currentPageInfo = pageTypes.find((p) => p.id === currentPage);

  if (!currentVariation || !currentPageInfo) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-primary)]/95 backdrop-blur-sm border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3">
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
              <span className="text-[var(--color-secondary)] text-xs font-bold uppercase tracking-wider">
                {currentVariation.name}
              </span>
              <span className="text-white/50 hidden sm:inline">|</span>
              <span className="text-white text-sm font-medium hidden sm:inline">
                {currentVariation.title}
              </span>
            </div>
          </div>

          {/* Center: Page Navigation */}
          <div className="flex items-center gap-1 sm:gap-2">
            {pageTypes.map((page) => {
              const isActive = page.id === currentPage;
              return (
                <Link
                  key={page.id}
                  href={`${currentVariation.path}${page.path}`}
                  className={`px-2 py-1.5 text-xs sm:text-sm font-medium rounded transition-colors ${
                    isActive
                      ? "bg-[var(--color-secondary)] text-[var(--color-primary)]"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {page.name}
                </Link>
              );
            })}
          </div>

          {/* Right: Quick-switch Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded transition-colors"
            >
              <span className="hidden sm:inline">Switch Variation</span>
              <span className="sm:hidden">Switch</span>
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
                {/* Backdrop to close dropdown */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsDropdownOpen(false)}
                />

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-[var(--color-primary)]/10 z-20 overflow-hidden">
                  <div className="py-1">
                    {variations.map((variation) => {
                      const isCurrentVariation = variation.id === variationId;
                      return (
                        <Link
                          key={variation.id}
                          href={`${variation.path}${currentPageInfo.path}`}
                          onClick={() => setIsDropdownOpen(false)}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            isCurrentVariation
                              ? "bg-[var(--color-accent)] text-[var(--color-primary)] font-bold"
                              : "text-[var(--color-text-dark)] hover:bg-[var(--color-accent)]"
                          }`}
                        >
                          <span className="font-medium">{variation.name}</span>
                          <span className="text-[var(--color-text-light)] ml-2">
                            {variation.title}
                          </span>
                          {isCurrentVariation && (
                            <span className="ml-2 text-[var(--color-secondary)]">
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
