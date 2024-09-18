import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";
function Experience() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Experience" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-5 border-l-2 border-[#c72b4f82] w-1/2 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer">
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-[#991f3e82] border-l-4 -ml[2px] bg-[#f8b8ce] py-3"
                    : "text-white"
                }`}>
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-secondary text-2xl">
            {experiences[selectedItemIndex].title}
          </h2>
          <h2 className="text-tertiary text-2xl">
            {experiences[selectedItemIndex].company}
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac
            metus feugiat erat luctus gravida quis nec ligula. Aenean pulvinar
            eget lacus quis dignissim. Donec ac dolor mattis, mollis velit
            vitae, venenatis massa. Proin vitae porta purus, at euismod augue.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            nisi sem. Donec vel ipsum laoreet, efficitur eros at.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
