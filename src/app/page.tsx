import AboutMe from "@/components/sections/about-me";
import Hero from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/project-sections";
import SkillsSection from "@/components/sections/skill-section";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
};
export default Home;
