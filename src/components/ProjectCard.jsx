import React from "react";

function ProjectCard({ title, description, techStack, links, image }) {
  return (
    <div className="flex flex-col p-5 rounded-lg shadow-md items-center bg-white border border-gray-200">
      <div className="flex h-full w-full space-x-5">
        <div
          className="w-1/2 projectImg"
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
        <div className="w-1/2 flex flex-col">
          <h2 className="text-black font-bold text-lg">{title}</h2>
          <p className="text-black">{description}</p>
          <h3 className="text-black font-semibold mt-3">Tech stack</h3>
          <div className="grid grid-cols-6 gap-5">{techStack}</div>
          <h3 className="text-black font-semibold mt-3">Links</h3>
          <div className="grid grid-cols-6 gap-5">{links}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
