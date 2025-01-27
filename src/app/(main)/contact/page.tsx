"use client";
import { motion } from "motion/react";

import MyPhoto from "@/components/my-photo";
import { SOCIAL_LINKS } from "@/lib/constants";
import ContactForm from "@/components/forms/contact-form";

import AnimationContainer from "@/components/animated/animated-container";

const Contact = () => {
  return (
    <div className="flex flex-col md:mt-20 items-center justify-center md:flex-row gap-8 mg:gap-6">
      <div className="space-y-4 text-center md:text-left">
        <MyPhoto className="w-32 lg:w-52 mx-auto md:mx-0" />

        <div className="max-w-2xl mx-auto md:py-3 space-y-2 md:space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Say Hello 👋
          </h1>

          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            You can reach out to me on my social media.
          </p>

          <ul className="flex items-center justify-center md:justify-normal gap-2 md:gap-3">
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
                  target="_blank"
                  className="block p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transform hover:scale-110 transition-all duration-200"
                  aria-label={`Connect on ${link.title}`}
                >
                  <link.icon className="w-4 md:w-6 aspect-square" />
                </a>
              </motion.li>
            ))}
          </ul>

          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            or you can email me at{" "}
            <a
              href="mailto:sahilverma.webdev@gmail.com"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline decoration-2 underline-offset-2 transition-colors duration-200"
            >
              sahilverma.webdev@gmail.com
            </a>
          </p>
        </div>
      </div>
      <AnimationContainer className="w-full">
        <ContactForm />
      </AnimationContainer>
    </div>
  );
};
export default Contact;
