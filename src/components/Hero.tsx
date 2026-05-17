"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgY   = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "9%"]);
  const fades = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[680px] overflow-hidden flex items-center justify-center"
    >
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#030610]/80" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(3,6,16,0.88) 0%, rgba(3,6,16,0.28) 42%, rgba(3,6,16,0.96) 100%)",
          }}
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(to right, rgba(3,6,16,0.5) 0%, transparent 35%, transparent 65%, rgba(3,6,16,0.5) 100%)",
          }}
        />
      </motion.div>

      {/* Architectural column lines — referencing the logo pillars */}
      <div className="absolute left-10 top-0 bottom-0 hidden xl:flex flex-col items-center pointer-events-none">
        <div className="w-px flex-1 bg-gradient-to-b from-transparent via-[#435C72]/30 to-transparent" />
      </div>
      <div className="absolute right-10 top-0 bottom-0 hidden xl:flex flex-col items-center pointer-events-none">
        <div className="w-px flex-1 bg-gradient-to-b from-transparent via-[#435C72]/30 to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: fades }}
        className="relative z-10 text-center px-6 sm:px-10 w-full max-w-5xl mx-auto"
      >
        {/* Top ornament */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-5 mb-10"
        >
          <div className="h-px w-20 sm:w-28 bg-gradient-to-r from-transparent to-[#617F98]/60" />
          <div className="w-1 h-1 bg-[#617F98]/70 rotate-45 flex-shrink-0" />
          <div className="h-px w-20 sm:w-28 bg-gradient-to-l from-transparent to-[#617F98]/60" />
        </motion.div>

        {/* Main display heading — Zynzal Bold brand font */}
        <motion.h1
          initial={{ opacity: 0, y: 55 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="leading-[0.9] tracking-wide mb-6"
          style={{
            fontFamily: "'Zynzal', 'Cormorant Garamond', Georgia, serif",
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "clamp(3.2rem, 10vw, 8.5rem)",
            color: "#E8E2D9",
          }}
        >
          Salman Lex
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #8AA4BA 0%, #CDD8E0 48%, #A5BCC8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Chambers
          </span>
        </motion.h1>

        {/* Advocates line — moved below heading */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="text-[#8AA4BA] text-[10px] sm:text-xs tracking-[0.45em] uppercase mb-9 font-light"
          style={{ fontFamily: "var(--font-inter-var), system-ui, sans-serif" }}
        >
          Advocates &amp; Legal Consultants &nbsp;·&nbsp; Manjeri, Kerala
        </motion.p>

        {/* Bottom ornament */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.9 }}
          className="flex items-center justify-center gap-4 mb-11"
        >
          <div className="h-px w-14 sm:w-20 bg-gradient-to-r from-transparent to-[#617F98]/40" />
          <div className="w-0.5 h-0.5 bg-[#617F98]/50 rotate-45 flex-shrink-0" />
          <div className="h-px w-14 sm:w-20 bg-gradient-to-l from-transparent to-[#617F98]/40" />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center"
        >
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative overflow-hidden px-10 py-4 bg-[#1B3D6E] text-[#E8E2D9] text-[10.5px] tracking-[0.28em] uppercase font-medium hover:bg-[#234E87] transition-all duration-500 w-full sm:w-auto"
          >
            Book a Consultation
            <div className="absolute inset-0 bg-[#CDD8E0]/8 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
          </button>

          <button
            onClick={() =>
              document.querySelector("#practice")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-10 py-4 border border-[#617F98]/40 text-[#8AA4BA] text-[10.5px] tracking-[0.28em] uppercase font-light hover:border-[#8AA4BA]/60 hover:text-[#CDD8E0] hover:bg-[#8AA4BA]/5 transition-all duration-500 w-full sm:w-auto"
          >
            Our Practice
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.8 }}
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[#617F98] hover:text-[#8AA4BA] transition-colors duration-400 group"
      >
        <span className="text-[8px] tracking-[0.4em] uppercase">Discover</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3 h-3" />
        </motion.div>
      </motion.button>
    </section>
  );
}
