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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a quas
        sit cum minima, nostrum at asperiores tempore obcaecati veniam!
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
