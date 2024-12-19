"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const AnimatedFlair = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    // only add lister if not mobile
    if (window.innerWidth >= 768) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <motion.div
        className="background-gradient"
        style={{
          maskImage: `
        radial-gradient(
    600px at ${position.x}px ${position.y}px,
    rgb(0, 0, 0) 20%,
    rgba(0, 0, 0, 0) 100%
  )
        `,
        }}
      />
      <motion.div
        className="flair"
        style={{
          maskImage: `
        radial-gradient(
    600px at ${position.x}px ${position.y}px,
    rgb(0, 0, 0) 20%,
    rgba(0, 0, 0, 0) 100%
  )`,
        }}
      />
    </>
  );
};
export default AnimatedFlair;
