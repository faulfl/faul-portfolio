import {
  FaPython,
  FaJava,
  FaFigma,
  FaFileExcel,
  FaFileWord,
  FaReact,
  FaGithub,
  FaLinux,
} from "react-icons/fa";

const skills = [
  { name: "Python", icon: FaPython, color: "#3776ab" },
  { name: "Java", icon: FaJava, color: "#f89820" },
  { name: "Figma", icon: FaFigma, color: "#a259ff" },
  { name: "Microsoft Excel", icon: FaFileExcel, color: "#22c55e" },
  { name: "Microsoft Word", icon: FaFileWord, color: "#2b579a" },
  { name: "React", icon: FaReact, color: "#61dafb" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Linux", icon: FaLinux, color: "#fcc624" },
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
        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Tech Stack
        </h2>

        <p className="text-slate-400 max-w-xl mx-auto mb-16">
          Technologies and tools I use for programming, system development, and
          UI design.
        </p>

        {/* MARQUEE */}
        <div className="relative mb-12 pt-6 flex justify-center overflow-hidden">
          <div className="w-full max-w-4xl">
            <div className="tech-marquee gap-12 px-8 py-6">
              {[...skills, ...skills, ...skills].map((skill, i) => {
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

                    <span className="mt-3 text-sm text-slate-400 group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SKILL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="group p-6 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="font-semibold mb-2 text-slate-100 group-hover:text-cyan-400 transition-colors">
              Programming
            </h3>
            <p className="text-sm text-slate-400">
              Building applications and solving problems using Python and Java.
            </p>
          </div>

          <div className="group p-6 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="font-semibold mb-2 text-slate-100 group-hover:text-cyan-400 transition-colors">
              UI / UX Design
            </h3>
            <p className="text-sm text-slate-400">
              Designing user interfaces and prototypes using Figma.
            </p>
          </div>

          <div className="group p-6 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="font-semibold mb-2 text-slate-100 group-hover:text-cyan-400 transition-colors">
              Office Tools
            </h3>
            <p className="text-sm text-slate-400">
              Data processing and documentation using Microsoft Excel and Word.
            </p>
          </div>

          <div className="group p-6 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="font-semibold mb-2 text-slate-100 group-hover:text-cyan-400 transition-colors">
              System Development
            </h3>
            <p className="text-sm text-slate-400">
              Developing and exploring digital systems through academic
              projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
