"use client";
import { motion } from "motion/react";

import MyPhoto from "@/components/my-photo";
import { SOCIAL_LINKS } from "@/lib/constants";

const Contact = () => {
  return (
    <div className="space-y-6 lg:space-y-12">
      <div className="flex gap-6 flex-col md:flex-row items-center">
        <MyPhoto />
        <div className="max-w-2xl mx-auto px-4 py-12 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Contact
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            You can reach out to me on my social media.
          </p>

          <ul className="hidden lg:flex items-center gap-6">
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
                  className="block p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transform hover:scale-110 transition-all duration-200"
                  aria-label={`Connect on ${link.title}`}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              </motion.li>
            ))}
          </ul>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            or you can email me at{" "}
            <a
              href="mailto:sahilverma.webdev@gmail.com"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline decoration-2 underline-offset-2 transition-colors duration-200"
            >
              sahilverma.webdev@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
