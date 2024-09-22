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
              className="shadow-2xl rounded-[2em] m-2 p-0 md:!w-40 md:h-40 !w-36 h-36 border-1 border-gray-300"
            ></iframe>
            <Col
              md={3}
              sm={6}
              className="shadow-2xl rounded-[2em] m-2 p-4 md:!w-40 md:h-40 !w-36 h-36 flex flex-col justify-center border-1 border-gray-300"
            >
              <Link href="#contact">
                <h3>Contact</h3>
              </Link>
            </Col>
            <Col
              md={3}
              sm={6}
              className="shadow-2xl rounded-[2em] m-2 p-4 md:!w-40 md:h-40 !w-36 h-36 flex flex-col justify-center border-1 border-gray-300"
            >
              <Link href="/blogs">
                <h3>Blogs</h3>
              </Link>
            </Col>
            <Col
              md={3}
              sm={6}
              className="shadow-2xl rounded-[2em] m-2 p-4 md:!w-40 md:h-40 !w-36 h-36 flex flex-col justify-center border-1 border-gray-300"
            >
              <Link href="https://www.youtube.com/@_devshah" target="_blank">
                <h3>Tech Videos</h3>
              </Link>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
}
