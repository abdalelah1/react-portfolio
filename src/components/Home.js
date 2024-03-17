import React from "react";
import Hero from "./Hero";
import About from "./about";
import Projects from "./Projects";
import CtaSection from "./Cta";
import Certifecations from "./Certifecations";
import Contact from "./Contact";
import TechSkills from "./tech";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects/>
      <CtaSection />
      <TechSkills />
      <Certifecations />
      <Contact />
      
    </>
  );
};

export default Home;
