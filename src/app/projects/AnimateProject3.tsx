"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { fadeUpStrong, imageReveal, staggerContainer } from "../lib/animation";
import AnimateLeft from "../components/AnimateLeft";
import AnimateRight from "../components/AnimateRight";
import LightBoxImage from "../components/LightBoxImage";
const AnimateProject3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex flex-1 flex-col md:flex-row items-center justify-center gap-10 md:gap-15 ">
      <AnimateLeft projects={true} className="order-2 md:order-1">
        <motion.div
          className="flex flex-col gap-3 flex-1 "
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 className="text-2xl font-bold" variants={fadeUpStrong}>
            Echo
          </motion.h3>
          <motion.h4
            className="text-[18px] font-semibold"
            variants={fadeUpStrong}
          >
            Social Media Platform
          </motion.h4>
          <motion.p className="text-[14px]" variants={fadeUpStrong}>
            Echo is a full-stack social media platform designed to connect users
            with real-time interaction. It features OAuth and custom
            authentication, posting, commenting, following, and chat
            functionality. The platform also supports bookmarking, mood-tagged
            posts, a question-of-the-day, and mood-based content discovery. Echo
            demonstrates modern full-stack web development practices and
            responsive UI design.
          </motion.p>
          <motion.h4 className="text-[18px] " variants={fadeUpStrong}>
            <b>Tech Stack </b> : Next.js + Prisma (PostgreSQL) + OAuth &
            Session-Based Authentication
          </motion.h4>
          <motion.h5 className="font-bold" variants={fadeUpStrong}>
            Test Account
          </motion.h5>

          <motion.ul variants={fadeUpStrong}>
            <li>Username: charlie-pat</li>
            <li>Password: elabglow</li>
          </motion.ul>

          <motion.div
            className="flex items-center justify-start gap-5"
            variants={fadeUpStrong}
          >
            <button className="bg-white text-[14px]  text-foreground font-bold px-5 py-3 border border-gray-300 rounded-xl hover:bg-foreground hover:text-white transition">
              <Link href={"https://echo-ashy.vercel.app/"} target="_blank">
                Live Demo
              </Link>
            </button>
            <button className="bg-surface text-[14px]  text-on-surface font-bold px-5 py-3 border border-gray-300 rounded-xl hover:bg-white hover:text-foreground transition">
              <Link
                href={"https://github.com/wareesha-Jannat/Echo"}
                target="_blank"
              >
                GitHub
              </Link>
            </button>
          </motion.div>
        </motion.div>
      </AnimateLeft>
      <AnimateRight delay={0.2} projects={true} className="order-1 md:order-2">
        <motion.div
          className="relative  aspect-1312/650 w-full max-w-[650px]  h-full min-w-[300px] md:min-w-[400px]  border-4 border-surface rounded-[5px]"
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={"/echo.webp"}
            alt="Echo home page"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw , 50vw"
            quality={80}
          />
        </motion.div>
      </AnimateRight>
      {isOpen && (
        <LightBoxImage open={isOpen} setIsOpen={setIsOpen} src="/echo.webp" />
      )}
    </section>
  );
};

export default AnimateProject3;
