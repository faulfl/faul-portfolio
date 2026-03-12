import { FaGithub, FaFigma, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "LaundryFlow – Laundry Management System",
    category: "system",
    desc: "A web-based laundry management system designed to manage orders, customers, and laundry processing workflows efficiently.",
    tech: ["JavaScript", "Web System", "Database", "Management System"],
    github: "https://github.com/Bima-162/sistem-laundry.git",
    live: "",
    figma: "",
  },
  {
    title: "IMK Lab Project – UI/UX Design",
    category: "design",
    desc: "User interface and user experience design project created for the Human Computer Interaction (IMK) course, focusing on usability and interaction flow.",
    tech: ["Figma", "UI/UX Design", "Prototype", "Interaction Design"],
    github: "",
    live: "",
    figma:
      "https://www.figma.com/design/TRwPwA0rGNWuiQpFh2BD1y/KELOMPOK-10?node-id=0-1&t=SLp9KgUIHDJQZUTD-1",
  },
  {
    title: "Network & System Lab (Cisco NetAcad)",
    category: "system",
    desc: "Hands-on networking and system laboratory exercises covering networking fundamentals, system configuration, and network troubleshooting.",
    tech: ["Cisco NetAcad", "Networking", "System Lab", "Practice"],
    github: "",
    live: "https://www.netacad.com/",
    figma: "",
  },
];

const categoryStyle = {
  system: {
    border: "border-cyan-500/40",
    badge: "bg-cyan-500/10 text-cyan-400",
  },
  design: {
    border: "border-purple-500/40",
    badge: "bg-purple-500/10 text-purple-400",
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="py-24 sm:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 text-center"
        >
          Projects
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto text-center mb-16 leading-relaxed">
          Selected academic and personal projects related to software
          development, UI/UX design, and system exploration.
        </p>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const style = categoryStyle[p.category];

            return (
              <div
                key={i}
                className={`
                  group
                  p-6 rounded-xl
                  flex flex-col justify-between

                  border-t-2 ${style.border}
                  border border-white/10

                  bg-white/[0.04]
                  shadow-xl
                  backdrop-blur-md

                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                `}
              >
                {/* CONTENT */}
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>

                  {/* TECH BADGES */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className={`
                          text-xs font-medium px-2 py-1 rounded-full
                          ${style.badge}
                        `}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LINKS */}
                <div className="flex gap-4 mt-6 text-slate-400">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="hover:text-white transition-colors"
                    >
                      <FaGithub />
                    </a>
                  )}

                  {p.figma && (
                    <a
                      href={p.figma}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Figma Design"
                      className="hover:text-white transition-colors"
                    >
                      <FaFigma />
                    </a>
                  )}

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                      className="hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}