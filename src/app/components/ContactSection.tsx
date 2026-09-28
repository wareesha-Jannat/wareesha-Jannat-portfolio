"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Download,
  ArrowUpRight,
  MapPin,
  Laptop,
  Sparkles,
} from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative w-full bg-background text-foreground py-20 sm:py-28 px-6 overflow-hidden border-b border-[#24201c]"
    >
      {/* Background Decorative Accent SVG Line Art */}
      <div className="absolute -top-10 right-10 pointer-events-none opacity-15 hidden md:block">
        <svg
          width="220"
          height="220"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#c7b299"
          strokeWidth="1"
        >
          <path d="M 10 90 C 30 10 70 10 90 90" />
          <path d="M 25 75 C 40 30 60 30 75 75" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-10 z-10 relative">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#1f1c19] border border-[#2e2a25] text-[#c7b299] text-xs font-semibold px-4 py-2 rounded-full"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Available for New Opportunities</span>
        </motion.div>

        {/* Heading & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 max-w-3xl"
        >
          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.15]">
            Let&apos;s build something{" "}
            <span className="text-[#c7b299] italic">remarkable</span> together.
          </h2>
          <p className="text-[#a69e94] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto pt-2">
            Whether you have an exciting project idea, a full-time role, or just
            want to discuss modern web development—my inbox is always open.
          </p>
        </motion.div>

        {/* Direct Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          {/* Primary Send Email Button */}
          <a
            href="mailto:Wjannat309@gmail.com"
            className="inline-flex items-center gap-3 bg-on-surface text-accent-foreground font-bold text-sm sm:text-base px-8 py-4 rounded-full hover:bg-[#c7b299] hover:scale-105 transition-all duration-300 shadow-xl shadow-black/50"
          >
            <Mail className="w-4 h-4" />
            <span>Send Me an Email</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Secondary Download Resume Button */}
          <a
            href="/Wareesha-Jannat-Resume.pdf"
            download
            className="inline-flex items-center gap-3 border border-[#423c34] bg-[#1f1c19] text-foreground font-semibold text-sm sm:text-base px-7 py-4 rounded-full hover:border-[#c7b299] hover:bg-[#2e2a25] transition-all duration-300"
          >
            <Download className="w-4 h-4 text-[#c7b299]" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Social Links Cards using /public/svg */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl pt-6"
        >
          {/* Email Card */}
          <a
            href="mailto:Wjannat309@gmail.com"
            className="flex flex-col items-center justify-center p-5 bg-[#1f1c19] border border-[#2e2a25] rounded-2xl hover:border-[#c7b299] hover:bg-[#282420] transition-all group"
          >
            <Image
              src="/svg/email.svg"
              alt="Email"
              width={20}
              height={20}
              className="w-5 h-5 mb-2 group-hover:scale-110 transition-transform "
            />
            <span className="text-xs text-[#a69e94] font-medium">
              Direct Email
            </span>
            <span className="text-xs font-semibold text-foreground pt-1 truncate max-w-full">
              Wjannat309@gmail.com
            </span>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/wareesha-Jannat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-5 bg-[#1f1c19] border border-[#2e2a25] rounded-2xl hover:border-[#c7b299] hover:bg-[#282420] transition-all group"
          >
            <Image
              src="/svg/github.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="w-5 h-5 mb-2 group-hover:scale-110 transition-transform"
            />
            <span className="text-xs text-[#a69e94] font-medium">GitHub</span>
            <span className="text-xs font-semibold text-foreground pt-1">
              wareesha-Jannat
            </span>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/wareesha-jannat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-5 bg-[#1f1c19] border border-[#2e2a25] rounded-2xl hover:border-[#c7b299] hover:bg-[#282420] transition-all group"
          >
            <Image
              src="/svg/linkedin.svg"
              alt="LinkedIn"
              width={20}
              height={20}
              className="w-5 h-5 mb-2 group-hover:scale-110 transition-transform"
            />
            <span className="text-xs text-[#a69e94] font-medium">LinkedIn</span>
            <span className="text-xs font-semibold text-foreground pt-1">
              wareesha-jannat
            </span>
          </a>
        </motion.div>

        {/* Location & Status Footer Meta */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-medium text-[#a69e94]">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#c7b299]" />
            <span>Pakistan</span>
          </div>
          <span className="text-[#3a342d]">•</span>
          <div className="flex items-center gap-2">
            <Laptop className="w-3.5 h-3.5 text-[#c7b299]" />
            <span>Available for Full-Time & Remote Roles</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
