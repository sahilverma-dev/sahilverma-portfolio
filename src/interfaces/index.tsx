export type ProjectType = "web" | "mobile" | "extension" | "package";

export interface Project {
  type: ProjectType;
  href: string;
  title: string;
  description: string;
  dates: string;
  stack: string[];
  image: string;
  links: string;
  github: string;
}
