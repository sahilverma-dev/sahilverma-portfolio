import fs from "fs";
import path from "path";
import matter from "gray-matter";

const rootDirectory = path.join(process.cwd(), "src/content/projects");

export type Project = {
  metadata: ProjectMetadata;
  content: string;
};

export type ProjectType = "web" | "mobile" | "extension" | "package";

export interface ProjectMetadata {
  type: ProjectType;
  title: string;
  description: string;
  date: string;
  stack: string[];
  slug: string;
  image: string;
  link: string;
  github: string;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
    const { data, content } = matter(fileContent);
    return {
      metadata: {
        ...data,
        slug,
        date: data.date ?? "",
        stack: data.stack ?? [],
        link: data.link ?? "",
        github: data.github ?? "",
        description: data.description ?? "",
        image: data.image ?? "",
        title: data.title ?? "",
        type: data.type ?? "",
      },
      content,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getProjects(limit?: number): Promise<ProjectMetadata[]> {
  const files = fs.readdirSync(rootDirectory);

  const projects = files
    .map((file) => getProjectMetadata(file))
    .sort((a, b) => {
      if (new Date(a.date ?? "") < new Date(b.date ?? "")) {
        return 1;
      } else {
        return -1;
      }
    });

  if (limit) {
    return projects.slice(0, limit);
  }

  return projects;
}

export function getProjectMetadata(filepath: string): ProjectMetadata {
  const slug = filepath.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const { data } = matter(fileContent);
  return {
    ...data,
    slug,
    date: data.date ?? "",
    stack: data.stack ?? [],
    link: data.link ?? "",
    github: data.github ?? "",
    description: data.description ?? "",
    image: data.image ?? "",
    title: data.title ?? "",
    type: data.type ?? "",
  };
}
