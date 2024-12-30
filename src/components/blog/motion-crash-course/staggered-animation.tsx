"use client";

import { motion } from "motion/react";

import React, { useState } from "react";
import ExampleWrapper from "../example-wrapper";
import ReplayButton from "../replay-button";

const StaggeredAnimation = () => {
  const [animateKey, setAnimateKey] = useState(0);

  const resetAnimation = () => {
    setAnimateKey((prevKey) => prevKey + 1);
  };

  return (
    <ExampleWrapper>
      <motion.div
        key={animateKey}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="space-y-4 w-[30%]"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="bg-blue-500 p-3 text-center rounded-full text-xs text-white"
          >
            Item {i + 1}
          </motion.div>
        ))}
      </motion.div>
      <ReplayButton onClick={resetAnimation} />
    </ExampleWrapper>
  );
};

export default StaggeredAnimation;
