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
          { name: "Bash", src: "bash" },
          { name: "Java", src: "java" },
          { name: "C++", src: "cpp" },
          { name: "C", src: "c" },
          { name: "HTML", src: "html" },
          { name: "Markdown", src: "md" },
          { name: "CSS", src: "css" },
        ]}
      />
      <TechSkillsSection
        title="Technologies"
        techs={[
          { name: "React.js", src: "react" },
          { name: "Next.js", src: "nextjs" },
          { name: "Vite", src: "vite" },
          { name: "Node.js", src: "nodejs" },
          { name: "Express.js", src: "express" },
          { name: "Nest.js", src: "nestjs" },
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
          { name: "SQLite", src: "sqlite" },
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
          { name: "Node Package Manager", src: "npm" },
        ]}
      />
      <TechSkillsSection
        title="Operating Systems"
        techs={[
          { name: "Linux", src: "linux" },
          { name: "Ubuntu", src: "ubuntu" },
          { name: "Windows", src: "windows" },
        ]}
      />
      <TechSkillsSection
        title="Code Editors / IDEs"
        techs={[
          { name: "vim", src: "vim" },
          { name: "VS Code", src: "vscode" },
          { name: "Visual Studio", src: "visualstudio" },
          { name: "IntelliJ", src: "idea" },
          { name: "Eclipse", src: "eclipse" },
        ]}
      />
      <TechSkillsSection
        title="Applications"
        techs={[
          { name: "Postman", src: "postman" },
          { name: "Vercel", src: "vercel" },
          { name: "Figma", src: "figma" },
          { name: "Adobe Premiere Pro", src: "pr" },
          { name: "Discord", src: "discord" },
          { name: "Notion", src: "notion" },
          { name: "Obsidian", src: "obsidian" },
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
