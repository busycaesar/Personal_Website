import React from "react";
import { Row, Col } from "react-bootstrap";
import WorkExpSection from "@/Components/workExpSection";

export default function WorkExperience() {
  return (
    <div id="work-experience" className="content-section">
      <h1>
        <strong>WORK EXPERIENCE</strong>
      </h1>
      <WorkExpSection
        companyName="Seneca Hackathon 2024"
        location="Toronto, ON"
        designation="Senior Website Developer"
        empType="Volunteering"
        dateFrom="November 2023"
        responsibilities={[
          "Designing the project architecture, overlooking developers work, code reviews and troubleshooting.",
        ]}
        techStack="Next.js, React.js, TypeScript, JavaScript, Git, GitHub, MaterialUI, Bootstrap"
      />
      <WorkExpSection
        companyName="Google Developer Students Club (Seneca College)"
        location="Toronto, ON"
        designation="Events Team Member"
        empType="Volunteering"
        dateFrom="October 2023"
      />
      <WorkExpSection
        companyName="Toronto District School Board"
        location="Toronto, ON"
        designation="Junior Web Developer"
        empType="Co-op Full-time"
        dateFrom="January 2023"
        dateTill="August 2023"
        responsibilities={[
          "Communicated with clients to analyze their requirements and manage content on company's website along with ensuring the website’s compliance with Web Content Accessibility Guidelines (WCAG) and Accessibility for Ontarians with Disabilities Act (AODA). Also developed several webpages and migrated external websites into the DNN environment.",
          'Project: Completed the "News You Can Use" project by creating a custom DNN module with separate interfaces for admins and principals, enabling article management and advanced search functionality.',
        ]}
        techStack="HTML5, CSS3, XML, C#, ASP.NET, SQL, SSMS, Git, Azure DevOps, DNN EVOQ"
      />
    </div>
  );
}
