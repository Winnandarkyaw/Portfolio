import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">Hi,I am</h1>
      <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
        Win Nandar Kyaw
      </h1>
      <h1 className="text-7xl sm:text-3xl text-white font-semibold">
        I build things for web and app
      </h1>
      <p className="text-white w-2/3">
        I am a Software Engineer.Currently I am working as a Software Developer
        in Myanmar. Fast Learner and can share knowledge based on projects and
        external through team members.
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
