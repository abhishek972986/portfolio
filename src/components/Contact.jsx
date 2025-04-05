import React from 'react';
import Spline from "@splinetool/react-spline";
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <Link to='/contact'>
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden mt-6 border rounded-2xl">
      <div className='w-50 bg-[#f3f3f5] h-50 absolute bottom-0 z-100 right-0'></div>
      {/* Spline as Full Background */}
      <div className="absolute inset-0 w-full h-full">
        <Spline scene="https://prod.spline.design/svPLfYMx3cVcSHD9/scene.splinecode" />
      </div>

      {/* Centered Contact Form */}
      <div className="relative z-10 w-[40%] p-8 backdrop-blur-lg bg-white/10 rounded-2xl border shadow-lg">
        <h2 className="text-center text-8xl font-bold mb-6 headbold">
          Contact <span className="text-blue-500 headbold">Me</span>
        </h2>

        <form className="flex flex-col gap-6">
          {/* Name & Email Fields */}
          <div className="flex justify-between items-center gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition focus:bg-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition focus:bg-white"
            />
          </div>

          {/* Subject Field */}
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition focus:bg-white"
          />

          {/* Message Box */}
          <textarea
            placeholder="Type your message here..."
            className="h-[250px] w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none resize-none transition focus:bg-white"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg text-lg font-semibold transition-all hover:shadow-lg hover:scale-105 cursor-pointer hover:from-purple-600 hover:to-blue-500 ease-in-out duration-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </Link>
  );
};

export default Contact;
