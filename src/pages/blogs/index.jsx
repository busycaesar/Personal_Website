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
      <Row>
        {blogs?.map((blog) => (
          <Col md={4} key={blog.id} className="my-3">
            <Link href={`blogs/${blog.id}`}>
              <Image
                src={blog.social_image}
                alt={`Link to Dev's`}
                layout="responsive"
                width={2}
                height={1}
                className="shadow rounded-xl"
              />
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
