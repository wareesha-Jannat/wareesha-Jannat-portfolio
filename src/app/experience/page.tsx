import { Metadata } from "next";
import Link from "next/link";
import AnimateProject1 from "./AnimateProject1";
import AnimateProject2 from "./AnimateProject2";
import AnimateProject3 from "./AnimateProject3";
import AnimateCollaboration from "./AnimateCollaboration";

export const metadata: Metadata = {
  title: "Experience | Wareesha Jannat",
};
const page = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center max-w-7xl py-7 gap-12 mx-auto">
      <h1 className="text-4xl font-bold font-heading pt-8 ">
        {" "}
        <Link href={"/"}>Experience</Link>
      </h1>
      <main className="flex flex-col gap-16 py-5 w-[80%]">
        <AnimateCollaboration />
        <AnimateProject1 />
        <AnimateProject2 />
        <AnimateProject3 />
      </main>
    </div>
  );
};

export default page;
