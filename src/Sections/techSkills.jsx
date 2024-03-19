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
          { name: "C#", src: "cs" },
          { name: "Python", src: "python" },
          { name: "HTML", src: "html" },
          { name: "CSS", src: "css" },
          { name: "C++", src: "cpp" },
          { name: "C", src: "c" },
        ]}
      />
      <TechSkillsSection
        title="Technologies"
        techs={[
          { name: "Node.js", src: "nodejs" },
          { name: "Express.js", src: "expressjs" },
          { name: "React.js", src: "react" },
          { name: "Next.js", src: "nextjs" },
          { name: "Vite", src: "vite" },
          { name: "Docker", src: "docker" },
          { name: "Jest", src: "jest" },
          { name: "Tailwindcss", src: "tailwindcss" },
          { name: "Bootstrap", src: "bootstrap" },
          { name: "MaterialUI", src: "materialui" },
        ]}
      />
      <TechSkillsSection
        title="Database"
        techs={[
          { name: "MongoDB", src: "mongodb" },
          { name: "PostGres", src: "postgres" },
          { name: "Firebase", src: "firebase" },
        ]}
      />
      <TechSkillsSection
        title="Version Control System"
        techs={[
          { name: "Git", src: "git" },
          { name: "GitHub", src: "github" },
          { name: "GitHub Actions", src: "githubactions" },
          { name: "Node Package Manager", src: "npm" },
        ]}
      />
      <TechSkillsSection
        title="Software Application"
        techs={[
          { name: "VS Code", src: "vscode" },
          { name: "VS Community", src: "visualstudio" },
          { name: "Eclipse", src: "eclipse" },
          { name: "Postman", src: "postman" },
          { name: "Vercel", src: "vercel" },
          { name: "Figma", src: "figma" },
          { name: "Discord", src: "discord" },
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
          { name: "BASH", src: "bash" },
          { name: "VIM", src: "vim" },
          { name: "AWS", src: "aws" },
          { name: "Java", src: "java" },
        ]}
      />
    </div>
  );
}
