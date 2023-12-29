import TechSkills from "@/Sections/techSkills";
import About from "@/Sections/about";
import WorkExperience from "@/Sections/workExperience";
import Projects from "@/Sections/projects";
import Education from "@/Sections/education";
import Interests from "@/Sections/interests";

export default function Home() {
  return (
    <>
      <About />
      <hr />
      <TechSkills />
      <hr />
      <WorkExperience />
      <hr />
      <Projects />
      <hr />
      <Education />
      <hr />
      <Interests />
      <p>&copy; Developed with 🖤 by Dev!</p>
    </>
  );
}
