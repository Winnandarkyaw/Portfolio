import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { courses } from "../../resources/courses";

function Course() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Courses" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-5 border-l-2 border-[#69748e] w-1/2 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {courses.map((course, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer">
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-primary border-[#274da5] border-l-4 -ml[2px] bg-[#758dc4] py-3"
                    : "text-white"
                }`}>
                {course.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <div className="flex flex-col gap-5">
            <h2 className="text-secondary text-2xl">
              {courses[selectedItemIndex].description}
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
          <img
            src={courses[selectedItemIndex].image}
            alt=""
            className="h-52 w-80"
          />
        </div>
      </div>
    </div>
  );
}

export default Course;
