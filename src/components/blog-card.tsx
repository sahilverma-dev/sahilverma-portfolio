import Link from "next/link";
import { Badge } from "./ui/badge";
import AnimationContainer from "./animated/animated-container";

const BlogCard = () => {
  return (
    <AnimationContainer>
      <article className="relative isolate flex flex-col gap-8 md:flex-row group">
        <div className="relative aspect-video md:w-64 md:shrink-0">
          <img
            src="https://flo-bit.dev/blog-template/_astro/blog-placeholder-1.1WQRLJGH_1ta3QG.webp"
            alt=""
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
            <time dateTime="2020-03-16" className="text-base-500">
              <time dateTime="2024-12-02T00:00:00.000Z"> Dec 2, 2024 </time>
            </time>
            <Link href="/blog/blog-template">
              <Badge className="bg-white/10 backdrop-blur">lorem</Badge>
            </Link>
          </div>
          <div className="max-w-xl">
            <div className="mt-3 text-lg font-semibold leading-6 text-base-900 dark:text-base-50">
              <Link href="/blog/blog-template">
                <span className="absolute inset-0" /> Lorem ipsum dolor sit
                amet.
              </Link>
              <div className="absolute -inset-2 md:-inset-4 rounded-2xl opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 bg-white/10 backdrop-blur -z-10 transition-all duration-150" />
            </div>
            <p className="mt-5 text-sm leading-6 text-base-600 dark:text-base-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              ad eaque temporibus non.
            </p>
          </div>
        </div>
      </article>
    </AnimationContainer>
  );
};
export default BlogCard;
