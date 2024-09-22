/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState, useEffect } from "react";
import { AboutData } from "@/Data";
import Link from "next/link";
import { Button, Row, Col } from "react-bootstrap";

export default function About() {
  const [about, setAbout] = useState([]);

  const SocialMediaAccounts = [
    "https://linkedin.com/in/busycaesar",
    "https://x.com/busycaesar",
    "https://github.com/busycaesar",
    "https://dev.to/busycaesar",
    "https://instagram.com/busycaesar",
    "https://buymeacoffee.com/busycaesar7",
    "https://youtube.com/@_devshah",
  ];

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

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.3094358229!2d-79.37805805!3d43.718241200000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1727016304431!5m2!1sen!2sca"
            className="shadow-2xl rounded-[2em] my-3 w-[300px] h-[300px]"
          ></iframe>

          <Row className="my-4">
            {SocialMediaAccounts.map((link) => {
              const url = new URL(link);
              const username = url.pathname.split("/");
              return (
                <Col
                  key={link}
                  lg={3}
                  md={4}
                  sm={2}
                  className="shadow-2xl rounded-[2em] m-2 p-4 !w-48 h-48"
                >
                  <a
                    href={link}
                    className="text-black no-underline"
                    target="_blank"
                  >
                    <img
                      src={`https://www.google.com/s2/favicons?sz=64&domain=${url.hostname}`}
                      alt={`Link to Dev's ${url.hostname}`}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="text-xl my-3 break-words w-full">
                      {url.hostname}
                      <br />@{username[username.length - 1]}
                    </div>
                  </a>
                </Col>
              );
            })}
          </Row>

          <h2>Content</h2>
          <Row className="w-fit">
            <Col>
              <Link href="/blogs">
                <div className="shadow-2xl rounded-[2em] p-4 !w-48 h-48 my-2">
                  <h3>Blogs</h3>
                </div>
              </Link>
            </Col>
            <Col>
              <Link href="https://www.youtube.com/@_devshah" target="_blank">
                <div className="shadow-2xl rounded-[2em] p-4 !w-48 h-48 my-2">
                  <h3>Tech Videos</h3>
                </div>
              </Link>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
}
