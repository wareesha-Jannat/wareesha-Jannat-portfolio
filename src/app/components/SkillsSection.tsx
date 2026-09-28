"use client";
import React from "react";
import { motion } from "framer-motion";
interface TechItem {
  name: string;
  icon: React.ReactNode;
}
const techStack: TechItem[] = [
  {
    name: "React",
    icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="2" />
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(0 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(120 12 12)"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M14.8 16.5L9.2 8.5H8v7h1.4v-4.6l4.6 6.6h.8z" />
        <path d="M14.6 8.5h1.4v7h-1.4z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg
        className="w-8 h-8 fill-none"
        stroke="currentColor"
        strokeWidth="1.6"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z" />
        <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
      </svg>
    ),
  },
  {
    name: "Express.js",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="3" width="18" height="18" rx="6" stroke="currentColor" />
        <text
          x="7"
          y="15"
          fill="currentColor"
          stroke="none"
          fontSize="10"
          fontFamily="sans-serif"
          fontWeight="bold"
        >
          ex
        </text>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M12 2c-4 4-5.5 8.5-5.5 11.5 0 3.5 2.5 6.5 5.5 8.5 3-2 5.5-5 5.5-8.5C17.5 10.5 16 6 12 2zm0 18c-2.2-1.6-4-3.8-4-6.5 0-2.3 1.1-5.7 4-9 2.9 3.3 4 6.7 4 9 0 2.7-1.8 4.9-4 6.5z" />
        <path d="M11.2 11h1.6v8h-1.6z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" />
        <path
          d="M7 10h5M9.5 10v7M14 17c.5.5 1.2.8 2 .8 1.2 0 2-.6 2-1.5 0-2.2-3.8-1.5-3.8-3.8 0-.9.8-1.5 1.9-1.5.8 0 1.5.3 2 .8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.719.721.719 1.884 0 2.604-.719.719-1.883.719-2.603 0-.721-.72-.721-1.883 0-2.604.18-.18.388-.309.61-.396V8.879a1.99 1.99 0 01-.61-.397c-.536-.535-.675-1.325-.411-1.982L7.56 3.774 1.45 9.884c-.604.603-.604 1.582 0 2.188l10.48 10.478c.604.604 1.582.604 2.186 0l9.43-9.432c.604-.603.604-1.582 0-2.188z" />
      </svg>
    ),
  },
];
const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-background text-foreground py-16 sm:py-20 px-6 overflow-hidden border-b border-[#24201c]"
    >
      {/* Background Decorative Leaf/Organic SVG Flourish on Far Left */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-10 pointer-events-none opacity-20 hidden md:block text-[#c7b299]">
        <svg
          width="180"
          height="220"
          viewBox="0 0 100 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path
            d="M 20 110 C 20 60 70 40 90 10 C 60 40 40 70 20 110 Z"
            fill="currentColor"
            fillOpacity="0.05"
          />
          <path d="M 20 110 C 40 80 80 70 85 40" />
          <path d="M 40 85 C 55 70 70 65 75 50" />
          <path d="M 28 98 C 35 85 50 82 55 70" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        {/* Header Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/3 flex flex-col gap-2 shrink-0"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#a69e94] uppercase">
            SKILLS & TECHNOLOGIES
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Tech Stack
          </h2>
          <p className="text-[#c7b299]/80 text-sm sm:text-base">
            Technologies I work with
          </p>
          <div className="w-24 h-[2px] bg-[#3a342d] mt-2 rounded-full" />
        </motion.div>

        {/* Tech Stack Cards Grid / Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        >
          {techStack.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex flex-col items-center justify-center gap-3 p-4 bg-[#1f1c19] border border-[#2e2a25] rounded-2xl hover:border-[#c7b299] hover:bg-[#282420] transition-all duration-300 shadow-md shadow-black/40 group cursor-pointer"
            >
              <div className="text-foreground group-hover:text-[#c7b299] transition-colors duration-300">
                {tech.icon}
              </div>
              <span className="text-xs sm:text-sm font-medium text-[#c7b299]/90 group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default SkillsSection;
