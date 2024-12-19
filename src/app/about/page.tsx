"use client";
import { motion } from "motion/react";

import Image from "next/image";

const About = () => {
  return (
    <div>
      <motion.div layout layoutId="sahil-verma">
        <Image
          src="/images/sahil-verma.png"
          alt="Sahil Verma"
          height={2190}
          width={2190}
          sizes="30vw"
          priority
          className="object-cover object-top w-32  transition duration-300 ease-out rounded-3xl lg:w-96 aspect-square"
        />
      </motion.div>
    </div>
  );
};

export default About;
