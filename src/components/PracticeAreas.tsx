"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield, Users, Gavel, Briefcase, ShoppingBag, Home,
  Hammer, Car, BookOpen, FileText, Lightbulb, Scale,
} from "lucide-react";

const practices = [
  { icon: Shield,      num: "01", title: "Criminal Law" },
  { icon: Users,       num: "02", title: "Family Law", },
  { icon: Gavel,       num: "03", title: "Civil Law", },
  { icon: Briefcase,   num: "04", title: "Corporate & Commercial",},
  { icon: ShoppingBag, num: "05", title: "Consumer Disputes",         },
  { icon: Home,        num: "06", title: "Rent Control Proceedings",  },
  { icon: Hammer,      num: "07", title: "Labour & Service Matters", },
  { icon: Car,         num: "08", title: "Motor Accident Claims",   },
  { icon: BookOpen,    num: "09", title: "Legal Advisory",             },
  { icon: FileText,    num: "10", title: "Document Drafting & Vetting" },
  { icon: Lightbulb,   num: "11", title: "Professional Consultancy", },
  { icon: Scale,       num: "12", title: "Property & Real Estate",   },
];

export default function PracticeAreas() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="practice" className="section-padding bg-[#0A1228] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-[#617F98] text-[9px] tracking-[0.42em] uppercase mb-5 font-light">
            What We Do
          </p>
          <div className="flex items-end gap-8">
            <h2
              className="font-light italic leading-[0.9] tracking-tight text-[#E8E2D9]"
              style={{
                fontFamily: "var(--font-cormorant-var), Georgia, serif",
                fontSize: "clamp(2.6rem, 5vw, 4rem)",
              }}
            >
              Our Practice
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
                Areas
              </span>
            </h2>
            <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-[#283C50]/80 to-transparent mb-2" />
          </div>
          <p className="text-[#617F98] text-sm font-light leading-relaxed max-w-xl mt-6">
            Comprehensive legal services covering every domain of law — from individual needs to
            corporate requirements, handled with precision and dedication.
          </p>
        </motion.div>

        {/* Numbered list grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {practices.map((practice, i) => {
            const Icon = practice.icon;
            return (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.055, ease: [0.22, 1, 0.36, 1] }}
                className="group relative border-b border-r border-[#283C50]/40 p-6 sm:p-7 cursor-default overflow-hidden hover:bg-[#0E1A35]/60 transition-all duration-400"
              >
                {/* Left silver reveal bar */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#617F98]/0 to-transparent group-hover:via-[#617F98]/50 transition-all duration-500" />

                {/* Number */}
                <span
                  className="block text-[#1E2E42] font-light mb-4 leading-none select-none"
                  style={{
                    fontFamily: "var(--font-cormorant-var), Georgia, serif",
                    fontSize: "2.8rem",
                  }}
                >
                  {practice.num}
                </span>

                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-4 h-4 text-[#7A94A8] group-hover:text-[#CDD8E0] transition-colors duration-400 flex-shrink-0" />
                  <h3
                    className="text-[#CDD8E0] text-sm font-medium group-hover:text-[#E8E2D9] transition-colors duration-400 leading-tight"
                    style={{ fontFamily: "var(--font-cormorant-var), Georgia, serif", fontSize: "1.05rem" }}
                  >
                    {practice.title}
                  </h3>
                </div>

               
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center mt-14"
        >
          <p className="text-[#617F98] text-xs font-light mb-6 tracking-wide">
            Not sure which practice area covers your matter?
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-4 border border-[#435C72]/50 text-[#8AA4BA] text-[10.5px] tracking-[0.28em] uppercase font-light hover:border-[#8AA4BA]/60 hover:text-[#CDD8E0] hover:bg-[#8AA4BA]/5 transition-all duration-500"
          >
            Speak to an Advocate
          </button>
        </motion.div>
      </div>
    </section>
  );
}
