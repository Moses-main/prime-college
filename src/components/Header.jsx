import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-wine shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <h1 className="text-2xl font-bold text-cream">Prime College</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-cream hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-cream hover:text-gray-300">
            About
          </Link>
          <Link to="/courses" className="text-cream hover:text-gray-300">
            Courses
          </Link>
          <Link to="/contact" className="text-cream hover:text-gray-300">
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-cream">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Collapsible Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-wine">
          <Link to="/" className="block py-2 px-4 text-cream hover:bg-gray-700">
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 text-cream hover:bg-gray-700"
          >
            About
          </Link>
          <Link
            to="/courses"
            className="block py-2 px-4 text-cream hover:bg-gray-700"
          >
            Courses
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 text-cream hover:bg-gray-700"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
