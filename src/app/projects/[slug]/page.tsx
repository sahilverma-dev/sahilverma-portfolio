import { getProjectBySlug, getProjects } from "@/lib/project";
import { notFound } from "next/navigation";
import MDXContent from "@/components/mdx-content";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { formatDate } from "@/lib/utils";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const project = await getProjectBySlug(params.slug);

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
      canonical: `/projects/${params.slug}`,
    },
  };
};

export async function generateStaticParams() {
  const projects = await getProjects();
  const slugs = projects.map((project) => ({ slug: project.slug }));

  return slugs;
}

const Project = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { metadata, content } = project;
  const { title, image, date } = metadata;

  return (
    <div className="w-full">
      <Link
        href="/project"
        className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeftIcon className="h-5 w-5" />
        <span>Back to projects</span>
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