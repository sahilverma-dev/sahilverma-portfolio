"use client";

import ExampleWrapper from "../example-wrapper";

import { motion } from "motion/react";

import { useState } from "react";
import ReplayButton from "../replay-button";

const AnimationVariants = () => {
  const [animateKey, setAnimateKey] = useState(0);

  const resetAnimation = () => {
    setAnimateKey((prevKey) => prevKey + 1);
  };

  return (
    <ExampleWrapper>
      <motion.div
        key={animateKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-blue-500 aspect-square rounded-md h-32 md:h-60 flex items-center justify-center text-white"
      >
        Animated Box
      </motion.div>

      <ReplayButton onClick={resetAnimation} />
    </ExampleWrapper>
  );
};

export default AnimationVariants;
