/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function TechSkillsSection(props) {
  let title = props.title,
    techs = props.techs;
  return (
    <>
      <h2>
        <strong>{title}:</strong>
      </h2>
      <div className="social-links">
        {techs.map((tech) => (
          <div key={tech} className="tech-logo my-1">
            <img
              src={`https://skillicons.dev/icons?i=${tech.src}`}
              alt={tech.name}
              className="mb-1 h-14 w-14"
            />
            <div className="tech-logo-name">{tech.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
