import React from "react";
import { Row, Col } from "react-bootstrap";
import NavBar from "./navBar";

export default function Layout(props) {
  return (
    <Row>
      <Col sm={2}>
        <NavBar
          navBarItems={[
            "About",
            "Technical Skills",
            "Work Experience",
            "Projects",
            "Education",
            "Interests",
          ]}
        />
      </Col>
      <Col sm={10}>
        <div className="main-content">{props.children}</div>
      </Col>
    </Row>
  );
}
