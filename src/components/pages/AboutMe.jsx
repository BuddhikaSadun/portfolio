import { useState } from "react";
import { motion } from "framer-motion";
import { aboutSection } from "../../assets/data"; // adjust import path if needed

function AboutMe() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-sky-50 to-sky-100 mt-1">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700 mt-10">
        About Me
      </h1>
      {/* Personal Background */}
      <div className="w-full text-gray-700 leading-relaxed">
        <p className="mb-10 text-start text-lg">
          I am Buddhika Sadun, a graduate in BSc (Hons) in Information
          Technology at SLIIT. I completed my six-month internship as a Full
          Stack Developer Intern at{" "}
          <span className="font-medium">Eyerax Technologies</span>.
          <p className="gap-4 text-start">
            I have contributed to real-world projects.I am passionate about
            learning new technologies to solve complex problems and deliver
            high-quality solutions that create value for clients.
          </p>
        </p>
      </div>

      {/* Soft Skills */}
      <div className="text-gray-700 leading-relaxed mt-10 text-start">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          Soft skills
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
          <li className="flex items-center gap-2">
            <span className="text-xl">🗣️</span>
            Good communicator in Sinhala and English
          </li>
          <li className="flex items-center gap-2">
            <span className="text-xl">⚡</span>
            Fast learner, quick to adapt
          </li>
          <li className="flex items-center gap-2">
            <span className="text-xl">🤝</span>
            Comfortable working independently and in a team
          </li>
          <li className="flex items-center gap-2">
            <span className="text-xl">🧩</span>
            Problem-solving mindset
          </li>
          <li className="flex items-center gap-2">
            <span className="text-xl">👥</span>
            Collaborative and team-oriented
          </li>
        </ul>
      </div>

      {/* Technical Skills */}
      <h3 className="text-4xl font-semibold text-blue-700 mb-3 pb-5 mt-20">
        Technical Skills
      </h3>
      <div className="text-center mb-20">
        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg shadow-sm  transition ${
              selectedCategory === null
                ? "bg-blue-300 text-black border-blue-500"
                : "bg-blue-100 text-black border-blue-300 hover:bg-blue-300"
            }`}
          >
            All
          </button>

          {Object.keys(aboutSection.technicalSkills).map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category ? null : category
                )
              }
              className={`px-4 py-2 rounded-lg shadow-sm  transition ${
                selectedCategory === category
                  ? "bg-blue-300 text-black border-blue-500"
                  : "bg-blue-100 text-black border-blue-300 hover:bg-blue-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Show all icons or filtered ones */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mt-6"
        >
          {(selectedCategory
            ? aboutSection.technicalSkills[selectedCategory]
            : Object.values(aboutSection.technicalSkills).flat()
          ).map((item, index) => (
            <motion.div
              key={index}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-blue-200 p-4 bg-white"
            >
              {item.icon}
              <p className="mt-2 text-neutral-800">{item.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
