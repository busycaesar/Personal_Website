/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState, useEffect } from "react";
import { AboutData } from "@/Data";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";

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
              { label: "Contact", href: "#contact", internal: true },
              { label: "Blogs", href: "/blogs", internal: true },
              { label: "Tech Videos", href: "https://www.youtube.com/@busycaesar", internal: false },
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
                  {...(!internal && { target: "_blank", rel: "noopener noreferrer" })}
                  style={{ textDecoration: "none" }}
                >
                  <h3 style={{ margin: 0 }}>{label}</h3>
                </Link>
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
}
