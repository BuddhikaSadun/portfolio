import React from "react";
import { motion } from "framer-motion";

function Projects({ project }) {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-12 bg-gradient-to-b from-sky-50 to-sky-100 mt-1"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-2xl font-bold text-center mb-12 text-gray-800"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {project.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
          >
            <img alt={project.name} className="w-full h-48 object-cover" />

            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {project.title}
              </h3>
              <p className="text-md font-medium text-indigo-600 mb-2">
                {project.github}
              </p>
              <p className="text-md text-gray-700 leading-relaxed">
                {project.description}
              </p>

              <div className="pt-10 flex flex-wrap justify-center gap-2">
                {project.technologies?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Projects;
