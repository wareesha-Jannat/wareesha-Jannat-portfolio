"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { fadeUpStrong, imageReveal, staggerContainer } from "../lib/animation";
import AnimateLeft from "../components/AnimateLeft";
import AnimateRight from "../components/AnimateRight";
const AnimateProject3 = () => {
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
            Echo is a full-stack social media application built with modern
            architecture and real-world features. Users can sign up using OAuth
            or custom authentication, create posts, like and comment, follow
            other users, and chat in real time. The platform also includes
            bookmarking, a “question of the day,” mood-tagged posts, and
            mood-based search for discovering content.
          </motion.p>
          <motion.h4 className="text-[18px] " variants={fadeUpStrong}>
            <b>Teck Stack </b> : Nextjs + Prisma(Postgre database)
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
          className="relative  aspect-[1312/650] w-full max-w-[650px]  h-full min-w-[300px] md:min-w-[400px]  border-4 border-surface rounded-[5px]"
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={"/echo.webp"}
            alt="Echo home page"
            fill
            priority
            className="object-cover"
            quality={80}
          />
        </motion.div>
      </AnimateRight>
    </section>
  );
};

export default AnimateProject3;
