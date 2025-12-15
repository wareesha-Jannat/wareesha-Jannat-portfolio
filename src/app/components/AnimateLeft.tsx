"use client";
import React from "react";
import { motion } from "framer-motion";
import { once } from "events";

interface AnimateLeftProps {
  children: React.ReactNode;
  delay?: number;
  projects?: boolean;
  className?: string;
}

const AnimateLeft = ({
  children,
  delay = 0,
  projects,
  className= ""
}: AnimateLeftProps) => {
  if (projects) {
    return (
      <motion.div
        className={className}
        initial={{ x: 100, opacity: 0 }}
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
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
      >
        {children}
      </motion.div>
    );
  }
};

export default AnimateLeft;
