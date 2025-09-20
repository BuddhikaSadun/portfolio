import React from "react";
import { motion } from "framer-motion";
function Introduction({ intro }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-sky-50 to-sky-100">
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
        className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-6"
      >
        {intro.title}
      </motion.h2>

      {/* Brief */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="max-w-3xl text-black-300 leading-relaxed text-lg mb-8"
      >
        {intro.brief}
      </motion.p>

      {/* Call To Action Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        {intro.callToAction.map((cta, index) => (
          <button
            key={index}
            className="px-6 py-3 rounded-lg text-black font-medium border border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            {cta}
          </button>
        ))}
      </motion.div>
    </section>
  );
}

export default Introduction;
