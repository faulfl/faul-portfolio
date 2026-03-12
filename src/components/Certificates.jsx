import { useState, useEffect } from "react";
import cert1 from "../assets/foto/cert1.png";
import cert2 from "../assets/foto/cert2.png";
import cert3 from "../assets/foto/cert3.png";
import cert4 from "../assets/foto/cert4.png";
import cert5 from "../assets/foto/cert5.png";
import cert6 from "../assets/foto/cert6.png";

/* Masukkan sertif tinggal import seperti ini:

import cert1 from "../assets/foto/cert1.png";
import cert2 from "../assets/foto/cert2.png";
*/

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeCert ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [activeCert]);

  return (
    <section
      id="certificates"
      aria-labelledby="certificates-title"
      className="py-24 sm:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 text-center">
          Certifications & Learning
        </h2>

        <p className="text-slate-400 max-w-xl mx-auto text-center mb-16 text-sm sm:text-base leading-relaxed">
          Certifications and learning achievements that reflect my growth in
          programming, database systems, and software development.
        </p>

        {/* CERT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* DATABASE FINAL EXAM */}
          <CertificateCard
            image={cert6}
            alt="Oracle Database Foundations Final Exam Certificate"
            title="Oracle Academy – Database Foundations (Final Exam)"
            desc="Completed the Oracle Academy Database Foundations final exam covering database concepts, relational models, and SQL fundamentals."
            tags={["Database", "SQL", "Data Modeling", "Relational Database"]}
            onClick={() => setActiveCert(cert6)}
          />

          {/* DATABASE COURSE */}
          <CertificateCard
            image={cert1}
            alt="Oracle Database Foundations Certificate"
            title="Oracle Academy – Database Foundations"
            desc="Successfully completed the Oracle Academy Database Foundations course, learning core database concepts, relational data modeling, and SQL fundamentals."
            tags={["Database", "SQL", "Relational Database", "Oracle"]}
            onClick={() => setActiveCert(cert1)}
          />

          {/* JAVA FUNDAMENTALS FINAL */}
          <CertificateCard
            image={cert4}
            alt="Oracle Java Fundamentals Final Exam Certificate"
            title="Oracle Academy – Java Fundamentals (Final Exam)"
            desc="Passed the Oracle Academy Java Fundamentals final exam covering essential Java programming and object-oriented concepts."
            tags={["Java", "Programming", "OOP", "Software Development"]}
            onClick={() => setActiveCert(cert4)}
          />

          {/* JAVA FUNDAMENTALS COURSE */}
          <CertificateCard
            image={cert5}
            alt="Oracle Java Fundamentals Certificate"
            title="Oracle Academy – Java Fundamentals"
            desc="Completed the Oracle Academy Java Fundamentals course covering core Java programming and object-oriented programming principles."
            tags={["Java", "Programming", "OOP", "Software Development"]}
            onClick={() => setActiveCert(cert5)}
          />

          {/* JAVA FOUNDATIONS FINAL */}
          <CertificateCard
            image={cert2}
            alt="Oracle Java Foundations Final Exam Certificate"
            title="Oracle Academy – Java Foundations (Final Exam)"
            desc="Successfully completed the Oracle Academy Java Foundations final exam, demonstrating knowledge of core Java programming and object-oriented concepts."
            tags={["Java", "Programming", "OOP", "Software Development"]}
            onClick={() => setActiveCert(cert2)}
          />

          {/* JAVA FOUNDATIONS COURSE */}
          <CertificateCard
            image={cert3}
            alt="Oracle Java Foundations Certificate"
            title="Oracle Academy – Java Foundations"
            desc="Completed the Oracle Academy Java Foundations course covering core Java programming concepts and object-oriented programming fundamentals."
            tags={["Java", "Programming", "OOP", "Software Development"]}
            onClick={() => setActiveCert(cert3)}
          />
        </div>
      </div>

      {/* MODAL PREVIEW */}
      {activeCert && (
        <div
          onClick={() => setActiveCert(null)}
          className="
      fixed inset-0 z-50
      bg-black/80 backdrop-blur-lg
      flex items-center justify-center
      p-6
      animate-fade
    "
        >
          <img
            src={activeCert}
            alt="Certificate Preview"
            className="
        max-w-full max-h-[90vh]
        rounded-xl
        shadow-[0_0_40px_rgba(0,0,0,0.6)]
      "
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={() => setActiveCert(null)}
            aria-label="Close preview"
            className="
        absolute top-6 right-6
        w-10 h-10
        flex items-center justify-center
        rounded-full
        bg-white/10
        text-white text-xl
        hover:bg-white/20
        transition
      "
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}

/* CERTIFICATE CARD */
function CertificateCard({ image, alt, title, desc, tags, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        group relative
        p-5 rounded-xl
        border border-white/10
        bg-white/[0.03]

        shadow-lg
        backdrop-blur-md

        transition-all duration-300
        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:shadow-cyan-500/20
        hover:shadow-2xl
        cursor-pointer
      "
    >
      {/* IMAGE */}
      <div className="overflow-hidden rounded-lg mb-4">
        {image ? (
          <img
            src={image}
            alt={alt}
            className="
              w-full object-cover
              transition-transform duration-500
              group-hover:scale-110
            "
          />
        ) : (
          <div className="w-full h-40 flex items-center justify-center text-slate-500 text-sm bg-white/[0.02]">
            Certificate Preview
          </div>
        )}
      </div>

      {/* TITLE */}
      <h3 className="text-slate-100 font-semibold mb-2 transition-colors group-hover:text-cyan-400">
        {title}
      </h3>

      {/* DESC */}
      <p className="text-sm text-slate-400 leading-relaxed mb-4">{desc}</p>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="
              text-xs font-medium
              px-2.5 py-1 rounded-full
              bg-cyan-400/10
              text-cyan-400
              border border-cyan-400/20
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* HOVER GLOW */}
      <div
        className="
        absolute inset-0
        rounded-xl
        opacity-0
        group-hover:opacity-100
        transition
        pointer-events-none
        bg-gradient-to-r
        from-cyan-500/10
        to-blue-500/10
      "
      />
    </div>
  );
}
