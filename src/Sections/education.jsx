import React from "react";
import EduSection from "@/Components/eduSection";
import EducationData from "../Data/education.json";

export default function Education() {
  return (
    <div id="education" className="content-section">
      <h1>
        <strong>EDUCATION</strong>
      </h1>
      {EducationData.map((education) => (
        <>
          <EduSection
            program={education.program}
            progType={education.programType}
            dateFrom={education.startDate}
            dateTill={education.endDate}
            school={education.school}
            location={education.location}
            courses={education.courses}
          />
        </>
      ))}
    </div>
  );
}
