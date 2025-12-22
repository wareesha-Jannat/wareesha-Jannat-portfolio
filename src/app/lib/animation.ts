import { Variants } from "framer-motion";

export const fadeUpStrong: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    transform: "scale(0.94)",
  },
  visible: {
    opacity: 1,
    transform: "scale(1)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};
