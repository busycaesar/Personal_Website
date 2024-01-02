import React from "react";
import { useState, useEffect } from "react";
import { InterestData } from "@/Data";

export default function Interests() {
  const [interests, setInterests] = useState([]);
  useEffect(() => {
    InterestData()
      .then((data) => setInterests(data))
      .catch((error) => console.log(error));
  });
  return (
    <div id="interests" className="content-section">
      <h1>
        <strong>INTERESTS</strong>
      </h1>
      <p>Apart from Web Development, I like:</p>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </div>
  );
}
