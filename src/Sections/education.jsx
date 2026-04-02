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
  }, []);

  return (
    <div id="education" className="content-section">
      <h1>
        <strong>EDUCATION</strong>
      </h1>
      {education &&
        education.map((edu) => (
          <EduSection
            key={`${edu.school}-${edu.program}-${edu.startDate}`}
            program={edu.program}
            progType={edu.programType}
            dateFrom={edu.startDate}
            dateTill={edu.endDate}
            school={edu.school}
            location={edu.location}
            courses={edu.courses}
          />
        ))}
    </div>
  );
}
