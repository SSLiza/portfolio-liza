"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Database,
  Wrench,
  Sparkles,
  Zap,
  Code2,
  BrainCircuit,
} from "lucide-react";

export interface SkillItem {
  name: string;
  label: string;
  category: "Frontend" | "Backend & DB" | "Tools";
  iconType: string;
}

// Tech Icon components with vibrant branding SVGs
const TechIcon = ({ iconType, className = "w-12 h-12" }: { iconType: string; className?: string }) => {
  switch (iconType) {
    case "html5":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.75 2.25L5.4375 21.1875L12 23.025L18.5625 21.1875L20.25 2.25H3.75Z" fill="#E34F26" />
          <path d="M12 3.9375V21.225L17.2125 19.7625L18.525 3.9375H12Z" fill="#EF652A" />
          <path d="M12 8.4375H7.5L7.2 5.0625H12V8.4375ZM12 13.6875H9.6L9.375 11.0625H7.05L7.5 16.125H12V13.6875Z" fill="white" />
          <path d="M12 8.4375V5.0625H16.8L16.5 8.4375H12ZM12 13.6875V16.125L14.4375 15.4688L14.7 12.5H16.8L16.2 18.0938L12 19.25V13.6875Z" fill="#ECECEC" />
        </svg>
      );

    case "css3":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.75 2.25L5.4375 21.1875L12 23.025L18.5625 21.1875L20.25 2.25H3.75Z" fill="#1572B6" />
          <path d="M12 3.9375V21.225L17.2125 19.7625L18.525 3.9375H12Z" fill="#3392FF" />
          <path d="M12 8.4375H7.5L7.3 5.0625H12V8.4375ZM12 13.6875H7.7L7.5 11.0625H12V13.6875Z" fill="white" />
          <path d="M12 8.4375V5.0625H16.7L16.4 8.4375H12ZM12 13.6875V16.125L14.4 15.4688L14.6 12.5H16.8L16.2 18.0938L12 19.25V13.6875Z" fill="#ECECEC" />
        </svg>
      );

    case "javascript":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M12.9 18.06C13.62 18.57 14.48 18.96 15.5 18.96C16.92 18.96 17.82 18.25 17.82 17.07C17.82 13.9 13.52 14.42 13.52 11.23C13.52 9.53 14.97 8.35 17.2 8.35C18.23 8.35 19.12 8.64 19.78 9.07L18.95 10.74C18.41 10.38 17.75 10.15 17.11 10.15C16.14 10.15 15.57 10.63 15.57 11.38C15.57 14.42 19.87 13.87 19.87 17.04C19.87 19.11 18.2 20.76 15.42 20.76C14.26 20.76 13.2 20.37 12.44 19.8L12.9 18.06ZM7.1 14.07C7.1 14.88 7.28 15.52 7.6 15.97C8.07 16.6 8.78 16.9 9.87 16.9C10.61 16.9 11.23 16.74 11.68 16.48L12.18 18.06C11.52 18.48 10.59 18.77 9.4 18.77C7.9 18.77 6.8 18.22 6.08 17.23C5.52 16.45 5.25 15.35 5.25 13.95V8.55H7.1V14.07Z"
            fill="#000000"
          />
        </svg>
      );

    case "typescript":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M13.71 17.86C14.21 18.17 14.88 18.37 15.65 18.37C16.89 18.37 17.65 17.75 17.65 16.75C17.65 14.19 13.9 14.54 13.9 11.96C13.9 10.58 15.08 9.63 16.94 9.63C17.79 9.63 18.52 9.83 19.04 10.12L18.42 11.66C17.97 11.4 17.39 11.23 16.74 11.23C15.75 11.23 15.18 11.7 15.18 12.44C15.18 14.93 18.93 14.5 18.93 17.17C18.93 18.73 17.58 19.97 15.42 19.97C14.47 19.97 13.53 19.68 12.98 19.34L13.71 17.86ZM7.39 11.38H4.72V9.82H12.63V11.38H9.96V19.78H7.39V11.38Z"
            fill="white"
          />
        </svg>
      );

    case "react":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      );

    case "nextjs":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11" fill="#000000" stroke="#333333" strokeWidth="1" />
          <path d="M14.88 16.48L9.22 8.78H7.67V16.48H9.22V11.08L13.84 17.52C14.21 17.21 14.56 16.86 14.88 16.48Z" fill="white" />
          <path d="M16.33 8.78H14.78V16.48H16.33V8.78Z" fill="white" />
        </svg>
      );

    case "tailwind":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 6C9.33333 6 7.66667 7.33333 7 10C8 8.66667 9.16667 8.16667 10.5 8.5C11.3333 8.70833 11.9583 9.34583 12.625 10.025C13.75 11.1625 15.0417 12.5 18 12.5C20.6667 12.5 22.3333 11.1667 23 8.5C22 9.83333 20.8333 10.3333 19.5 10C18.6667 9.79167 18.0417 9.15417 17.375 8.475C16.25 7.3375 14.9583 6 12 6ZM7 12.5C4.33333 12.5 2.66667 13.8333 2 16.5C3 15.1667 4.16667 14.6667 5.5 15C6.33333 15.2083 6.95833 15.8458 7.625 16.525C8.75 17.6625 10.0417 19 13 19C15.6667 19 17.3333 17.6667 18 15C17 16.3333 15.8333 16.8333 14.5 16.5C13.6667 16.2917 13.0417 15.6542 12.375 14.975C11.25 13.8375 9.95833 12.5 7 12.5Z"
            fill="#38BDF8"
          />
        </svg>
      );

    case "daisyui":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#1AD1A5" />
          <circle cx="12" cy="12" r="5" fill="#18181B" />
          <circle cx="12" cy="12" r="2.5" fill="#1AD1A5" />
        </svg>
      );

    case "nodejs":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7.77V16.23L12 22L22 16.23V7.77L12 2Z" fill="#339933" />
          <path d="M12 4.5L4 9.12V14.88L12 19.5L20 14.88V9.12L12 4.5Z" fill="#18181B" />
          <path d="M12 7L7 9.88V14.12L12 17L17 14.12V9.88L12 7Z" fill="#339933" />
        </svg>
      );

    case "mongodb":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C12 2 6.5 7.5 6.5 13.5C6.5 17.5 9.5 20.5 11.5 21.8V22H12.5V21.8C14.5 20.5 17.5 17.5 17.5 13.5C17.5 7.5 12 2 12 2ZM12.3 19.2C12.1 19.2 12 18.5 12 18.5V4.2C12 4.2 15.8 8.8 15.8 13.5C15.8 16.6 13.8 18.9 12.3 19.2Z" fill="#47A248" />
        </svg>
      );

    case "firebase":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 17.5L7.2 3.1C7.3 2.5 8.1 2.3 8.5 2.8L12 8.2L4.5 17.5Z" fill="#FFCA28" />
          <path d="M14.8 7.8L12.5 3.3C12.2 2.8 11.4 2.8 11.1 3.3L4.5 17.5L14.8 7.8Z" fill="#FFA000" />
          <path d="M4.5 17.5L11.5 21.6C11.8 21.8 12.2 21.8 12.5 21.6L19.5 17.5L15.6 9.8L4.5 17.5Z" fill="#F57C00" />
        </svg>
      );

    case "git":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.5 11.1L12.9 2.5C12.3 1.9 11.3 1.9 10.7 2.5L2.5 10.7C1.9 11.3 1.9 12.3 2.5 12.9L11.1 21.5C11.7 22.1 12.7 22.1 13.3 21.5L21.5 13.3C22.1 12.7 22.1 11.7 21.5 11.1ZM13.8 14.8C13.4 15.3 12.7 15.5 12.1 15.3L9.9 17.5C10 17.9 9.9 18.5 9.5 18.9C8.9 19.5 7.9 19.5 7.3 18.9C6.7 18.3 6.7 17.3 7.3 16.7C7.7 16.3 8.3 16.2 8.7 16.3L10.9 14.1C10.8 13.7 10.9 13.1 11.3 12.7C11.8 12.2 12.7 12.1 13.3 12.5L15.3 10.5C15.2 10.1 15.3 9.5 15.7 9.1C16.3 8.5 17.3 8.5 17.9 9.1C18.5 9.7 18.5 10.7 17.9 11.3C17.5 11.7 16.9 11.8 16.5 11.7L14.5 13.7C14.7 14.1 14.5 14.5 13.8 14.8Z" fill="#F05032" />
        </svg>
      );

    case "github":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            fill="white"
          />
        </svg>
      );

    case "postman":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#FF6C37" />
          <path d="M16 10L12 14L8 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "cpp":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.4 12L12 2L1.6 12L12 22L22.4 12Z" fill="#00599C" />
          <path d="M9.5 14.5C8.7 13.8 8.2 12.8 8.2 11.6C8.2 9.6 9.8 8 11.8 8C12.8 8 13.7 8.4 14.4 9.1L15.8 7.7C14.7 6.6 13.3 6 11.8 6C8.7 6 6.2 8.5 6.2 11.6C6.2 14.7 8.7 17.2 11.8 17.2C13.3 17.2 14.7 16.6 15.8 15.5L14.4 14.1C13.7 14.8 12.8 15.2 11.8 15.2C10.8 15.2 9.9 14.8 9.5 14.5Z" fill="white" />
          <path d="M17 11V10H16V11H15V12H16V13H17V12H18V11H17ZM20 11V10H19V11H18V12H19V13H20V12H21V11H20Z" fill="white" />
        </svg>
      );

    default:
      return <Code2 className={`${className} text-emerald-400`} />;
  }
};

