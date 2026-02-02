"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

const navigation = [
  { name: "Home", href: "/variation-a/home" },
  { name: "About Us", href: "#" },
  { name: "Departments", href: "/variation-a/department" },
  { name: "Our Doctors", href: "/variation-a/doctor" },
  { name: "Research", href: "/variation-a/research" },
  { name: "Patient Care", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[var(--color-primary)]/10">
      {/* Top bar */}
      <div className="bg-[var(--color-primary)] text-white py-2">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+914422209150" className="flex items-center gap-2 hover:text-[var(--color-secondary)] transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 44 2220 9150
            </a>
            <a href="mailto:info@cancerinstitutewia.org" className="hidden sm:flex items-center gap-2 hover:text-[var(--color-secondary)] transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@cancerinstitutewia.org
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:block">Emergency: 24/7</span>
            <a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Patient Portal</a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/variation-a/home" className="flex-shrink-0">
            <Image
              src="/logos/logo-horizontal-blue.png"
              alt="Cancer Institute (WIA)"
              width={220}
              height={60}
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--color-text-dark)] hover:text-[var(--color-primary)] font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Book Appointment */}
            <Button href="#" size="sm" className="hidden sm:flex">
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

        {/* Search bar */}
        {searchOpen && (
          <div className="mt-4 pb-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search doctors, departments, services..."
                className="w-full px-4 py-3 pl-12 border border-[var(--color-primary)]/20 rounded-lg focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
              />
              <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-light)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-[var(--color-primary)]/10">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[var(--color-text-dark)] hover:text-[var(--color-primary)] font-medium transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button href="#" className="mt-2">
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
