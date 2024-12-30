"use client";
import { motion } from "framer-motion";

import ExampleWrapper from "../example-wrapper";
import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const LayoutAnimation = () => {
  const [show, setShow] = useState(true);
  const [isLayoutInUse, setIsLayoutInUse] = useState(true);

  return (
    <ExampleWrapper>
      <div className="space-y-4 text-center">
        {show && (
          <div className="h-32 aspect-square bg-red-500 text-white flex items-center justify-center">
            Box
          </div>
        )}
        <motion.div layout={isLayoutInUse}>
          <Button
            variant={"secondary"}
            className="rounded-full"
            onClick={() => {
              setShow((state) => !state);
            }}
          >
            {show ? "Hide" : "Show"}
          </Button>
        </motion.div>

        <div className="flex mt-10 justify-center items-center space-x-2">
          <Checkbox
            id="layout"
            checked={isLayoutInUse}
            onCheckedChange={(e: boolean) => {
              console.log(e);
              setIsLayoutInUse(e);
            }}
          />
          <label
            htmlFor="layout"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Use layout
          </label>
        </div>
      </div>
    </ExampleWrapper>
  );
};

export default LayoutAnimation;
