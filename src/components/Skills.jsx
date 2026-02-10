import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaFigma,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "#e34f26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572b6" },
  { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
  { name: "Java", icon: FaJava, color: "#f89820" },
  { name: "Python", icon: FaPython, color: "#3776ab" },
  { name: "React", icon: FaReact, color: "#61dafb" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Git", icon: FaGitAlt, color: "#f05032" },
  { name: "GitHub", icon: FaGithub, color: "#e5e7eb" },
  { name: "Linux", icon: FaLinux, color: "#fcc624" },
  { name: "Figma", icon: FaFigma, color: "#a259ff" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        py-24 sm:py-32
        animate-fade-up
        transition-all
        duration-700
        ease-out
        will-change-[opacity,filter,transform]
        blur-enter
      "
    >

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gradient mb-4">
          Tech Stack
        </h2>

        <p className="text-slate-400 max-w-xl mx-auto mb-16">
          Technologies and tools I use across system, security, and frontend development.
        </p>

        {/* Marquee */}
        <div className="relative mb-24 overflow-hidden pt-8">
          <div className="tech-marquee gap-14 px-6">
            {[...skills, ...skills].map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div
                  key={i}
                  className="group flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
                >
                  <Icon
                    className="text-5xl"
                    style={{
                      color: skill.color,
                      filter: "drop-shadow(0 0 12px rgba(255,255,255,0.15))",
                    }}
                  />
                  <span className="mt-2 text-sm text-slate-400 group-hover:text-white">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* SKILL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">

          <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <h3 className="font-semibold mb-2 text-slate-100">
              Network & System
            </h3>
            <p className="text-sm text-slate-400">
              Linux-based systems, networking fundamentals, and system exploration.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <h3 className="font-semibold mb-2 text-slate-100">
              Cybersecurity
            </h3>
            <p className="text-sm text-slate-400">
              Red team mindset, security testing, and offensive exploration.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <h3 className="font-semibold mb-2 text-slate-100">
              Frontend Development
            </h3>
            <p className="text-sm text-slate-400">
              Building interfaces using React, Tailwind, and modern JavaScript.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <h3 className="font-semibold mb-2 text-slate-100">
              UI / UX Design
            </h3>
            <p className="text-sm text-slate-400">
              Designing clean, usable interfaces with Figma and design systems.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
