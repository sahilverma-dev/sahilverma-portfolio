// icons
// import { RiNpmjsLine as NpmIcon } from "react-icons/ri";
import {
  // FaMobileScreenButton as MobileIcon,
  // FaChrome as ChromeIcon,
  // FaGlobe as WebIcon,
  FaGithub as GithubIcon,
} from "react-icons/fa6";
import { MdOpenInNew as OpenIcon } from "react-icons/md";

import { Badge } from "./ui/badge";
import AnimationContainer from "./animated/animated-container";
import Link from "next/link";
import { ProjectMetadata } from "@/lib/project";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

interface Props {
  project: ProjectMetadata;
}

// const ProjectIcon: React.FC<{ type: Project["type"] }> = ({ type }) => {
//   switch (type) {
//     case "extension":
//       return <ChromeIcon />;
//     case "mobile":
//       return <MobileIcon />;
//     case "package":
//       return <NpmIcon />;
//     case "web":
//       return <WebIcon />;
//     default:
//       return <WebIcon />;
//   }
// };

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <AnimationContainer>
      <div className="w-full h-auto group border backdrop-blur border-white/10 space-y-2 md:space-y-4 rounded-2xl p-4">
        <div className="relative rounded-2xl overflow-hidden">
          <Badge className="absolute bottom-2 left-2 uppercase">
            {project.type}
          </Badge>
          <div className="absolute flex items-center gap-2 top-2 right-2 ">
            {/* <ProjectIcon type={project.type} /> */}
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-black/10 rounded-full backdrop-blur hover:bg-black/30 transition-all"
            >
              <OpenIcon />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-black/10 rounded-full backdrop-blur hover:bg-black/30 transition-all"
            >
              <GithubIcon />
            </a>
          </div>
          <Link href={`/projects/${project.slug}`}>
            <Image
              src={project.image}
              alt={project.title}
              width={960}
              height={480}
              className=" w-full aspect-video h-full object-cover object-top "
            />
          </Link>
          {/* <div className="overlay" /> */}
        </div>
        <div className="space-y-2">
          <Link href={`/projects/${project.slug}`}>
            <h3 className="font-semibold group-hover:underline group-hover:text-primary transition-all tracking-tight mt-1 text-base md:text-xl">
              {project.title}
            </h3>
          </Link>
          <time className="font-sans text-xs">{formatDate(project.date)}</time>
          <div className="hidden font-sans text-xs underline print:visible" />
          <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            <p>{project.description}</p>
          </div>
        </div>
        <div className=" flex flex-wrap gap-2">
          {project.stack.map((stack) => (
            <Badge
              key={stack}
              className="bg-white/10 capitalize hover:bg-white/20 backdrop-blur"
            >
              {stack}
            </Badge>
          ))}
        </div>
      </div>
    </AnimationContainer>
  );
};
export default ProjectCard;
