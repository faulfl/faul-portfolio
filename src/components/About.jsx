export default function About() {
  return (
    <section
      id="about"
      className="
        scroll-mt-24 sm:scroll-mt-32
        py-24 sm:py-32
        relative overflow-hidden
      "
    >
      <div
        className="
          max-w-6xl mx-auto px-6
          grid md:grid-cols-2
          gap-12 md:gap-20
          items-start
        "
      >
        {/* ===== LEFT : ABOUT TEXT ===== */}
        <div className="animate-fade-up text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>

          <p className="text-slate-400 leading-relaxed mb-5 text-sm sm:text-base">
            I am an Informatics student with a strong interest in software development, 
            UI/UX design, and digital system development. I enjoy building systems, 
            designing user-friendly interfaces, and developing solutions that can 
            support real-world digital needs.
          </p>

          <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
            I have experience working with technologies such as Python, Java, 
            Microsoft Excel, and Figma to develop applications, design interfaces, 
            and support system development. Through academic projects, I continue 
            to improve my skills in programming, system design, and problem solving.
          </p>
        </div>

        {/* ===== RIGHT : SKILL HIGHLIGHTS ===== */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2
            gap-4 sm:gap-6
            animate-fade-up animate-delay-2
          "
        >
          <SkillCard
            title="Software Development"
            desc="Building applications using Python & Java"
            gradient="from-cyan-500/20 via-transparent to-blue-500/20"
          />

          <SkillCard
            title="UI/UX Design"
            desc="Designing user interfaces with Figma"
            gradient="from-purple-500/20 via-transparent to-cyan-500/20"
          />

          <SkillCard
            title="System Development"
            desc="Developing and managing digital systems"
            gradient="from-red-500/20 via-transparent to-orange-500/20"
          />

          <SkillCard
            title="Technical Tools"
            desc="Python, Java, Microsoft Excel & Figma"
            gradient="from-emerald-500/20 via-transparent to-cyan-500/20"
          />
        </div>
      </div>
    </section>
  );
}

/* ===== REUSABLE CARD ===== */
function SkillCard({ title, desc, gradient }) {
  return (
    <div
      className="
        group relative
        p-5 sm:p-6
        rounded-xl
        border border-white/10
        bg-white/[0.02]
        backdrop-blur-sm
        overflow-hidden
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      {/* glow aura */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br ${gradient} blur-xl`}
      />

      <h3 className="relative font-semibold text-slate-200 mb-1 text-sm sm:text-base">
        {title}
      </h3>

      <p className="relative text-xs sm:text-sm text-slate-400">
        {desc}
      </p>
    </div>
  );
}