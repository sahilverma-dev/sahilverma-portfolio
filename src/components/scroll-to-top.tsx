"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { Button } from "./ui/button";

const ScrollToTop = () => {
  const controls = useAnimation();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScrollVisibility = () => {
      setIsVisible(window.scrollY > 20);
    };

    const handleAnimation = () => {
      controls.start({ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 });
    };

    window.addEventListener("scroll", handleScrollVisibility);
    handleScrollVisibility(); // Check visibility on mount
    handleAnimation(); // Set initial animation state

    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
    };
  }, [isVisible, controls]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={controls}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "flex items-center justify-center fixed z-[9999] bottom-5 right-5",
          isVisible ? "visible" : "hidden"
        )}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={handleScroll}
          className="rounded-full"
        >
          <BsArrowUpShort className="w-6 h-6" />
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollToTop;
