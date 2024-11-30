// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-200 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-wine mb-6">
        Contact Us
      </h1>
      <div className="max-w-2xl mx-auto bg-cream rounded-lg p-6 shadow-md">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 rounded-md p-2"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-wine text-cream px-4 py-2 rounded-md hover:bg-red-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
