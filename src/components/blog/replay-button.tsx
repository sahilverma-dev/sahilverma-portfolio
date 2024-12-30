"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { buttonVariants } from "../ui/button";
import { RotateCcwIcon } from "lucide-react";

interface Props {
  onClick: () => void;
}

const ReplayButton: React.FC<Props> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn(
        buttonVariants({
          size: "icon",
          variant: "secondary",
        }),
        "absolute top-4 right-4 bg-white text-xs text-black rounded-full"
      )}
    >
      <RotateCcwIcon size={15} />
    </motion.button>
  );
};

export default ReplayButton;
