"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import ExampleWrapper from "../example-wrapper";

import ReplayButton from "../replay-button";

const OverViewAnimation = () => {
  const [x, setX] = useState([0]);
  const [y, setY] = useState([0]);
  const [opacity, setOpacity] = useState([100]);
  const [rotate, setRotate] = useState([0]);

  const reset = () => {
    setX([0]);
    setY([0]);
    setOpacity([100]);
    setRotate([0]);
  };

  return (
    <ExampleWrapper>
      <div className="w-full md:max-w-lg mx-auto flex flex-col md:flex-row items-center justify-between gap-20 md:gap-2">
        <motion.div
          className="h-32 aspect-square rounded-md border-2 border-dashed border-white flex items-center justify-center"
          animate={{ x, y, rotate, opacity: opacity[0] / 100 }}
          transition={{ type: "spring" }}
        >
          Yo!
        </motion.div>

        <div className="space-y-4 w-full md:w-1/2">
          <div className="flex items-center gap-3 text-xs">
            <label>X</label>
            <Slider
              value={x}
              className="w-full"
              min={-100}
              max={100}
              onValueChange={setX}
            />
            <span>{x}</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <label>Y</label>
            <Slider
              value={y}
              className="w-full"
              min={-100}
              max={100}
              onValueChange={setY}
            />
            <span>{y}</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <label>Rotate</label>
            <Slider
              value={rotate}
              min={-180}
              max={180}
              className="w-full"
              onValueChange={setRotate}
            />
            <span>{rotate}</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <label>Opacify</label>
            <Slider
              value={opacity}
              min={0}
              max={100}
              className="w-full"
              onValueChange={setOpacity}
            />
            <span>{(opacity[0] / 100).toPrecision(2)}</span>
          </div>
        </div>
      </div>
      <ReplayButton onClick={reset} />
    </ExampleWrapper>
  );
};

export default OverViewAnimation;
