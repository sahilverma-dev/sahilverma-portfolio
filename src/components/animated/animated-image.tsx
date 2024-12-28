"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<ImageProps> {
  src: string;
  alt: string;
  layout?: boolean;
  layoutId?: string;
  className?: string;
  height?: number;
  width?: number;
  loading?: "lazy" | "eager";
  priority?: boolean;
  sizes?: string;
  decoding?: "async" | "auto";
}

const AnimatedImage: React.FC<Props> = ({
  src,
  alt,
  layout,
  layoutId,
  className,
  height,
  width,
  priority,
  decoding,
  sizes,
}) => {
  return (
    <motion.div
      layoutId={layoutId}
      layout={layout}
      className={cn("rounded-xl overflow-hidden", className)}
    >
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        sizes={sizes}
        priority={priority}
        decoding={decoding}
        className="object-cover h-full w-full"
      />
    </motion.div>
  );
};

export default AnimatedImage;
