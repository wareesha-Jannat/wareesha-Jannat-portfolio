"use client";
import React from "react";
import { motion } from "framer-motion";

interface AnimateRightProps {
  children: React.ReactNode;
  delay?: number;
  projects?: boolean;
  className?: string;
}

const AnimateRight = ({
  children,
  delay = 0,
  projects = false,
  className = "",
}: AnimateRightProps) => {
  if (projects) {
    return (
      <motion.div
        className={className}
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
      >
        {children}
      </motion.div>
    );
  } else {
    return (
      <motion.div
        className={className}
        initial={{ x: -70, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
      >
        {children}
      </motion.div>
    );
  }
};

export default AnimateRight;
