"use client";

import React from "react";
import { motion } from "framer-motion";

const CodeWindow: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-md bg-[#131110] border border-[#2e2a25] rounded-xl overflow-hidden shadow-2xl shadow-black/60 font-mono text-sm"
    >
      {/* Window Title bar */}
      <div className="bg-[#1c1917] px-4 py-3 border-b border-[#2e2a25] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block opacity-80"></span>
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block opacity-80"></span>
          <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block opacity-80"></span>
        </div>
        <span className="text-xs text-[#8c8275] tracking-wide font-sans">developer.js</span>
        <div className="w-12"></div>
      </div>

      {/* Code Content */}
      <div className="p-5 overflow-x-auto text-foreground leading-relaxed select-text">
        <div>
          <span className="text-[#e06c75] font-semibold">const</span>{" "}
          <span className="text-[#e5c07b]">developer</span> = &#123;
        </div>
        <div className="pl-4">
          <span className="text-[#a69e94]">name:</span>{" "}
          <span className="text-[#98c379]">&quot;Wareesha Jannat&quot;</span>,
        </div>
        <div className="pl-4">
          <span className="text-[#a69e94]">role:</span>{" "}
          <span className="text-[#98c379]">&quot;Full Stack Developer&quot;</span>,
        </div>
        <div className="pl-4">
          <span className="text-[#a69e94]">skills:</span> [
        </div>
        <div className="pl-8">
          <span className="text-[#98c379]">&quot;React&quot;</span>,{" "}
          <span className="text-[#98c379]">&quot;Next.js&quot;</span>,{" "}
          <span className="text-[#98c379]">&quot;Node.js&quot;</span>,
        </div>
        <div className="pl-8">
          <span className="text-[#98c379]">&quot;Express.js&quot;</span>,{" "}
          <span className="text-[#98c379]">&quot;MongoDB&quot;</span>
        </div>
        <div className="pl-4">],</div>
        <div className="pl-4">
          <span className="text-[#a69e94]">learning:</span>{" "}
          <span className="text-[#d19a66]">true</span>,
        </div>
        <div className="pl-4">
          <span className="text-[#a69e94]">building:</span>{" "}
          <span className="text-[#98c379]">&quot;real world projects&quot;</span>
        </div>
        <div>&#125;;</div>
        <div className="mt-3 text-[#7d756b] italic">
          // Better solutions, always.
        </div>
      </div>
    </motion.div>
  );
};

export default CodeWindow;
