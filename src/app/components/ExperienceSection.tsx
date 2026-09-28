"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Play, CheckCircle2, Sparkles } from "lucide-react";
import VideoModal from "./VideoModal";
import { fadeUpStrong, staggerContainer } from "../lib/animation";
import experiences from "../lib/data";

const ExperienceSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    poster?: string;
  } | null>(null);
  const [vqbTab, setVqbTab] = useState<"student" | "admin">("student");

  return (
    <section
      id="experience"
      className="w-full bg-on-surface text-accent-foreground py-20 sm:py-28 px-6 border-b border-[#dfd5c6] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1.5px] bg-[#8a7b68]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#6b6255] uppercase">
              EXPERIENCE & PROJECTS
            </span>
            <span className="w-8 h-[1.5px] bg-[#8a7b68]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-accent-foreground">
            Hands-On Experience
          </h2>
          <p className="text-[#4a4339] text-sm sm:text-base leading-relaxed">
            Real-world full-stack web applications, collaborative client
            software, and production deployments.
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="flex flex-col gap-14 sm:gap-20">
          {experiences.map((item, index) => {
            const isEven = index % 2 === 0;

            let currentImg = "";
            let currentVid = "";

            if (item.media.type === "single") {
              currentImg = item.media.image || "";
              currentVid = item.media.video || "";
            } else if (item.media.type === "tabs" && item.media.tabs) {
              const selected = item.media.tabs[vqbTab];
              currentImg = selected.image;
              currentVid = selected.video;
            }

            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#f7f2eb] border border-[#e2d8cb] p-6 sm:p-8 rounded-3xl shadow-xl shadow-black/5 hover:border-[#c7b299] transition-all duration-300"
              >
                {/* Media Preview Column (Directional Entrance Animation) */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`lg:col-span-6 flex flex-col gap-4 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Tab Switcher for VQB if applicable */}
                  {item.media.type === "tabs" && (
                    <motion.div
                      className="flex items-center gap-2"
                      variants={fadeUpStrong}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <button
                        onClick={() => setVqbTab("student")}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                          vqbTab === "student"
                            ? "bg-background text-foreground shadow-md"
                            : "bg-[#e2d7c8] text-[#4a4339] hover:bg-[#d6caa] "
                        }`}
                      >
                        🎓 Student Panel
                      </button>
                      <button
                        onClick={() => setVqbTab("admin")}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                          vqbTab === "admin"
                            ? "bg-background text-foreground shadow-md"
                            : "bg-[#e2d7c8] text-[#4a4339] hover:bg-[#d6caa] "
                        }`}
                      >
                        ⚙️ Admin Panel
                      </button>
                    </motion.div>
                  )}

                  {/* Browser Mockup Image Container */}
                  <div
                    onClick={() =>
                      setActiveVideo({ src: currentVid, poster: currentImg })
                    }
                    className="relative group aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#d8ccbc] bg-[#1c1917] cursor-pointer shadow-lg shadow-black/10"
                  >
                    {/* Mac window dots */}
                    <div className="absolute top-3 left-4 z-20 flex items-center gap-1.5 pointer-events-none">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    </div>

                    <Image
                      src={currentImg}
                      alt={item.title}
                      fill
                      quality={90}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-on-surface/95 text-accent-foreground flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-7 h-7 ml-1 fill-current text-accent-foreground" />
                      </div>
                    </div>

                    {/* Video Hint Badge */}
                    <div className="absolute bottom-3 right-3 z-20 bg-background/80 backdrop-blur-md text-foreground text-[11px] font-medium px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#c7b299]" />
                      <span>Click to watch demo video</span>
                    </div>
                  </div>
                </motion.div>

                {/* Content Column (Directional Entrance Animation) */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`lg:col-span-6 flex flex-col gap-4 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* Badge */}
                  <motion.div
                    className="flex flex-col gap-2 "
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="bg-background text-foreground text-[11px] font-semibold tracking-wider px-3 py-1 rounded-full uppercase">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <motion.h3
                        className="font-serif text-2xl sm:text-3xl font-bold text-accent-foreground"
                        variants={fadeUpStrong}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="text-xs sm:text-sm font-semibold text-[#7a6d5c]"
                        variants={fadeUpStrong}
                      >
                        {item.subtitle}
                      </motion.p>
                    </div>

                    {/* Description */}
                    <motion.p
                      className="text-xs sm:text-sm text-[#3d3730] leading-relaxed"
                      variants={fadeUpStrong}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.description}
                    </motion.p>

                    {/* Highlights Bullet List */}
                    <motion.ul
                      className="flex flex-col gap-2 pt-1 text-xs sm:text-sm text-[#332e28]"
                      variants={fadeUpStrong}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#8a7b68] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </motion.ul>

                    {/* Tech Stack Pills */}
                    <motion.div
                      className="flex flex-wrap gap-2 pt-2"
                      variants={fadeUpStrong}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-[#e2d6c6] text-[#2c2722] border border-[#d6c7b4] text-xs font-medium px-3 py-1 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex flex-wrap items-center gap-3 pt-3"
                      variants={fadeUpStrong}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-background text-foreground text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-[#332e28] transition-colors shadow-md"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-[#b8a996] text-accent-foreground text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-[#e2d6c6] transition-colors group"
                      >
                        {/* GitHub SVG Asset */}
                        <Image
                          src="/svg/github.svg"
                          alt="GitHub"
                          width={14}
                          height={14}
                          className="w-3.5 h-3.5 invert"
                        />
                        <span>GitHub</span>
                      </a>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Modal Integration */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal
            open={!!activeVideo}
            setIsOpen={() => setActiveVideo(null)}
            src={activeVideo.src}
            poster={activeVideo.poster}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSection;
