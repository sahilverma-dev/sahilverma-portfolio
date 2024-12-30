"use client";

import { useState } from "react";
import ReplayButton from "../replay-button";
import { AnimatePresence, motion } from "motion/react";

import ExampleWrapper from "../example-wrapper";
import { Button } from "@/components/ui/button";

const ExitAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <ExampleWrapper>
      <div className="text-center">
        <Button
          variant={"secondary"}
          className="rounded-full"
          onClick={() => setIsVisible(!isVisible)}
        >
          Toggle
        </Button>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              key="box"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="p-5"
            >
              I will fade in and out
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ExampleWrapper>
  );
};

export default ExitAnimation;
