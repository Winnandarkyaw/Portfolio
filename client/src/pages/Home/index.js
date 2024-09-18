import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Course from "./Course";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSlider from "./LeftSlider";
function Home() {
  return (
    <div>
      <Header />
      <div className="bg-primary px-40 sm:px-5">
        <Intro />
        <About />
        <Experience />
        <Project />
        <Course />
        <Contact />
        <Footer />
        <LeftSlider />
      </div>
    </div>
  );
}

export default Home;
