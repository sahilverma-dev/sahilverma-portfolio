import { Project } from "@/interfaces";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return <div className="w-full border">{project.title}</div>;
};
export default ProjectCard;
