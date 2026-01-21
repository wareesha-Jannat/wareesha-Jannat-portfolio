import Image from "next/image";
import AnimateRight from "./components/AnimateRight";
import AnimateLeft from "./components/AnimateLeft";
import Link from "next/link";

export const metadata = {
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
  },
};

export default function Home() {
  return (
    <main className=" flex-1 flex items-center justify-centergap-5 flex-col md:flex-row md:gap-20 py-8 px-6 mx-auto  max-w-7xl overflow-hidden">
      <AnimateRight className="flex-1">
        <section className=" flex items-center justify-end">
          <div className="relative  max-h-[280px] max-w-[280px] w-full height-full border-6 rounded-full border-surface overflow-hidden shadow-lg shadow-blue-950 ">
            <Image
              src={"/Profilepic.webp"}
              alt="profile picture"
              height={270}
              width={270}
              priority
              sizes="(max-width : 768px) 100vw, 50vw"
              className=" object-cover "
            />
          </div>
        </section>
      </AnimateRight>
      <AnimateLeft className="flex-1">
        <section className="  flex flex-col  gap-4  justify-center p-5">
          <h1 className="font-bold text-4xl font-heading min-[700px]:hidden leading-11">
            WAREESHA JANNAT
          </h1>
          <h1 className="font-bold text-3xl font-heading text-accent min-[700px]:text-foreground min-[700px]:text-5xl min-[700px]:w-[60%] ">
            Next.js Web Developer
          </h1>
          <h3 className="max-w-[80%] leading-relaxed">
            Building Clean, responsive web applications developed with modern
            web technologies, emphasizing simplicity, usability, and continuous
            improvement.
          </h3>
          <div className="flex items-center justify-start gap-5">
            <a
              href="/Wareesha-Jannat-Resume.pdf"
              download
              className="inline-flex items-center bg-white text-[14px] text-foreground font-bold px-5 py-3 border border-gray-300 rounded-xl hover:bg-foreground hover:text-white transition"
            >
              DOWNLOAD RESUME
            </a>
            <button className="bg-surface text-[14px]  text-on-surface font-bold px-5 py-3 border border-gray-300 rounded-xl hover:bg-white hover:text-foreground transition">
              <Link href={"/contact"}>GET IN TOUCH</Link>
            </button>
          </div>
        </section>
      </AnimateLeft>
    </main>
  );
}
