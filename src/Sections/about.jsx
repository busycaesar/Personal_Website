/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState, useEffect } from "react";
import { AboutData } from "@/Data";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";

const SocialMediaAccounts = [
  "https://linkedin.com/in/busycaesar",
  "https://x.com/busycaesar",
  "https://github.com/busycaesar",
  "https://dev.to/busycaesar",
  "https://bsky.app/profile/busycaesar.bsky.social",
  "https://medium.com/@busycaesar",
  "https://youtube.com/@busycaesar",
  "https://instagram.com/busycaesar",
  "https://topmate.io/busycaesar",
];

export default function About() {
  const [about, setAbout] = useState([]);

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

          <Row className="text-center flex items-center">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-79.87747192382814%2C42.86690595775125%2C-79.21829223632814%2C44.55622782328973&amp;layer=mapnik"
              style={{
                borderRadius: "14px",
                boxShadow: "0 2px 12px rgba(27,42,65,0.07)",
                borderLeft: "4px solid #1b2a41",
                margin: "0.5em",
                width: "160px",
                height: "160px",
                border: "none",
                borderLeft: "4px solid #1b2a41",
              }}
            ></iframe>
            {[
              { label: "Blogs", href: "/blogs", internal: true },
              { label: "Public Speaking", href: "/speaking", internal: true },
            ].map(({ label, href, internal }) => (
              <Col
                key={label}
                md={3}
                sm={6}
                style={{
                  background: "#ffffff",
                  borderRadius: "14px",
                  boxShadow: "0 2px 12px rgba(27,42,65,0.07)",
                  borderLeft: "4px solid #1b2a41",
                  margin: "0.5em",
                  width: "160px",
                  height: "160px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link
                  href={href}
                  {...(!internal && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  style={{ textDecoration: "none" }}
                >
                  <h3 style={{ margin: 0 }}>{label}</h3>
                </Link>
              </Col>
            ))}
            {SocialMediaAccounts.map((link) => {
              const url = new URL(link);
              const username = url.pathname.split("/");
              return (
                <Col
                  key={link}
                  md={3}
                  sm={6}
                  style={{
                    background: "#ffffff",
                    borderRadius: "14px",
                    boxShadow: "0 2px 12px rgba(27,42,65,0.07)",
                    borderLeft: "4px solid #1b2a41",
                    margin: "0.5em",
                    width: "160px",
                    height: "160px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "1em 1.25em",
                  }}
                >
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
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
        </>
      )}
    </div>
  );
}