const resumeSkills: SkillItem[] = [
  // Frontend
  {
    name: "TypeScript",
    label: "TYPESCRIPT",
    category: "Frontend",
    iconType: "typescript",
  },
  {
    name: "Next.js",
    label: "NEXT JS",
    category: "Frontend",
    iconType: "nextjs",
  },
  
  {
    name: "React.js",
    label: "REACT JS",
    category: "Frontend",
    iconType: "react",
  },
  {
    name: "Tailwind CSS",
    label: "TAILWIND CSS",
    category: "Frontend",
    iconType: "tailwind",
  },
  {
    name: "DaisyUI & HeroUI",
    label: "DAISY UI",
    category: "Frontend",
    iconType: "daisyui",
  },
  
  {
    name: "HTML5",
    label: "HTML",
    category: "Frontend",
    iconType: "html5",
  },
  {
    name: "CSS3",
    label: "CSS",
    category: "Frontend",
    iconType: "css3",
  },

  // Backend & DB
  {
    name: "Node.js & Express",
    label: "NODE JS",
    category: "Backend & DB",
    iconType: "nodejs",
  },
  {
    name: "MongoDB & Mongoose",
    label: "MONGODB",
    category: "Backend & DB",
    iconType: "mongodb",
  },
  {
    name: "C++ & Data Structures",
    label: "C++ & DSA",
    category: "Backend & DB",
    iconType: "cpp",
  },

  // Tools
  {
    name: "GitHub",
    label: "GITHUB",
    category: "Tools",
    iconType: "github",
  },
  {
    name: "Firebase & BetterAuth",
    label: "FIREBASE",
    category: "Tools",
    iconType: "firebase",
  },
  {
    name: "Git & Version Control",
    label: "GIT",
    category: "Tools",
    iconType: "git",
  },
  {
    name: "Postman & DevTools",
    label: "POSTMAN",
    category: "Tools",
    iconType: "postman",
  },
];

