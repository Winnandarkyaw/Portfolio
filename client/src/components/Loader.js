import React from "react";

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center fixed insert-0 bg-primary">
      <div className="flex gap-5 text-6xl font-semibold sm:text-3xl">
        <h1 className="text-secondary w">N</h1>
        <h1 className="text-white n">N</h1>
        <h1 className="text-tertiary k">K</h1>
      </div>
    </div>
  );
}

export default Loader;
