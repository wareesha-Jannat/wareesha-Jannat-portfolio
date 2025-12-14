import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import AnimateLeft from "../components/AnimateLeft";
import AnimateRight from "../components/AnimateRight";

export const metadata: Metadata = {
  title: "Contact",
};
const page = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-5 mx-auto py-7 max-w-7xl">
      <h1 className="text-4xl font-bold mt-3 font-heading">Let&apos;s Connect</h1>
      <main className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20 px-4 py-5">
        <AnimateLeft delay={0.2}>
          <section>
            <div className=" relative aspect-square max-w-[600px] min-w-[300px] w-full h-full ">
              <Image
                src={"/Contact.gif"}
                alt="Contact gif"
                fill
                priority
                className="object-cover"
              />
            </div>
          </section>
        </AnimateLeft>
        <AnimateRight>
          <section>
            <h4 className="p-4">
              i&apos;m open to remote opportunities - feel free to reach out
            </h4>
            <form
              className="flex flex-col gap-5 px-4"
              action="https://formspree.io/f/xovgrkbv"
              method="POST"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="px-2 py-3 border-2 border-surface rounded-xl"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="px-2 py-3 border-2 border-surface rounded-xl"
                required
              />
              <textarea
                name="message"
                rows={3}
                placeholder="Message"
                className="px-2 py-3 border-2 border-surface rounded-xl"
                required
              />
              <button
                type="submit"
                className="bg-surface text-[14px]  text-on-surface font-bold px-3 py-2 border border-gray-300 rounded-xl hover:bg-white hover:text-foreground transition"
              >
                Send Message
              </button>
            </form>
          </section>
        </AnimateRight>
      </main>
    </div>
  );
};

export default page;
