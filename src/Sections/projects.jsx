import React from "react";
import ProjectSection from "@/Components/projectSection";
import { useEffect, useState } from "react";
import { ProjectData } from "@/Data";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    ProjectData()
      .then((data) => setProjects(data))
      .catch((error) => console.log(error));
  });
  return (
    <div id="projects" className="content-section">
      <h1>
        <strong>PROJECTS</strong>
      </h1>
      {projects.map((project) => (
        <>
          <ProjectSection
            title={project.title}
            techStack={project.techStack}
            description={project.description}
            link={project.link}
          />
        </>
      ))}
    </div>
  );
}
