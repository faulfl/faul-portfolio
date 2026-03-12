import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  //const [isLight, setIsLight] = useState(false); //matiin lightmode

  /*
  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [isLight]);
*/ //lightmode matiin

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const NavLink = ({ id, label, mobile = false }) => (
    <a
      href={`#${id}`}
      onClick={() => mobile && setOpen(false)}
      className={`
        transition-all duration-200
        ${
          active === id
            ? "text-[color:var(--text-main)] font-medium"
            : "text-[color:var(--text-muted)] hover:text-cyan-400"
        }
      `}
    >
      {label}
    </a>
  );

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? `
            bg-[color:var(--bg-main)]/35
            backdrop-blur-xl
            border-b border-white/5
          `
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#home"
          className="text-[color:var(--text-main)] font-bold text-lg tracking-wide hover:text-cyan-400 transition"
        >
          Portofolio
        </a>
        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm ml-auto">
          {sections.map((s) => (
            <NavLink key={s.id} id={s.id} label={s.label} />
          ))}
        </div>
        {/* THEME TOGGLE */}
        {/*<button
          onClick={() => setIsLight(!isLight)}
          className="
              ml-2 p-2 rounded-full
              text-[color:var(--text-muted)]
              hover:text-[color:var(--text-main)]
              hover:bg-white/10
              transition
            "
          aria-label="Toggle theme"
        >
          {isLight ? "🌙" : "☀️"}
        </button>
        */}
        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[color:var(--bg-main)]/70 backdrop-blur-md">
          <div className="flex flex-col px-6 py-6 gap-4 text-sm">
            {sections.map((s) => (
              <NavLink key={s.id} id={s.id} label={s.label} mobile />
            ))}

            {/* LIGHT MODE MOBILE (DINONAKTIFKAN) */}
            {/*
            <button
              onClick={() => setIsLight(!isLight)}
              className="
                mt-4 text-left
                text-[color:var(--text-muted)]
                hover:text-cyan-400
                transition
              "
            >
              {isLight ? "Switch to Dark 🌙" : "Switch to Light ☀️"}
            </button>
            */}
          </div>
        </div>
      )}
    </nav>
  );
}
