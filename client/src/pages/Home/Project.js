import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";
import { useSelector } from "react-redux";

function Project() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const {portfolioData}=useSelector((state)=>state.root);
  const {projects}=portfolioData;
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-5 border-l-2 border-[#c72b4f82] w-1/2 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer">
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml[2px] bg-[#eae6e7] py-3"
                    : "text-white"
                }`}>
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img
            src={projects[selectedItemIndex].image}
            alt=""
            className="h-60 w-72"
          />
          <div className="flex flex-col gap-5">
            <h2 className="text-secondary text-2xl">
              {projects[selectedItemIndex].description}
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac
              metus feugiat erat luctus gravida quis nec ligula. Aenean pulvinar
              eget lacus quis dignissim. Donec ac dolor mattis, mollis velit
              vitae, venenatis massa. Proin vitae porta purus, at euismod augue.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ut nisi sem. Donec vel ipsum laoreet, efficitur eros at.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
