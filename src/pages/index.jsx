import {
  About,
  TechSkills,
  WorkExperience,
  Projects,
  Education,
  Interests,
} from "@/Sections";

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
