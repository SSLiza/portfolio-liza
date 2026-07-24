"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    years: "Nov 2025 – Present",
    title: "Frontend Developer",
    company: "Freelance / Personal Projects",
    location: "Sylhet, Bangladesh",
    type: "Work",
    desc: "Developed 5+ highly responsive web applications using React.js and Next.js. Reduced average page load time by 30% through frontend optimization. Implemented authentication and CRUD systems serving 100+ active test users.",
    highlights: [
      "5+ Full-Stack & Frontend Web Applications Built",
      "30% Performance & Page Load Speed Optimization",
      "Authentication & CRUD Systems Serving 100+ Users",
    ],
    icon: Briefcase,
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".exp-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="scroll-mt-24 py-12 sm:py-16 bg-zinc-950 relative overflow-hidden border-t border-zinc-800/80 exp-trigger"
      id="experience"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none -z-20"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="text-emerald-400 font-sans font-semibold tracking-wider text-xs uppercase block mb-1">
            PROFESSIONAL EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 font-sans">
            Work &amp; Project Experience
          </h2>
          <p className="text-gray-400 text-sm font-sans font-normal">
            Hands-on professional experience building web applications and full-stack solutions.
          </p>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Experience Card Container */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((item, idx) => (
            <div
              key={idx}
              className="exp-card bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/90 hover:border-emerald-500/40 transition-all duration-300 shadow-xl group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-zinc-800/80">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl font-extrabold text-white font-sans">
                      {item.title}
                    </h3>
                    <span className="text-xs font-sans font-semibold text-emerald-400 bg-emerald-950 border border-emerald-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.years}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-emerald-400 font-sans">
                    {item.company} <span className="text-gray-400 font-normal">• {item.location}</span>
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans font-normal">
                {item.desc}
              </p>

              <div className="space-y-2">
                <span className="text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider block">
                  Key Achievements:
                </span>
                <div className="grid sm:grid-cols-3 gap-2.5">
                  {item.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="bg-zinc-950 border border-zinc-800 p-3 rounded-xl text-xs font-sans text-emerald-400 font-medium flex items-center gap-2"
                    >
                      <span>⚡</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
