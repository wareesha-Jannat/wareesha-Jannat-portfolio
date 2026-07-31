"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { fadeUpStrong, imageReveal, staggerContainer } from "../lib/animation";
import AnimateLeft from "../components/AnimateLeft";
import AnimateRight from "../components/AnimateRight";
import VideoModal from "../components/VideoModal";


const demos = {
  student: {
    image: "/images/VQB-Student.PNG",
    video: "/videos/VQB-student-video.mp4",
    title: "Student Panel",
  },
  admin: {
    image: "/images/VQB-Admin.PNG",
    video: "/videos/VQB-admin-video.mp4",
    title: "Admin Panel",
  },
};

const AnimateProject1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState<"student" | "admin">(
    "student",
  );

  const currentDemo = demos[selectedDemo];
  return (
    <section className="flex flex-1 flex-col min-[950px]:flex-row items-center justify-center gap-10 min-[950px]:gap-15 ">
      <AnimateLeft
        projects={true}
        className="order-2 min-[950px]:order-1 flex-1"
      >
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
            exams, and view performance analytics. The system includes separate
            dashboards for students and admins, enabling management of subjects,
            topics, and question banks, as well as handling support requests and
            sending notifications. Custom JWT authentication ensures secure
            access to protected routes.
          </motion.p>
          <motion.h4 className="text-[18px] " variants={fadeUpStrong}>
            <b>Tech Stack </b> : Next.js + Express.js + Mongoose (Mongodb
            database) + Custom JWT Authentication
          </motion.h4>

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
      <AnimateRight
        delay={0.2}
        projects={true}
        className="order-1 min-[950px]:order-2 "
      >
        <div className="mb-4 flex gap-3">
          <button
            onClick={() => setSelectedDemo("student")}
            className={`px-4 py-2 rounded-full transition font-medium ${
              selectedDemo === "student"
                ? "bg-foreground text-white"
                : "bg-surface text-on-surface"
            }`}
          >
            🎓 Student
          </button>

          <button
            onClick={() => setSelectedDemo("admin")}
            className={`px-4 py-2 rounded-full transition font-medium ${
              selectedDemo === "admin"
                ? "bg-foreground text-white"
                : "bg-surface text-on-surface"
            }`}
          >
            ⚙️ Admin
          </button>
        </div>
        <motion.div
          className="relative group aspect-1350/620 w-full max-w-[650px] min-w-[300px] min-[950px]:min-w-[400px] border-4 border-surface rounded-[5px] overflow-hidden cursor-pointer"
          variants={imageReveal}
          key={selectedDemo}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={currentDemo.image}
            alt={currentDemo.title}
            fill
            priority
            quality={90}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw , 50vw"
          />

          {/*dark overlay */}
          <div className="absolute inset-0 bg-black/30 transition-transform group-hover:bg-black/45 duration-300" />

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
      </AnimateRight>

      {isOpen && (
        <VideoModal
          open={isOpen}
          setIsOpen={setIsOpen}
          src={currentDemo.video}
          poster={currentDemo.image}
        />
      )}
    </section>
  );
};

export default AnimateProject1;
