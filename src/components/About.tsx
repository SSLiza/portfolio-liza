"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const personalityCards = [
  {
    icon: "🚀",
    title: "Programming Journey",
    desc: "Started with C and C++ fundamentals, then evolved into full-stack web engineering using React, Next.js, Node.js, Express.js, MongoDB, and TypeScript.",
  },
  {
    icon: "💻",
    title: "Work I Enjoy",
    desc: "Building full-stack web applications, crafting responsive user interfaces, developing backend APIs, and exploring AI-powered applications.",
  },
  {
    icon: "🪴",
    title: "Hobbies & Interests",
    desc: "Outside of programming, I enjoy gardening, playing sports, and spending time with family and friends.",
  },
  {
    icon: "🧠",
    title: "Continuous Learner",
    desc: "Curious, hardworking, and dedicated learner who enjoys taking on new challenges and improving technical skills every day.",
  },
];

export default function About() {
  return (
    <section
      className="scroll-mt-24 py-10 sm:py-12 bg-zinc-950 relative overflow-hidden border-t border-zinc-800/80"
      id="about"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12 items-center max-w-7xl mx-auto mb-8">
          {/* Left Column: Image with Subtle Glow */}
          <div className="md:col-span-5 relative w-full max-w-[420px] justify-self-center">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-zinc-900 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"
                alt="About Shajeda Sultana - Developer Workspace"
                width={500}
                height={500}
                className="w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Main Story */}
          <div className="md:col-span-7 flex flex-col space-y-6">
            <div>
              <span className="text-emerald-400 font-sans font-semibold tracking-wider text-xs uppercase block mb-1">
                GET TO KNOW ME
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                Frontend Developer &amp; Full Stack Creator
              </h2>
            </div>

            <p className="text-gray-300 leading-relaxed text-base font-sans font-normal">
              I am a passionate <strong className="text-white font-semibold">Frontend Developer</strong> and Computer Science undergraduate at <strong className="text-emerald-400 font-semibold">Sylhet Engineering College</strong>. My coding journey started with deep curiosity about how computer software operates behind the scenes, leading me to master core Data Structures in C++ before diving into full-stack web engineering.
            </p>

            <p className="text-gray-300 leading-relaxed text-sm font-sans font-normal">
              I thrive on turning complex problems into intuitive, high-performance web applications using modern technologies like Next.js App Router, React 19, Express.js, MongoDB, and Tailwind CSS.
            </p>

            {/* Metric Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 border-y border-zinc-800/80 py-6">
              <div>
                <span className="text-3xl font-black text-white block tracking-tight font-sans">
                  5+
                </span>
                <p className="text-gray-400 text-xs font-sans font-medium uppercase tracking-wider mt-1">
                  Projects Built
                </p>
              </div>
              <div>
                <span className="text-3xl font-black text-white block tracking-tight font-sans">
                  30%
                </span>
                <p className="text-gray-400 text-xs font-sans font-medium uppercase tracking-wider mt-1">
                  Speed Optimization
                </p>
              </div>
              <div>
                <span className="text-3xl font-black text-emerald-400 block tracking-tight font-sans">
                  GPA 5.00
                </span>
                <p className="text-gray-400 text-xs font-sans font-medium uppercase tracking-wider mt-1">
                  HSC &amp; SSC Honors
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Personality, Journey & Hobbies Cards */}
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {personalityCards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-zinc-900/80 backdrop-blur-sm p-6 rounded-2xl border border-zinc-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-sans">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-sans font-normal">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
