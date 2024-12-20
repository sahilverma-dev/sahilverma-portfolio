import Link from "next/link";
import AnimationContainer from "../animated/animated-container";
import ProjectCard from "../project-card";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { getProjects } from "@/lib/project";

const ProjectsSection = async () => {
  const projects = await getProjects(6);
  return (
    <AnimationContainer customClassName="w-full py-12 lg:py-16">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-center text-white lg:text-start">
        Projects
      </h2>

      <p className="w-full text-base font-normal leading-7 text-justify text-neutral-200">
        Here are some of the projects I&apos;ve worked on, showcasing my skills
        in web development, problem-solving, and creativity.
      </p>
      <div className="grid grid-cols-1 gap-3 py-6 lg:py-10 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="flex justify-center w-full">
        <Link
          href="/projects"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mx-auto rounded-full text-center"
          )}
        >
          More Projects
        </Link>
      </div>
    </AnimationContainer>
  );
};
export default ProjectsSection;
