import React from "react";
import { useState, useEffect } from "react";
import { AboutData } from "@/Data";
import Link from "next/link";
import { Button } from "react-bootstrap";

export default function About() {
  const [about, setAbout] = useState([]);

  const SocialMediaAccounts = {
    linkedin: "https://www.linkedin.com/in/busycaesar/",
    github: "https://github.com/busycaesar",
    //devto: "https://dev.to/busycaesar",
    gmail: "mailto:busycaesar@gmail.com",
  };

  useEffect(() => {
    AboutData()
      .then((data) => setAbout(data))
      .catch((error) => console.log(error));
  }, [about]);

  return (
    <div id="about" className="content-section">
      {about.name && (
        <>
          <h1 style={{ fontSize: "4em" }}>
            <strong>{about.name.toUpperCase()}</strong>
          </h1>
          <h2 style={{ fontSize: "2.5em" }}>
            <strong>{about.designation}</strong>
          </h2>
          <p className="flex">{about.location}</p>
          <p>{about.introduction}</p>

          <div className="my-4 flex">
            {Object.entries(SocialMediaAccounts).map(([key, value]) => (
              <a key={key} href={value} target="_blank" className="mr-3">
                <img
                  src={`https://skillicons.dev/icons?i=${key}&theme=light`}
                  alt={`Link to Dev's ${key}`}
                />
              </a>
            ))}
          </div>
          <Link href="/blogs">
            <Button variant="dark" className="!text-xl my-2">
              Blogs
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}
