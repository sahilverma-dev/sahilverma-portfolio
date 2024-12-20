import Link from "next/link";
import { Badge } from "./ui/badge";
import AnimationContainer from "./animated/animated-container";
import { BlogMetadata } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

interface Props {
  blog: BlogMetadata;
}

const BlogCard: React.FC<Props> = ({ blog }) => {
  return (
    <AnimationContainer>
      <article className="relative isolate flex flex-col gap-8 md:flex-row group">
        <div className="relative aspect-video md:w-64 md:shrink-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="absolute inset-0 h-full w-full rounded-2xl ] object-cover"
            width={960}
            height={480}
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 rounded-2xl" />
        </div>
        <div>
          <div className="flex items-center gap-x-4 text-xs">
            {blog?.publishedAt && (
              <time dateTime="2020-03-16" className="text-base-500">
                <time dateTime="2024-12-02T00:00:00.000Z">
                  {formatDate(blog?.publishedAt)}{" "}
                </time>
              </time>
            )}
            <Link href={`/blog/${blog.slug}`}>
              <Badge className="bg-white/10 backdrop-blur">Blog</Badge>
            </Link>
          </div>
          <div className="max-w-xl">
            <div className="mt-3 text-lg font-semibold leading-6 text-base-900 dark:text-base-50">
              <Link href={`/blog/${blog.slug}`}>
                <span className="absolute inset-0" /> {blog.title}
              </Link>
              <div className="absolute -inset-2 md:-inset-4 rounded-2xl opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 bg-white/10 backdrop-blur -z-10 transition-all duration-150" />
            </div>
            <p className="mt-5 text-sm leading-6 text-base-600 dark:text-base-400">
              {blog.summary}
            </p>
          </div>
        </div>
      </article>
    </AnimationContainer>
  );
};
export default BlogCard;
