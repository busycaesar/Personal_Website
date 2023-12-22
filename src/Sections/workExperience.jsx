import React from "react";
import WorkExpSection from "@/Components/workExpSection";
import WorkExperienceData from "../Data/workExperience.json";

export default function WorkExperience() {
  return (
    <div id="work-experience" className="content-section">
      <h1>
        <strong>WORK EXPERIENCE</strong>
      </h1>
      {WorkExperienceData.map((workExp) => (
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
