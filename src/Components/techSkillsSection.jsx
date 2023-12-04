import React from "react";
import Image from "next/image";

export default function TechSkillsSection(props) {
  let title = props.title,
    techs = props.techs;
  return (
    <>
      <h2>
        <strong>{title}:</strong>
      </h2>
      <div className="social-links">
        {techs.map((tech, index) => (
          <div key={index} className="tech-logo">
            <Image src={tech.src} width={tech.width} alt={tech.name} />
            <div className="tech-logo-name">{tech.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
