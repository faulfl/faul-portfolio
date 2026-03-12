import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-24 sm:py-32"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* ===== TITLE ===== */}
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 text-center">
            Contact
        </h2>

        <p className="text-slate-400 theme-light:text-slate-600 max-w-xl mx-auto mb-14 text-sm sm:text-base leading-relaxed">
          Interested in collaboration, projects, or discussions around
          software development, programming, and UI/UX design? Feel free to reach out.
        </p>

        {/* ===== CONTACT CARD ===== */}
        <div
          className="
            p-8 sm:p-10
            rounded-2xl

            border border-white/10
            theme-light:border-slate-200

            bg-white/[0.04]
            theme-light:bg-white

            shadow-xl
            theme-light:shadow-md
            theme-light:shadow-slate-200/70

            backdrop-blur-md
            transition-all duration-300
          "
        >
          {/* ===== NAME ===== */}
          <h3 className="text-lg sm:text-xl font-semibold text-slate-100 theme-light:text-slate-900 mb-1">
            Faul Cahyaditya Wijaya
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 theme-light:text-slate-600 mb-10">
            Informatics Student • Software Development & UI/UX Enthusiast
          </p>

          {/* ===== CONTACT LINKS ===== */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-10">

            {/* EMAIL */}
            <ContactItem
              href="mailto:faullll76@gmail.com"
              label="Email"
              text="faullll76@gmail.com"
              icon={<FaEnvelope />}
            />

            {/* GITHUB */}
            <ContactItem
              href="https://github.com/faulfl"
              label="GitHub"
              text="github.com/faulfl"
              icon={<FaGithub />}
              external
            />

            {/* LINKEDIN */}
            <ContactItem
              href="https://www.linkedin.com/in/faul-cahyaditya-wijaya-36b32a328"
              label="LinkedIn"
              text="LinkedIn"
              icon={<FaLinkedin />}
              external
            />
          </div>

          {/* ===== FOOTER ===== */}
          <p className="text-[11px] sm:text-xs text-slate-500 theme-light:text-slate-500">
            © {new Date().getFullYear()} Faul Cahyaditya Wijaya — Built with React & Tailwind
          </p>
        </div>
      </div>
    </section>
  );
}

/* ===== CONTACT ITEM ===== */
function ContactItem({ href, icon, text, external }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="
        group
        flex items-center gap-3
        px-4 py-2.5
        rounded-full

        border border-white/10
        theme-light:border-slate-200

        bg-white/[0.02]
        theme-light:bg-white

        text-slate-300
        theme-light:text-slate-700

        transition-all duration-300
        hover:-translate-y-0.5
        hover:border-cyan-400/40
        hover:text-cyan-400
        theme-light:hover:text-cyan-600
      "
    >
      <span className="text-lg">{icon}</span>
      <span className="text-sm sm:text-base break-all sm:break-normal">
        {text}
      </span>
    </a>
  );
}