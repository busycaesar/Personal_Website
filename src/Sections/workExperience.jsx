import React from "react";
import WorkExpSection from "@/Components/workExpSection";
import { useState, useEffect } from "react";
import { WorkExperienceData } from "@/Data";

export default function WorkExperience() {
  const [workExperience, setWorkExperience] = useState([]);
  useEffect(() => {
    WorkExperienceData()
      .then((data) => setWorkExperience(data))
      .catch((error) => console.log(error));
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
