import fs from "fs";
import path from "path";
import matter from "gray-matter";

const rootDirectory = path.join(process.cwd(), "src/content/blogs");

export type Blog = {
  metadata: BlogMetadata;
  content: string;
};

export type BlogMetadata = {
  title?: string;
  summary?: string;
  image?: string;
  author?: string;
  publishedAt?: string;
  slug: string;
};

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
    const { data, content } = matter(fileContent);
    return { metadata: { ...data, slug }, content };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getBlogs(limit?: number): Promise<BlogMetadata[]> {
  const files = fs.readdirSync(rootDirectory);

  const blogs = files
    .map((file) => getBlogMetadata(file))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? "") < new Date(b.publishedAt ?? "")) {
        return 1;
      } else {
        return -1;
      }
    });

  if (limit) {
    return blogs.slice(0, limit);
  }

  return blogs;
}

export function getBlogMetadata(filepath: string): BlogMetadata {
  const slug = filepath.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const { data } = matter(fileContent);
  return { ...data, slug };
}
