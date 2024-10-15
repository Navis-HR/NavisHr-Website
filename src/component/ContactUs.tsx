import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, question });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 mb-24">
      <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.1)] p-1">
        <div className="w-full lg:w-1/2 py-4 sm:py-6 md:py-11 px-4 sm:px-8 md:px-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Contact us
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div className="pb-11">
              <label
                htmlFor="question"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Question
              </label>
              <textarea
                id="question"
                placeholder="Enter question or feedback"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 h-32 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15555.40891811228!2d77.5832748!3d12.9172175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14febfffffbd%3A0xb43f947a96c170f2!2sNAVIS%20Human%20Resources%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1728467019974!5m2!1sen!2sin"
            className="w-full h-full rounded-lg"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Contact Us Map"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
