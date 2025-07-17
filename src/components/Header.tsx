'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Two Brothers Powerwashing Logo"
              width={48}
              height={48}
              className="rounded-full object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Two Brothers</h1>
              <p className="text-sm text-blue-600">Powerwashing</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors">
              Gallery
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://twobrotherspowerwashing.youcanbook.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Book Now
            </a>
            <Link href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block">
              Get Quote
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 border-t pt-4">
            <nav className="flex flex-col space-y-2">
              <Link href="#home" className="text-gray-700 hover:text-blue-600 py-2">
                Home
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-blue-600 py-2">
                Services
              </Link>
              <Link href="#gallery" className="text-gray-700 hover:text-blue-600 py-2">
                Gallery
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 py-2">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <a href="https://twobrotherspowerwashing.youcanbook.me/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium py-2">
                  Book Now
                </a>
                <Link href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center">
                  Get Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}