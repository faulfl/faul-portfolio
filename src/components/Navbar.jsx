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

  // background blur on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // active section observer
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
      }
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
            ? "text-white font-medium"
            : "text-gray-400 hover:text-cyan-400"
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
              bg-[#020617]/40 backdrop-blur-sm
              md:bg-[#020617]/70 md:backdrop-blur
            `
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#home"
          className="text-white font-bold text-lg tracking-wide hover:text-cyan-400 transition"
        >
          Robi
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm">
          {sections.map((s) => (
            <NavLink key={s.id} id={s.id} label={s.label} />
          ))}
        </div>

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
      <div className="md:hidden bg-[#020617]/70 backdrop-blur-md">
          <div className="flex flex-col px-6 py-6 gap-4 text-sm">
            {sections.map((s) => (
              <NavLink
                key={s.id}
                id={s.id}
                label={s.label}
                mobile
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
