import React, { useEffect, useState } from "react";
import { getBlogs, getBlog } from "@/Lib";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";

export default function Blogs() {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    getBlogs()
      .then((data) => {
        console.log(data[0]);
        setBlogs(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>Welcome to my blogs</h1>
      <Row>
        {blogs?.map((blog) => (
          <Col md={4} key={blog.id}>
            <Image
              src={blog.social_image}
              alt={`Link to Dev's`}
              layout="responsive"
              width={2}
              height={1}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
