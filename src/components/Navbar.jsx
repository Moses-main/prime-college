// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-wine text-cream px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">School Name</h1>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/attractions" className="hover:text-gray-300">
            Attractions
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-wine text-cream">
          <Link to="/" className="block px-6 py-2 hover:bg-gray-700">
            Home
          </Link>
          <Link to="/about" className="block px-6 py-2 hover:bg-gray-700">
            About
          </Link>
          <Link to="/attractions" className="block px-6 py-2 hover:bg-gray-700">
            Attractions
          </Link>
          <Link to="/contact" className="block px-6 py-2 hover:bg-gray-700">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
