import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-surface px-4 py-5 ">
      <section className=" max-w-7xl flex flex-col gap-4 mx-auto ">
        <h3 className="text-center text-on-surface font-bold">
          CONNECT WITH ME
        </h3>
        <ul className="flex items-center text-links justify-evenly flex-wrap flex-col lg:flex-row  gap-5 text-[16px]">
          <li>
            <h5 className="text-center">GitHub</h5>
            <a
              href={"https://github.com/wareesha-Jannat"}
              target="_blank"
              className="hover:text-on-surface  text-[12px] hover:underline "
            >
              https://github.com/wareesha-Jannat
            </a>
          </li>
          <li className="flex flex-col items-center justify-center gap-1">
            <h5 className="text-center">LinkedIn</h5>
            <a
              href={"https://www.linkedin.com/in/wareesha-jannat"}
              target="_blank"
              className="hover:text-on-surface hover:underline  text-[12px] text-center "
            >
              https://www.linkedin.com/in/wareesha-jannat
            </a>
          </li>
          <li>
            <h5 className="text-center">Email</h5>
            <a
              href="mailto:Wjannat309@gmail.com"
              className="hover:text-on-surface  text-[12px] hover:underline"
            >
              Wjannat309@gmail.com
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
