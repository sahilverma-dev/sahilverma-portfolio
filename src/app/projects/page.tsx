import AnimationContainer from "@/components/animated/animated-container";
import AnimatedTitle from "@/components/animated/animated-title";
import ProjectCard from "@/components/project-card";

const Projects = () => {
  return (
    <div>
      <AnimatedTitle title="Projects" />
      <AnimationContainer>
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
      </AnimationContainer>
    </div>
  );
};
export default Projects;
