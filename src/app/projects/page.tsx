import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimateLeft from "../components/AnimateLeft";
import AnimateRight from "../components/AnimateRight";
import AnimateSection from "../components/AnimateSection";

export const metadata: Metadata = {
  title: "Projects | Wareesha Jannat",
};
const page = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center max-w-7xl py-7 gap-12 mx-auto">
      <h1 className="text-4xl font-bold font-heading ">Projects</h1>
      <main className="flex flex-col gap-16 my-4 w-[80%]">
        <section className="flex flex-col md:flex-row items-center justify-center gap-15">
          <AnimateLeft projects={true} className="order-2 md:order-1">
            <div className="flex flex-col gap-3 ">
              <h3 className="text-2xl font-bold">Virtual Question Bank</h3>
              <h4 className="text-[18px] font-semibold">
                Exam Preparation System
              </h4>
              <p className="text-[14px]">
                Virtual Question Bank is an exam-preparation platform that
                allows students to study subject-wise questions, practice them,
                take timed exams, and view analytics. Admins can manage
                subjects, topics, and question banks, respond to support
                requests, send notifications, and track usage insights. The
                system includes custom JWT authentication and separate
                dashboards for students and admins.
              </p>
              <h4 className="text-[18px] ">
                <b>Teck Stack </b> : Nextjs + Expressjs + mongoose(Mongodb
                database)
              </h4>
              <h5 className="font-bold">Test Account</h5>
              <div>
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
              </div>

              <div className="flex items-center justify-start gap-5">
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
              </div>
            </div>
          </AnimateLeft>
          <AnimateRight
            delay={0.2}
            projects={true}
            className="order-1 md:order-2 "
          >
            <div className="relative  aspect-video w-full max-w-[650px] min-w-[300px] md:min-w-[400px] border-4 border-surface rounded-[5px]">
              <Image
                src={"/VQB.png"}
                alt="VQB home page"
                fill
                priority
                quality={90}
                className="object-cover"
              />
            </div>
          </AnimateRight>
        </section>{" "}
        <AnimateSection>
          <section className="flex flex-col md:flex-row items-center justify-center gap-15">
            <AnimateLeft projects={true}>
              <div className="relative   aspect-video w-full max-w-[650px] min-w-[300px] md:min-w-[400px]   border-4 border-surface rounded-[5px]">
                <Image
                  src={"/boostme.png"}
                  alt="BoostMe home page"
                  fill
                  priority
                  quality={90}
                  className="object-cover"
                />
              </div>
            </AnimateLeft>
            <AnimateRight delay={0.2} projects={true}>
              <div className="flex flex-col gap-3 order-2 md:order-1">
                <h3 className="text-2xl font-bold">Boost Me</h3>
                <h4 className="text-[18px] font-semibold">
                  Creator Support Application
                </h4>
                <p className="text-[14px]">
                  BoostMe is a creator support platform where creators can
                  showcase their work and receive contributions from their
                  community. The application includes secure login and signup
                  using NextAuth, creator profiles, donation flow, and a clean
                  dashboard for managing data.
                </p>
                <h4 className="text-[18px] ">
                  <b>Teck Stack </b> : Nextjs + mongoose(Mongodb database)
                </h4>
                <h5 className="font-bold">Test Account</h5>

                <ul className="list-disc">
                  <li>
                    <b>For Creator</b>{" "}
                    <ul>
                      <li>Username: johndoe@example.com </li>
                      <li>Password: test@12345</li>
                    </ul>
                  </li>
                </ul>

                <div className="flex items-center justify-start gap-5">
                  <button className="bg-white text-[14px]  text-foreground font-bold px-5 py-3 border border-gray-300 rounded-xl hover:bg-foreground hover:text-white transition">
                    <Link
                      href={"https://boostme-henna.vercel.app"}
                      target="_blank"
                    >
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
                </div>
              </div>
            </AnimateRight>
          </section>
        </AnimateSection>
        <AnimateSection delay={0.3}>
          <section className="flex flex-col md:flex-row items-center justify-center gap-15">
            <AnimateLeft projects={true} className="order-2 md:order-1">
              <div className="flex flex-col gap-3 ">
                <h3 className="text-2xl font-bold">Echo</h3>
                <h4 className="text-[18px] font-semibold">
                  Social Media Platform
                </h4>
                <p className="text-[14px]">
                  Echo is a full-stack social media application built with
                  modern architecture and real-world features. Users can sign up
                  using OAuth or custom authentication, create posts, like and
                  comment, follow other users, and chat in real time. The
                  platform also includes bookmarking, a “question of the day,”
                  mood-tagged posts, and mood-based search for discovering
                  content.
                </p>
                <h4 className="text-[18px] ">
                  <b>Teck Stack </b> : Nextjs + Prisma(Postgre database)
                </h4>
                <h5 className="font-bold">Test Account</h5>

                <ul>
                  <li>Username: charlie-pat</li>
                  <li>Password: elabglow</li>
                </ul>

                <div className="flex items-center justify-start gap-5">
                  <button className="bg-white text-[14px]  text-foreground font-bold px-5 py-3 border border-gray-300 rounded-xl hover:bg-foreground hover:text-white transition">
                    <Link
                      href={"https://echo-ashy.vercel.app/"}
                      target="_blank"
                    >
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
                </div>
              </div>
            </AnimateLeft>
            <AnimateRight
              delay={0.2}
              projects={true}
              className="order-1 md:order-2"
            >
              <div className="relative   aspect-video w-full max-w-[650px] min-w-[300px] md:min-w-[400px]  border-4 border-surface rounded-[5px]">
                <Image
                  src={"/echo.webp"}
                  alt="Echo home page"
                  fill
                  priority
                  className="object-contain"
                  quality={80}
                />
              </div>
            </AnimateRight>
          </section>{" "}
        </AnimateSection>
      </main>
    </div>
  );
};

export default page;
