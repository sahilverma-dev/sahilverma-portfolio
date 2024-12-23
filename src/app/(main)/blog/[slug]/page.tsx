import { getBlogBySlug, getBlogs } from "@/lib/blog";
import { notFound } from "next/navigation";
import MDXContent from "@/components/mdx-content";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { formatDate } from "@/lib/utils";
// import Image from "next/image";
import AnimatedImage from "@/components/animated/animated-image";
import AnimatedSignature from "@/components/animated/animated-signature";

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: Props) => {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog",
    };
  }

  const { metadata } = post;
  const { title, summary, image } = metadata;

  return {
    title,
    description: summary,
    openGraph: {
      images: [image],
      title,
      description: summary,
    },
    alternates: {
      canonical: `/projects/${slug}`,
    },
  };
};

export async function generateStaticParams() {
  const blogs = await getBlogs();
  const slugs = blogs.map((blog) => ({ slug: blog.slug }));

  return slugs;
}

const Blog = async ({ params }: Props) => {
  const { slug } = await params;

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
        <AnimatedImage
          className="relative mb-6 h-96 w-full overflow-hidden rounded-lg"
          src={image}
          alt={title as string}
          layout
          layoutId={`blog-image-${slug}`}
          width={1000}
          height={680}
          loading="lazy"
          decoding="async"
        />
      )}

      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-3 text-xs text-muted-foreground">
          {author} / {formatDate(publishedAt ?? "")}
        </p>
      </div>

      <div className="prose w-full max-w-full my-6 md:mb-10 dark:prose-invert">
        <MDXContent source={content} />
        Thanks for reading! 😁
        <AnimatedSignature />
      </div>
    </div>
  );
};
export default Blog;
