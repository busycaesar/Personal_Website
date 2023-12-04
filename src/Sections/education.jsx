import React from "react";
import EduSection from "@/Components/eduSection";

export default function Education() {
  return (
    <div id="education" className="content-section">
      <h1>
        <strong>EDUCATION</strong>
      </h1>
      {/*
        let program = props.program,
    dateFrom = props.dateFrom,
    dateTill = props.dateTill,
    school = props.school,
    location = props.location,
    eduCourses = <p>{props.courses.join(", ")}</p>;
      */}
      <EduSection
        program="Computer Programming and Analysis (Co-op)"
        progType="Advanced Diploma"
        dateFrom="January 2022"
        dateTill="Expected August 2024"
        school="Seneca Polytechnic"
        location="Toronto, ON"
        courses={[
          "Object Oriented Programming",
          "Data Structures and Algorithms",
          "Web Development",
          "Database Systems",
          "System Analysis and Design",
          "IT Project Management",
          "Operating Systems",
          "Data Communication",
          "Communication Skills",
          "Film Studies",
        ]}
      />
      <EduSection
        program="Electrical Engineering"
        progType="High School Diploma"
        dateFrom="July 2018"
        dateTill="June 2021"
        school="The Maharaja Sayajirao University of Baroda"
        location="Vadodara, India"
        courses={[
          "Mathematics",
          "Physics",
          "Chemistry",
          "Engineering Drawing",
          "Engineering Mechanics",
          "Electrical Engineering",
          "Power Engineering",
          "Electronics Engineering",
          "Computer Engineering",
          "Communication Skills",
        ]}
      />
    </div>
  );
}
