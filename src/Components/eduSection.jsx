import React from "react";
import OrgSec from "./orgSec";

export default function EduSection(props) {
  let program = props.program,
    progType = props.progType,
    dateFrom = props.dateFrom,
    dateTill = props.dateTill,
    school = props.school,
    location = props.location,
    eduCourses = props.courses && <p>{props.courses.join(", ")}</p>;
  return (
    <>
      <OrgSec
        designation={`${program}, ${progType}`}
        dateFrom={dateFrom}
        dateTill={dateTill}
        organization={school}
        location={location}
        additionalContent={eduCourses}
      />
    </>
  );
}
