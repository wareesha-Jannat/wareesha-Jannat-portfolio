"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { fadeUpStrong, imageReveal, staggerContainer } from "../lib/animation";
import AnimateLeft from "../components/AnimateLeft";
import AnimateRight from "../components/AnimateRight";
import LightBoxImage from "../components/LightBoxImage";

const AnimateProject1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="flex flex-1 flex-col md:flex-row items-center justify-center gap-10 md:gap-15 ">
      <AnimateLeft projects={true} className="order-2 md:order-1 flex-1">
        <motion.div
          className="flex flex-col gap-3 "
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 className="text-2xl font-bold" variants={fadeUpStrong}>
            Virtual Question Bank
          </motion.h3>
          <motion.h4
            className="text-[18px] font-semibold"
            variants={fadeUpStrong}
          >
            Exam Preparation System
          </motion.h4>
          <motion.p className="text-[14px]" variants={fadeUpStrong}>
            Virtual Question Bank is an exam-preparation platform that allows
            students to study subject-wise questions, practice them, take timed
            exams, and view analytics. Admins can manage subjects, topics, and
            question banks, respond to support requests, send notifications, and
            track usage insights. The system includes custom JWT authentication
            and separate dashboards for students and admins.
          </motion.p>
          <motion.h4 className="text-[18px] " variants={fadeUpStrong}>
            <b>Teck Stack </b> : Nextjs + Expressjs + mongoose(Mongodb database)
          </motion.h4>
          <motion.h5 className="font-bold" variants={fadeUpStrong}>
            Test Account
          </motion.h5>
          <motion.div variants={fadeUpStrong}>
            <ul className="list-disc">
              <li>
                <b>For Student</b>{" "}
                <ul>
                  <li>Email: student@example.com</li>
                  <li>Password: student@123</li>
                </ul>
              </li>
              <li>
                <b>For Admin</b>{" "}
                <ul>
                  <li> Email: admin@example.com</li>
                  <li>Password: admin@123</li>
                </ul>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="flex items-center justify-start gap-5 flex-1"
            variants={fadeUpStrong}
          >
            <button className="bg-white text-[14px]  text-foreground font-bold px-5 py-3 border border-gray-300 rounded-xl hover:bg-foreground hover:text-white transition">
              <Link
                href={"https://virtual-question-bank-frontend.vercel.app"}
                target="_blank"
              >
                Live Demo
              </Link>
            </button>
            <button className="bg-surface text-[14px]  text-on-surface font-bold px-5 py-3 border border-gray-300 rounded-xl hover:bg-white hover:text-foreground transition">
              <Link
                href={
                  "https://github.com/wareesha-Jannat/virtual-question-bank-frontend"
                }
                target="_blank"
              >
                GitHub
              </Link>
            </button>
          </motion.div>
        </motion.div>
      </AnimateLeft>
      <AnimateRight delay={0.2} projects={true} className="order-1 md:order-2 ">
        <motion.div
          className="relative  aspect-1350/620 w-full max-w-[650px] min-w-[300px] md:min-w-[400px] border-4 border-surface rounded-[5px] "
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={"/VQB.PNG"}
            alt="VQB home page"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="(max-width: 768px) 100vw , 50vw"
          />
        </motion.div>
      </AnimateRight>
      {isOpen && (
        <LightBoxImage open={isOpen} setIsOpen={setIsOpen} src={"/VQB.PNG"} />
      )}
    </section>
  );
};

export default AnimateProject1;
