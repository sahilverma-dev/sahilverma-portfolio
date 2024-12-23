"use client";
import { motion, useInView, Variants } from "motion/react";
import { useRef } from "react";

const signatureSvgVariants: Variants = {
  initial: {
    opacity: 0,
  },
  revealed: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const signaturePathVariants: Variants = {
  initial: {
    pathLength: 0,
    fill: "transparent",
  },
  revealed: {
    pathLength: 1,
    transition: {
      delay: 0.2,
      duration: 2.5,
      ease: "easeInOut",
    },
  },
};

const signatureCircleVariants: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  revealed: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 1.5,
    },
  },
};

const AnimatedSignature = () => {
  const ref = useRef(null);
  const isVisible = useInView(ref);

  return (
    <div ref={ref} className="opacity-70">
      <motion.svg
        initial="initial"
        animate={isVisible ? "revealed" : "initial"}
        variants={signatureSvgVariants}
        width="134"
        height="88"
        viewBox="0 0 134 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={signaturePathVariants}
          strokeLinecap="round"
          stroke="currentColor"
          strokeWidth={2}
          d="M31.5026 31.9999C27.9993 31.9999 23.5 33.4999 18.5026 35.9999C13.5052 38.4999 7.50262 43.9999 8.00262 50.4999C8.50262 55.9999 23.5001 53 33 56C43.2506 59.2371 18.9987 85.9999 7.49926 86.4999C-4.00017 86.9999 2.99876 75.4999 8.99913 69.4999C14.9995 63.4999 22.0013 58.9999 25.5 57.9999C28.9987 56.9999 35.9063 57.4999 37 62.9999C39.4187 63.9999 46.5439 59.852 47.5439 53.352C48.5439 46.852 46.5934 40.1117 40 49.9999C32.9987 60.5 35.9913 66.4491 40.5013 61.9999C45.0113 57.5507 47.1981 55.9999 47.1981 53.9999C47.1981 51.9999 46.0026 60.4999 48.0026 59.9999C50.0026 59.4999 55.5026 44.9999 55.5026 44.9999M55.5026 44.9999C55.5026 44.9999 59.0027 16.4999 61.0027 16.9999C63.0027 17.4999 55.5026 44.9999 55.5026 44.9999ZM55.5026 44.9999C55.5026 44.9999 56.5026 60.9999 56.5026 61.9999C56.5026 62.9999 53.9013 53.245 59.0027 44.4999C62.5027 38.4999 64.0026 43.9999 63.5026 48.4999C63.0575 52.5064 64.5026 53.4999 65.0026 52.9999C65.4026 52.5999 67.1693 47.4999 68.0026 44.9999C68.5026 42.1666 69.6026 36.4999 70.0026 36.4999C70.5026 36.4999 69.0026 43.4188 69.0026 44.9999C69.0026 47.4999 69.5026 49.4999 71.5026 49.9999C73.1026 50.3999 76.6693 40.6666 78.5026 35.9999C81.336 24.9999 88.1103 2.67361 84.0026 1.49997C80.5026 0.499941 78 17.9999 77.5026 23.5C77.0053 29 77.5053 46.4999 83.0026 46.9999C88.5 47.4999 99.5 39.0001 108 36.5C116.5 33.9999 133.503 33.4999 133.503 33.4999"
        />
        <motion.circle
          variants={signatureCircleVariants}
          cx="71"
          cy="30"
          r="2"
          fill="currentColor"
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedSignature;
