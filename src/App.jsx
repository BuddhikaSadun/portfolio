import { useState } from "react";
import NavBar from "./components/layout/NavBar";
import ContactMe from "./components/pages/ContactMe";
import Projects from "./components/pages/Projects";
import AboutMe from "./components/pages/AboutMe";
import Introduction from "./components/pages/Introduction";

import {
  introSection,
  aboutSection,
  projectSection,
  contactSection,
} from "./assets/data";

function App() {
  return (
    <>
      <NavBar />
      <div
        className="absolute top-0 left-0 z-[-2] h-screen w-full bg-white 
  bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_120%,rgba(0,163,255,0)_100%)]"
      ></div>
      <section id="Home">
        <Introduction intro={introSection} />
      </section>
      <section id="about">
        <AboutMe about={aboutSection} />
      </section>
      <section id="projects">
        <Projects project={projectSection} />
      </section>
      <section id="contactUs">
        <ContactMe contact={contactSection} />
      </section>
    </>
  );
}

export default App;
