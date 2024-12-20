"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { buttonVariants } from "../ui/button";
import { AnimatePresence, HTMLMotionProps, motion } from "motion/react";
import { XIcon } from "lucide-react";
import Image from "next/image";

type BlogImageProps = React.ImgHTMLAttributes<
  HTMLImageElement | Omit<HTMLMotionProps<"img">, "ref">
>;

const BlogImage: React.FC<BlogImageProps> = ({
  src,
  alt = "",
  className = "",
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
      {src && (
        <motion.div
          layout
          layoutId="blog-image"
          className={`relative rounded-2xl my-4 overflow-hidden cursor-pointer`}
          onClick={() => setOpen(true)}
        >
          <Image
            src={src}
            alt={alt}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-300",
              className
            )}
            height={960}
            width={960}
          />
        </motion.div>
      )}
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
              <motion.img
                layout
                layoutId="blog-image"
                src={src}
                alt={alt}
                className={cn(
                  "w-full h-full object-cover transition-opacity duration-300 rounded-3xl",
                  className
                )}
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BlogImage;
