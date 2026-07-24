"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { FileText, ArrowRight } from "lucide-react";

const techStackList = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "AI & LLMs",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-pre", {
        y: 20,
        opacity: 0,
        duration: 0.8,
      });

      tl.from(
        ".hero-title",
        {
          y: 35,
          opacity: 0,
          duration: 0.9,
        },
        "-=0.6"
      );

      tl.from(
        ".hero-desc",
        {
          y: 25,
          opacity: 0,
          duration: 0.9,
        },
        "-=0.7"
      );

      tl.from(
        ".hero-tech",
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
        },
        "-=0.6"
      );

      tl.from(
        ".hero-cta",
        {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
        },
        "-=0.6"
      );

      tl.from(
        ".hero-image-container",
        {
          scale: 0.95,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=1.0"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] flex items-center pt-8 pb-12 sm:pb-16 overflow-hidden"
      id="home"
    >
      {/* Background Grids & Ambient Glows */}
      <div className="absolute inset-0 grid-bg pointer-events-none -z-20"></div>
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none -z-10 animate-float-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-teal-400/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 max-w-7xl grid md:grid-cols-12 gap-12 items-center py-8">
        {/* Left side content */}
        <div className="md:col-span-7 flex flex-col space-y-6">
          
          {/* Status Badge & Roles */}
          <div className="space-y-3.5">
            <div className="flex flex-wrap gap-3 items-center">
              {/* Availability Status Pill */}
              <div className="hero-pre inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-sans font-semibold shadow-md shadow-emerald-500/10 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>Available for Work</span>
              </div>
            </div>

            {/* Main Headline */}
            <div>
              <span className="hero-pre text-emerald-400 font-sans font-bold text-lg tracking-wider uppercase block mb-1">
              Hi, I&apos;m Shajeda Sultana
              </span>
              <p className="hero-title text-xl sm:text-5xl lg:text-6xl font-bold text-gray-300 mt-2 font-sans tracking-tight">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* Authentic Description */}
          <p className="hero-desc text-gray-300 text-base leading-relaxed max-w-xl font-sans font-normal">
            I build modern, responsive, and scalable web applications using React, Next.js, TypeScript, Node.js, Express, and MongoDB. Currently exploring AI-powered applications and modern web technologies.
          </p>

          {/* Action Buttons */}
          <div className="hero-cta flex flex-wrap gap-4 pt-2 items-center">
            {/* Download Resume Button */}
            <motion.a
              href="https://drive.google.com/file/d/1DuHQghlF_WenRx-t3m0R-qzDY-JYXjec/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 h-12 px-7 rounded-xl font-extrabold shadow-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
              id="download-resume-hero"
            >
              <FileText className="w-4.5 h-4.5" />
              <span>Download Resume</span>
            </motion.a>

            {/* View Projects Button */}
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-zinc-900 hover:bg-zinc-800 text-white h-12 px-7 rounded-xl font-semibold border border-zinc-700/80 transition-all flex items-center justify-center gap-2 text-sm shadow-md group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Embedded Social Media Buttons */}
          <div className="hero-cta flex items-center gap-3.5 pt-2">
            <span className="text-xs font-sans text-gray-400 uppercase tracking-widest font-semibold mr-1">Let&apos;s Connect:</span>
            
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-700/80 hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-400 text-gray-300 flex items-center justify-center transition-all duration-300 shadow-sm"
              title="GitHub Profile"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-700/80 hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-400 text-gray-300 flex items-center justify-center transition-all duration-300 shadow-sm"
              title="LinkedIn Profile"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Twitter/X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X Profile"
              className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-700/80 hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-400 text-gray-300 flex items-center justify-center transition-all duration-300 shadow-sm"
              title="Twitter / X Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-700/80 hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-400 text-gray-300 flex items-center justify-center transition-all duration-300 shadow-sm"
              title="Facebook Profile"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right side photo representation */}
        <div className="md:col-span-5 relative justify-self-center lg:justify-self-end w-full max-w-[420px]">
          <div className="hero-image-container relative">
            {/* Glowing Backdrop Circle */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/30 to-teal-400/20 rounded-[2.5rem] blur-2xl opacity-70 -z-10 animate-pulse duration-[5s]"></div>

            {/* Main Picture Frame */}
            <div className="relative aspect-[4/4.2] overflow-hidden rounded-[2.2rem] border-2 border-emerald-500/30 bg-zinc-950 shadow-2xl group shadow-emerald-500/10">
              <Image
                src="https://i.ibb.co.com/fVSCxrwV/Screenshot-2026-06-04-182113.png"
                alt="Shajeda Sultana"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                priority
                className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent pointer-events-none"></div>

              {/* Floating Code Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 backdrop-blur-md p-3.5 rounded-xl border border-zinc-800 flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-xs font-sans text-gray-200 font-semibold">Shajeda Sultana</span>
                </div>
                <span className="text-[11px] font-sans text-emerald-400 bg-emerald-950 border border-emerald-500/30 px-2.5 py-0.5 rounded-md uppercase font-bold tracking-wider">
                  Full Stack Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
