"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface LightBoxImageProps {
  open: boolean;
  setIsOpen: (value: boolean) => void;
  src: string;
}

const LightBoxImage = ({ setIsOpen, src, open }: LightBoxImageProps) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
          onClick={() => setIsOpen(false)}
        >
          ❌
        </button>

        {/* Image wrapper */}
        <motion.div
          className="relative w-full max-w-6xl aspect-9/4 px-4"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          onClick={(e) => e.stopPropagation()} // prevent close on image click
        >
          <Image
            src={src}
            alt="Project screenshot fullscreen"
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default LightBoxImage;
