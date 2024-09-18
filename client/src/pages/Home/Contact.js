import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const user = {
    name: "Win Nandar Kyaw",
    age: null,
    gender: "Female",
    email: "winnandarkyaw2000@gmail.com",
    mobile: "09790481995",
    country: "Myanmar",
  };
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-secondary">{`{`}</p>
          {Object.keys(user).map((key) => (
            <p className="ml-5">
              <span className="text-secondary">{key}:</span>
              <span className="text-secondary">{user[key]}</span>
            </p>
          ))}
          <p className="text-secondary">{`}`}</p>
        </div>
        <div className="h-[400px]">
          <lottie-player
            src="https://lottie.host/53878c61-2b30-4b49-9792-1c3944a18a9c/ZlPu2fI9HY.json"
            background="transparent"
            speed="1"
            autoplay></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
