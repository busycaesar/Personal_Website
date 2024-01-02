import React from "react";
import EduSection from "@/Components/eduSection";
import { useEffect, useState } from "react";
import { EducationData } from "@/Data";

export default function Education() {
  const [education, setEducation] = useState([]);
  useEffect(() => {
    EducationData()
      .then((data) => setEducation(data))
      .catch((error) => console.log(error));
  });
  return (
    <div id="education" className="content-section">
      <h1>
        <strong>EDUCATION</strong>
      </h1>
      {education &&
        education.map((education) => (
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
