import React from "react";
import ProjectSection from "@/Components/projectSection";
import ProjectData from "../Data/personalProject.json";

export default function Projects() {
  return (
    <div id="projects" className="content-section">
      <h1>
        <strong>PROJECTS</strong>
      </h1>
      {ProjectData.map((project) => (
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
