import React from "react";
import { motion } from "framer-motion";

import gmail from "../../assets/img/gmail.png";
import whatsapp from "../../assets/img/whatsapp.png";
import linkedin from "../../assets/img/LI.png";

function Introduction({ intro }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-sky-50 to-sky-100">
      {/* Main Content: Left (text) + Right (image) */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left md:pr-8">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl font-bold text-neutral-700 mb-4"
          >
            {intro.name}
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-6"
          >
            {intro.title}
          </motion.h2>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-row flex-wrap items-center gap-12 mb-6 text-gray-600"
          >
            <a
              href="https://wa.me/yourNumber"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <img src={whatsapp} alt="WhatsApp" className="w-15 h-15" />
              <span>WhatsApp</span>
            </a>

            <a
              href="mailto:sadunjayamaha917@gmail.com"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <img src={gmail} alt="Gmail" className="w-10 h-10" />
              <span>Gmail</span>
            </a>

            <a
              href="https://www.linkedin.com/in/buddhika-sadun-a72027256/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <img src={linkedin} alt="LinkedIn" className="w-9 h-8" />
              <span>LinkedIn</span>
            </a>
          </motion.div>

          {/* Call To Action Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-14 flex-wrap justify-start pt-15"
          >
            <a href="#projects">
              <button className="px-6 py-3 rounded-lg text-black font-medium border border-blue-400 hover:bg-blue-400 hover:text-black transition">
                View My Projects
              </button>
            </a>
            <a href="#contactUs">
              <button className="px-6 py-3 rounded-lg text-black font-medium border border-blue-400 hover:bg-blue-400 hover:text-black transition">
                Contact Me
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right Side - Picture with Spotlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 flex justify-center mt-10 md:mt-0 relative"
        >
          {/* Spotlight Glow */}
          <div className="absolute bottom-0 w-72 h-72 bg-blue-800 rounded-full blur-3xl opacity-40"></div>

          {/* Profile Image */}
          <img
            src={intro.image}
            alt="Profile"
            className="relative w-64 h-64 rounded-full object-cover shadow-lg border-4 border-blue-400 z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Introduction;
