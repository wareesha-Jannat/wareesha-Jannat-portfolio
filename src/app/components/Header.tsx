import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-surface text-on-surface ">
      <section className="flex items-center justify-around max-w-7xl p-5 mx-auto">
        <h1 className="font-bold text-2xl max-[700px]:hidden">
          <Link href={"/"}>WAREESHA JANNAT</Link>
        </h1>
        <nav>
          <ul className="flex justify-center  items-center gap-4 sm:gap-7 text-sm sm:text-base">
            <li>
              <Link
                href={"/aboutMe"}
                className="hover:text-on-surface text-links"
              >
                ABOUT ME
              </Link>
            </li>
            <li>
              <Link
                href={"/experience"}
                className="hover:text-on-surface text-links"
              >
                EXPERIENCE
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className="hover:text-on-surface text-links"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
