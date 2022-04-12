import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default Home;
