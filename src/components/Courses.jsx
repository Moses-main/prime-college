// src/components/Courses.jsx
import React from "react";

const Courses = () => {
  return (
    <div className="bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-wine mb-6">
        Our Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-cream rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Mathematics</h2>
          <p className="text-sm">
            Building a strong foundation in numbers, logic, and problem-solving
            skills.
          </p>
        </div>
        <div className="bg-cream rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Science</h2>
          <p className="text-sm">
            Exploring the world of physics, chemistry, and biology with hands-on
            experiments.
          </p>
        </div>
        <div className="bg-cream rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Arts</h2>
          <p className="text-sm">
            Unleashing creativity through visual arts, music, and drama.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
