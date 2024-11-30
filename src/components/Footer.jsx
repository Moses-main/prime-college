// src/components/Footer.jsx
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* About Section */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold">About Our School</h3>
          <p className="text-sm text-gray-400">
            We are committed to delivering quality education and fostering
            holistic development.
          </p>
        </div>
        {/* Links Section */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:underline">
                Our Courses
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Social Section */}
        <div>
          <h3 className="text-lg font-bold">Connect With Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a
              href="mailto:info@ourschool.com"
              className="text-gray-400 hover:text-white"
            >
              <FaEnvelope size={24} />
            </a>
            <a href="tel:+123456789" className="text-gray-400 hover:text-white">
              <FaPhone size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
