"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

const navigation = [
  { name: "Home", href: "/variation-c/home" },
  { name: "About", href: "#" },
  { name: "Departments", href: "/variation-c/department" },
  { name: "Find a Doctor", href: "/variation-c/doctor" },
  { name: "Research", href: "/variation-c/research" },
  { name: "Patient Care", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/90 text-white">
        <div className="mx-auto max-w-7xl px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+914422209150" className="flex items-center gap-2 hover:text-[var(--color-secondary)] transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 44 2220 9150
              </a>
              <span className="hidden md:flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mon-Sat: 8AM - 6PM
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Emergency: 24/7</a>
              <a href="#" className="hidden sm:block hover:text-[var(--color-secondary)] transition-colors">Patient Portal</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/variation-c/home" className="flex-shrink-0">
            <Image
              src="/logos/logo-horizontal-blue.png"
              alt="Cancer Institute (WIA)"
              width={200}
              height={55}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-[var(--color-text-dark)] hover:text-[var(--color-primary)] hover:bg-[var(--color-accent)] rounded-full font-medium transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search Button */}
            <button className="p-2 text-[var(--color-text-light)] hover:text-[var(--color-primary)] hover:bg-[var(--color-accent)] rounded-full transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <Button href="#" size="sm" className="hidden sm:flex">
              Book Appointment
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[var(--color-text-dark)] hover:bg-[var(--color-accent)] rounded-full transition-all"
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

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-[var(--color-text-dark)] hover:text-[var(--color-primary)] hover:bg-[var(--color-accent)] rounded-xl font-medium transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button href="#" className="mt-4">
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
