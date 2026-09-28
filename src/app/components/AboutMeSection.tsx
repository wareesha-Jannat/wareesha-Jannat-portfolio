"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Laptop, GraduationCap, Award } from "lucide-react";
import CodeWindow from "./CodeWindow";

const AboutMeSection: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full bg-on-surface text-accent-foreground py-16 sm:py-24 px-6 border-y border-[#dfd5c6]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Meta */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Header Tag */}
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#6b6255] uppercase">
                ABOUT ME
              </span>
              <span className="w-12 h-[1.5px] bg-[#a89b8a]" />
            </div>

            {/* Title */}
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-accent-foreground">
              More About Me
            </h2>

            {/* Description Paragraph */}
            <div className="space-y-4 text-[#3d3730] text-sm sm:text-base leading-relaxed">
              <p>
                My web development journey began during my Computer Science studies, where I discovered a passion for building practical, user-focused applications. I enjoy turning complex ideas into clean, maintainable code using modern technologies like React, Next.js, Node.js, Express.js, and MongoDB.
              </p>
              <p>
                I have built several full-stack applications—including a social media platform, a creator-support application, and an exam preparation question bank. These projects provided hands-on experience in user authentication, data management, responsive UI design, and API optimization. I approach development with continuous curiosity, always eager to take on new challenges and refine my craft.
              </p>
            </div>

            {/* Meta Info: Location & Availability */}
            <div className="flex flex-wrap items-center gap-6 pt-1 text-xs sm:text-sm font-medium text-[#4a4237]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8a7b68]" />
                <span>Pakistan</span>
              </div>
              <span className="text-[#a89b8a] hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <Laptop className="w-4 h-4 text-[#8a7b68]" />
                <span>Available for remote work</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Live Floating Code Window */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.7 },
              x: { duration: 0.7 },
              y: { duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <CodeWindow />
          </motion.div>

        </div>

        {/* Education & Academic Card Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -6, scale: 1.01 }}
          className="w-full bg-[#f6eee4] border border-[#e0d3c1] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-xl hover:shadow-black/10 hover:border-[#c7b299] transition-all duration-300 group cursor-pointer"
        >
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-xl bg-background text-foreground group-hover:bg-[#c7b299] group-hover:text-accent-foreground transition-colors duration-300 shrink-0 mt-1 shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7a6d5c] bg-[#e6dac9] px-2.5 py-0.5 rounded-full group-hover:bg-[#dfd0be] transition-colors">
                  Education
                </span>
                <span className="text-xs font-medium text-[#7a6d5c]">
                  Degree Completed
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-accent-foreground group-hover:text-[#000000] transition-colors">
                BS in Computer Science
              </h3>
              <p className="text-sm font-semibold text-[#544b40]">
                Virtual University of Pakistan
              </p>
              <p className="text-xs sm:text-sm text-[#615649] leading-relaxed max-w-2xl pt-1">
                Completed comprehensive coursework in Software Engineering, Web Development, Data Structures, and Database Management Systems.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0 pt-2 md:pt-0">
            <div className="flex items-center gap-2 bg-[#e8dbca] border border-[#d8c8b4] group-hover:border-[#c7b299] px-4 py-2.5 rounded-xl text-xs font-semibold text-[#2e2924] transition-all">
              <Award className="w-4 h-4 text-[#8a7b68]" />
              <span>Capstone: Virtual Question Bank</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMeSection;
