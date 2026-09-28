"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#131110] text-[#a69e94] py-8 px-6 border-t border-[#24201c]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        
        {/* Left: WJ Logo & Copyright */}
        <div className="flex items-center gap-3">
          <Link href="/" className="font-serif text-lg font-bold text-foreground">
            W<span className="text-[#c7b299] italic">J</span>
          </Link>
          <span className="text-[#3a342d]">|</span>
          <p>© {new Date().getFullYear()} Wareesha Jannat. Built with Next.js & React.</p>
        </div>

        {/* Right: Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-foreground hover:text-[#c7b299] transition-colors font-medium p-2 rounded-lg hover:bg-[#1f1c19]"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};

export default Footer;
