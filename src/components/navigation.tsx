"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { LINKS } from "@/lib/constants";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import MobileNavigation from "./mobile-navigation";
import { Magnetic } from "./ui/magnetic";
import Image from "next/image";

const Navigation = () => {
  const [bigNav, setBigNav] = useState(false);

  const pathname = usePathname();

  const isBlogActive = pathname?.startsWith("/blog");

  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY && currentScrollY > 500) {
      setTimeout(() => {
        setIsVisible(false);
      }, 200);
    } else {
      setIsVisible(true);
    }

    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 70) {
        setBigNav(true);
      } else {
        setBigNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      style={{
        top: isVisible ? 0 : "-100%",
      }}
      className={cn(
        "z-[99999] fixed w-full left-0 transition-all",
        bigNav ? "bg-black/10 backdrop-blur" : "md:py-6 bg-transparent "
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between mx-auto w-full max-w-5xl px-4 md:px-8",
          bigNav ? "py-2" : "py-6"
        )}
      >
        {/* logo  */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            bounce: 0.3,
          }}
          className="flex"
        >
          <Link href="/">
            <Logo className="w-12 h-12" />
          </Link>
          {/* blank space */}
          <div className="w-28" />
        </motion.div>
        {/* navigation links */}
        <div className="relative">
          {/* desktop navigation */}
          <nav className=" hidden lg:flex z-[9999] top-[0.5rem] py-2 max-w-full sm:top-[1.5rem] sm:h-12 sm:py-0 h-12 scrollbar-hide">
            <ul className="flex items-center justify-center gap-x-4 w-[28rem] h-full">
              {LINKS?.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    bounce: 0.3,
                    duration: 0.5,
                    delay: 0.1 + index * 0.1,
                  }}
                  className="relative text-sm text-gray-400"
                >
                  <Link
                    href={link.href}
                    // onClick={() => setActiveLink(link.name)}
                    className={cn(
                      "flex items-center justify-center px-4 py-2 transition hover:text-white",
                      (pathname === link.href ||
                        (isBlogActive && link.name === "Blog")) &&
                        "text-white"
                    )}
                  >
                    {link.name}

                    {(pathname === link.href ||
                      (isBlogActive && link.name === "Blog")) && (
                      <motion.span
                        layout
                        layoutId="activeLink"
                        transition={{
                          type: "spring",
                          bounce: 0.3,
                        }}
                        className="absolute inset-0 rounded-full border-neutral-800 bg-primary  -z-10"
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
        {/* social links */}
        <div className="flex items-center md:gap-3">
          {/* <div className="hidden lg:flex items-center gap-5">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground text-lg hover:text-primary hover:scale-125 transition-all"
              >
                <link.icon />
              </a>
            ))}
          </div> */}

          {/* <Magnetic> */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              bounce: 0.3,
              duration: 0.5,
              delay: 0.2 + LINKS.length * 0.1,
            }}
            href="https://cal.com/sahilverma.dev"
            target="_blank"
            className="inline-flex items-center gap-2 border border-white/10 bg-white/10 backdrop-blur-sm hover:bg-primary hover:text-white text-xs px-3.5 py-1.5 md:px-4 md:py-2 rounded-full font-medium md:text-sm transition-all duration-300"
          >
            <span>Let&apos;s talk</span>
            <Image
              src="https://camo.githubusercontent.com/d552948e7884c41fde2d32b9221d79f0df2076c7d824aaab954ca93f53d95884/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966"
              height={50}
              width={50}
              alt="hello"
              className="h-4 w-4 md:h-6 md:w-6 aspect-square object-contain"
            />
          </motion.a>
          {/* </Magnetic> */}

          {/* mobile navigation */}
          <MobileNavigation />
        </div>
      </div>
      <div
        className={cn(
          "w-full h-[1px] bg-line transition-all",
          bigNav ? "opacity-20" : "opacity-0"
        )}
      />
    </motion.header>
  );
};

export default Navigation;
