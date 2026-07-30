"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface VideoModalProps {
  open: boolean;
  setIsOpen: (value: boolean) => void;
  src: string;
  poster?: string;
}

const VideoModal = ({ setIsOpen, src, open, poster }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

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

  useEffect(() => {
    if (!open && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [open]);

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
        {/* video container */}
        <motion.div
          className="w-full max-w-6xl overflow-hidden rounded-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <video
            ref={videoRef}
            controls
            playsInline
            preload="metadata"
            poster={poster}
            className="w-full h-auto rounded-xl"
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </motion.div>
    </>
  );
};

export default VideoModal;
