import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function App() {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.theme === "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isLight) {
      root.classList.add("theme-light");
      localStorage.theme = "light";
    } else {
      root.classList.remove("theme-light");
      localStorage.theme = "dark";
    }
  }, [isLight]);

  return (
    <>
      {/* BASE BACKGROUND */}
      <div className="fixed inset-0 -z-50 global-bg" />
      <div className="fixed inset-0 -z-40 bg-noise pointer-events-none" />

      {/* AURORA NEON CIRCLE */}
      <div className="aurora-circle" />

      {/* CONTENT */}
      <main className="relative z-10">
        <Navbar isLight={isLight} setIsLight={setIsLight} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </>
  );
}
