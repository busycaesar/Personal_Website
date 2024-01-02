import React from "react";
import WorkExpSection from "@/Components/workExpSection";
import db from "../Data/about";
import { onSnapshot, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function WorkExperience() {
  const [workExperience, setWorkExperience] = useState([]);
  useEffect(() => {
    try {
      onSnapshot(collection(db, "workExperience"), (spanshot) => {
        let workExperienceList = spanshot.docs.map((document) =>
          document.data()
        );
        setWorkExperience(
          workExperienceList.sort((a, b) => b.orderDate - a.orderDate)
        );
      });
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <div id="work-experience" className="content-section">
      <h1>
        <strong>WORK EXPERIENCE</strong>
      </h1>
      {workExperience.map((workExp) => (
        <>
          <WorkExpSection
            companyName={workExp.companyName}
            location={workExp.location}
            designation={workExp.designation}
            empType={workExp.employmentType}
            dateFrom={workExp.startDate}
            dateTill={workExp.endDate}
            responsibilities={workExp.responsibilities}
            techStack={workExp.techStack}
          />
        </>
      ))}
    </div>
  );
}
