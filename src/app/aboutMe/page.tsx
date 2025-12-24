import { Metadata } from "next";
import AnimateRight from "../components/AnimateRight";
import AnimateLeft from "../components/AnimateLeft";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AboutMe | Wareesha Jannat",
};

const page = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-12 max-w-7xl mx-auto py-7 ">
      <h1 className="text-4xl font-bold font-heading">
        {" "}
        <Link href={"/"}>About Me</Link>
      </h1>
      <main className=" flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20 w-[80%] ">
        <AnimateLeft>
          <section className="flex flex-col gap-5">
            <h2 className="text-2xl">My Jorney</h2>
            <p className="text-[14px]">
              My interest in web development grew while studying Computer
              Science, where I began building small projects during my final
              year. Through hands-on work, I discovered a strong interest in
              creating practical, user-focused applications. This led me to
              continue learning independently and explore modern tools such as
              Next.js, Express.js, and Prisma. Over time, I built several
              full-stack projects, including a social media platform, a
              creator-support application, and a virtual question bank designed
              for exam preparation. These projects helped me understand how
              real-world features connect—from authentication and data handling
              to UI structure and performance. My journey continues through
              consistent practice, experimentation, and learning with each new
              project.
            </p>
          </section>
        </AnimateLeft>
        <AnimateRight delay={0.2}>
          <section className="flex flex-col gap-5">
            <h2 className="text-2xl">How I Add Value</h2>
            <p className="text-[14px]">
              I bring a strong learning mindset and a solid foundation in modern
              web technologies. I focus on writing clean, organized, and
              maintainable code, and I adapt quickly to new tools and workflows.
              Through personal projects, I have worked with real-world features
              such as authentication systems, user profiles, media uploads, and
              responsive layouts. I approach development with patience,
              responsibility, and attention to detail. Even at an early stage in
              my career, I aim to deliver work that is reliable, understandable,
              and built with care. I am committed to continuous improvement and
              motivated to grow within a professional environment where quality
              and consistency matter.
            </p>
          </section>
        </AnimateRight>
      </main>
    </div>
  );
};

export default page;
