"use client";

import { motion } from "motion/react";
import ExampleWrapper from "../example-wrapper";
import ReplayButton from "../replay-button";
import { useState } from "react";

const DraggableBox = () => {
  const [animateKey, setAnimateKey] = useState(0);

  const resetAnimation = () => {
    setAnimateKey((prevKey) => prevKey + 1);
  };

  return (
    <ExampleWrapper>
      <motion.div
        drag
        key={animateKey}
        className="bg-red-500 aspect-square rounded-md h-32 flex items-center justify-center text-white cursor-grab"
      >
        Drag me!
      </motion.div>

      <ReplayButton onClick={resetAnimation} />
    </ExampleWrapper>
  );
};

export default DraggableBox;
