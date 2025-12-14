"use client";
import React from "react";
import { motion } from "framer-motion";

interface AnimateSectionProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimateSection = ({ children, delay = 0 }: AnimateSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateSection;
