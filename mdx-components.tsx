import CodeBlock from "@/components/blog/code-block";
import BlogImage from "@/components/blog/image";
import { cn } from "@/lib/utils";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          "scroll-m-20 text-4xl font-extrabold tracking-tig",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          "mt-10 scroll-m-20 border-b border-white/10 pb-2 text-3xl font-semibold tracking-tight transition-col",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn("mt-8 scroll-m-20 text-2xl font-semibold ", className)}
        {...props}
      />
    ),

    // Paragraph
    p: ({ className, ...props }) => (
      <p
        className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
        {...props}
      />
    ),

    // Link
    a: ({ className, ...props }) => (
      <a
        className={cn("font-medium text-primary underline unde", className)}
        {...props}
      />
    ),

    // Blockquote
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "py-4 my-2 border-l-2 border-primary pl-6 italic",
          className
        )}
        {...props}
      />
    ),

    // Lists
    ul: ({ className, ...props }) => (
      <ul
        className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
        {...props}
      />
    ),

    // Table
    table: ({ className, ...props }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className={cn("w-full", className)} {...props} />
      </div>
    ),
    tr: ({ className, ...props }) => (
      <tr
        className={cn("m-0 border-t border-white/10 p-0", className)}
        {...props}
      />
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          "border border-white/10 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=righ",
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn(
          "border border-white/10 px-4 py-2 text-left [&[align=center]]:text-center [&[align=righ",
          className
        )}
        {...props}
      />
    ),

    img: ({ ...props }) => <BlogImage {...props} />,
    code: ({ children, ...props }) => (
      <span className="bg-white/10 py-1 px-2 text-sm rounded-md" {...props}>
        {children}
      </span>
    ),
    pre: CodeBlock,
    ...components,
  };
}
