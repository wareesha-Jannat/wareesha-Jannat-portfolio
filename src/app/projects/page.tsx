import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimateLeft from "../components/AnimateLeft";
import AnimateRight from "../components/AnimateRight";
import AnimateProject1 from "./AnimateProject1";
import AnimateProject2 from "./AnimateProject2";
import AnimateProject3 from "./AnimateProject3";


export const metadata: Metadata = {
  title: "Projects | Wareesha Jannat",
};
const page = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center max-w-7xl py-7 gap-12 mx-auto">
      <h1 className="text-4xl font-bold font-heading ">Projects</h1>
      <main className="flex flex-col gap-16 my-4 w-[80%]">
       <AnimateProject1 />
       <AnimateProject2 />
       <AnimateProject3 />
      </main>
    </div>
  );
};

export default page;
