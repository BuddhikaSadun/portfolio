/*Programming languages*/
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

/*Frameworks*/
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { SiSpring } from "react-icons/si";

/*Tools*/
import { FaGitAlt } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { FaDocker } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";

/*Databases*/
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";

/*Image*/
import payroll from "../assets/img/payroll_mgt.png";
import socialMedia from "../assets/img/food_social_media.png";
import radio_player_1 from "../assets/img/radio_player_1.jpg";
import radio_player_2 from "../assets/img/radio_player_2.jpg";
import radio_player_3 from "../assets/img/radio_player_3.jpg";
import radio_player_4 from "../assets/img/radio_player_4.jpg";
import deafAware_1 from "../assets/img/deafAware_1.jpg";
import deafAware_2 from "../assets/img/deafAware_2.jpg";
import deafAware_3 from "../assets/img/deafAware_3.jpg";
import deafAware_4 from "../assets/img/deafAware_4.jpg";
import profilePicture from "../assets/img/Profile.jpg";

// 1. Homepage (Introduction Section)
export const introSection = {
  name: "Buddhika Sadun",
  image: profilePicture,
  title: "Full Stack Developer | Mobile Developer | AI Enthusiast",
  brief:
    "I am an Undergraduate in Information Technology at SLIIT campus. I am passionate about crafting impactful digital solutions.",
  callToAction: ["View My Work", "My Projects"],
};

// 2. About Page
export const aboutSection = {
  technicalSkills: {
    "Programming Languages": [
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-7xl text-cyan-400" />,
      },
      { name: "Java", icon: <FaJava className="text-7xl text-green-400" /> },
    ],
    "Frameworks & Libraries": [
      {
        name: "React",
        icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
      },
      {
        name: "React Native",
        icon: <TbBrandReactNative className="text-7xl text-cyan-400 ml-2" />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-7xl text-green-800" />,
      },
      {
        name: "Spring",
        icon: <SiSpring className="text-7xl text-green-600" />,
      },
    ],
    "Tools and Technologies": [
      { name: "Git", icon: <FaGitAlt className="text-7xl text-cyan-400" /> },
      {
        name: "Docker",
        icon: <FaDocker className="text-7xl text-green-400" />,
      },
      { name: "Figma", icon: <FiFigma className="text-7xl text-green-400" /> },
      {
        name: "Postman",
        icon: <SiPostman className="text-7xl text-orange-400" />,
      },
    ],
    Databases: [
      { name: "MySQL", icon: <SiMysql className="text-7xl text-cyan-400" /> },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-7xl text-green-400" />,
      },
    ],
  },

  softSkills: [
    "Communication",
    "Problem-Solving",
    "Teamwork",
    "Fast Learner",
    "Ability to work independently and in a team",
  ],
};

// 3. Projects Page
export const projectSection = [
  {
    title: "Staff Management System",
    image: payroll,
    description:
      "A web application to manage staff details, calculate their salaries, and handle leave requests. Includes authenticated logins for users and administrators to ensure data privacy.",
    technologies: ["NodeJS", "ExpressJS", "MongoDB", "ReactJS"],
    github: "https://github.com/BuddhikaSadun/payroll-management.git",
  },
  {
    title: "Foodies Social Media Platform",
    image: socialMedia,
    description:
      "A social media web application for users to share recipes and ingredients with friends interested in food. Integrated with OAuth2 authentication for better security.",
    technologies: ["Java", "Spring Boot", "ReactJS"],
    github:
      "https://github.com/PAF-IT3030/paf-assignment-2023-2023_114_team.git",
  },
  {
    title: "Safety and Alert System",
    image: [deafAware_1, deafAware_2, deafAware_3, deafAware_4],
    description:
      "A convolutional neural network model designed to classify road, vehicle, and ambulance audio cues. Developed as a final year research project targeting deaf students. Includes a Python Flask web service for testing results in Postman.",
    technologies: ["Flask", "Librosa", "NumPy", "Keras"],
    colab: "Research.ipynb - Colab",
    github: "https://github.com/BuddhikaSadun/safety-alert-system.git",
  },
  {
    title: "Radio Player",
    image: [radio_player_1, radio_player_2, radio_player_3, radio_player_4],
    description:
      "A mobile application for a radio channel, allowing users to listen to live radio, explore programs, and follow social media links. Published on Google Play.",
    technologies: ["React Native", "NodeJS", "MongoDB", "Vercel"],
    playStore: "https://play.google.com/store/search?q=sethfm&c=apps&hl=en-US",
  },
];

// 5. Contact Page
export const contactSection = {
  contactForm: {
    fields: ["Name", "Email", "Subject", "Message"],
  },
  socialLinks: {
    linkedin: "https://linkedin.com/in/buddhikasadun",
    github: "https://github.com/BuddhikaSadun",
    twitter: "https://twitter.com/yourhandle",
  },
  email: "buddhika.sadun@example.com",
};

// 6. Resume
export const resumeSection = {
  downloadLink: "/assets/resume/BuddhikaSadun_Resume.pdf",
};
