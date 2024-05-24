import React from "react";
import { Row, Col } from "react-bootstrap";

export default function OrgSec(props) {
  let designation = props.designation,
    dateFrom = props.dateFrom,
    dateTill = props.dateTill || "Present",
    organization = props.organization,
    location = props.location,
    additionalContent = props.additionalContent;
  return (
    <div style={{ margin: "0.5em 0" }}>
      <Row>
        <Col md={8}>
          <h2>
            <strong>{designation}</strong>
          </h2>
        </Col>
        <Col md={4} style={{ textAlign: "right" }}>
          <p>
            {dateFrom} - {dateTill}
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <p>{organization}</p>
        </Col>
        <Col md={4} style={{ textAlign: "right" }}>
          <p>{location && <>{location}</>}</p>
        </Col>
      </Row>
      {additionalContent}
    </div>
  );
}
