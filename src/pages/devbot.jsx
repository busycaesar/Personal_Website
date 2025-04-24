import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { GenerateResponse } from "@/Data";
import UseLoading from "@/Components/Hooks/useLoading";

export default function DevBot() {
  const [query, setQuery] = useState();
  const [response, setResponse] = useState("");
  const [loadingAnimation, setLoading] = UseLoading(false, "black");

  const handleSubmit = async () => {
    if (!query) return;

    setLoading(true);
    setResponse("");

    const generatedResponse = await GenerateResponse(query);

    setResponse(generatedResponse);

    setLoading(false);
  };

  return (
    <div className="">
      <h1>
        <strong>Welcome to Devbot!</strong>
      </h1>
      <p className="my-3">
        DevBot is an AI-powered chatbot designed to answer any questions you
        have about my work experience, projects, education, and more. It
        leverages Google&apos;s Gemini API for intelligent, real-time responses,
        and data is stored in pgVector to ensure accurate, context-aware answers
        based on the content of my portfolio.
      </p>
      <p className="my-3">
        Ask DevBot questions like &quot;Where does Dev works at?&quot;,
        &quot;What did Dev studied?&quot;, &quot;What are Dev&apos;s featured
        projects?&quot;, etc.
      </p>

      <Row>
        <Col sm={10} className="mb-3 mb-sm-0">
          <TextField
            label="Ask Devbot"
            variant="outlined"
            fullWidth
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Col>
        <Col align="right" sm={2}>
          <Button
            className="bg-black border-0 h-14 w-full"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Col>
      </Row>

      <div className="my-4 place-self-center">{loadingAnimation}</div>
      {response && <>{response}</>}
    </div>
  );
}
