import React from "react";

function LeftSlider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.facebook.com/winnandar.jokwr.3">
            {" "}
            <i class="ri-facebook-circle-line text-gray-400 "></i>
          </a>
          <a href="mailto:winnandarkyaw2000@gmail.com">
            <i class="ri-mail-line text-gray-400"></i>
          </a>

          <i class="ri-instagram-line text-gray-400"></i>
          <a href="https://www.linkedin.com/in/win-nandar-kyaw-a165681ba/">
            {" "}
            <i class="ri-linkedin-box-line text-gray-400 "></i>
          </a>

          <a href="https://github.com/Winnandarkyaw">
            {" "}
            <i class="ri-github-line text-gray-400"></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSlider;
