import AnimatedPhoto from "@/components/animated/animated-photo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
};

const AboutPage = () => {
  return (
    <div className="space-y-6 lg:space-y-12">
      <div className="flex gap-6 flex-col md:flex-row items-center">
        <AnimatedPhoto />
        {/* <AboutMe /> */}
      </div>
      {/* <SkillsSection /> */}
    </div>
  );
};

export default AboutPage;
