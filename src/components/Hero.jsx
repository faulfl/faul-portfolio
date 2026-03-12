import { useRef, useState, useEffect } from "react";
import { Download } from "lucide-react";

import foto from "../assets/foto/profile.jpeg";
import cv from "../assets/foto/Faul_Cahyaditya_Wijaya_CV.pdf";

export default function Hero() {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  /* =======================
     TYPING EFFECT (NAME)
  ======================= */
  const fullName = "Faul Cahyaditya Wijaya";
  const [displayText, setDisplayText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayText(fullName.slice(0, i + 1));
      i++;

      if (i === fullName.length) {
        clearInterval(typing);
        setTypingDone(true);
      }
    }, 120);

    return () => clearInterval(typing);
  }, []);

  /* =======================
     3D CARD + COLOR AURA
  ======================= */
  const handleMove = (e) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * -6;

    card.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.04)
    `;

    glow.style.background = `
      radial-gradient(
        300px at ${x}px ${y}px,
        rgba(56,189,248,0.35),
        rgba(168,85,247,0.25),
        transparent 70%
      )
    `;
  };

  const reset = () => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";

    glow.style.background = `
      radial-gradient(
        260px at center,
        rgba(56,189,248,0.25),
        rgba(168,85,247,0.2),
        transparent 70%
      )
    `;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 sm:gap-14 items-center">
        {/* TEXT */}
        <div className="animate-fade-up md:pl-6 text-center md:text-left">
          <span className="block text-xs sm:text-sm tracking-widest text-cyan-400 mb-3">
            INFORMATICS STUDENT
          </span>

          {/* NAME */}
          <h1 className="font-bold leading-tight">
            <span
              className="
                inline-block
                whitespace-nowrap
                animated-gradient
                text-[1.65rem]
                sm:text-4xl
                md:text-5xl
                min-w-[18ch]
                sm:min-w-[22ch]
              "
            >
              {displayText}
              {!typingDone && <span className="typing-cursor">|</span>}
            </span>
          </h1>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            {/* VIEW PROJECTS */}
            <a
              href="#projects"
              className="
                px-7 py-3 rounded-lg
                bg-cyan-500 text-white
                text-sm font-semibold
                hover:bg-cyan-400
                transition
                shadow-lg shadow-cyan-500/20
              "
            >
              View Projects
            </a>

            {/* DOWNLOAD CV */}
            <a
              href={cv}
              download
              className="
                flex items-center gap-2
                px-7 py-3 rounded-lg
                border border-white/20
                text-sm font-semibold
                hover:border-cyan-400
                hover:text-cyan-400
                transition
              "
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <p className="mt-5 text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed text-sm sm:text-base">
            An Informatics student with a strong interest in software
            development, UI/UX design, and system development. Experienced in
            using tools such as Python, Java, Figma, and Microsoft Excel to
            build and support digital solutions.
          </p>
        </div>

        {/* PHOTO CARD */}
        <div className="relative flex justify-center animate-fade-up animate-delay-2">
          {/* THIN BLUR FRAME */}
          <div className="relative rounded-2xl p-[4px]">
            <div
              className="
                absolute inset-0
                rounded-2xl
                bg-gradient-to-br
                from-sky-400/70
                via-purple-500/70
                to-indigo-600/70
                blur-md
                opacity-60
                pointer-events-none
              "
            />

            <div
              ref={cardRef}
              onMouseMove={handleMove}
              onMouseLeave={reset}
              className="
                relative
                w-64 h-88
                sm:w-72 sm:h-96
                rounded-2xl
                transition-transform duration-200 ease-out
                will-change-transform
              "
            >
              <div
                ref={glowRef}
                className="
                  absolute inset-[-18px]
                  rounded-[28px]
                  blur-2xl
                  transition-all duration-200
                  pointer-events-none
                "
              />

              <img
                src={foto}
                alt="Faul Cahyaditya Wijaya"
                className="
                  relative
                  w-full h-full
                  object-cover
                  rounded-2xl
                  border border-white/10
                  shadow-[0_30px_70px_rgba(0,0,0,0.6)]
                  bg-[#020617]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
