import React from "react";

function ProjectCardBtn({ img, link }) {
  return (
    <div className="container p-2 shadow-md rounded-lg h-10 w-10 bg-primary">
      <a href={link}>
        <img src={img} className="w-full h-full" />
      </a>
    </div>
  );
}

export default ProjectCardBtn;
