"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export default function Banner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-20 sm:py-24 overflow-hidden bg-[#0E1A35]">
      {/* Silver shimmer lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8AA4BA]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8AA4BA]/20 to-transparent" />

      {/* Faint architectural columns in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: `${15 + i * 18}%`,
              background: "linear-gradient(to bottom, transparent, rgba(97,127,152,0.06), transparent)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Top ornament */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#617F98]/40" />
            <div className="w-1 h-1 bg-[#617F98]/50 rotate-45" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#617F98]/40" />
          </div>

          <p className="text-[#617F98] text-[9px] tracking-[0.42em] uppercase mb-6 font-light">
            Your Legal Partner in Kerala
          </p>

          <h2
            className="font-light italic leading-[0.92] tracking-tight text-[#E8E2D9] mb-6"
            style={{
              fontFamily: "var(--font-cormorant-var), Georgia, serif",
              fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)",
            }}
          >
            Facing a Legal Challenge?
            <br />
            <span
              className="not-italic font-semibold"
              style={{
                background: "linear-gradient(135deg, #8AA4BA 0%, #CDD8E0 48%, #A5BCC8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              We Are Here to Help.
            </span>
          </h2>

          <p className="text-[#7A94A8] text-sm font-light leading-relaxed mb-10 max-w-lg mx-auto">
            Consult with experienced advocates at Salman Lex Chambers today. Your first
            consultation is the first step toward resolution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#1B3D6E] text-[#E8E2D9] text-[10.5px] tracking-[0.28em] uppercase font-medium hover:bg-[#234E87] transition-all duration-500"
            >
              Schedule Consultation
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <a
              href="tel:+917306647233"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-[#435C72]/50 text-[#8AA4BA] text-[10.5px] tracking-[0.28em] uppercase font-light hover:border-[#8AA4BA]/55 hover:text-[#CDD8E0] hover:bg-[#8AA4BA]/5 transition-all duration-500"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
