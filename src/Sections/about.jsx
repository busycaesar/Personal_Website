import Image from "next/image";
import React from "react";
import LinkedinLogo from "../Photos/linkedin.png";
import GitHubLogo from "../Photos/github.png";
import GmailLogo from "../Photos/gmail.png";
import Location from "../Photos/location.png";
import AboutData from "../Data/about.json";

export default function About() {
  return (
    <div id="about" className="content-section">
      <h1 style={{ fontSize: "4em" }}>
        <strong>{AboutData[0].name}</strong>
      </h1>
      <h2 style={{ fontSize: "2.5em" }}>
        <strong>{AboutData[0].designation}</strong>
      </h2>
      <p>
        <Image
          alt="Location"
          style={{ marginRight: "0.5em" }}
          width={20}
          src={Location}
        />
        {AboutData[0].location}
      </p>
      <p>{AboutData[0].introduction}</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/busycaesar/" target="_blank">
          <Image alt="Link to Dev's LinkedIn" width={50} src={LinkedinLogo} />
        </a>
        <a href="https://github.com/busycaesar" target="_blank">
          <Image alt="Link to Dev's GitHub" width={53} src={GitHubLogo} />
        </a>
        <a href="mailto:busycaesar@gmail.com" target="_blank">
          <Image alt="Link to Dev's Email" width={55} src={GmailLogo} />
        </a>
      </div>
    </div>
  );
}
