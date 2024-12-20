import { JSX } from "react";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import BlogImage from "./blog/image";
import CodeBlock from "./blog/code-block";
import Youtube from "./blog/youtube";

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{
        img: BlogImage,
        code: CodeBlock,
        Youtube,
      }}
    />
  );
}
