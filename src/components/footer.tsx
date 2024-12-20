"use client";

import Link from "next/link";
// import { AiOutlineCopyrightCircle as CopyIcon } from "react-icons/ai";

import { SOCIAL_LINKS } from "@/lib/constants";
import Logo from "./logo";
import AnimationContainer from "./animated/animated-container";

const Footer = () => {
  // const date = new Date();
  return (
    <AnimationContainer>
      <footer className="w-full bg-background border-t border-white/10">
        <div className="max-w-5xl xl:max-w-5xl mx-auto space-y-2 py-10 flex flex-col gap-4 md:flex-row justify-between items-center">
          <div className="md:w-[337px]">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-8 object-contain md:object-left" />
              <h1 className="text-2xl font-bold text-white">Sahil Verma</h1>
            </Link>
          </div>
          <div className="flex gap-6 items-center text-xl">
            {SOCIAL_LINKS?.map((social, index) => (
              <a
                key={index}
                href={social?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white md:h-12  md:w-12  h-10 w-10 text-sm md:text-base aspect-square flex items-center justify-center hover:border-orange-500 rounded-full border md:border-2 transition-all hover:text-orange-500 hover:scale-110"
                title={`Follow me on ${social?.title}`}
              >
                <social.icon />
              </a>
            ))}
          </div>
          <div className="md:text-sm text-xs w-full md:w-auto text-center">
            Made with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/sahil-verma-970b9920a/"
              rel="noreferrer"
              target="_blank"
              className="font-semibold text-orange-500"
            >
              Sahil Verma
            </a>
            .
          </div>
        </div>
      </footer>
    </AnimationContainer>
  );
};

export default Footer;
