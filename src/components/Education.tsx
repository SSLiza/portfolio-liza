"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const educationTimelineData = [
  {
    years: "2023 – 2027",
    title: "B.Sc. in Computer Science and Engineering",
    company: "Sylhet Engineering College",
    type: "Education",
    desc: "Studying core computer science curriculum. Rigorous coursework in Data Structures (Arrays, Linked Lists, Stacks, Queues, Trees, Graphs), Object-Oriented Programming (C++), Operating Systems, Software Engineering, and Database Management Systems.",
    icon: "🎓",
    badge: "Undergraduate Degree",
  },
  {
    years: "2019 – 2021",
    title: "Higher Secondary Certificate (HSC)",
    company: "Scholarshome Major Tila, Sylhet",
    type: "Education",
    desc: "Completed higher secondary education in Science with a perfect GPA 5.00 / 5.00. Focus on Higher Mathematics, Physics, Chemistry, and Information Technology.",
    icon: "📜",
    badge: "GPA 5.00 / 5.00",
  },
  {
    years: "2017 – 2019",
    title: "Secondary School Certificate (SSC)",
    company: "Sylhet Government Pilot High School",
    type: "Education",
    desc: "Completed secondary school education with a perfect GPA 5.00 / 5.00 in Science group, building strong analytical and STEM foundations.",
    icon: "🏆",
    badge: "GPA 5.00 / 5.00",
  },
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Timeline line growth synced with scroll
      gsap.to(".timeline-progress-line", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        },
      });

      // Cards reveal slide up
      gsap.utils.toArray<HTMLElement>(".timeline-card-wrapper").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="scroll-mt-24 py-12 sm:py-16 bg-brand-bg relative overflow-hidden border-t border-zinc-800/80"
      id="education"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none -z-20"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-emerald-400 font-sans font-semibold tracking-wider text-xs uppercase block mb-1">
            ACADEMIC BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Educational Qualifications
          </h2>
          <p className="text-gray-400 text-sm font-sans font-normal">
            Formal education highlighting strong mathematical, analytical, and computer science engineering foundations.
          </p>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container relative max-w-4xl mx-auto pt-4 pb-8">
          {/* Base Background Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-800 -translate-x-1/2 origin-top pointer-events-none"></div>

          {/* Active Growing Scroll-Linked Line */}
          <div
            className="timeline-progress-line absolute left-6 md:left-1/2 top-0 w-[2px] bg-emerald-400 -translate-x-1/2 origin-top pointer-events-none shadow-sm shadow-emerald-400/50"
            style={{ height: "0%" }}
          ></div>

          {/* Timeline Items */}
          <div className="space-y-10">
            {educationTimelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`timeline-card-wrapper relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Anchor Point (Dot) */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-zinc-950 border-2 border-emerald-400 -translate-x-1/2 z-10 shadow-md shadow-emerald-400/30"></div>

                  {/* Card Content wrapper */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-10" : "md:pl-10"}`}>
                    <div className="bg-zinc-900/80 backdrop-blur-sm p-7 rounded-2xl border border-zinc-800/90 hover:border-emerald-500/40 transition-all duration-300 shadow-xl group">
                      {/* Meta information */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="text-xs font-sans font-semibold text-emerald-400 bg-emerald-950/90 border border-emerald-500/30 px-3 py-1 rounded-lg uppercase tracking-wider">
                          {item.years}
                        </span>
                        <div className="text-2xl p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl" title={item.type}>
                          {item.icon}
                        </div>
                      </div>

                      {/* Header info */}
                      <h3 className="text-xl font-bold text-white mb-1 font-sans leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-emerald-400 font-sans font-semibold mb-3">
                        {item.company}
                      </p>

                      <div className="inline-block bg-zinc-950 border border-zinc-800 px-2.5 py-1 rounded-md text-xs font-sans font-bold text-emerald-400 mb-3">
                        {item.badge}
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed font-sans font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
