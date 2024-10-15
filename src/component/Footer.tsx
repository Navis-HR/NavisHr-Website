import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <p className="text-sm">
            First floor, JP Chambers,
            <br />
            No. 22/1, 5th Block, 46th
            <br />
            Cross Road, Jayanagar,
            <br />
            Bangalore - 560041, India
          </p>
          <p className="mt-2 text-sm">info@navishr.com</p>
          <p className="text-sm">+91 9986904459</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Destination
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                News
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">About</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Navistar
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                B to G Project
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                New Project
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Know More
              </a>
            </li>
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="font-bold text-lg mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-sm mb-2">For announcements and exclusive deals</p>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Input your email"
              className="flex-grow px-3 py-2 text-sm border border-gray-300 rounded-l sm:rounded-l-none lg:rounded-l focus:outline-none focus:ring-1 focus:ring-[#ff0008] mb-2 sm:mb-0"
            />
            <button
              type="submit"
              className="bg-[#ff0008] text-white px-2 py-2 text-sm font-bold rounded-r-md sm:rounded-r-md lg:rounded-r-md hover:bg-[#d60007] transition-colors duration-300 select-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t-2 border-gray-200 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-600 mb-4 sm:mb-0 text-center sm:text-left">
          Copyright © NAVIS | {new Date().getFullYear()}. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="/"
            className="text-gray-600 hover:text-white bg-gray-200 hover:bg-[#ff0008] rounded-full p-2 transition-colors duration-300"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="/"
            className="text-gray-600 hover:text-white bg-gray-200 hover:bg-[#ff0008] rounded-full p-2 transition-colors duration-300"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="/"
            className="text-gray-600 hover:text-white bg-gray-200 hover:bg-[#ff0008] rounded-full p-2 transition-colors duration-300"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="/"
            className="text-gray-600 hover:text-white bg-gray-200 hover:bg-[#ff0008] rounded-full p-2 transition-colors duration-300"
          >
            <IoLogoYoutube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
