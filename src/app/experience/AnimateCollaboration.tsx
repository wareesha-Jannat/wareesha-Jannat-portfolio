"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { fadeUpStrong, staggerContainer, imageReveal } from "../lib/animation";

import AnimateLeft from "../components/AnimateLeft";
import AnimateRight from "../components/AnimateRight";
import VideoModal from "../components/VideoModal";

const CollaborativeProject = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex flex-1 flex-col min-[950px]:flex-row items-center justify-center gap-10 md:gap-15">
      {/* LEFT IMAGE SECTION */}
      <AnimateLeft projects={true}>
        <motion.div
          className="group relative aspect-1350/620 w-full max-w-[650px] min-w-[300px] md:min-w-[400px] border-4 border-surface rounded-[5px] overflow-hidden cursor-pointer"
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onClick={() => setIsOpen(true)}
        >
          <Image
            src="/images/nible-tech-project.PNG"
            alt="Nible Tech Preview"
            fill
            quality={90}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 786px) 100vw, 50vw"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition duration-300" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-18 h-18 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="w-8 h-8 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </AnimateLeft>

      {/* RIGHT TEXT SECTION */}
      <AnimateRight projects={true}>
        <motion.div
          className="flex flex-col gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 className="text-2xl font-bold" variants={fadeUpStrong}>
            Collaborative Business Web Application
          </motion.h3>

          <motion.h4
            className="text-[18px] font-semibold"
            variants={fadeUpStrong}
          >
            Full Stack Development Collaboration
          </motion.h4>

          <motion.p className="text-[14px]" variants={fadeUpStrong}>
            Collaborated on the development of a business web application
            alongside a Senior Web Application Developer using Next.js and
            MongoDB (Mongoose). The project included a dynamic admin dashboard,
            content management features, and production deployment workflows.
          </motion.p>

          <motion.ul
            className="list-disc pl-5 text-[14px] flex flex-col gap-2"
            variants={fadeUpStrong}
          >
            <li>
              Independently implemented core frontend and backend functionality
              including admin dashboard and dynamic management features
            </li>

            <li>
              Developed responsive UI components, REST API integrations, and
              database-driven workflows
            </li>

            <li>
              Deployed and managed the application on Hostinger VPS using PM2
            </li>

            <li>
              Worked on scalable application structure, maintainable code
              practices, and production-ready implementation
            </li>
          </motion.ul>

          <motion.h4 className="text-[18px]" variants={fadeUpStrong}>
            <b>Tech Stack</b> : Next.js + MongoDB (Mongoose) + REST APIs +
            Tailwind CSS + VPS (PM2)
          </motion.h4>

          <motion.div variants={fadeUpStrong} className="flex gap-4 mt-3">
            <button className="bg-white text-[14px] text-foreground font-bold px-5 py-3 border border-gray-300 rounded-xl hover:bg-foreground hover:text-white transition">
              <Link href={"https://nibletech.com"} target="_blank">
                Live Demo
              </Link>
            </button>

            <button className="bg-surface text-[14px] text-on-surface font-bold px-5 py-3 border border-gray-300 rounded-xl hover:bg-white hover:text-foreground transition">
              <Link
                href={"https://github.com/wareesha-Jannat/nible-tech"}
                target="_blank"
              >
                GitHub
              </Link>
            </button>
          </motion.div>
        </motion.div>
      </AnimateRight>

      {/* Video Modal */}
      {isOpen && (
        <VideoModal
          open={isOpen}
          setIsOpen={setIsOpen}
          src={"/videos/nible-tech-video.mp4"}
          poster={"/images/nible-tech-project.PNG"}
        />
      )}
    </section>
  );
};

export default CollaborativeProject;
