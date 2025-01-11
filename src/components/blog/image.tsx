"use client";

import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { X as XIcon } from "lucide-react";

import Image from "next/image";

interface BlogImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  className?: string;
}

const BlogImage: React.FC<BlogImageProps> = ({
  src,
  alt = "",
  className = "",
}) => {
  const [open, setOpen] = useState(false);

  const layoutId = useMemo(() => crypto.randomUUID(), []);

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

  if (!src) return null;

  return (
    <>
      <motion.div
        layout
        layoutId={layoutId}
        className="relative max-h-[600px] rounded-2xl overflow-hidden cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          className={cn(
            "w-full h-auto object-contain transition-opacity duration-300 !m-0",
            className
          )}
          height={960}
          width={960}
        />
      </motion.div>
      <motion.p
        layout
        layoutId={`${layoutId}-p`}
        className="text-center text-xs text-gray-400 mt-2 mb-8"
      >
        {alt}
      </motion.p>

      <AnimatePresence mode="wait">
        {open && (
          <div className="fixed inset-0 z-[999999]">
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

            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full max-w-5xl p-4 md:p-0">
              <motion.div
                layout
                layoutId={layoutId}
                className="w-full h-full flex items-center justify-center"
              >
                <Image
                  src={src}
                  alt={alt}
                  className={cn(
                    "w-auto max-w-full h-auto max-h-[80vh] object-contain transition-opacity duration-300 rounded-3xl !m-0",
                    className
                  )}
                  width={1920}
                  height={1080}
                />
              </motion.div>

              <motion.p
                layout
                layoutId={`${layoutId}-p`}
                className="text-center text-xs text-gray-400 mt-2 mb-8"
              >
                {alt}
              </motion.p>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BlogImage;
