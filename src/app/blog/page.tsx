import AnimatedTitle from "@/components/animated/animated-title";
import BlogCard from "@/components/blog-card";

const Blog = () => {
  return (
    <div>
      <AnimatedTitle title="Blog" />
      <p className="w-full text-base font-normal leading-7 text-justify text-neutral-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a quas
        sit cum minima, nostrum at asperiores tempore obcaecati veniam!
      </p>
      <div className="space-y-6 md:space-y-12 py-6 lg:py-10 sm:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <BlogCard key={index} />
        ))}
      </div>
    </div>
  );
};
export default Blog;
