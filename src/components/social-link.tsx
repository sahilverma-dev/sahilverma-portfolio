"use client";

import { motion } from "framer-motion";
import { ElementType } from "react";

interface SocialLinkProps {
  href: string;
  icon: ElementType;
  label: string;
  index: number;
  newTab?: boolean;
}

export function SocialLink({
  href,
  icon: Icon,
  label,
  index,
  newTab,
}: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="w-full px-6 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center space-x-4 hover:bg-gray-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon className="w-6 h-6 text-gray-700" />
      <span className="text-gray-800 font-medium">{label}</span>
    </motion.a>
  );
}
