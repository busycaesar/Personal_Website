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
        title="Languages"
        techs={[
          { name: "JavaScript", src: "js" },
          { name: "TypeScript", src: "ts" },
          { name: "C#", src: "cs" },
          { name: "Python", src: "py" },
          { name: "Java", src: "java" },
          { name: "HTML", src: "html" },
          { name: "CSS", src: "css" },
        ]}
      />
      <TechSkillsSection
        title="Technologies"
        techs={[
          { name: "React.js", src: "react" },
          { name: "Next.js", src: "nextjs" },
          { name: "Node.js", src: "nodejs" },
          { name: "Express.js", src: "express" },
          { name: "Nest.js", src: "nestjs" },
        ]}
      />
      <TechSkillsSection
        title="Database"
        techs={[
          { name: "MongoDB", src: "mongodb" },
          { name: "PostgreSQL", src: "postgres" },
          { name: "MySQL", src: "mysql" },
          { name: "Redis", src: "redis" },
          { name: "Firebase", src: "firebase" },
        ]}
      />
      <TechSkillsSection
        title="CI/CD"
        techs={[
          { name: "Jest", src: "jest" },
          { name: "GitHub Actions", src: "githubactions" },
          { name: "Docker", src: "docker" },
        ]}
      />
      <TechSkillsSection
        title="Version Control System"
        techs={[
          { name: "Git", src: "git" },
          { name: "GitHub", src: "github" },
        ]}
      />
      <TechSkillsSection
        title="Operating Systems"
        techs={[
          { name: "Linux", src: "linux" },
          { name: "Windows", src: "windows" },
        ]}
      />
      <TechSkillsSection
        title="Currently Learning"
        techs={[
          { name: "AWS", src: "aws" },
          { name: "Azure", src: "azure" },
        ]}
      />
    </div>
  );
}
