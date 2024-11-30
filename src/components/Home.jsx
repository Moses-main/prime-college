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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Prime College
          </h1>
          <p className="text-base md:text-lg mb-6">
            Excellence in education, nurturing future leaders.
          </p>
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
          {/* Facility Cards */}
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

      {/* Awards Section */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">Awards and Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="shadow-lg p-4 rounded-lg hover:shadow-xl transition">
            <img
              src="/images/academic-award.jpg"
              alt="Academic Excellence"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg">Academic Excellence</h3>
            <p className="text-sm text-gray-600">
              National recognition for outstanding academic performance.
            </p>
          </div>
          <div className="shadow-lg p-4 rounded-lg hover:shadow-xl transition">
            <img
              src="/images/sports-award.jpg"
              alt="Sports Achievements"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg">Sports Achievements</h3>
            <p className="text-sm text-gray-600">
              Champions in inter-school sports tournaments.
            </p>
          </div>
          <div className="shadow-lg p-4 rounded-lg hover:shadow-xl transition">
            <img
              src="/images/national-awards.jpg"
              alt="National Achievements"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg">International Recognition</h3>
            <p className="text-sm text-gray-600">
              Champions in inter-school sports tournaments.
            </p>
          </div>
        </div>
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
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          <blockquote className="bg-white shadow-lg rounded-lg p-6">
            <p className="italic text-gray-700">
              "Prime College has transformed my life. The teachers are
              supportive, and the facilities are top-notch."
            </p>
            <footer className="mt-4 text-sm text-wine">- Jane Doe</footer>
          </blockquote>
          <blockquote className="bg-white shadow-lg rounded-lg p-6">
            <p className="italic text-gray-700">
              "The environment at Prime College encourages growth and
              innovation. I highly recommend it!"
            </p>
            <footer className="mt-4 text-sm text-wine">- John Smith</footer>
          </blockquote>
        </div>
      </section>

      {/* Extracurricular Activities Section */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">Extracurricular Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="shadow-lg p-4 rounded-lg hover:shadow-xl transition">
            <img
              src="/images/sports-day.jpg"
              alt="Sports Day"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg">Sports Day</h3>
            <p className="text-sm text-gray-600">
              Fostering teamwork and physical fitness.
            </p>
          </div>
          <div className="shadow-lg p-4 rounded-lg hover:shadow-xl transition">
            <img
              src="/images/art-competition.jpg"
              alt="Art Competition"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg">Art Competition</h3>
            <p className="text-sm text-gray-600">
              Inspiring creativity among students.
            </p>
          </div>

          <div className="shadow-lg p-4 rounded-lg hover:shadow-xl transition">
            <img
              src="/images/quiz.jpg"
              alt="Art Competition"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg">Quiz</h3>
            <p className="text-sm text-gray-600">
              Challenging creativity brains among students.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6">Academic Programs</h2>
        <p className="text-lg text-gray-700 px-6">
          Offering a wide range of programs to prepare students for future
          success.
        </p>
        <Link
          to="/programs"
          className="bg-wine text-cream px-6 py-3 rounded-full shadow-md hover:bg-red-800 transition mt-4 inline-block"
        >
          Explore Programs
        </Link>
      </section>

      {/* Parent Engagement Section */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">Parent Engagement</h2>
        <p className="text-lg text-gray-700 px-6">
          Collaborating with parents to ensure holistic development of students.
        </p>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6">Upcoming Events</h2>
        <p className="text-lg text-gray-700 px-6">
          Stay updated with our events, workshops, and celebrations.
        </p>
      </section>
    </div>
  );
};

export default Home;