const categoryTabs = [
  { id: "FRONTEND", label: "FRONTEND", filter: "Frontend", icon: Monitor },
  { id: "BACKEND & DB", label: "BACKEND & DB", filter: "Backend & DB", icon: Database },
  { id: "TOOLS", label: "TOOLS", filter: "Tools", icon: Wrench },
  { id: "ALL", label: "ALL", filter: "All", icon: Sparkles },
] as const;

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("FRONTEND");
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

  const activeCategoryMeta = categoryTabs.find((t) => t.id === activeTab) || categoryTabs[0];

  const filteredSkills =
    activeCategoryMeta.filter === "All"
      ? resumeSkills
      : resumeSkills.filter((s) => s.category === activeCategoryMeta.filter);

  return (
    <section
      ref={containerRef}
      className="scroll-mt-24 py-16 sm:py-20 bg-zinc-950 relative overflow-hidden skills-section-trigger border-t border-brand-border/40"
      id="skills"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-bg pointer-events-none -z-20"></div>

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="skill-header-reveal text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-sans">
            Skills
          </h2>
        </div>

        {/* 3 Main Category Tabs + All */}
        <div className="skill-header-reveal flex justify-center items-center flex-wrap gap-3 mb-10">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-mono tracking-wider font-bold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 text-zinc-950 shadow-lg shadow-emerald-500/25 ring-2 ring-emerald-400/80 border border-emerald-300 scale-105"
                    : "bg-zinc-900/80 text-gray-400 border border-zinc-800 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/80"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-zinc-950" : "text-emerald-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Grid Container matching reference image */}
        <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-emerald-950/20 relative overflow-hidden">
          {/* Subtle Top Graphic Border Highlight */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

          {/* Compact Grid for Skill Card Tiles */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -3, scale: 1.03 }}
                  className="bg-[#121215] border border-zinc-800/90 hover:border-emerald-500/60 hover:bg-zinc-900/90 rounded-xl py-3 px-3.5 flex flex-col items-center justify-center text-center group cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  {/* Compact Centered Logo Icon */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center mb-1.5 transition-transform duration-300 group-hover:scale-110">
                    <TechIcon iconType={skill.iconType} className="w-full h-full object-contain" />
                  </div>

                  {/* Centered Uppercase Skill Label */}
                  <h4 className="text-[10px] sm:text-xs font-bold tracking-wider text-zinc-200 uppercase font-sans group-hover:text-emerald-400 transition-colors leading-tight">
                    {skill.label}
                  </h4>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
