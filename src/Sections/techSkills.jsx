/* eslint-disable @next/next/no-img-element */
import React from "react";
import TechSkillsSection from "@/Components/techSkillsSection";

export default function TechSkills() {
  return (
    <div id="technical-skills" className="content-section">
      <h1>
        <strong>TECHNICAL SKILLS</strong>
      </h1>
      <TechSkillsSection
        techs={[
          { name: "Python", src: "py" },
          { name: "JS", src: "js" },
          { name: "TS", src: "ts" },
          { name: "React", src: "react" },
          { name: "Next", src: "nextjs" },
          { name: "Flask", src: "flask" },
          { name: "Node", src: "nodejs" },
          { name: "Java", src: "java" },
          { name: "Docker", src: "docker" },
          { name: "Linux", src: "linux" },
          { name: "AWS", src: "aws" },
          { name: "Azure", src: "azure" },
          { name: "GCP", src: "gcp" },
        ]}
      />
    </div>
  );
}
