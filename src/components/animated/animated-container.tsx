"use client";

import { motion } from "motion/react";

interface AnimationContainerProps {
  children: React.ReactNode;
  className?: string;
  customDelay?: number;
  invert?: boolean;
  once?: boolean;
}

const AnimationContainer = ({
  children,
  className,
  customDelay = 0.3,
  invert = false,
  once = true,
}: AnimationContainerProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: invert ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{
        delay: customDelay,
        duration: 0.2,
        ease: "easeInOut",
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
