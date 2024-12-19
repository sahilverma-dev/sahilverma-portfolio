"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { LINKS, SOCIAL_LINKS } from "@/lib/constants";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import MobileNavigation from "./mobile-navigation";

const Navigation = () => {
  const [bigNav, setBigNav] = useState(false);

  const pathname = usePathname();

  const isBlogActive = pathname?.startsWith("/blog");

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
    <header
      className={cn(
        "z-[99999] fixed w-full top-0 left-0 transition-all",
        bigNav ? " bg-opacity-15 backdrop-blur" : "py-6 bg-transparent "
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
                        className="absolute inset-0 border-t rounded-full shadow-md backdrop-blur-lg border-neutral-800 bg-primary shadow-black/50 from-neutral-900/80 to-neutral-900 -z-10"
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
        {/* social links */}
        <div className="flex items-center gap-3">
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
          <ul className="hidden lg:flex items-center gap-4">
            {SOCIAL_LINKS.map((link, index) => (
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
              >
                <a
                  href={link.href}
                  className="text-muted-foreground text-lg hover:text-primary hover:scale-125 transition-all"
                >
                  <link.icon />
                </a>
              </motion.li>
            ))}
          </ul>

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
    </header>
  );
};

export default Navigation;
