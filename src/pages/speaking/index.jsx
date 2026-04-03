import React, { useEffect, useState } from "react";
import { getEngagements } from "@/Lib";
import EngagementSection from "@/Components/engagementSection";
import { Row, Col } from "react-bootstrap";

const sectionLabel = {
  display: "inline-block",
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  padding: "0.25em 0.75em",
  borderRadius: "999px",
  marginBottom: "0.75em",
};

export default function Speaking() {
  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);

  useEffect(() => {
    getEngagements()
      .then((data) => {
        if (Array.isArray(data)) {
          setUpcoming(data.filter((e) => e.status === "upcoming"));
          setPast(data.filter((e) => e.status === "past"));
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Public Speaking</h1>

      {upcoming.length > 0 && (
        <div style={{ marginBottom: "2.5em" }}>
          <span style={{ ...sectionLabel, background: "#d1fae5", color: "#065f46" }}>
            Upcoming
          </span>
          <Row className="align-items-stretch">
            {upcoming.map((engagement) => (
              <Col key={engagement.title} lg={4} md={6} sm={12} className="mb-3 d-flex">
                <EngagementSection engagement={engagement} upcoming />
              </Col>
            ))}
          </Row>
        </div>
      )}

      {past.length > 0 && (
        <div>
          <span style={{ ...sectionLabel, background: "#e5e7eb", color: "#374151" }}>
            Past
          </span>
          <Row className="align-items-stretch">
            {past.map((engagement) => (
              <Col key={engagement.title} lg={4} md={6} sm={12} className="mb-3 d-flex">
                <EngagementSection engagement={engagement} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
}
