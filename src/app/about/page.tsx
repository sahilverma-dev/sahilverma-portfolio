import MyPhoto from "@/components/my-photo";
import AboutMe from "@/components/sections/about-me";
import SkillsSection from "@/components/sections/skill-section";

const About = () => {
  return (
    <div className="space-y-6 lg:space-y-12">
      <div className="flex gap-6 items-center">
        <MyPhoto />
        <AboutMe />
      </div>
      <SkillsSection />
    </div>
  );
};

export default About;
