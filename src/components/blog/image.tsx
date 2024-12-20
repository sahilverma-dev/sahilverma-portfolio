/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { buttonVariants } from "../ui/button";
import { AnimatePresence, HTMLMotionProps, motion } from "motion/react";
import { XIcon } from "lucide-react";

type BlogImageProps = React.ImgHTMLAttributes<
  HTMLImageElement | Omit<HTMLMotionProps<"img">, "ref">
>;
// type BlogImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

const BlogImage: React.FC<BlogImageProps> = ({
  src,
  alt = "",
  className = "",
  ...props
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <motion.div
        layout
        layoutId="blog-image"
        className={`relative rounded-2xl my-4 overflow-hidden cursor-pointer`}
        onClick={() => setOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300",
            className
          )}
          {...props}
        />
      </motion.div>
      <AnimatePresence mode="wait">
        {open && (
          <div className="fixed inset-0 z-[99999999]">
            <motion.button
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              className={cn(
                buttonVariants({ size: "icon" }),
                "absolute top-4 right-4 z-10 rounded-full"
              )}
              onClick={() => setOpen(false)}
            >
              <XIcon />
            </motion.button>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 h-full bg-black/50 backdrop-blur cursor-pointer"
              onClick={() => setOpen(false)}
            />
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full max-w-5xl p-4">
              {/* @ts-ignore */}
              <motion.img
                layout
                layoutId="blog-image"
                src={src}
                alt={alt}
                className={cn(
                  "w-full h-full object-cover transition-opacity duration-300 rounded-3xl",
                  className
                )}
                {...props}
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BlogImage;
