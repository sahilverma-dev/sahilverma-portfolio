import Hero from "@/components/sections/hero-section";
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
      {/* <AboutMe />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection /> */}
    </div>
  );
};

export default Home;
