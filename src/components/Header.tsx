"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  GraduationCap,
  Briefcase,
  Brain,
  FolderGit2,
  Mail,
  FileText,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", id: "home", icon: Home },
  { label: "About", href: "#about", id: "about", icon: User },
  { label: "Education", href: "#education", id: "education", icon: GraduationCap },
  { label: "Skills", href: "#skills", id: "skills", icon: Brain },
  { label: "Projects", href: "#projects", id: "projects", icon: FolderGit2 },
  { label: "Contact", href: "#contact", id: "contact", icon: Mail },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  // Outside click handler to close mobile menu
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // IntersectionObserver for section highlighting
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -30% 0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "left",
        }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-emerald-400 z-[100] shadow-[0_0_8px_rgba(52,211,153,0.8)]"
      />

      {/* Fixed Floating Transparent Header */}
      <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div
            className={`transition-all duration-300 rounded-2xl flex justify-between items-center border backdrop-blur-xl ${scrolled
                ? "py-2.5 px-5 bg-zinc-950/60 border-white/15 shadow-2xl shadow-black/60"
                : "py-3.5 px-6 bg-zinc-950/20 border-white/10"
              }`}
          >
            {/* Logo + Status Badge */}
            <a
              href="#home"
              onClick={() => setActiveSection("home")}
              className="flex items-center gap-3 group"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.08 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-400 via-teal-300 to-emerald-500 text-zinc-950 font-black shadow-lg shadow-emerald-500/20 border border-emerald-300/40"
              >
                <span className="font-mono text-sm font-black text-zinc-950 flex items-center">
                  ⬢S
                </span>
              </motion.div>

              <div className="flex items-center">
                <span className="text-lg font-extrabold tracking-tight text-white font-sans">
                  Shajeda
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-md ml-1.5 shadow-sm">
                  .dev
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-3 text-xs lg:text-sm font-sans font-medium">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    whileHover={{ y: -2 }}
                    onClick={() => setActiveSection(item.id)}
                    className={`relative px-3.5 py-1.5 rounded-xl transition-colors duration-200 flex items-center gap-2 ${isActive ? "text-white font-semibold" : "text-gray-400 hover:text-white"
                      }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>

                    {isActive && (
                      <>
                        {/* Pill highlight */}
                        <motion.span
                          layoutId="pill"
                          className="absolute inset-0 rounded-xl bg-emerald-500/10 border border-emerald-500/30 -z-10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                        {/* Glowing underline */}
                        <motion.span
                          layoutId="underline"
                          className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      </>
                    )}
                  </motion.a>
                );
              })}
            </nav>

            {/* Resume Action Button & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:inline-flex items-center gap-2 bg-emerald-500 text-zinc-950 px-4 py-2 rounded-xl text-xs font-sans font-bold hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </motion.a>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none bg-zinc-900 border border-zinc-800 rounded-xl"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Animated Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <div ref={menuRef} className="container mx-auto px-4 sm:px-6 max-w-7xl mt-2.5">
              <motion.div
                initial={{ opacity: 0, y: -15, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.96 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="md:hidden bg-zinc-900/95 border border-white/10 rounded-2xl p-5 backdrop-blur-2xl shadow-2xl space-y-2.5"
              >
                <nav className="flex flex-col space-y-2 text-sm font-sans font-medium">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.id}
                        onClick={() => setIsOpen(false)}
                        className={`py-2.5 px-4 rounded-xl transition-colors flex items-center gap-3 ${activeSection === item.id
                            ? "bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/30"
                            : "text-gray-400 hover:text-white hover:bg-zinc-800/60"
                          }`}
                        href={item.href}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </a>
                    );
                  })}
                  <a
                    onClick={() => setIsOpen(false)}
                    className="bg-emerald-500 text-zinc-950 text-center py-3 rounded-xl font-bold hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 mt-2 shadow-md"
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Resume</span>
                  </a>
                </nav>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
