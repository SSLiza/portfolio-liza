"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Code, Server } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  img: string;
  desc: string;
  tech: string[];
  live: string;
  clientGithub: string;
  serverGithub: string;
  features: string[];
  challenges: string[];
  futurePlans: string[];
}

const projectsData: ProjectItem[] = [
  {
    id: "ai-verse",
    title: "AIverse — AI Prompt Sharing & Marketplace Platform",
    category: "Full Stack",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80",
    desc: "A full-stack e-commerce marketplace platform for buying, sharing, and selling optimized AI prompts for ChatGPT, Midjourney, and Stable Diffusion.",
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Hero UI", "BetterAuth", "Express.js", "MongoDB", "Stripe API"],
    live: "https://aiverse.vercel.app",
    clientGithub: "https://github.com",
    serverGithub: "https://github.com",
    features: [
      "Role-Based Dashboard (User, Creator & Admin)",
      "Stripe Premium Subscription System",
      "AI Prompt Marketplace with Search, Filter & Sorting",
      "Theme Toggle (Dark / Light presets)",
    ],
    challenges: [
      "Securing prompt buyer validation & role-based authorization using BetterAuth.",
      "Optimizing prompt query caching and instant search filters for fast performance.",
    ],
    futurePlans: [
      "Integrating real-time AI prompt testing sandbox.",
      "Adding multi-currency payment checkout options.",
    ],
  },
  {
    id: "sport-nest",
    title: "SportNest — Sports Facility Booking Platform",
    category: "Full Stack",
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80",
    desc: "A mobile-first sports facility booking platform enabling users to browse, export, and reserve sports arenas with role-based access control.",
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Hero UI", "BetterAuth", "Express.js", "MongoDB"],
    live: "https://sportnest.vercel.app",
    clientGithub: "https://github.com",
    serverGithub: "https://github.com",
    features: [
      "Responsive, mobile-first UI for browsing and exporting sports facilities",
      "Secure user authentication with login/logout and role-based access control",
      "Full CRUD-based facility booking system powered by API-driven backend",
    ],
    challenges: [
      "Handling concurrent booking slot reservations to prevent double-booking collisions.",
      "Building seamless client-side filtering by location, price, and facility availability.",
    ],
    futurePlans: [
      "Integrating interactive interactive map views for facility navigation.",
      "Adding real-time SMS & email booking confirmation notifications.",
    ],
  },
  {
    id: "tiles-gallery",
    title: "Tiles Gallery — Full-Stack Tile Showcase Platform",
    category: "Full Stack",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    desc: "A modern tile showcase platform featuring searchable product galleries, detailed material specs, Google OAuth authentication, and animated product arrival marquees.",
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Hero UI", "MongoDB", "BetterAuth", "React Icons", "Animate.css"],
    live: "https://tilesgallery.vercel.app",
    clientGithub: "https://github.com",
    serverGithub: "https://github.com",
    features: [
      "Modern home page with hero banner, CTA, and animated marquee for new arrivals",
      "Searchable tile gallery with responsive card layouts and detailed product pages displaying pricing, materials, dimensions, styles, and tags",
      "Secure authentication (email/password and Google OAuth), protected routes, user profile management, and optimized loading states",
    ],
    challenges: [
      "Implementing fast multi-criteria client-side filtering for tile dimensions, styles, and pricing.",
      "Designing responsive high-contrast grid galleries optimized for mobile viewports.",
    ],
    futurePlans: [
      "Adding 3D room preview visualizer for selected tiles.",
      "Supporting bulk quote export and customer inquiry tracking.",
    ],
  },
];

const categoryTabs = ["All", "Full Stack"] as const;

