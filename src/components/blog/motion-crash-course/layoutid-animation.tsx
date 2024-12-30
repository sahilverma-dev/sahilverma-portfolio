"use client";
import { motion } from "framer-motion";

import ExampleWrapper from "../example-wrapper";
import { useState } from "react";
import ReplayButton from "../replay-button";
import { Checkbox } from "@/components/ui/checkbox";

const defaultValue = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Strawberry",
  "Pineapple",
];

const LayoutIdAnimation = () => {
  const [fruits, setFruits] = useState(defaultValue);
  const [useLayout, setUseLayout] = useState(true);

  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);

  const resetAnimation = () => {
    setFruits(defaultValue);
    setSelectedFruits([]);
  };

  return (
    <ExampleWrapper>
      <div className="mb-10 w-full max-w-xl mx-auto">
        <div className="flex gap-4 justify-between">
          <div className="w-full">
            <h2>Fruits</h2>
            <div className="w-full space-y-4">
              {fruits.map((fruit) => (
                <motion.div
                  key={fruit}
                  layout={useLayout}
                  layoutId={useLayout ? fruit : undefined}
                  className="bg-blue-500 p-3 text-center rounded-full text-xs text-white cursor-pointer"
                  onClick={() => {
                    setFruits((prev) => prev.filter((i) => i !== fruit));
                    setSelectedFruits((prev) => [...prev, fruit]);
                  }}
                >
                  {fruit}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <h2>Selected Fruits</h2>
            <div className="w-full space-y-4">
              {selectedFruits.map((fruit) => (
                <motion.div
                  key={fruit}
                  layout={useLayout}
                  layoutId={useLayout ? fruit : undefined}
                  className="bg-blue-500 p-3 text-center rounded-full text-xs text-white cursor-pointer"
                  onClick={() => {
                    setSelectedFruits((prev) =>
                      prev.filter((i) => i !== fruit)
                    );
                    setFruits((prev) => [...prev, fruit]);
                  }}
                >
                  {fruit}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <ReplayButton onClick={resetAnimation} />
        <div className="flex mt-10 justify-center items-center space-x-2">
          <Checkbox
            id="layout-id"
            checked={useLayout}
            onCheckedChange={(e: boolean) => setUseLayout(e)}
          />
          <label
            htmlFor="layout-id"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Use layout
          </label>
        </div>
      </div>
    </ExampleWrapper>
  );
};

export default LayoutIdAnimation;
