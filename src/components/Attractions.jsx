import React from "react";

const Attractions = () => {
  return (
    <div className="py-10 px-6 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-wine">
        Why Choose Our School?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sports Facilities */}
        <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
          <img
            src="/images/sports-field.jpg"
            alt="Sports Field"
            className="rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-wine mb-2">
            State-of-the-art Sports Facilities
          </h3>
          <p className="text-sm text-gray-600">
            Our spacious sports field promotes physical fitness and teamwork,
            creating opportunities for students to excel in athletics.
          </p>
        </div>
        {/* Library */}
        <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
          <img
            src="/images/library.jpg"
            alt="Library"
            className="rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-wine mb-2">
            Well-stocked Library
          </h3>
          <p className="text-sm text-gray-600">
            Explore a vast collection of books, journals, and digital resources
            to enhance learning and curiosity.
          </p>
        </div>
        {/* Laboratory */}
        <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
          <img
            src="/images/laboratory.jpg"
            alt="Laboratory"
            className="rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-wine mb-2">
            Modern Science Laboratories
          </h3>
          <p className="text-sm text-gray-600">
            Fully equipped laboratories inspire hands-on experimentation and
            innovation.
          </p>
        </div>
        {/* Playground */}
        <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
          <img
            src="/images/playground.jpg"
            alt="Playground"
            className="rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-wine mb-2">
            Safe and Fun Playgrounds
          </h3>
          <p className="text-sm text-gray-600">
            Our playgrounds offer a safe and engaging environment for students
            to relax and play.
          </p>
        </div>
        {/* Qualified Staff */}
        <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
          <img
            src="/images/staff.jpg"
            alt="Staff"
            className="rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-wine mb-2">
            Experienced and Caring Staff
          </h3>
          <p className="text-sm text-gray-600">
            Our teachers are highly qualified and dedicated to nurturing young
            minds.
          </p>
        </div>
        {/* Community */}
        <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
          <img
            src="/images/community.jpg"
            alt="Community"
            className="rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-wine mb-2">
            A Vibrant School Community
          </h3>
          <p className="text-sm text-gray-600">
            Join a diverse and inclusive school culture where everyone belongs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Attractions;
