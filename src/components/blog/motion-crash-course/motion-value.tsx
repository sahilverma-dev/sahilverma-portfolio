"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";

import ExampleWrapper from "../example-wrapper";

const MotionValueAnimation = () => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [0, 300], [0, 360]);

  return (
    <ExampleWrapper>
      <div className="flex flex-col items-center gap-4">
        <h3 className="mt-0">Drag left to right</h3>
        <motion.div
          drag="x"
          style={{ x }}
          dragConstraints={{ left: 0, right: 300 }}
          className="h-32 rounded-2xl border-2 border-white aspect-square flex items-center justify-center cursor-grab"
        >
          <motion.img
            style={{ rotate }}
            src="https://upload.wikimedia.org/wikipedia/commons/7/72/Yellow_Fidget_Spinner.png"
            className="pointer-events-none"
          />
        </motion.div>
      </div>
    </ExampleWrapper>
  );
};

export default MotionValueAnimation;
