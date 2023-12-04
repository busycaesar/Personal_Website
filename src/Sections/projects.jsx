import React from "react";
import ProjectSection from "@/Components/projectSection";

export default function Projects() {
  return (
    <div id="projects" className="content-section">
      <h1>
        <strong>PROJECTS</strong>
      </h1>
      <ProjectSection
        title="Book List"
        techStack="MERN Stack"
        description={[
          "This is a Full stack webapp which performs CRUD operation on a Book object.",
        ]}
        link="https://github.com/busycaesar/Books_List_MERN_Stack"
      />
      <ProjectSection
        title="Portfolio Website"
        techStack="Next.js, MaterialUI, Bootstrap"
        description={["This is the website."]}
        link="#about"
      />
      <ProjectSection
        title="School Data Manager"
        techStack="HTML, CSS, Bootstrap, Node.js, Express.js, Handlebars.js, PostgreSQL, MongoDB"
        description={[
          "This is a Webapp which performs CRUD operations on Student’s and Courses’ data along with authentication and authorization functionalities.",
        ]}
        link="https://github.com/busycaesar/School_Data_Manager"
      />
      <ProjectSection
        title="Pay Slip Scrapper"
        techStack="Node.js, Puppeteer"
        description={[
          "This is a Web scraper which downloads the pay slip from the company’s website.",
        ]}
        link="https://github.com/busycaesar/Pay_Slip_Scrapper"
      />
      <ProjectSection
        title="Library Application"
        techStack="C++"
        description={[
          "This is a console application which can add new or remove existing publication along with checking out and return back the publication.",
        ]}
        link="https://github.com/busycaesar/Library_Application"
      />
    </div>
  );
}
