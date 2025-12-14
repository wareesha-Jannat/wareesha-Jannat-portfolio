import Image from "next/image";
import AnimateRight from "./components/AnimateRight";
import AnimateLeft from "./components/AnimateLeft";

export default function Home() {
  return (
    <main className=" flex-1 flex items-center justify-center flex-col md:flex-row md:gap-20 py-8 px-6 mx-auto  max-w-7xl overflow-hidden">
      <AnimateRight >
        <section className=" flex items-center justify-end">
          <div className="relative  max-h-[316px] max-w-[316px] w-full height-full border-6 rounded-full border-surface overflow-hidden shadow-lg shadow-blue-950 ">
            <Image
              src={"/Profilepic.webp"}
              alt="profile picture"
              height={270}
              width={270}
              priority
              className=" object-cover "
            />
          </div>
        </section>
      </AnimateRight>
      <AnimateLeft>
        <section className="  flex flex-col  gap-5  justify-center p-5">
          <h1 className="font-bold text-4xl font-heading min-[700px]:hidden leading-relaxed">
            WAREESHA JANNAT
          </h1>
          <h1 className="font-bold text-3xl font-heading text-accent min-[700px]:text-foreground min-[700px]:text-5xl min-[700px]:w-[30%]">
            Web Developer
          </h1>
          <h3 className="max-w-[80%] leading-relaxed">
            Hi, I&apos;m Wareesha Jannat. I create clean, responsive web
            applications using modern technologies, with a strong focus on
            simplicity, usability, and continuous improvement.
          </h3>
          <div className="flex items-center justify-start gap-5">
            <button className="bg-white text-[14px]  text-foreground font-bold px-5 py-3 border border-gray-300 rounded-xl hover:bg-foreground hover:text-white transition">
              DOWNLOAD RESUME
            </button>
            <button className="bg-surface text-[14px]  text-on-surface font-bold px-5 py-3 border border-gray-300 rounded-xl hover:bg-white hover:text-foreground transition">
              GET IN TOUCH
            </button>
          </div>
        </section>
      </AnimateLeft>
    </main>
  );
}
