"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center"
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
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/80 via-transparent to-[#080808]/50" />
      </motion.div>

      {/* Decorative side lines — desktop only */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#C9A84C]/40 to-transparent hidden lg:block" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#C9A84C]/40 to-transparent hidden lg:block" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-5 sm:px-8 w-full max-w-4xl mx-auto"
      >
        {/* Top ornament */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-5 sm:mb-7"
        >
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#C9A84C]" />
          <div className="w-2 h-2 rounded-full border border-[#C9A84C] rotate-45 flex-shrink-0" />
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#C9A84C]" />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[#C9A84C] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 font-light"
        >
          Advocates &amp; Legal Consultants
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="text-[2.6rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-3 sm:mb-4"
          style={{ fontFamily: "var(--font-playfair-var), serif" }}
        >
          Salman Lex
          <br />
          <span className="gradient-gold-text">Chambers</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 sm:mt-6 mb-2 sm:mb-3 tracking-wide"
          style={{ fontFamily: "var(--font-playfair-var), serif" }}
        >
          Excellence in Law. Integrity in Practice.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="text-gray-400 text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase"
        >
          Manjeri, Malappuram District&nbsp;•&nbsp;Kerala
        </motion.p>

        {/* Bottom ornament */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="flex items-center justify-center gap-3 my-5 sm:my-7"
        >
          <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#C9A84C]/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/60 flex-shrink-0" />
          <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#C9A84C]/60" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center"
        >
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative overflow-hidden px-8 py-4 bg-[#C9A84C] text-black text-sm font-bold tracking-widest uppercase hover:bg-[#E8D5A3] transition-all duration-300 w-full sm:w-auto"
          >
            <span className="relative z-10">Book a Consultation</span>
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          </button>
          <button
            onClick={() =>
              document.querySelector("#practice")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 border border-[#C9A84C]/50 text-[#C9A84C] text-sm font-semibold tracking-widest uppercase hover:bg-[#C9A84C]/10 hover:border-[#C9A84C] transition-all duration-300 w-full sm:w-auto"
          >
            Practice Areas
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-[#C9A84C] transition-colors"
      >
        <span className="text-[10px] sm:text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
