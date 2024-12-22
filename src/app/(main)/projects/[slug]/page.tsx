import { getProjectBySlug, getProjects } from "@/lib/project";
import { notFound } from "next/navigation";
import MDXContent from "@/components/mdx-content";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { formatDate } from "@/lib/utils";
// import Image from "next/image";
import AnimatedImage from "@/components/animated/animated-image";

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: Props) => {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project",
    };
  }

  const { metadata } = project;
  const { title, description, image } = metadata;

  return {
    title,
    description,
    openGraph: {
      images: [image],
      title,
      description,
    },
    alternates: {
      canonical: `/projects/${slug}`,
    },
  };
};

export async function generateStaticParams() {
  const projects = await getProjects();
  const slugs = projects.map((project) => ({ slug: project.slug }));

  return slugs;
}

const Project = async ({ params }: Props) => {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { metadata, content } = project;
  const { title, image, date } = metadata;

  return (
    <div className="w-full">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeftIcon className="h-5 w-5" />
        <span>Back to projects</span>
      </Link>

      {image && (
        <AnimatedImage
          className="relative mb-6 h-96 w-full overflow-hidden rounded-lg"
          src={image}
          alt={title as string}
          layout
          layoutId={`project-image-${slug}`}
          width={1000}
          height={680}
          loading="lazy"
          decoding="async"
        />
      )}

      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-3 text-xs text-muted-foreground">
          {formatDate(date ?? "")}
        </p>
      </div>

      <div className="prose w-full max-w-full my-6 md:mb-10 dark:prose-invert">
        <MDXContent source={content} />
      </div>
    </div>
  );
};
export default Project;
