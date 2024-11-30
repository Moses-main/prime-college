import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-cream text-wine py-20 text-center">
        <div className="container mx-auto px-4">
          {/* Hero Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Our School
          </h1>
          <p className="text-base md:text-lg mb-6">
            Excellence in education, nurturing future leaders.
          </p>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mt-6">
            <Link
              to="/register"
              className="bg-wine text-cream px-6 py-3 rounded-md hover:bg-red-800 shadow-md transition text-sm md:text-base"
            >
              Register Now
            </Link>
            <Link
              to="/contact"
              className="bg-cream text-wine border-2 border-wine px-6 py-3 rounded-md hover:bg-wine hover:text-cream shadow-md transition text-sm md:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* Facilities Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="shadow-lg p-4 rounded-lg bg-white hover:shadow-xl transition">
            <img
              src="/images/graduating-students.jpg"
              alt="Graduating Students"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg">Graduating Students</h3>
            <p className="text-sm text-gray-600">
              Celebrate our students' journey to success.
            </p>
          </div>
          <div className="shadow-lg p-4 rounded-lg bg-white hover:shadow-xl transition">
            <img
              src="/images/staff.jpg"
              alt="Staff"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg">Our Experienced Staff</h3>
            <p className="text-sm text-gray-600">
              Meet the passionate educators shaping futures.
            </p>
          </div>
          <div className="shadow-lg p-4 rounded-lg bg-white hover:shadow-xl transition">
            <img
              src="/images/laboratory.jpg"
              alt="Laboratory"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg">Modern Laboratory</h3>
            <p className="text-sm text-gray-600">
              Explore hands-on learning in our well-equipped labs.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-wine text-cream text-center">
        <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
        <p className="text-lg mb-8">
          Discover a nurturing environment that empowers students to achieve
          their dreams.
        </p>
        <div>
          <Link
            to="/register"
            className="bg-cream text-wine px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            Enroll Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
