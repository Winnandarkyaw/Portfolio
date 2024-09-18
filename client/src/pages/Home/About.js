import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = [
    "React",
    "Javascript",
    "Node JS",
    "Express JS",
    "Mongo DB",
    "Firebase",
    "Python",
    "Microsoft Power Platform",
  ];
  return (
    <div>
      <SectionTitle title="About Me" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2">
          <lottie-player
            src="https://assets6.lottiefiles.com/private_files/lf30_WdTEui.json"
            background="transparent"
            speed="1"
            autoplay></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            Hello!I am Win Nandar Kyaw,a passionate developer in the field of
            technology. I enjoy creating things that live on the internet. I
            specialize in creating dynamic and impactful digital solutions.
          </p>
          <p className="text-white">
            With a strong interest in both technology and business,aspiring to
            be a Solution Architect.Currently,I am dedicated to mastering clean
            code practices and design principles to elevate my technical
            expertise.My goal is to integrate my coding skills and design
            knowledge to provide innovative solutions that bridge the gap
            between technical capabilities and business needs ensuring
            efficiency and value in every project.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-2xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div key={index} className="border border-tertiary py-3 px-5">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
