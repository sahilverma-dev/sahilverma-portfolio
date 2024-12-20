"use client";

import { LINKS } from "@/lib/constants";
import { AnimatePresence, motion } from "motion/react";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  const isBlogActive = pathname?.startsWith("/blog");

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleBodyOverflow = () => {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    };

    handleBodyOverflow();

    // Add event listeners
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [isOpen]);

  return (
    <nav className=" lg:hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        layout
        layoutId="hamburger"
        transition={{
          type: "spring",
          bounce: 0.3,
        }}
        className={cn(isOpen && "fixed z-[9999] top-4 right-4")}
      >
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color="#fff"
          direction="left"
          distance="md"
          size={20}
          rounded
        />
      </motion.div>

      <AnimatePresence presenceAffectsLayout mode="wait">
        {isOpen && (
          <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{
              type: "spring",
              bounce: 0.15,
              duration: 0.5,
            }}
            className="fixed z-[99] rounded-lg w-full h-screen inset-0 backdrop-blur-md bg-black/70 "
          >
            <ul className="flex flex-col items-start w-full px-6 py-3 pt-16 space-y-3">
              {LINKS?.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    type: "spring",
                    bounce: 0.15,
                    duration: 0.2,
                    delay: 0.1 * index,
                  }}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "w-full px-4 py-2 text-lg font-normal text-white transition transform rounded-md cursor-pointer text-start active:scale-95 hover:bg-white/10 active:opacity-80",
                    (link.href === pathname || isBlogActive) &&
                      "border-b border-primary rounded-none text-primary font-semibold"
                  )}
                >
                  <Link href={link.href} className="w-full text-start">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNavigation;
