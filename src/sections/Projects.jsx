import React from "react";
import ProjectCardBtn from "../components/ProjectCardBtn";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col min-h-svh w-full p-32 shadow-sm"
    >
      <div className="container-lg">
        <h1 className="text-black font-bold text-2xl mb-5">Projects 🚀</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
          <ProjectCard
            image={"/src/assets/phone.jpg"}
            title={"Hello"}
            description={"Lorem ipsum"}
            techStack={[
              <ProjectCardBtn
                key={1}
                img={"/src/assets/flutter.png"}
                link={"ibrahimozkan.xyz"}
              />,
              <ProjectCardBtn
                key={2}
                img={"/src/assets/flutter.png"}
                link={"https://ibrahimozkan.xyz"}
              />,
            ]}
            links={[<ProjectCardBtn key={3} />, <ProjectCardBtn key={4} />]}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
