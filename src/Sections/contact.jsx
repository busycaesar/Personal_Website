/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Contact() {
  const SocialMediaAccounts = [
    "https://linkedin.com/in/busycaesar",
    "https://x.com/busycaesar",
    "https://github.com/busycaesar",
    "https://dev.to/busycaesar",
    "https://medium.com/@busycaesar",
    "https://youtube.com/@busycaesar",
    "https://instagram.com/busycaesar",
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
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                boxShadow: "0 2px 12px rgba(27,42,65,0.07)",
                borderLeft: "4px solid #1b2a41",
                padding: "1.25em 1.5em",
                margin: "0.5em",
                width: "180px",
                height: "120px",
              }}
            >
              <a
                href={link}
                className="no-underline"
                style={{ color: "inherit", textDecoration: "none" }}
                target="_blank"
              >
                <img
                  src={`https://www.google.com/s2/favicons?sz=64&domain=${url.hostname}`}
                  alt={`Link to Dev's ${url.hostname}`}
                  className="h-10 w-10 rounded-full"
                />
                <div
                  style={{
                    marginTop: "0.6em",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#1b2a41",
                    wordBreak: "break-word",
                  }}
                >
                  {url.hostname}
                  <br />
                  <span style={{ fontWeight: 400, color: "#6b7280" }}>
                    /{username[username.length - 1]}
                  </span>
                </div>
              </a>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
