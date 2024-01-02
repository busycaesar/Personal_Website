import React from "react";
import {
  Bootstrap,
  C,
  CPP,
  CSharp,
  JavaScript,
  Python,
  HTML,
  CSS,
  NodeJS,
  ExpressJS,
  ReactJS,
  NextJS,
  MongoDB,
  Postgressql,
  Git,
  GitHub,
  VSCode,
  Postman,
  MSSQL,
  Figma,
  VisualParadigm,
  MSProject,
  Discord,
  NPM,
  JWT,
} from "@/Photos";
import TechSkillsSection from "@/Components/techSkillsSection";

export default function TechSkills() {
  return (
    <div id="technical-skills" className="content-section">
      <h1>
        <strong>TECHNICAL SKILLS</strong>
      </h1>
      <TechSkillsSection
        title="Programming Languages"
        techs={[
          { name: "JavaScript", width: "50", src: JavaScript },
          { name: "C#", width: "60", src: CSharp },
          { name: "Python", width: "55", src: Python },
          { name: "HTML", width: "48", src: HTML },
          { name: "CSS", width: "70", src: CSS },
          { name: "C++", width: "48", src: CPP },
          { name: "C", width: "49", src: C },
        ]}
      />
      <TechSkillsSection
        title="Libraries, Tools and Frameworks"
        techs={[
          { name: "Node.js", width: "50", src: NodeJS },
          { name: "Express.js", width: "55", src: ExpressJS },
          { name: "Next.js", width: "57", src: NextJS },
          { name: "React.js", width: "55", src: ReactJS },
          { name: "JWT", width: "50", src: JWT },
          { name: "Bootstrap", width: "65", src: Bootstrap },
        ]}
      />
      <TechSkillsSection
        title="Database"
        techs={[
          { name: "MongoDB", width: "60", src: MongoDB },
          { name: "PostgreSQL", width: "55", src: Postgressql },
        ]}
      />
      <TechSkillsSection
        title="Version Control System"
        techs={[
          { name: "Git", width: "55", src: Git },
          { name: "GitHub", width: "55", src: GitHub },
          { name: "Node Package Manager", width: "70", src: NPM },
        ]}
      />
      <TechSkillsSection
        title="Software Application"
        techs={[
          { name: "VS Code", width: "47", src: VSCode },
          { name: "Postman", width: "53", src: Postman },
          { name: "MS SQL Server", width: "60", src: MSSQL },
          { name: "Visual Paradigm", width: "47", src: VisualParadigm },
          { name: "Figma", width: "33", src: Figma },
          { name: "MS Project", width: "47", src: MSProject },
          { name: "Discord", width: "55", src: Discord },
        ]}
      />
    </div>
  );
}
