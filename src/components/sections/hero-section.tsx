"use client";

import Image from "next/image";
import AnimationContainer from "../animated/animated-container";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "motion/react";

import { RiSpeakLine as SpeakIcon } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse items-center justify-between w-full py-12 lg:py-16 lg:flex-row">
      <AnimationContainer customClassName="flex flex-col items-center justify-between max-w-lg lg:items-start p-0 lg:pr-8">
        <h3 className="text-sm lg:text-xl text-white/80">
          Jai hind dosto <span className="text-white">🫡</span>
        </h3>
        <div className="py-2 lg:py-3">
          <h1 className=" text-xl font-bold text-white sm:text-5xl lg:text-6xl">
            Sahil Verma
          </h1>

          <p className="text-sm text-white/80">
            <SpeakIcon className="inline" /> saa-hil ver-maa
          </p>
        </div>
        <h3 className="text-base text-center lg:text-start lg:text-lg text-white/80">
          <span className="font-medium text-white">Fullstack developer </span>
          from India 🇮🇳
        </h3>
        <div className="flex items-center gap-2 py-4">
          <Link
            href="/contact"
            className={cn(buttonVariants(), "rounded-full")}
          >
            Contact Me
          </Link>
          <a
            href="#"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full"
            )}
          >
            Download Resume
          </a>
        </div>
      </AnimationContainer>

      <AnimationContainer customClassName="mb-8 relative lg:mb-0">
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
        <div className="absolute block w-44 h-44 rounded-full md:hidden top-0 left-0 right-1/2 -z-10 bg-violet-500/40 blur-[5rem]"></div>
      </AnimationContainer>
    </div>
  );
};

export default Hero;
