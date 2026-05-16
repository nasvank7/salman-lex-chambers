"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Heart,
  UserCheck,
  Globe,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Unwavering Integrity",
    description:
      "We uphold the highest standards of professional ethics. Our clients trust us because we are transparent, honest, and principled in every matter.",
  },
  {
    icon: Clock,
    title: "Timely Action",
    description:
      "Legal matters are time-sensitive. We prioritize prompt response, swift filings, and proactive communication to keep your case moving.",
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    description:
      "Every client's situation is unique. We listen carefully, understand your goals, and tailor our legal strategy to your specific circumstances.",
  },
  {
    icon: UserCheck,
    title: "Qualified Advocates",
    description:
      "Led by alumni of H.H. The Maharaja's Government Law College and enrolled with the Bar Council of Kerala — proven credentials you can rely on.",
  },
  {
    icon: Globe,
    title: "Comprehensive Coverage",
    description:
      "From criminal courts to consumer forums, from corporate boardrooms to family tribunals — we handle the full spectrum of legal needs.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "We demystify the law. Expect regular updates, plain-language explanations, and always-available counsel throughout your legal journey.",
  },
];

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="section-padding bg-dark relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=1600&q=60"
          alt="justice scales background"
          fill
          className="object-cover opacity-5"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#080808]/95" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-4">
            Our Commitment
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair-var), serif" }}
          >
            Why Choose
            <br />
            <span className="gradient-gold-text">Salman Lex Chambers</span>
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            When you choose us, you choose a team that treats your legal matter with the
            seriousness, skill, and sensitivity it deserves.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex gap-4 sm:gap-5 p-4 sm:p-6 bg-dark-card border border-[#2a2a2a] hover:border-[#C9A84C]/40 transition-all duration-400 hover:bg-[#111111]"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-sm bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mt-0.5 group-hover:bg-[#C9A84C]/20 transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div>
                  <h3
                    className="text-white font-semibold text-base mb-2"
                    style={{ fontFamily: "var(--font-playfair-var), serif" }}
                  >
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quote block */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 sm:mt-16 text-center max-w-3xl mx-auto px-4"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#C9A84C]/40" />
            <div className="text-[#C9A84C] text-3xl" style={{ fontFamily: "Georgia, serif" }}>
              &ldquo;
            </div>
            <div className="h-px w-16 bg-[#C9A84C]/40" />
          </div>
          <p
            className="text-lg sm:text-xl md:text-2xl text-gray-200 italic leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-playfair-var), serif" }}
          >
            Justice is not just a word — it is a responsibility we carry for every client
            who places their trust in us.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#C9A84C]/40" />
            <p className="text-[#C9A84C] text-sm tracking-widest uppercase">
              Salman Lex Chambers
            </p>
            <div className="h-px w-16 bg-[#C9A84C]/40" />
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
}
