import { getBlogs } from "@/lib/blog";
import { getProjects } from "@/lib/project";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://sahilverma.dev";
  const projects = await getProjects();
  const blogs = await getBlogs();

  const projectUrls =
    projects.map((project) => ({
      url: `${baseUrl}/project/${project.slug}`,
      lastModified: new Date(),
    })) ?? [];
  const blogUrls =
    blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(),
    })) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
    },
    ...projectUrls,
    ...blogUrls,
  ];
}
