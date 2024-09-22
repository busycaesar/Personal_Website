/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Contact() {
  const SocialMediaAccounts = [
    "https://linkedin.com/in/busycaesar",
    "https://x.com/busycaesar",
    "https://github.com/busycaesar",
    "https://dev.to/busycaesar",
    "https://instagram.com/busycaesar",
    "https://buymeacoffee.com/busycaesar7",
    "https://youtube.com/@_devshah",
  ];

  return (
    <div id="contact" className="content-section">
      <h1>
        <strong>CONTACT</strong>
      </h1>
      <Row className="my-4">
        {SocialMediaAccounts.map((link) => {
          const url = new URL(link);
          const username = url.pathname.split("/");
          return (
            <Col
              key={link}
              lg={3}
              md={4}
              sm={6}
              className="shadow-2xl rounded-[2em] m-2 md:p-4 p-3 md:!w-48 md:h-48 !w-[9em] !h-[9em] border-1 border-gray-300"
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
                <div className="md:text-lg sm:text-md text-sm my-3 break-words w-full">
                  {url.hostname}
                  <br />@{username[username.length - 1]}
                </div>
              </a>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
