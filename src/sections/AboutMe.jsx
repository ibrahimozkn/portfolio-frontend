import React from "react";

function AboutMe({ text, techStack }) {
  return (
    <section id="aboutme" className="flex w-full p-32 shadow-sm">
      <div className="container-lg mx-auto my-auto">
        <div className="flex items-center space-x-10">
          <div className="aboutMePhoto w-1/2"></div>

          <div className="flex flex-col items-left justify-center w-1/2 max-w-[30rem]">
            <h1 className="text-black font-bold text-2xl">🖼️ About Me</h1>
            <p className="text-black font-normal">{text}</p>
            <h2 className="mt-2 font-semibold text-lg">Tech stack ⚙️</h2>
            <div className="flex">{techStack}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
