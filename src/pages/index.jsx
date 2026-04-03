import BuyMeACoffee from "@/Components/buyMeACoffee";
import {
  About,
  TechSkills,
  WorkExperience,
  Projects,
  Education,
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
      <p className="flex items-center">
        &copy; Developed with 🖤 by Dev!
        <span className="mx-3">
          <BuyMeACoffee />
        </span>
      </p>
    </>
  );
}
