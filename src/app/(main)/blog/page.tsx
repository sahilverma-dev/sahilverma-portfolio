import AnimatedTitle from "@/components/animated/animated-title";
import BlogCard from "@/components/blog-card";
import { getBlogs } from "@/lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "My blogs",
};

const Blog = async () => {
  const blogs = await getBlogs();
  return (
    <div>
      <AnimatedTitle title="Blogs" />
      <p className="w-full text-base font-normal leading-7 text-justify text-neutral-200">
        Welcome to my blog, a place where creativity and technology come to
        life. Here, I share my journey through coding, problem-solving, and the
        stories behind the projects I create.
      </p>
      <div className="space-y-6 md:space-y-12 py-6 lg:py-10 sm:grid-cols-2">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
};
export default Blog;