export default function Projects() {
  const [activeTab, setActiveTab] = useState<typeof categoryTabs[number]>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".project-reveal-trigger", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <section
      ref={containerRef}
      className="scroll-mt-24 py-12 sm:py-16 bg-brand-bg relative overflow-hidden border-t border-brand-border/40"
      id="projects"
    >
      <div className="container mx-auto px-6 max-w-7xl projects-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 max-w-7xl mx-auto">
          <div className="project-reveal-trigger mb-6 md:mb-0">
            <span className="text-emerald-400 font-sans font-semibold tracking-wider text-xs uppercase block mb-1">
              PORTFOLIO PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2 font-sans">
              Featured Web Applications
            </h2>
            <p className="text-gray-400 text-sm font-sans font-normal">
              Featured full-stack web applications built with Next.js, Express.js, MongoDB, BetterAuth, and Tailwind CSS.
            </p>
          </div>

          {/* Filter Category Tabs */}
          <div className="project-reveal-trigger flex flex-wrap gap-2">
            {categoryTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-sans transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-emerald-500 text-zinc-950 font-bold shadow-md shadow-emerald-500/20 border border-emerald-400"
                    : "bg-zinc-900/80 text-gray-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800/90 overflow-hidden hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image Wrapper */}
                  <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
                    <span className="absolute top-3 right-3 text-[10px] font-sans font-bold text-emerald-400 bg-emerald-950/90 border border-emerald-500/30 px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 leading-snug font-sans group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans mb-4 line-clamp-3">
                      {project.desc}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tech.slice(0, 4).map((t) => (
                        <span key={t} className="px-2.5 py-1 bg-zinc-950 border border-zinc-800 text-[10px] font-sans font-medium text-emerald-400 rounded-md">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-[10px] font-sans text-gray-400 rounded-md">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* View Details CTA Button */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-zinc-950 border border-emerald-500/30 py-2.5 rounded-xl text-xs font-sans font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                    id={`view-details-${project.id}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Project Details
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 2-Column One-Page Interactive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            ></motion.div>

            {/* 2-Column Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8 max-h-[92vh] overflow-y-auto my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-white flex items-center justify-center transition-colors z-30"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* 2-Column Grid */}
              <div className="grid md:grid-cols-12 gap-7 items-start">
                
                {/* Left Column: Image, Title, Action Links */}
                <div className="md:col-span-5 flex flex-col space-y-4">
                  {/* Image Frame */}
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-md">
                    <Image
                      src={selectedProject.img}
                      alt={selectedProject.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent"></div>
                  </div>

                  {/* Title & Category Badge */}
                  <div>
                    <span className="text-[10px] font-sans font-semibold text-emerald-400 bg-emerald-950 border border-emerald-500/30 px-2.5 py-0.5 rounded-md uppercase tracking-wider mb-2 inline-block">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight font-sans">
                      {selectedProject.title}
                    </h2>
                  </div>

                  {/* Action Link Buttons: Live Link, Client Code, Server Code */}
                  <div className="flex flex-col gap-2 pt-1">
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold px-4 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Link</span>
                    </a>
                    <a
                      href={selectedProject.clientGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-zinc-900 hover:bg-zinc-800 text-gray-200 border border-zinc-800 font-semibold px-4 py-2 rounded-xl text-xs flex items-center justify-center gap-2 transition-all"
                    >
                      <Code className="w-4 h-4 text-emerald-400" />
                      <span>Client Code</span>
                    </a>
                    <a
                      href={selectedProject.serverGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-zinc-900 hover:bg-zinc-800 text-gray-200 border border-zinc-800 font-semibold px-4 py-2 rounded-xl text-xs flex items-center justify-center gap-2 transition-all"
                    >
                      <Server className="w-4 h-4 text-emerald-400" />
                      <span>Server Code</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Overview, Key Features, Tech Stack, Challenges & Future Plans */}
                <div className="md:col-span-7 flex flex-col space-y-4 text-xs font-sans">
                  
                  {/* Overview */}
                  <div>
                    <h4 className="text-xs font-sans font-semibold text-emerald-400 uppercase tracking-wider mb-1.5">
                      Project Description
                    </h4>
                    <p className="text-gray-300 leading-relaxed font-sans text-xs sm:text-sm font-normal">
                      {selectedProject.desc}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80">
                    <h4 className="text-xs font-sans font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                      Key Features
                    </h4>
                    <ul className="space-y-1.5 text-gray-300 text-xs font-sans list-disc list-inside">
                      {selectedProject.features.map((f, i) => (
                        <li key={i} className="leading-relaxed">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div>
                    <h4 className="text-xs font-sans font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-emerald-400 font-sans font-medium text-[11px] rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technical Challenges */}
                  <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80">
                    <h4 className="text-xs font-sans font-semibold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <span>⚠️</span> Technical Challenges Faced
                    </h4>
                    <ul className="space-y-1.5 text-gray-300 text-xs font-sans list-disc list-inside">
                      {selectedProject.challenges.map((c, i) => (
                        <li key={i} className="leading-relaxed">
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
