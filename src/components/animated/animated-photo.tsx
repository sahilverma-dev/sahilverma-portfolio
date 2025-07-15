"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";

// todo add enter and exit animation without animating during page change

interface Props {
  className?: string;
}

const AnimatedPhoto: React.FC<Props> = ({ className }) => {
  return (
    <motion.div
      layout
      layoutId="photo"
      className={cn(
        "border border-white/10 overflow-hidden rounded-3xl w-30 lg:w-96 aspect-square",
        className
      )}
    >
      <Image
        src="/images/image.png"
        alt="Sahil Verma"
        height={900}
        width={900}
        priority
        className="object-cover object-top h-full w-full"
      />
    </motion.div>
  );
};
export default AnimatedPhoto;
