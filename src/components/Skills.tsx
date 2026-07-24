"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

interface SkillItem {
  name: string;
  category: "Frontend" | "Backend & DB" | "Tools" | "Data Structures" | "Soft Skills & Languages";
  pct: string;
  level: string;
  icon: string;
  color: string;
}

const resumeSkills: SkillItem[] = [
  // Frontend
  {
    name: "React.js & Next.js",
    category: "Frontend",
    pct: "95%",
    level: "App Router, SSR, Redux Toolkit, Hero UI",
    icon: "⚛️",
    color: "bg-emerald-500",
  },
  {
    name: "JavaScript (ES6+) & TypeScript",
    category: "Frontend",
    pct: "92%",
    level: "Async/Await, Interfaces, Strict Typing",
    icon: "🟨",
    color: "bg-teal-500",
  },
  {
    name: "HTML5, CSS3 & Tailwind CSS",
    category: "Frontend",
    pct: "96%",
    level: "Responsive Design, Flexbox, Grid, CSS Modules",
    icon: "🎨",
    color: "bg-emerald-400",
  },
  {
    name: "Framer Motion & GSAP",
    category: "Frontend",
    pct: "88%",
    level: "Micro-interactions, Page Transitions, ScrollTrigger",
    icon: "✨",
    color: "bg-green-500",
  },

  // Backend & Database
  {
    name: "Express.js & REST APIs",
    category: "Backend & DB",
    pct: "90%",
    level: "Node.js, Middleware, Controller Architecture",
    icon: "⚙️",
    color: "bg-emerald-500",
  },
  {
    name: "MongoDB & Mongoose",
    category: "Backend & DB",
    pct: "88%",
    level: "Schema Modeling, Aggregations, Indexing",
    icon: "🍃",
    color: "bg-teal-500",
  },
  {
    name: "BetterAuth, Firebase & JWT",
    category: "Backend & DB",
    pct: "90%",
    level: "Role-Based Auth, Google OAuth, Protected Routes",
    icon: "🔒",
    color: "bg-emerald-400",
  },

  // Tools
  {
    name: "Git & GitHub Workflow",
    category: "Tools",
    pct: "92%",
    level: "Branching, Pull Requests, Version Control",
    icon: "🐙",
    color: "bg-emerald-500",
  },
  {
    name: "Postman, ESLint, Prettier & NPM",
    category: "Tools",
    pct: "90%",
    level: "API Testing, Code Formatting, Dependency Management",
    icon: "🚀",
    color: "bg-teal-500",
  },

  // Data Structures
  {
    name: "Data Structures & C++",
    category: "Data Structures",
    pct: "88%",
    level: "Array, Linked List, Stack, Queue, Tree, Graph",
    icon: "📊",
    color: "bg-emerald-500",
  },

  // Soft Skills & Languages
  {
    name: "Problem Solving & Adaptability",
    category: "Soft Skills & Languages",
    pct: "92%",
    level: "Competitive Programming (Codeforces), Fast Learning Ability",
    icon: "🧠",
    color: "bg-emerald-500",
  },
  {
    name: "Languages (Bengali & English)",
    category: "Soft Skills & Languages",
    pct: "95%",
    level: "Bengali (Native) | English (Professional)",
    icon: "🌐",
    color: "bg-teal-500",
  },
];

const categoryTabs = [
  "All",
  "Frontend",
  "Backend & DB",
  "Tools",
  "Data Structures",
  "Soft Skills & Languages",
] as const;

export default function Skills() {
  const [activeTab, setActiveTab] = useState<typeof categoryTabs[number]>("All");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".skill-header-reveal", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const filteredSkills =
    activeTab === "All"
      ? resumeSkills
      : resumeSkills.filter((s) => s.category === activeTab);

  return (
    <section
      ref={containerRef}
      className="scroll-mt-24 py-12 sm:py-16 bg-zinc-950 relative overflow-hidden skills-section-trigger border-t border-brand-border/40"
      id="skills"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none -z-20"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="skill-header-reveal text-center mb-10 max-w-3xl mx-auto">
          <span className="text-emerald-400 font-sans font-semibold tracking-wider text-xs uppercase block mb-1">
            TECHNICAL SKILLSET
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 font-sans">
            Skills &amp; Proficiencies
          </h2>
          <p className="text-gray-400 text-sm font-sans font-normal">
            Technical capabilities across frontend engineering, backend architecture, data structures, and tools from my professional resume.
          </p>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Category Tabs */}
        <div className="skill-header-reveal flex justify-center flex-wrap gap-2 mb-10">
          {categoryTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-sans transition-all duration-300 ${
                activeTab === tab
                  ? "bg-emerald-500 text-zinc-950 font-bold shadow-lg shadow-emerald-500/20 border border-emerald-400"
                  : "bg-zinc-900/80 text-gray-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="bg-zinc-900/70 backdrop-blur-sm p-6 rounded-2xl border border-zinc-800 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-2xl p-2.5 bg-zinc-950 border border-zinc-800 rounded-xl">
                      {skill.icon}
                    </span>
                    <span className="text-[10px] font-sans font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 font-sans">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-sans mb-4 leading-snug">
                    {skill.level}
                  </p>
                </div>

                {/* Progress Bar Container */}
                <div className="pt-2 border-t border-zinc-800/80">
                  <div className="flex justify-between text-[11px] font-sans mb-1.5">
                    <span className="text-gray-400 font-medium">Proficiency</span>
                    <span className="text-emerald-400 font-bold">{skill.pct}</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: skill.pct }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full ${skill.color}`}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
