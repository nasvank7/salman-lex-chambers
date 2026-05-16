"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Award, MapPin, BookOpen } from "lucide-react";
import Image from "next/image";

const highlights = [
  "Founded on principles of integrity, diligence, and client-first service",
  "Enrolled with the Bar Council of Kerala",
  "Alumni of H.H. The Maharaja's Government Law College, Ernakulam",
  "Serving courts and legal authorities across Malappuram and beyond",
];

const stats = [
  { value: "11+", label: "Practice Areas" },
  { value: "2", label: "Expert Partners" },
  { value: "100%", label: "Commitment" },
  { value: "Manjeri", label: "Based At" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-dark-secondary relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A84C]/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#C9A84C]/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-4">
                About the Firm
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-playfair-var), serif" }}
              >
                A Legacy of
                <br />
                <span className="gradient-gold-text">Legal Excellence</span>
              </h2>
              <div className="gold-divider mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4 text-gray-300 text-base leading-relaxed mb-8"
            >
              <p>
                <strong className="text-white font-semibold">Salman Lex Chambers</strong> is a
                full-service law office situated at Manjeri, Malappuram District, Kerala.
                The firm is dedicated to providing comprehensive legal assistance, litigation
                support, and consultancy services before courts and legal authorities.
              </p>
              <p>
                With a client-centric approach and unwavering commitment to professional
                ethics, the firm brings together sharp legal acumen and compassionate advocacy
                to navigate complex legal challenges across diverse practice areas.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="space-y-3 mb-10"
            >
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 text-gray-300 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center gap-3 px-5 py-3 border border-[#C9A84C]/30 rounded-sm bg-[#C9A84C]/5"
            >
              <MapPin className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-sm text-gray-300">
                Manjeri, Malappuram District, Kerala, India
              </span>
            </motion.div>
          </div>

          {/* Right: Image + Stats — shown first on mobile via order */}
          <div className="space-y-5 order-first lg:order-last">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main image */}
              <div className="relative h-56 sm:h-72 md:h-[360px] lg:h-[420px] overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80"
                  alt="Law library — legal books and resources"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 to-transparent" />
              </div>

              {/* Gold frame accent */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-[#C9A84C]/25 rounded-sm pointer-events-none" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-[#080808]/90 backdrop-blur-sm border border-[#C9A84C]/30 px-5 py-4 rounded-sm">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-[#C9A84C]" />
                  <div>
                    <p className="text-white text-sm font-semibold">Bar Council of Kerala</p>
                    <p className="text-gray-400 text-xs">Licensed Advocates</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="bg-dark-card border border-[#2a2a2a] hover:border-[#C9A84C]/40 transition-colors duration-300 p-5 text-center"
                >
                  <p
                    className="text-3xl font-bold gradient-gold-text mb-1"
                    style={{ fontFamily: "var(--font-playfair-var), serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-xs tracking-wide uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
