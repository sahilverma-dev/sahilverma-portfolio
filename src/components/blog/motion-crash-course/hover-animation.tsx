"use client";
import { motion } from "framer-motion";
import ExampleWrapper from "../example-wrapper";

const HoverAnimation = () => {
  return (
    <ExampleWrapper>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        whileFocus={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-red-500 aspect-square rounded-md h-32 md:h-60 flex items-center justify-center text-white cursor-pointer"
      >
        Hover & click me!
      </motion.div>
    </ExampleWrapper>
  );
};

export default HoverAnimation;
