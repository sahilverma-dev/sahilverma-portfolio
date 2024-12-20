import Link from "next/link";
import AnimationContainer from "../animated/animated-container";
import ProjectCard from "../project-card";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  return (
    <AnimationContainer customClassName="w-full py-12 lg:py-16">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-center text-white lg:text-start">
        Projects
      </h2>

      <p className="w-full text-base font-normal leading-7 text-justify text-neutral-200">
        I&apos;ve built a variety of projects ranging from websites, apps,
        extensions, open source projects and more.
      </p>
      <div className="grid grid-cols-1 gap-3 py-6 lg:py-10 sm:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProjectCard
            key={index}
            project={{
              dates: "2023",
              description: "This is a sample project",
              github: "https://github.com",
              href: "https://github.com",
              image:
                "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
              links: "https://github.com",
              stack: ["React", "Next.js", "TailwindCSS"],
              title: "Sample Project",
              type: "extension",
            }}
          />
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
