"use client";
import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800 shadow-sm fixed w-full z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-3xl font-extrabold tracking-tight select-none">
            <span className="text-primary-600 bg-gradient-to-r from-primary-400 to-primary-700 bg-clip-text text-transparent">AIProd</span>
            <span className="inline-block h-2 w-2 rounded-full bg-primary-500 animate-pulse"></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 mx-auto">
            <Link
              href="/features"
              className="px-5 py-2 rounded-full bg-primary-600 text-white font-semibold shadow hover:scale-105 hover:bg-primary-700 transition-all duration-150"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium px-3 py-2 rounded transition-all duration-150 hover:scale-105"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium px-3 py-2 rounded transition-all duration-150 hover:scale-105"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium px-3 py-2 rounded transition-all duration-150 hover:scale-105"
            >
              Contact
            </Link>
          </div>

          {/* Hamburger for mobile */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-300 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white/95 dark:bg-gray-900/95 border-b border-gray-200 dark:border-gray-800 shadow`}>
        <div className="space-y-1 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pb-3 pt-4">
          <div className="space-y-1">

          </div>
        </div>
      </div>
    </nav>
  )
} 