"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Clock, Heart, UserCheck, Globe, MessageSquare } from "lucide-react";

const reasons = [
  { icon: ShieldCheck,   title: "Unwavering Integrity",    description: "We uphold the highest standards of professional ethics. Our clients trust us because we are transparent, honest, and principled in every matter." },
  { icon: Clock,         title: "Timely Action",           description: "Legal matters are time-sensitive. We prioritize prompt response, swift filings, and proactive communication to keep your case moving." },
  { icon: Heart,         title: "Client-First Approach",   description: "Every client's situation is unique. We listen carefully, understand your goals, and tailor our legal strategy to your specific circumstances." },
  { icon: UserCheck,     title: "Qualified Advocates",     description: "Led by alumni of H.H. The Maharaja's Government Law College and enrolled with the Bar Council of Kerala — proven credentials you can rely on." },
  { icon: Globe,         title: "Comprehensive Coverage",  description: "From criminal courts to consumer forums, from corporate boardrooms to family tribunals — we handle the full spectrum of legal needs." },
  { icon: MessageSquare, title: "Clear Communication",     description: "We demystify the law. Expect regular updates, plain-language explanations, and always-available counsel throughout your legal journey." },
];

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="section-padding bg-[#060C1A] relative overflow-hidden">
      {/* Faint architectural grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #8AA4BA 0px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #8AA4BA 0px, transparent 1px, transparent 80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10" ref={ref}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-[#617F98] text-[9px] tracking-[0.42em] uppercase mb-5 font-light">
            Our Commitment
          </p>
          <div className="flex items-end gap-8">
            <h2
              className="font-light italic leading-[0.9] tracking-tight text-[#E8E2D9]"
              style={{
                fontFamily: "var(--font-cormorant-var), Georgia, serif",
                fontSize: "clamp(2.6rem, 5vw, 4rem)",
              }}
            >
              Why Choose
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
                Salman Lex
              </span>
            </h2>
            <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-[#283C50]/80 to-transparent mb-2" />
          </div>
          <p className="text-[#617F98] text-sm font-light leading-relaxed max-w-xl mt-6">
            When you choose us, you choose a team that treats your legal matter with the
            seriousness, skill, and sensitivity it deserves.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#283C50]/20">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.09 }}
                className="group bg-[#060C1A] p-7 lg:p-9 hover:bg-[#0A1228] transition-colors duration-400 relative"
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center border border-[#283C50]/60 group-hover:border-[#617F98]/40 mb-6 transition-colors duration-400">
                  <Icon className="w-4 h-4 text-[#7A94A8] group-hover:text-[#8AA4BA] transition-colors duration-400" />
                </div>

                <h3
                  className="text-[#CDD8E0] font-medium mb-3 leading-tight group-hover:text-[#E8E2D9] transition-colors duration-400"
                  style={{
                    fontFamily: "var(--font-cormorant-var), Georgia, serif",
                    fontSize: "1.15rem",
                  }}
                >
                  {reason.title}
                </h3>
                <p className="text-[#7A94A8] text-sm leading-relaxed font-light">
                  {reason.description}
                </p>

                {/* Bottom accent line — silver on hover */}
                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#617F98]/40 to-transparent transition-all duration-600" />
              </motion.div>
            );
          })}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 sm:mt-20 text-center max-w-3xl mx-auto px-4"
        >
          <div className="flex items-center justify-center gap-5 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#617F98]/35" />
            <div
              className="text-[#617F98]/60 leading-none"
              style={{ fontFamily: "Georgia, serif", fontSize: "3rem", lineHeight: 1 }}
            >
              &ldquo;
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#617F98]/35" />
          </div>

          <p
            className="text-[#A5BCC8] italic leading-relaxed mb-8 font-light"
            style={{
              fontFamily: "var(--font-cormorant-var), Georgia, serif",
              fontSize: "clamp(1.25rem, 2.8vw, 1.7rem)",
            }}
          >
            Justice is not just a word — it is a responsibility we carry for every client
            who places their trust in us.
          </p>

          <div className="flex items-center justify-center gap-5">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#617F98]/30" />
            <p className="text-[#617F98] text-[9px] tracking-[0.38em] uppercase font-light">
              Salman Lex Chambers
            </p>
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#617F98]/30" />
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
}
