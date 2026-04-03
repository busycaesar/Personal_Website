import React, { useEffect, useState } from "react";
import { getBlogs, getBlog } from "@/Lib";
import Image from "next/image";
import { Row, Col, Button } from "react-bootstrap";
import Link from "next/link";

export default function Blogs() {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    getBlogs()
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>Blogs</h1>
      <Row className="align-items-stretch">
        {blogs &&
          blogs?.map((blog, index) => (
            <Col md={4} key={blog.id} className="my-3 d-flex">
              <Link href={blog.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", width: "100%" }}>
                <div style={{
                  background: "#ffffff",
                  borderRadius: "14px",
                  boxShadow: "0 2px 12px rgba(27,42,65,0.07)",
                  overflow: "hidden",
                  borderLeft: "4px solid #1b2a41",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}>
                  <div style={{ position: "relative", aspectRatio: "2 / 1", flexShrink: 0 }}>
                    <Image
                      src={blog.social_image}
                      alt={blog.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    {index < 2 && (
                      <span
                        className="rsvp-badge"
                        style={{
                          position: "absolute",
                          top: "0.6em",
                          left: "0.6em",
                          padding: "0.25em 0.9em",
                          borderRadius: "999px",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          background: "#2d6a4f",
                          color: "#ffffff",
                        }}
                      >
                        LATEST
                      </span>
                    )}
                  </div>
                  <div style={{ padding: "0.75em 1em", display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
                    <p style={{
                      margin: 0,
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "#1b2a41",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}>
                      {blog.title}
                    </p>
                    <p style={{ margin: "0.5em 0 0", fontSize: "0.78rem", color: "#6b7280" }}>
                      {blog.reading_time_minutes} min read
                    </p>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
      </Row>
      <Link href="https://dev.to/busycaesar" target="_blank">
        <Button variant="dark" className="!text-xl my-2">
          See more
        </Button>
      </Link>
    </div>
  );
}
