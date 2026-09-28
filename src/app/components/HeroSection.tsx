"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-6 lg:py-12 px-6 max-w-7xl mx-auto overflow-hidden bg-background">
      
      {/* Decorative SVG Accent 1: Top-Left Organic Flourish & Sparkle */}
      <div className="absolute top-6 left-6 pointer-events-none opacity-25 hidden md:block">
        <svg width="140" height="140" viewBox="0 0 100 100" fill="none" stroke="#c7b299" strokeWidth="1.2">
          <path d="M 15 80 Q 45 15 85 75 T 140 70" />
          <path d="M 25 35 Q 60 70 85 25" />
          <circle cx="85" cy="25" r="2" fill="#c7b299" />
        </svg>
      </div>

      {/* Decorative SVG Accent 2: Floating 4-Point Gold Sparkle Star */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none hidden lg:block text-[#c7b299]"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </motion.div>

      {/* Decorative SVG Accent 3: Code Angle Brackets Accent */}
      <div className="absolute bottom-12 left-10 pointer-events-none opacity-15 hidden md:block text-[#c7b299]">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </div>

      {/* Decorative SVG Accent 4: Bottom-Right Abstract Swirl behind image */}
      <div className="absolute bottom-6 right-8 pointer-events-none opacity-20 hidden md:block">
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none" stroke="#c7b299" strokeWidth="1.2">
          <path d="M 10 90 C 30 10 70 10 90 90" />
          <path d="M 25 75 C 40 30 60 30 75 75" />
          <circle cx="50" cy="45" r="3" fill="#c7b299" />
        </svg>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center z-10">
        
        {/* Left Column: Bio & Text Content (Animates in from LEFT) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col justify-center gap-6 text-left"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[#c7b299] font-medium text-lg sm:text-xl tracking-wide">
                Hi, I&apos;m
              </span>
              <svg className="w-4 h-4 text-[#c7b299] opacity-80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Wareesha Jannat
            </h1>
            <p className="text-[#a69e94] text-xs sm:text-sm tracking-[0.25em] font-semibold uppercase pt-1">
              FULL STACK DEVELOPER
            </p>
          </div>

          <p className="text-[#c7b299]/90 text-sm sm:text-base leading-relaxed max-w-xl">
            I build modern, responsive and user-friendly web applications with a focus on clean code, efficient APIs and real-world problem solving.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Link
              href="#experience"
              className="inline-flex items-center gap-2.5 bg-on-surface text-accent-foreground font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#c7b299] hover:scale-105 transition-all duration-300 shadow-lg shadow-black/40"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="/Wareesha-Jannat-Resume.pdf"
              download
              className="inline-flex items-center gap-2.5 border border-[#423c34] bg-[#1f1c19] text-foreground font-semibold text-sm px-7 py-3.5 rounded-full hover:border-[#c7b299] hover:bg-[#2e2a25] transition-all duration-300"
            >
              <span>Download CV</span>
              <Download className="w-4 h-4 text-[#c7b299]" />
            </a>
          </div>

          {/* Social Links using SVG Images from /public/svg */}
          <div className="flex items-center gap-4 pt-3 text-[#a69e94]">
            {/* GitHub */}
            <a
              href="https://github.com/wareesha-Jannat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full border border-[#2e2a25] bg-[#1f1c19] hover:border-[#c7b299] hover:bg-[#c7b299] transition-all duration-200 group"
            >
              <Image
                src="/svg/github.svg"
                alt="GitHub"
                width={18}
                height={18}
                className="w-4 h-4 transition-transform group-hover:scale-110 group-hover:invert"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/wareesha-jannat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full border border-[#2e2a25] bg-[#1f1c19] hover:border-[#c7b299] hover:bg-[#c7b299] transition-all duration-200 group"
            >
              <Image
                src="/svg/linkedin.svg"
                alt="LinkedIn"
                width={18}
                height={18}
                className="w-4 h-4 transition-transform group-hover:scale-110 group-hover:invert"
              />
            </a>

            {/* Mail */}
            <a
              href="mailto:wareesha.jannat.dev@gmail.com"
              aria-label="Email"
              className="p-3 rounded-full border border-[#2e2a25] bg-[#1f1c19] hover:border-[#c7b299] hover:bg-[#c7b299] transition-all duration-200 group"
            >
              <Image
                src="/svg/email.svg"
                alt="Email"
                width={18}
                height={18}
                className="w-4 h-4 transition-transform group-hover:scale-110 group-hover:invert"
              />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Animated Live Floating Arched Portrait Frame (Animates in from RIGHT) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center lg:justify-end items-center relative"
        >
          {/* Breathing Motion Container */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="relative"
          >
            {/* Decorative Sparkle SVG */}
            <div className="absolute -top-4 -left-4 pointer-events-none text-[#c7b299] opacity-75 hidden sm:block">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>

            {/* Light Gold Arch Backdrop Container */}
            <div className="relative w-60 sm:w-68 lg:w-76 h-[320px] sm:h-[370px] lg:h-[400px] rounded-t-[160px] rounded-b-[32px] bg-[#c7b299] p-2.5 shadow-2xl shadow-black/80 group flex items-end justify-center overflow-hidden border border-[#d6c3ad]">
              
              {/* Soft inner glow gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#a8947b]/30 via-transparent to-transparent pointer-events-none rounded-t-[160px] rounded-b-[32px]" />

              {/* Upper portrait focus */}
              <div className="relative w-full h-full rounded-t-[152px] rounded-b-[26px] overflow-hidden">
                <Image
                  src="/profile-pic.webp"
                  alt="Wareesha Jannat"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-[center_12%] scale-110 transition-transform duration-500 group-hover:scale-115"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
