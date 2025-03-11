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
