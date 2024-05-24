import React from "react";
import OrgSec from "./orgSec";

export default function WorkExpSection(props) {
  let companyName = props.companyName,
    location = props.location,
    designation = props.designation,
    empType = props.empType,
    dateFrom = props.dateFrom,
    dateTill = props.dateTill,
    responsibilities = props.responsibilities || [],
    techStack = props.techStack || "",
    workResponsibilities = (
      <>
        {responsibilities.length > 0 ? (
          <ul>
            {responsibilities.map((res, index) => (
              <li className="list-disc" key={index}>
                {res}
              </li>
            ))}
          </ul>
        ) : null}
        {techStack != "" ? <p>Tech Stack: {techStack}</p> : null}
      </>
    );
  return (
    <>
      <OrgSec
        designation={designation}
        dateFrom={dateFrom}
        dateTill={dateTill}
        organization={`${companyName}, ${empType}`}
        location={location}
        additionalContent={workResponsibilities}
      />
    </>
  );
}
