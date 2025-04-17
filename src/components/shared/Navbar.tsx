"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                BSY
              </span>
              <span className="ml-2 font-semibold text-gray-800">
                Bhaarat SaaS Yaatra
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/documentary" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Documentary
            </Link>
            <Link href="/screenings" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Screenings
            </Link>
            <Link href="/partners" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Partners
            </Link>
            <Link href="/sponsors" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Sponsors
            </Link>
            <button className="ml-4 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md hover:from-indigo-700 hover:to-purple-700">
              Join Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
              Home
            </Link>
            <Link href="/documentary" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
              Documentary
            </Link>
            <Link href="/screenings" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
              Screenings
            </Link>
            <Link href="/partners" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
              Partners
            </Link>
            <Link href="/sponsors" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
              Sponsors
            </Link>
            <button className="mt-3 w-full px-4 py-2 text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md hover:from-indigo-700 hover:to-purple-700">
              Join Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 