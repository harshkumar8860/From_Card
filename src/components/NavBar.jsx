import React, { useState, useCallback, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
// import logo from '../assets/logo.webp';

// Lazy load the Login component
const Login = lazy(() => import('./AuthModal'));

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [isLoginOpen, setIsLoginOpen] = useState(false); // For login popup

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const toggleLoginPopup = useCallback(() => setIsLoginOpen((prev) => !prev), []);

  return (
    <div className="relative w-full h-20 bg-[#172a79] shadow-md ">
      <div className="flex items-center justify-between h-full px-4 lg:px-8 xl:px-24">
        {/* Logo */}
        <img
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-36 lg:h-36 object-contain"
          alt="Logo"
        //   src={logo}
          loading="lazy" // Lazy load the logo
        />

        {/* Navigation links (hidden on mobile) */}
        <nav className="hidden md:flex space-x-6 lg:space-x-10">
          <Link to="/" className="font-subheading-bold text-white text-sm md:text-base lg:text-lg">
            Home
          </Link>
          <ScrollLink
            to="about-us"
            smooth
            duration={500}
            offset={-80} // Adjust offset for fixed navbar
            className="font-subheading-bold text-white text-sm md:text-base lg:text-lg cursor-pointer"
          >
            About Us
          </ScrollLink>
          <Link to="/contactus" className="font-subheading-bold text-white text-sm md:text-base lg:text-lg">
            Contact Us
          </Link>
        </nav>

        {/* Login/Signup Button for Desktop */}
        <button
          className="hidden md:block text-white font-bold"
          onClick={toggleLoginPopup}
        >
          Login/Signup
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Slide-in Mobile Menu */}
      {isOpen && (
        <div
          className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#172a79] text-white z-50 transform transition-transform duration-300 ease-in-out"
          aria-hidden={!isOpen}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-white focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col items-center mt-20 space-y-6">
            <Link to="/" className="font-subheading-bold text-lg" onClick={toggleMenu}>
              Home
            </Link>
            <ScrollLink
              to="about-us"
              smooth
              duration={500}
              offset={-80}
              className="font-subheading-bold text-lg cursor-pointer"
              onClick={toggleMenu}
            >
              About Us
            </ScrollLink>
            <Link to="/contactus" className="font-subheading-bold text-lg" onClick={toggleMenu}>
              Contact Us
            </Link>
            {/* Login/Signup Button for Mobile */}
            <button
              className="text-lg font-bold"
              onClick={() => {
                toggleMenu(); // Close menu before opening login
                toggleLoginPopup();
              }}
            >
              Login/Signup
            </button>
          </nav>
        </div>
      )}

      {/* Login Popup */}
      {isLoginOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleLoginPopup}
            aria-hidden={!isLoginOpen}
          />
          {/* Login Modal */}
          <Login onClose={toggleLoginPopup} />
        </Suspense>
      )}
    </div>
  );
}

export default Navbar;