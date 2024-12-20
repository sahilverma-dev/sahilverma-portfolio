import { getBlogBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import MDXContent from "@/components/mdx-content";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { formatDate } from "@/lib/utils";

type Params = Promise<{ params: { slug: string } }>;

const Blog = async (props: Params) => {
  const { slug } = (await props).params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const { title, image, author, publishedAt } = metadata;

  return (
    <div className="w-full">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeftIcon className="h-5 w-5" />
        <span>Back to blogs</span>
      </Link>

      {image && (
        <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="h-full w-full rounded-2xl object-cover"
            width={960}
            height={480}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-3 text-xs text-muted-foreground">
          {author} / {formatDate(publishedAt ?? "")}
        </p>
      </div>

      <div className="prose w-full max-w-full my-6 md:mb-10 dark:prose-invert">
        <MDXContent source={content} />
      </div>
    </div>
  );
};
export default Blog;
