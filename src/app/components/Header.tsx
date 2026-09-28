"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const isClickScrolling = useRef(false);
  const scrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Always update header background glassmorphism state
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Skip spy scroll active section updates while smooth-scrolling from a click
      if (isClickScrolling.current) return;

      // spy scroll logic
      const sections = navItems.map((item) => item.label.toLowerCase());
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            const formattedName =
              section.charAt(0).toUpperCase() + section.slice(1);
            setActiveSection(formattedName);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
    };
  }, []);

  const handleClick = (v: string) => {
    setActiveSection(v);
    isClickScrolling.current = true;
    if (scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
    }
    scrollTimerRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-[#2e2a25] shadow-lg shadow-black/30 py-3"
          : "bg-background py-5 border-b-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* 2-Letter Typographic Logo: WJ */}
        <Link href="/" className="group flex items-center">
          <div className="px-3.5 py-1.5 bg-[#1f1c19] border border-[#3a342d] group-hover:border-[#c7b299] rounded-xl shadow-md shadow-black/40 transition-all duration-300 flex items-center justify-center">
            <span className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground group-hover:text-[#ffffff] transition-colors leading-none">
              W<span className="text-[#c7b299] italic ml-0.5">J</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = activeSection === item.label;
              return (
                <li key={item.label} className="relative py-1">
                  <Link
                    href={item.href}
                    onClick={() => handleClick(item.label)}
                    className={`transition-colors duration-200 ${
                      isActive
                        ? "text-foreground font-semibold"
                        : "text-[#a69e94] hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {/* Active Bar Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c7b299] rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Header Right: Download CV Button (Desktop) */}
        <div className="hidden lg:flex items-center">
          <a
            href="/Wareesha-Jannat-Resume.pdf"
            download
            className="inline-flex items-center gap-2 border border-[#423c34] text-foreground text-xs font-semibold px-4 py-2.5 rounded-xl hover:border-[#c7b299] hover:bg-[#c7b299] hover:text-accent-foreground transition-all duration-300"
          >
            <Download className="w-3.5 h-3.5" />
            Download CV
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden text-foreground p-2 hover:bg-[#26231f] rounded-lg transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Slide-down Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#1f1c19] border-b border-[#2e2a25] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => {
                  const isActive = activeSection === item.label;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        handleClick(item.label);
                        setMobileMenuOpen(false);
                      }}
                      className={`text-base py-2 flex items-center justify-between transition-colors border-b border-[#2a2622] ${
                        isActive
                          ? "text-foreground font-bold"
                          : "text-[#a69e94] hover:text-foreground"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#c7b299]" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-2">
                <a
                  href="/Wareesha-Jannat-Resume.pdf"
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 border border-[#423c34] text-foreground text-sm font-semibold px-4 py-3 rounded-xl hover:bg-[#c7b299] hover:text-accent-foreground transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
