// src/components/About.jsx
import React from "react";
// import Footer from "./Footer";

const About = () => {
  return (
    <div className="bg-gray-100 text-wine py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-6">
          Prime College is known for its excellence in producing high-quality
          students who excel in academics, sports, and leadership roles. We are
          committed to nurturing talents and empowering students to achieve
          their full potential.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-6">
          To provide a world-class education that fosters innovation, integrity,
          and a lifelong love of learning.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p>
          To be a leading institution that inspires and equips students to
          succeed in a rapidly changing world.
        </p>
      </div>
    </div>
  );
};

export default About;
