import React, { useState } from 'react';
import '../navbar/style.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-gray-950">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center justify-start">
              <div className="flex flex-shrink-0 items-center">
                <p className="text-white font-serif font-bold text-4xl">
                  Wa<span className="text-6xl">L</span>eed
                </p>
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <ul className="flex space-x-4">
                <li className="rounded-md px-3 py-2 md:font-bold text-sm font-serif font-medium text-white hover:bg-gray-700" aria-current="page">
                  <Link to="/">Home</Link>
                </li>
                <li className="rounded-md px-3 py-2 md:font-bold  text-sm font-medium font-serif text-white hover:bg-gray-700 ">
                  <Link to="/about">About</Link>
                </li>
                <li className="rounded-md px-3 py-2 md:font-bold text-sm font-medium font-serif text-white hover:bg-gray-700 ">
                  <Link to="/skills">Skills</Link>
                </li>
                <li className="rounded-md px-3 py-2 md:font-bold text-sm font-medium font-serif text-white hover:bg-gray-700 ">
                  <Link to="/projects">Projects</Link>
                </li>
                <li className="rounded-md px-3 py-2 md:font-bold text-sm font-medium font-serif text-white hover:bg-gray-700 ">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen ? 'true' : 'false'}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <ul className="space-y-1 px-2 pt-2 pb-3">
              <li className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium font-serif text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="block rounded-md px-3 py-2 text-base font-medium font-serif text-white hover:bg-gray-700">
                <Link to="/about">About</Link>
              </li>
              <li className="block rounded-md px-3 py-2 text-base font-medium font-serif text-white hover:bg-gray-700 ">
                <Link to="/skills">Skills</Link>
              </li>
              <li className="block rounded-md px-3 py-2  text-base font-medium font-serif text-white hover:bg-gray-700 ">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="block rounded-md px-3 py-2 text-base font-medium font-serif text-white hover:bg-gray-700 ">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
