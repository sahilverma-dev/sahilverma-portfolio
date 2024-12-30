import { JSX } from "react";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import BlogImage from "./blog/image";
import CodeBlock from "./blog/code-block";
import Youtube from "./blog/youtube";
import CallOut from "./blog/call-out";
import SimpleFadeInAnimation from "./blog/motion-crash-course/simple-fade-in-animation";
import AnimationVariants from "./blog/motion-crash-course/animation-variants";
import HoverAnimation from "./blog/motion-crash-course/hover-animation";
import OverViewAnimation from "./blog/motion-crash-course/overview-animation";
import DraggableBox from "./blog/motion-crash-course/draggable-box";
import LayoutAnimation from "./blog/motion-crash-course/layout-animation";
import StaggeredAnimation from "./blog/motion-crash-course/staggered-animation";
import ExitAnimation from "./blog/motion-crash-course/exit-animation";
import LayoutIdAnimation from "./blog/motion-crash-course/layoutid-animation";
import MotionValueAnimation from "./blog/motion-crash-course/motion-value";

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
        CallOut,
        SimpleFadeInAnimation,
        AnimationVariants,
        HoverAnimation: HoverAnimation,
        OverViewAnimation: OverViewAnimation,
        DraggableBox: DraggableBox,
        LayoutAnimation: LayoutAnimation,
        LayoutIdAnimation: LayoutIdAnimation,
        StaggeredAnimation: StaggeredAnimation,
        ExitAnimation: ExitAnimation,
        MotionValueAnimation: MotionValueAnimation,
      }}
    />
  );
}
