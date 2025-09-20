import { useState } from "react";
import { motion } from "framer-motion";
import { aboutSection } from "../../assets/data"; // adjust import path if needed

function AboutMe() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-sky-50 to-sky-100 mt-1">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700 ">
        About Me
      </h2>
      {/* Personal Background */}
      <div className="mb-2 max-w-3xl text-gray-700 leading-relaxed">
        <p className="mb-4 text-start">
          I am Buddhika Sadun, a graduate in BSc (Hons) in Information
          Technology at SLIIT. I completed my six-month internship as a Full
          Stack Developer Intern at{" "}
          <span className="font-medium">Eyerax Technologies</span>.
        </p>
      </div>

      {/* Soft Skills */}
      <div className=" max-w-3xl text-gray-700 leading-relaxed">
        <p className="text-start">
          I’m a good communicator, quick to learn, and comfortable working both
          independently and in a team. I enjoy solving problems and
          collaborating with others to get things done.
        </p>
      </div>

      {/* Technical Skills */}
      <h3 className="text-xl font-semibold text-blue-700 mb-3 pb-5 mt-20">
        Also I have knowledge in following tehnical areas,
      </h3>
      <div className="text-center mb-20">
        {/* Display only category names */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {Object.keys(aboutSection.technicalSkills).map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category ? null : category
                )
              }
              className={`px-4 py-2 rounded-lg border border-neutral-600 transition ${
                selectedCategory === category
                  ? "bg-neutral-800 text-white"
                  : "bg-transparent text-gray-700 hover:bg-neutral-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Show icons when clicked */}
        {selectedCategory && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mt-6"
          >
            {aboutSection.technicalSkills[selectedCategory].map(
              (item, index) => (
                <motion.div
                  key={index}
                  initial="initial"
                  animate="animate"
                  className="rounded-2xl border-4 border-sky-200 p-4 bg-white"
                >
                  {item.icon}
                  <p className="mt-2 text-neutral-800">{item.name}</p>
                </motion.div>
              )
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default AboutMe;
