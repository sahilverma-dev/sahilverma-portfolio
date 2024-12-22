import AboutMe from "@/components/sections/about-me";
import BlogSection from "@/components/sections/blog-section";
import Hero from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/project-sections";
import SkillsSection from "@/components/sections/skill-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Hello, I'm Sahil Verma. - I'm a full stack developer from Himachal Pradesh India.",
};

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
    </div>
  );
};
export default Home;
