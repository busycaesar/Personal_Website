import React from "react";
import ProjectSection from "@/Components/projectSection";
import { useEffect, useState } from "react";
import db from "../Data/about";
import { onSnapshot, collection } from "firebase/firestore";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    try {
      onSnapshot(collection(db, "projects"), (spanshot) => {
        let projectList = spanshot.docs.map((document) => document.data());
        setProjects(projectList.sort((a, b) => a.priority - b.priority));
      });
    } catch (error) {
      console.log(error);
    }
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
