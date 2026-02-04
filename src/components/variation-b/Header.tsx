"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

const navigation = [
  { name: "Home", href: "/variation-b/home" },
  { name: "About", href: "#" },
  { name: "Departments", href: "/variation-b/department" },
  { name: "Doctors", href: "/variation-b/doctor" },
  { name: "Research", href: "/variation-b/research" },
  { name: "News", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      {/* Top Editorial Banner */}
      <div className="bg-[var(--color-text-dark)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-6">
              <span className="hidden sm:inline">India&apos;s First Cancer Hospital - Est. 1954</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+914422209150" className="hover:text-[var(--color-secondary)] transition-colors">
                +91 44 2220 9150
              </a>
              <span className="hidden md:inline text-white/60">|</span>
              <a href="#" className="hidden md:inline hover:text-[var(--color-secondary)] transition-colors">
                Patient Login
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b-4 border-[var(--color-primary)]">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/variation-b/home" className="flex-shrink-0">
              <Image
                src="/logos/logo-horizontal-blue.png"
                alt="Cancer Institute (WIA)"
                width={240}
                height={65}
                className="h-16 w-auto"
              />
            </Link>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <Button href="#" size="sm" variant="secondary">
                Book Appointment
              </Button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[var(--color-text-dark)]"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Editorial Style */}
      <nav className="bg-[var(--color-primary)] hidden lg:block">
        <div className="mx-auto max-w-7xl px-4">
          <ul className="flex items-center justify-center gap-0">
            {navigation.map((item, index) => (
              <li key={item.name} className="relative">
                <Link
                  href={item.href}
                  className="block px-6 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {item.name}
                </Link>
                {index < navigation.length - 1 && (
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-4 bg-white/20" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-[var(--color-primary)]">
          <div className="px-4 py-4">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}
