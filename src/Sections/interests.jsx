import React from "react";
import db from "../Data/about";
import { onSnapshot, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function Interests() {
  const [interests, setInterests] = useState([]);
  useEffect(() => {
    try {
      onSnapshot(collection(db, "interests"), (spanshot) => {
        let interestList = spanshot.docs.map((document) => document.data());
        setInterests(interestList[0].interest);
      });
    } catch (error) {
      console.log(error);
    }
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
