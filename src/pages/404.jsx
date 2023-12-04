import { Button } from "react-bootstrap";
import Link from "next/link";

export default function Custom404() {
  return (
    <div
      className="content-section"
      style={{
        alignItems: "center",
      }}
    >
      <h1>404: Page not found!!!</h1>
      <p>But please watch this short if you haven&apos;t!</p>
      <iframe
        width="400"
        height="650"
        src="https://www.youtube.com/embed/0xztgOpMbSw"
        title="404 Page Not Found"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <Link href="/">
        <Button style={{ marginTop: "1em" }}>Click Here to go back</Button>
      </Link>
    </div>
  );
}
