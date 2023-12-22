import React from "react";
import C from "../Photos/c.png";
import CPP from "../Photos/cpp.png";
import CSharp from "../Photos/csharp.png";
import JavaScript from "../Photos/js.png";
import Python from "../Photos/python.png";
import HTML from "../Photos/html.png";
import CSS from "../Photos/css.png";
import NodeJS from "../Photos/nodejs.png";
import ExpressJS from "../Photos/expressjs.png";
import ReactJS from "../Photos/react.png";
import NextJS from "../Photos/next.png";
import Bootstrap from "../Photos/bootstrap.png";
import MongoDB from "../Photos/mongoDB.png";
import Postgressql from "../Photos/postgressql.png";
import Git from "../Photos/git.png";
import GitHub from "../Photos/github.png";
import VSCode from "../Photos/vscode.png";
import Postman from "../Photos/postman.png";
import MSSQL from "../Photos/mssql.png";
import Figma from "../Photos/figma.png";
import VisualParadigm from "../Photos/vparadigm.png";
import MSProject from "../Photos/msproject.png";
import Discord from "../Photos/discord.png";
import NPM from "../Photos/npm.png";
import JWT from "../Photos/jwt.png";
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
          { name: "HTML", width: "50", src: HTML },
          { name: "CSS", width: "75", src: CSS },
          { name: "C++", width: "52", src: CPP },
          { name: "C", width: "53", src: C },
        ]}
      />
      <TechSkillsSection
        title="Libraries, Tools and Frameworks"
        techs={[
          { name: "Node.js", width: "50", src: NodeJS },
          { name: "Express.js", width: "60", src: ExpressJS },
          { name: "Next.js", width: "63", src: NextJS },
          { name: "React.js", width: "60", src: ReactJS },
          { name: "JWT", width: "55", src: JWT },
          { name: "Bootstrap", width: "70", src: Bootstrap },
        ]}
      />
      <TechSkillsSection
        title="Database"
        techs={[
          { name: "MongoDB", width: "70", src: MongoDB },
          { name: "PostgreSQL", width: "70", src: Postgressql },
        ]}
      />
      <TechSkillsSection
        title="Version Control System"
        techs={[
          { name: "Git", width: "60", src: Git },
          { name: "GitHub", width: "60", src: GitHub },
          { name: "Node Package Manager", width: "85", src: NPM },
        ]}
      />
      <TechSkillsSection
        title="Software Application"
        techs={[
          { name: "VS Code", width: "50", src: VSCode },
          { name: "Postman", width: "55", src: Postman },
          { name: "MS SQL Server", width: "70", src: MSSQL },
          { name: "Visual Paradigm", width: "50", src: VisualParadigm },
          { name: "Figma", width: "35", src: Figma },
          { name: "MS Project", width: "50", src: MSProject },
          { name: "Discord", width: "58", src: Discord },
        ]}
      />
    </div>
  );
}
