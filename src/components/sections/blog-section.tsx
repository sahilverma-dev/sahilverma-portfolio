import Link from "next/link";
import AnimationContainer from "../animated/animated-container";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import BlogCard from "../blog-card";
import { getBlogs } from "@/lib/blog";

const BlogSection = async () => {
  const blogs = await getBlogs(6);
  return (
    <AnimationContainer customClassName="w-full py-12 lg:py-16">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-center text-white lg:text-start">
        Blogs
      </h2>

      <p className="w-full text-base font-normal leading-7 text-justify text-neutral-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a quas
        sit cum minima, nostrum at asperiores tempore obcaecati veniam!
      </p>
      <div className="space-y-6 md:space-y-12 py-6 lg:py-10 sm:grid-cols-2">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
      <div className="flex justify-center w-full">
        <Link
          href="/blog"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mx-auto rounded-full text-center"
          )}
        >
          Read more blogs
        </Link>
      </div>
    </AnimationContainer>
  );
};
export default BlogSection;
