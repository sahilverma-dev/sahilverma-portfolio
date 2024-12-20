import AnimationContainer from "@/components/animated/animated-container";
import AnimatedTitle from "@/components/animated/animated-title";
import ProjectCard from "@/components/project-card";
import { getProjects } from "@/lib/project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "My projects include web applications, extensions, and open source contributions.",
};

const Projects = async () => {
  const projects = await getProjects();

  return (
    <div>
      <AnimatedTitle title="Projects" />
      <AnimationContainer>
        <p className="w-full text-base font-normal leading-7 text-justify text-neutral-200">
          I&apos;ve built a variety of projects ranging from websites, apps,
          extensions, open source projects and more.
        </p>
        <div className="grid grid-cols-1 gap-3 py-6 lg:py-10 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </AnimationContainer>
    </div>
  );
};
export default Projects;
