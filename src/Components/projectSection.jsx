import React from "react";

export default function ProjectSection(props) {
  let title = props.title,
    techStack = props.techStack,
    description = props.description,
    link = props.link;
  return (
    <div style={{ marginBottom: "1em" }}>
      <a href={link} target="_blank">
        <h2>
          <strong>{title}</strong>
        </h2>
      </a>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        <li>Tech Stack: {techStack}</li>
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
}
