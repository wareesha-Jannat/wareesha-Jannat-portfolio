"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { fadeUpStrong, staggerContainer, imageReveal } from "../lib/animation";

import AnimateLeft from "../components/AnimateLeft";
import AnimateRight from "../components/AnimateRight";
import LightBoxImage from "../components/LightBoxImage";

const CollaborativeProject = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex flex-1 flex-col min-[950px]:flex-row items-center justify-center gap-10 md:gap-15">
      {/* LEFT IMAGE SECTION */}
      <AnimateLeft projects={true}>
        <motion.div
          className="relative aspect-1350/620 w-full max-w-[650px] min-w-[300px] md:min-w-[400px] border-4 border-surface rounded-[5px] cursor-pointer"
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={"/nible-tech-project.PNG"}
            alt="Collaborative Business Project"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="(max-width: 768px) 100vw , 50vw"
          />
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

      {/* LIGHTBOX */}
      {isOpen && (
        <LightBoxImage
          open={isOpen}
          setIsOpen={setIsOpen}
          src={"/nible-tech-project.PNG"}
        />
      )}
    </section>
  );
};

export default CollaborativeProject;
