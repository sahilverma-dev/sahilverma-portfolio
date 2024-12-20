"use client";

import { motion } from "motion/react";
import Image from "next/image";

const MyPhoto = () => {
  return (
    <motion.div
      layout
      layoutId="sahil-verma"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="border border-white/10 w-32 transition duration-300 ease-out overflow-hidden rounded-3xl lg:w-96 aspect-square"
    >
      <Image
        src="/images/sahil-verma.png"
        alt="Sahil Verma"
        height={2190}
        width={2190}
        sizes="30vw"
        priority
        className="object-cover object-top h-full w-full"
      />
    </motion.div>
  );
};
export default MyPhoto;
