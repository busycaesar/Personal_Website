import Image from "next/image";
import React from "react";
import LinkedinLogo from "../Photos/linkedin.png";
import GitHubLogo from "../Photos/github.png";
import GmailLogo from "../Photos/gmail.png";
import Location from "../Photos/location.png";

export default function About() {
  return (
    <div id="about" className="content-section">
      <h1 style={{ fontSize: "4em" }}>
        <strong>DEV SHAH</strong>
      </h1>
      <h2 style={{ fontSize: "2.5em" }}>
        <strong>Web Developer</strong>
      </h2>
      <p>
        <Image
          alt="Location"
          style={{ marginRight: "0.5em" }}
          width={20}
          src={Location}
        />
        Toronto, ON
      </p>
      <p>
        An actively learning and quality-oriented developer, with a keen ability
        to adapt quickly to new technology, committed to developing optimized,
        clean, readable, and maintainable code for building a high-quality
        product having the best user experience. Further, I have experience in
        communicating with clients, understanding their requirements, delivering
        the finest as well as accessible solutions. My goal is to learn Full
        Stack Development along with knowledge in the areas of UI/UX Design and
        DevOps.
      </p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/busycaesar/" target="_blank">
          <Image alt="Link to Dev's LinkedIn" width={70} src={LinkedinLogo} />
        </a>
        <a href="https://github.com/busycaesar" target="_blank">
          <Image alt="Link to Dev's GitHub" width={70} src={GitHubLogo} />
        </a>
        <a href="mailto:busycaesar@gmail.com" target="_blank">
          <Image alt="Link to Dev's Email" width={70} src={GmailLogo} />
        </a>
      </div>
    </div>
  );
}
