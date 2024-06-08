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
          <div key={tech} className="tech-logo">
            <img
              src={`https://skillicons.dev/icons?i=${tech.src}`}
              alt={tech.name}
              style={{ marginBottom: "0.15em" }}
            />
            <div className="tech-logo-name">{tech.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
