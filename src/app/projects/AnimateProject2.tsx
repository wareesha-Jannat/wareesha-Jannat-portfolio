"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { fadeUpStrong, imageReveal, staggerContainer } from "../lib/animation";
import AnimateLeft from "../components/AnimateLeft";
import AnimateRight from "../components/AnimateRight";

const AnimateProject2 = () => {
  return (
    <section className="flex flex-1 flex-col md:flex-row items-center justify-center gap-10 md:gap-15  ">
      <AnimateLeft projects={true}>
        <motion.div
          className="relative   aspect-[1314/641] w-full max-w-[650px] min-w-[300px] md:min-w-[400px]   border-4 border-surface rounded-[5px] "
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={"/boostme.PNG"}
            alt="BoostMe home page"
            fill
            priority
            quality={90}
            className="object-cover"
          />
        </motion.div>
      </AnimateLeft>
      <AnimateRight projects={true}>
        <motion.div
          className="flex flex-col gap-3 "
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 className="text-2xl font-bold" variants={fadeUpStrong}>
            Boost Me
          </motion.h3>
          <motion.h4
            className="text-[18px] font-semibold"
            variants={fadeUpStrong}
          >
            Creator Support Application
          </motion.h4>
          <motion.p className="text-[14px]" variants={fadeUpStrong}>
            BoostMe is a creator support platform where creators can showcase
            their work and receive contributions from their community. The
            application includes secure login and signup using NextAuth, creator
            profiles, donation flow, and a clean dashboard for managing data.
          </motion.p>
          <motion.h4 className="text-[18px] " variants={fadeUpStrong}>
            <b>Teck Stack </b> : Nextjs + mongoose(Mongodb database)
          </motion.h4>
          <motion.h5 className="font-bold" variants={fadeUpStrong}>
            Test Account
          </motion.h5>

          <motion.ul className="list-disc" variants={fadeUpStrong}>
            <li>
              <b>For Creator</b>{" "}
              <ul>
                <li>Username: johndoe@example.com </li>
                <li>Password: test@12345</li>
              </ul>
            </li>
          </motion.ul>

          <motion.div
            className="flex items-center justify-start gap-5"
            variants={fadeUpStrong}
          >
            <button className="bg-white text-[14px]  text-foreground font-bold px-5 py-3 border border-gray-300 rounded-xl hover:bg-foreground hover:text-white transition">
              <Link href={"https://boostme-henna.vercel.app"} target="_blank">
                Live Demo
              </Link>
            </button>
            <button className="bg-surface text-[14px]  text-on-surface font-bold px-5 py-3 border border-gray-300 rounded-xl hover:bg-white hover:text-foreground transition">
              <Link
                href={"https://github.com/wareesha-Jannat/boostme"}
                target="_blank"
              >
                GitHub
              </Link>
            </button>
          </motion.div>
        </motion.div>
      </AnimateRight>
    </section>
  );
};

export default AnimateProject2;
