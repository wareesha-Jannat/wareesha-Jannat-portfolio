import { Metadata } from "next";
import AnimateRight from "../components/AnimateRight";
import AnimateLeft from "../components/AnimateLeft";

export const metadata: Metadata = {
  title: "AboutMe | Wareesha Jannat",
};

const page = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-12 max-w-7xl mx-auto py-7 ">
      <h1 className="text-4xl font-bold font-heading">About Me</h1>
      <main className=" flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20 w-[80%] ">
        <AnimateLeft>
          <section className="flex flex-col gap-5">
            <h2 className="text-2xl">My Jorney</h2>
            <p className="text-[14px]">
              My interest in web development grew naturally while studying
              Computer Science. After building small projects in my final year,
              I realized I enjoyed creating things that people can actually use.
              That curiosity pushed me to continue learning on my own. I
              explored tools like Next.js, Express.js, and Prisma and started
              building full-stack projects such as a social media platform
              (Echo), a creator-support app (BoostMe), and a virtual question
              bank for exam preparation. Each project helped me understand the
              development process better — how features connect, how to think
              through problems, and how to turn ideas into working products. My
              journey is still growing, step by step, through consistent
              practice and learning.{" "}
            </p>
          </section>
        </AnimateLeft>
        <AnimateRight delay={0.2}>
          <section className="flex flex-col gap-5">
            <h2 className="text-2xl">How I Add Value</h2>
            <p className="text-[14px]">
              I bring a strong learning mindset and a solid foundation in modern
              web technologies. I write clean and organized code, and I can pick
              up new concepts quickly. Through my personal projects, I&apos;ve
              worked with real features like authentication, user profiles,
              media uploads, and responsive UI development. I approach tasks
              with responsibility, patience, and attention to detail. Even as a
              beginner, I aim to deliver work that is reliable, understandable,
              and built with care. I&apos;m committed to continuous improvement
              and ready to contribute with consistency, honesty, and a
              willingness to grow in a professional environment.
            </p>
          </section>
        </AnimateRight>
      </main>
    </div>
  );
};

export default page;
